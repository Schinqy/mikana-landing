'use client';

import React from 'react';
import { XCircle, CheckCircle2, Clock, Zap, ArrowRight } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 border-y border-[#E5E5E0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            Speed to Deal
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight leading-tight">
            The customer isn’t missing.<br />
            <span className="text-[#1E56A0]">The speed is.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#66645D] leading-relaxed max-w-2xl mx-auto">
            In WhatsApp trade groups, the first seller with an instant, clear quote wins the deal. Replying late means the customer has already bought from someone else.
          </p>
        </div>

        {/* Without Mikana vs With Mikana Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Without Mikana (With Real Missed Opportunity Screenshot) */}
          <div className="rounded-3xl border border-[#FCA5A5]/60 bg-[#FEF2F2]/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-semibold">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Without Mikana</span>
                </span>
                <span className="text-xs font-medium text-[#991B1B] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Replying late</span>
                </span>
              </div>

              {/* The Real Missed Opportunity Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-[#FCA5A5]/60 bg-[#16181D] shadow-md">
                <img
                  src="/screens/screen_missed_opp.jpg"
                  alt="Missed WhatsApp trade opportunity: Customer already bought from someone else"
                  className="w-full h-auto object-cover select-none"
                />
              </div>

              <p className="text-xs text-[#991B1B] leading-relaxed font-medium">
                You had the stock, but you saw the message late. By the time you replied, the buyer had already paid another trader.
              </p>
            </div>

            <div className="pt-3 border-t border-[#FCA5A5]/40 flex items-center justify-between text-xs">
              <span className="text-[#991B1B] font-semibold">Lost deal to another seller</span>
              <span className="text-[#DC2626] font-bold">$200 sale lost</span>
            </div>
          </div>

          {/* Card 2: With Mikana (Instant qualified response with Spotlight Zoom) */}
          <div className="rounded-3xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>With Mikana</span>
                </span>
                <span className="text-xs font-medium text-[#166534] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Alerted in seconds</span>
                </span>
              </div>

              {/* Spotlight / Highlight Zoom with Real App Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-[#BBF7D0] bg-[#0F172A] shadow-md relative p-3 sm:p-4 space-y-3">
                {/* Real feed context with spotlight zoom */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-inner">
                  {/* Real app feed context image in background */}
                  <img
                    src="/screens/screen_home_feed_context.jpg"
                    alt="Mikana live inquiry feed context"
                    className="w-full h-40 sm:h-44 object-cover object-top opacity-30 filter blur-[0.8px] select-none"
                  />
                  
                  {/* Dark vignette overlay */}
                  <div className="absolute inset-0 bg-radial from-transparent via-[#0F172A]/50 to-[#0F172A]/90" />

                  {/* The Spotlighted / Zoomed Item */}
                  <div className="absolute inset-x-2.5 top-1/2 -translate-y-1/2 z-10">
                    {/* Spotlight callout header */}
                    <div className="flex items-center justify-between mb-1.5 px-1">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#16A34A] text-white text-[10px] font-semibold tracking-wide shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>Spotlight • 90% Match</span>
                      </span>
                      <span className="text-[10px] text-emerald-300 font-mono tracking-tight bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 backdrop-blur-xs">
                        Detected in 2s
                      </span>
                    </div>

                    {/* Zoomed callout frame with real screenshot crop */}
                    <div className="rounded-xl overflow-hidden bg-white shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_0_2px_#22C55E] ring-4 ring-[#22C55E]/20 transition-transform duration-300">
                      <img
                        src="/screens/screen_inquiry_wish_item.jpg"
                        alt="Spotlight zoom: Toyota Wish inquiry in Mikana Community Group C"
                        className="w-full h-auto object-cover select-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Attached 1-Tap Quote Flow Card */}
                <div className="rounded-xl bg-[#DCFCE7] border border-[#86EFAC] p-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#166534]">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 fill-[#16A34A] text-[#16A34A]" />
                      <span>Instant 1-Tap Quote Drafted</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white text-[#16A34A] text-[10px] font-semibold border border-[#86EFAC]/60">
                      Ready to send
                    </span>
                  </div>
                  <div className="bg-white/95 rounded-lg p-2.5 border border-[#BBF7D0] shadow-2xs">
                    <p className="text-[12px] leading-snug text-[#1C1C1E] font-medium">
                      “Hi Lui, we have the 2009 Toyota Wish front wheel bearing in stock. Original Japanese replacement. Shop at Kaguvi & Bank or delivery available.”
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px] text-[#166534] font-medium pt-0.5">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                      Customer DM opened with quote pre-filled
                    </span>
                    <span className="text-[#16A34A] font-bold">Dispatched in 40s</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#166534] leading-relaxed font-medium">
                Mikana alerts you the second the request lands. You tap once, quote the buyer privately, and close the sale before competitors notice.
              </p>
            </div>

            <div className="pt-3 border-t border-[#BBF7D0] flex items-center justify-between text-xs">
              <span className="text-[#166534] font-semibold">Deal closed before competitors see it</span>
              <span className="text-[#16A34A] font-bold">$200 sale won</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
