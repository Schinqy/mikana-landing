'use client';

import React from 'react';
import { ChevronRight, MapPin, Bell, Check, Sparkles, Send } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';

export function HeroVisual() {
  return (
    <section id="overview" className="pt-14 pb-20 sm:pt-20 sm:pb-28 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── MAIN EDITORIAL HEADLINE & SUBTITLE ── */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-semibold tracking-[-0.04em] text-[#1C1C1E] leading-[1.08] max-w-4xl mx-auto">
            What if you never missed <br className="hidden sm:inline" />
            your next potential customer?
          </h1>

          <p className="text-base sm:text-lg lg:text-[18.5px] text-[#66645D] max-w-2xl mx-auto leading-relaxed font-normal">
            Mikana watches WhatsApp for real opportunities that match what you sell, then brings them straight to you with instant notifications. And when you're busy, AutoPilot can respond for you.
          </p>

          {/* Action Buttons - Moonjar pill style */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#try-it"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-[14px] font-medium text-white bg-[#1C1C1E] hover:bg-black transition-all shadow-xs flex items-center justify-center"
            >
              <span>Try Mikana</span>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-[14px] font-medium text-[#1C1C1E] bg-white border border-[#E5E5E0] hover:bg-[#F5F5F0] transition-all flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>See what it can do</span>
              <span className="text-[#8A8880] text-base leading-none">›</span>
            </a>
          </div>
        </div>

        {/* ── MOONJAR STYLE STUDIO WINDOW FRAME ── */}
        <div className="mt-14 sm:mt-18 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white border border-[#E5E5E0] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] overflow-hidden">
            
            {/* macOS Studio Top Window Bar */}
            <div className="px-5 py-3.5 bg-[#FAF9F6] border-b border-[#EBEBE6] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] text-[11px] font-medium text-[#55544E] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Harare Wholesale & Spares Trade • Live Opportunity Detection</span>
              </div>

              <div className="text-[11px] text-[#A1A1AA] font-mono">
                POTRAZ '26
              </div>
            </div>

            {/* Window Content Part 1: The 3-Step Detection Flow (Exact reproduction of media_1790656459354.png) */}
            <div className="p-6 sm:p-8 bg-[#FCFCFA] border-b border-[#EBEBE6]">
              <div className="text-center max-w-xl mx-auto mb-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#1E56A0] font-semibold">
                  HOW MIKANA CATCHES YOUR NEXT DEAL
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1E] tracking-tight mt-1">
                  From group noise to your phone in seconds.
                </h3>
              </div>

              {/* 3 Horizontal Cards (side-by-side on desktop, stacked on mobile) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                
                {/* 1. WhatsApp Group Card */}
                <div className="flex flex-col justify-between p-1">
                  <div className="flex items-center justify-between text-[12px] font-medium text-[#1E293B] mb-2 px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                      <span className="font-semibold text-[#111827]">WhatsApp Group</span>
                    </div>
                    <span className="text-[#64748B] font-mono text-[11px]">10:42 AM</span>
                  </div>

                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-[#E8F8EA] border border-[#D1F2D9] text-[#111B21] flex flex-col justify-between shadow-2xs">
                    <div>
                      <div className="text-[12px] font-bold text-[#111827]">Customer</div>
                      <p className="text-[13.5px] text-[#1F2937] leading-snug mt-1 font-medium">
                        “Anyone selling a Toyota Hilux 2KD injector? Need one urgently.”
                      </p>
                    </div>
                    <div className="text-[11px] text-right text-[#64748B] font-mono mt-3">
                      10:42 AM
                    </div>
                  </div>
                </div>

                {/* 2. Mikana Noticed Card */}
                <div className="flex flex-col justify-between p-1">
                  <div className="text-center text-[11px] font-bold text-[#1E56A0] tracking-wider uppercase mb-2">
                    MIKANA NOTICED
                  </div>

                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#1E56A0] shadow-xs flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1E56A0]">
                        NEW OPPORTUNITY
                      </span>
                      <span className="text-[12px] font-bold text-[#10B981]">
                        94% match
                      </span>
                    </div>

                    <div>
                      <div className="text-[15px] font-bold text-[#111827]">
                        Toyota Hilux 2KD Injector
                      </div>
                      <p className="text-[11.5px] text-[#64748B] mt-0.5">
                        Matches your catalog: Denso OEM 2KD
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#F1F1ED] text-[12px]">
                      <span className="flex items-center gap-1 text-[#64748B]">
                        <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                        Harare
                      </span>
                      <span className="font-bold text-[#DC2626]">
                        Urgent
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Your Phone Card */}
                <div className="flex flex-col justify-between p-1">
                  <div className="text-[12px] font-medium text-[#64748B] mb-2 px-1">
                    Your Phone
                  </div>

                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-[#0B1E2D] text-white shadow-md flex flex-col justify-between space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-white">
                        <Bell className="w-3.5 h-3.5 text-blue-400" />
                        <span>Mikana</span>
                      </div>
                      <span className="text-[11px] text-[#94A3B8] font-mono">Just now</span>
                    </div>

                    <div>
                      <div className="text-[13px] font-bold text-white">
                        Mikana found an opportunity for you
                      </div>
                      <p className="text-[12px] text-[#CBD5E1] leading-relaxed mt-1">
                        Toyota Hilux 2KD injector in Harare. Urgent request.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-300">
                      <span>Tap to view drafted quote</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Window Content Part 2: What Happens Next — The Phone & Instant Quote Composer */}
            <div className="p-6 sm:p-10 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Explanation of the drafted quote + AutoPilot */}
                <div className="lg:col-span-6 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#1E56A0] font-semibold">
                      [ 04 // ONE-TAP RESPONSE ]
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] tracking-tight">
                      Tap the alert. Your quote is already drafted.
                    </h3>
                    <p className="text-sm sm:text-base text-[#66645D] leading-relaxed">
                      Mikana cross-references the buyer's request against your actual stock, verifies your pricing, and writes a professional WhatsApp reply ready to send.
                    </p>
                  </div>

                  {/* High Value Feature Bullet Points */}
                  <div className="space-y-3.5 pt-1">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1C1C1E]">Grounded in your real prices</div>
                        <p className="text-xs text-[#71717A]">Mikana pulls your exact price ($120 USD) and 6-month warranty from your uploaded catalog.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1E56A0] flex items-center justify-center shrink-0 mt-0.5">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1C1C1E]">1-Tap Private WhatsApp Reply</div>
                        <p className="text-xs text-[#71717A]">Opens directly to the customer's WhatsApp DM with the quote pre-filled. You just tap send.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1C1C1E]">AutoPilot responds when you're busy</div>
                        <p className="text-xs text-[#71717A]">Driving or serving another customer? AutoPilot can send the verified quote automatically within 2 minutes.</p>
                      </div>
                    </div>
                  </div>

                  {/* Fast Stat Badges */}
                  <div className="pt-2 grid grid-cols-3 gap-3 border-t border-[#F0F0EB]">
                    <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EBEBE6] text-center">
                      <div className="text-base font-bold text-[#1C1C1E]">&lt; 30s</div>
                      <div className="text-[10px] text-[#71717A]">Lead caught</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EBEBE6] text-center">
                      <div className="text-base font-bold text-[#10B981]">100%</div>
                      <div className="text-[10px] text-[#71717A]">Grounded quotes</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#EBEBE6] text-center">
                      <div className="text-base font-bold text-[#1E56A0]">0</div>
                      <div className="text-[10px] text-[#71717A]">Lost deals</div>
                    </div>
                  </div>

                </div>

                {/* Right: Samsung Galaxy S24 Device Frame with Real App Quote Screen */}
                <div className="lg:col-span-6 flex justify-center">
                  <SamsungPhoneFrame
                    src="/screens/screen_inquiry_quote.png"
                    alt="Mikana Inquiry & Quick Quote Screen"
                    caption="Real Mikana screen: Instant WhatsApp quote grounded in your catalog"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
