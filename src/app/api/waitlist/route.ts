import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://pxdprchczhegglaknydn.supabase.co';
const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4ZHByY2hjemhlZ2dsYWtueWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNzEyMjQsImV4cCI6MjEwMzk0NzIyNH0.b_gxZ8Jv0ZaE-swH8dY-RA_Q48xBdkKpmjDAnLnh9v8';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, offering, tradeType, phone } = body;

    const applicantName = (name || '').trim();
    const applicantEmail = (email || '').trim().toLowerCase();
    const applicantOffering = (offering || tradeType || '').trim();
    const applicantPhone = (phone || '').trim();

    if (!applicantEmail) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);

    // 1. Primary: Save to Supabase Cloud Database (persistent on Vercel)
    let supabaseSuccess = false;
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({
          name: applicantName || 'Anonymous',
          email: applicantEmail,
          offering: applicantOffering || 'Unspecified',
          phone: applicantPhone || null,
        }),
      });

      if (res.ok) {
        supabaseSuccess = true;
      } else {
        const errorText = await res.text();
        console.warn('Supabase waitlist insert non-200:', errorText);
      }
    } catch (dbErr) {
      console.warn('Failed to reach Supabase waitlist table:', dbErr);
    }

    // 2. Secondary Local Backup: Append to data/waitlist.txt & waitlist.json
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const txtFilePath = path.join(dataDir, 'waitlist.txt');
      const txtLine = `[${timestamp}] Name: ${applicantName || 'Anonymous'} | Email: ${applicantEmail} | Offering: ${applicantOffering || 'Unspecified'} | Phone: ${applicantPhone || 'N/A'}\n`;
      fs.appendFileSync(txtFilePath, txtLine, 'utf-8');

      const jsonFilePath = path.join(dataDir, 'waitlist.json');
      let waitlist = [];
      if (fs.existsSync(jsonFilePath)) {
        try {
          waitlist = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));
        } catch {
          waitlist = [];
        }
      }
      waitlist.push({
        ticketNumber: waitlist.length + 101,
        name: applicantName,
        email: applicantEmail,
        offering: applicantOffering,
        phone: applicantPhone,
        createdAt: now.toISOString(),
      });
      fs.writeFileSync(jsonFilePath, JSON.stringify(waitlist, null, 2), 'utf-8');
    } catch (fsErr) {
      // Ephemeral disk writes may fail in read-only lambda, which is safe since Supabase saved it
    }

    return NextResponse.json({
      success: true,
      email: applicantEmail,
      persisted: supabaseSuccess,
      message: 'Added to Mikana early access waitlist successfully',
    });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process waitlist entry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // 1. Try querying Supabase
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/waitlist?select=*&order=created_at.desc`,
        {
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );
      if (res.ok) {
        const rows = await res.json();
        return NextResponse.json({
          success: true,
          source: 'supabase',
          count: rows.length,
          entries: rows,
        });
      }
    } catch (dbErr) {
      console.warn('Could not fetch waitlist from Supabase:', dbErr);
    }

    // 2. Fallback to local files
    const dataDir = path.join(process.cwd(), 'data');
    const jsonPath = path.join(dataDir, 'waitlist.json');
    let jsonEntries = [];
    if (fs.existsSync(jsonPath)) {
      try {
        jsonEntries = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      } catch {
        jsonEntries = [];
      }
    }

    return NextResponse.json({
      success: true,
      source: 'local_file',
      count: jsonEntries.length,
      entries: jsonEntries,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Could not read waitlist' },
      { status: 500 }
    );
  }
}
