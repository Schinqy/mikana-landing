import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, offering, tradeType, email } = body;

    const applicantName = (name || '').trim();
    const applicantPhone = (phone || '').trim();
    const applicantOffering = (offering || tradeType || '').trim();

    if (!applicantPhone && !applicantName) {
      return NextResponse.json(
        { error: 'Name and WhatsApp phone number are required' },
        { status: 400 }
      );
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);

    // 1. Append clean, readable line to waitlist.txt
    const txtFilePath = path.join(dataDir, 'waitlist.txt');
    const txtLine = `[${timestamp}] Name: ${applicantName || 'Anonymous'} | Phone: ${applicantPhone} | Offering: ${applicantOffering || 'Unspecified'} | Email: ${email || 'N/A'}\n`;
    try {
      fs.appendFileSync(txtFilePath, txtLine, 'utf-8');
    } catch (fsErr) {
      console.warn('Could not append to waitlist.txt (possibly read-only env):', fsErr);
    }

    // 2. Append to waitlist.json
    const jsonFilePath = path.join(dataDir, 'waitlist.json');
    let waitlist: Array<{
      ticketNumber: number;
      name: string;
      phone: string;
      offering: string;
      email?: string;
      createdAt: string;
    }> = [];

    if (fs.existsSync(jsonFilePath)) {
      try {
        const fileContent = fs.readFileSync(jsonFilePath, 'utf-8');
        waitlist = JSON.parse(fileContent);
      } catch {
        waitlist = [];
      }
    }

    const ticketNumber = waitlist.length + 101;
    const entry = {
      ticketNumber,
      name: applicantName,
      phone: applicantPhone,
      offering: applicantOffering,
      email: email || undefined,
      createdAt: now.toISOString(),
    };

    waitlist.push(entry);
    try {
      fs.writeFileSync(jsonFilePath, JSON.stringify(waitlist, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Could not write waitlist.json:', fsErr);
    }

    // 3. Optional Nivacity hosting webhook forwarding
    const nivacityEndpoint = process.env.NIVACITY_WAITLIST_ENDPOINT || process.env.NIVACITY_WEBHOOK_URL;
    if (nivacityEndpoint) {
      try {
        await fetch(nivacityEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(entry),
        });
      } catch (webhookErr) {
        console.warn('Failed to forward to Nivacity endpoint:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      ticketNumber,
      message: 'Added to Mikana waitlist successfully',
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
    const dataDir = path.join(process.cwd(), 'data');
    const txtPath = path.join(dataDir, 'waitlist.txt');
    const jsonPath = path.join(dataDir, 'waitlist.json');

    let textContent = '';
    if (fs.existsSync(txtPath)) {
      textContent = fs.readFileSync(txtPath, 'utf-8');
    }

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
      count: jsonEntries.length,
      entries: jsonEntries,
      rawText: textContent,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Could not read waitlist' },
      { status: 500 }
    );
  }
}
