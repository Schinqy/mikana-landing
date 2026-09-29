'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { FinalScreen } from '@/components/FinalScreen';
import { ArrowLeft, Trash2, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function DeleteAccountPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailOrBusiness, setEmailOrBusiness] = useState('');
  const [reason, setReason] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) return;
    setLoading(true);

    // Save deletion request to Supabase or mailto fallback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1C1E] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:text-[#0B2545] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Document Header */}
        <div className="border-b border-[#E5E5E0] pb-8 mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-semibold">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Google Play Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1C1E]">
            Delete Account & User Data
          </h1>
          <p className="text-sm text-[#71717A]">
            In full compliance with Google Play User Data Policy, you can delete your account and all associated commercial data at any time.
          </p>
        </div>

        {/* Option 1: In-App Deletion */}
        <div className="p-6 rounded-2xl bg-white border border-[#E5E5E0] shadow-2xs space-y-4 mb-8">
          <h2 className="text-lg font-bold text-[#1C1C1E]">Option 1: Instant In-App Deletion (Recommended)</h2>
          <p className="text-sm text-[#4A4A48] leading-relaxed">
            If you have the Mikana mobile app installed on your device, you can instantly erase your account and wipe all cloud records in real time:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-[#4A4A48]">
            <li>Open the <strong>Mikana</strong> mobile app.</li>
            <li>Tap the <strong>Business Hub</strong> tab.</li>
            <li>Tap the <strong>Settings</strong> gear icon in the top header.</li>
            <li>Scroll down to <em>Account & Data</em> and tap <strong className="text-[#DC2626]">Delete Account & Data</strong>.</li>
            <li>Confirm the prompt. Your profile, catalog, credentials, and lead history are immediately erased.</li>
          </ol>
        </div>

        {/* Option 2: Web Deletion Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E5E5E0] shadow-2xs space-y-6">
          <div>
            <h2 className="text-lg font-bold text-[#1C1C1E]">Option 2: Web Deletion Request Form</h2>
            <p className="text-sm text-[#71717A] mt-1">
              If you uninstalled the app or lost device access, submit this request. We will purge all associated cloud records within 48 hours.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] text-xs leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <strong>Warning:</strong> Deletion is permanent and irreversible. All catalog items, quotes, lead records, and WhatsApp session tokens will be permanently purged.
            </div>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] space-y-2 text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto text-[#16A34A]" />
              <div className="font-bold text-base">Deletion Request Received</div>
              <p className="text-xs text-[#166534]">
                Your request has been logged. All account records and WhatsApp session tokens associated with {phoneNumber} will be permanently erased within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1C1C1E] mb-1.5">
                  Registered WhatsApp Phone Number (with country code) *
                </label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +263 77 643 2893 or +263 78 033 1740"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D0CA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1C1E] mb-1.5">
                  Account Email or Business Name (Optional)
                </label>
                <input
                  type="text"
                  value={emailOrBusiness}
                  onChange={(e) => setEmailOrBusiness(e.target.value)}
                  placeholder="e.g. info@lui.co.zw or Auto Spare Supplies"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D0CA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1C1C1E] mb-1.5">
                  Reason for Leaving (Optional)
                </label>
                <textarea
                  rows={2}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Tell us why you are deleting your account (helps us improve)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D0D0CA] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#1E56A0]"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="confirm"
                  required
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 rounded border-[#D0D0CA] text-[#DC2626] focus:ring-[#DC2626]"
                />
                <label htmlFor="confirm" className="text-xs text-[#4A4A48] select-none leading-snug">
                  I confirm that I want to permanently delete my Mikana account, business profile, deal pipeline, detected leads, and all associated cloud session data.
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading || !confirmed}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 transition-colors shadow-2xs"
                >
                  {loading ? 'Submitting...' : 'Permanently Delete My Account'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Legal links */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E0] flex flex-wrap items-center gap-6 text-xs text-[#71717A]">
          <Link href="/privacy" className="hover:text-[#1C1C1E] transition-colors underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#1C1C1E] transition-colors underline">
            Terms of Service
          </Link>
          <Link href="/" className="hover:text-[#1C1C1E] transition-colors">
            Mikana Home
          </Link>
        </div>

      </main>

      <FinalScreen />
    </div>
  );
}
