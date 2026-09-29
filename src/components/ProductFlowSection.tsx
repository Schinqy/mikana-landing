'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';

export function ProductFlowSection() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            From group noise to won deal in 3 steps.
          </h2>
          <p className="text-base sm:text-lg text-[#66645D] leading-relaxed">
            See how Mikana intercepts buyer inquiries, alerts your phone, and drafts the response.
          </p>
        </div>

        {/* ── Step 1: Live Group Radar Feed ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-bold">
                Step 1
              </span>
              <span className="text-xs font-semibold text-[#66645D]">
                24/7 Group Radar
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C1C1E] tracking-tight leading-snug">
              Every trade inquiry, qualified in real time.
            </h3>
            <p className="text-base text-[#66645D] leading-relaxed">
              You don’t need to spend hours scrolling through WhatsApp groups. Mikana monitors all your trade channels in the background, checks incoming messages against what you sell, and filters by match accuracy and urgency.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#1C1C1E]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Monitors 5 to 50+ groups simultaneously</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Ranks inquiries with 90%–100% catalog match scoring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Flags urgent, unquoted trade requests first</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <SamsungPhoneFrame
              src="/screens/screen_home.jpg"
              alt="Mikana Home Feed showing live buyer inquiries"
            />
          </div>
        </div>

        {/* ── Step 2: Instant Lock-Screen Notification ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 lg:order-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-bold">
                Step 2
              </span>
              <span className="text-xs font-semibold text-[#66645D]">
                Instant Alert
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C1C1E] tracking-tight leading-snug">
              Buzzes your phone before competitors notice.
            </h3>
            <p className="text-base text-[#66645D] leading-relaxed">
              The moment a customer asks for what you offer, your phone alerts you with the exact item, category, and buyer request details. You don’t have to open WhatsApp to know someone is looking for your product.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#1C1C1E]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Instant lock-screen alert while you’re driving or busy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Complete inquiry context at a glance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Single tap opens the pre-drafted quote</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 lg:order-1 flex justify-center">
            <div className="max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border border-[#2D3139] bg-[#16181D]">
              <img
                src="/screens/screenshot_notification.jpg"
                alt="Mikana Lock Screen Notification"
                className="w-full h-auto object-cover select-none"
              />
            </div>
          </div>
        </div>

        {/* ── Step 3: 1-Tap Catalog Quote Composer ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-bold">
                Step 3
              </span>
              <span className="text-xs font-semibold text-[#66645D]">
                One-Tap Dispatch
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-[#1C1C1E] tracking-tight leading-snug">
              Tap the alert. Your quote is already written.
            </h3>
            <p className="text-base text-[#66645D] leading-relaxed">
              Mikana cross-checks your catalog, verifies your pricing and stock, and writes a professional WhatsApp reply. Tap <strong>Send via WhatsApp</strong> to open the buyer’s direct message with the quote pre-filled.
            </p>
            <ul className="space-y-2.5 pt-2 text-sm text-[#1C1C1E]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Grounded in your actual pricing and warranty terms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Opens direct private chat so other group sellers don’t undercut</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>AutoPilot can send the quote automatically within 2 minutes</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <SamsungPhoneFrame
              src="/screens/screen_quote.jpg"
              alt="Mikana Quote Composer ready to dispatch"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
