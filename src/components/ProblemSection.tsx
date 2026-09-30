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
          
          {/* Card 1: Without Mikana (With Phone & Floating Missed Deal Callout) */}
          <div className="rounded-3xl border border-[#FCA5A5]/60 bg-[#FEF2F2]/40 p-5 sm:p-7 flex flex-col justify-between space-y-5">
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

              {/* Phone Mockup with Zoomed Spotlight Card in Foreground */}
              <div className="relative w-full h-[390px] sm:h-[430px] rounded-2xl bg-gradient-to-b from-[#FEF2F2]/70 to-[#FEE2E2]/30 border border-[#FCA5A5]/60 flex items-center justify-center overflow-hidden p-3 sm:p-4">
                {/* Background Phone Device */}
                <div className="relative w-[205px] sm:w-[225px] aspect-[9/19.5] rounded-[34px] sm:rounded-[38px] bg-[#16181D] p-[5px] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)] flex flex-col shrink-0 opacity-70 filter blur-[0.4px]">
                  {/* Hardware buttons */}
                  <div className="absolute -right-[3px] top-18 w-[3px] h-8 bg-[#2D3139] rounded-r-xs" />
                  <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-[#2D3139] rounded-r-xs" />
                  
                  {/* Screen Display showing WhatsApp dark background */}
                  <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#0B141A]">
                    <img
                      src="/screens/screen_missed_opp.jpg"
                      alt="Missed WhatsApp trade opportunity"
                      className="w-full h-full object-cover object-center select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Top Callout Bubble */}
                <div className="absolute top-5 left-3 sm:left-5 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#FCA5A5] shadow-md text-[11px] font-semibold text-[#991B1B]">
                    <Clock className="w-3 h-3 text-[#DC2626]" />
                    <span>Un-alerted group post</span>
                    <span className="text-[#DC2626] font-bold">3h late</span>
                  </div>
                </div>

                {/* Foreground Zoomed Callout Card */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-2.5 sm:inset-x-3.5 z-30">
                  <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-[#FCA5A5]/80 shadow-[0_20px_40px_-12px_rgba(220,38,38,0.2),0_4px_16px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 space-y-2.5">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-bold text-[#991B1B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                        <span>WhatsApp Trade Group</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#FEE2E2] text-[#DC2626] font-bold text-[10px] border border-[#FCA5A5]/50">
                        Buried in 240+ Chats
                      </span>
                    </div>

                    {/* Chat screenshot crop */}
                    <div className="rounded-xl overflow-hidden border border-[#FCA5A5]/60 bg-[#16181D] shadow-inner">
                      <img
                        src="/screens/screen_missed_opp.jpg"
                        alt="Customer already bought from someone else"
                        className="w-full h-auto object-cover select-none"
                      />
                    </div>

                    {/* Outcome detail */}
                    <div className="p-2 rounded-lg bg-[#FEF2F2] border border-[#FCA5A5]/50 flex items-center justify-between text-[10.5px] text-[#991B1B] font-medium">
                      <span>Buyer: “Already talked to someone else”</span>
                      <span className="text-[#DC2626] font-bold tabular-nums">Dispatched in 3h 14m</span>
                    </div>

                  </div>
                </div>
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

          {/* Card 2: With Mikana (With Phone & Floating Zoomed Spotlight Card) */}
          <div className="rounded-3xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-5 sm:p-7 flex flex-col justify-between space-y-5">
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

              {/* Phone Mockup with Zoomed Spotlight Card in Foreground */}
              <div className="relative w-full h-[390px] sm:h-[430px] rounded-2xl bg-gradient-to-b from-[#F0FDF4]/70 to-[#DCFCE7]/30 border border-[#BBF7D0] flex items-center justify-center overflow-hidden p-3 sm:p-4">
                {/* Background Phone Device showing Real App Screenshot */}
                <div className="relative w-[205px] sm:w-[225px] aspect-[9/19.5] rounded-[34px] sm:rounded-[38px] bg-[#16181D] p-[5px] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.18)] flex flex-col shrink-0">
                  {/* Hardware buttons */}
                  <div className="absolute -right-[3px] top-18 w-[3px] h-8 bg-[#2D3139] rounded-r-xs" />
                  <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-[#2D3139] rounded-r-xs" />
                  
                  {/* Screen Display showing Real App Interface */}
                  <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-white">
                    <img
                      src="/screens/screen_home.jpg"
                      alt="Mikana live inquiry feed"
                      className="w-full h-full object-cover object-top select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Top Callout Bubble */}
                <div className="absolute top-5 left-3 sm:left-5 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#BBF7D0] shadow-md text-[11px] font-semibold text-[#166534]">
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping" />
                    <span>Live Match</span>
                    <span className="text-[#16A34A] font-bold">⚡ Just now</span>
                  </div>
                </div>

                {/* Foreground Zoomed Spotlight Card */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-2.5 sm:inset-x-3.5 z-30">
                  <div className="bg-white/98 backdrop-blur-md rounded-2xl border border-[#BBF7D0] shadow-[0_20px_40px_-12px_rgba(22,163,74,0.25),0_4px_16px_rgba(0,0,0,0.08)] p-3 sm:p-3.5 space-y-2.5 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(22,163,74,0.3)]">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-bold text-[#166534]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                        <span>Mikana Community Group C</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#DCFCE7] text-[#16A34A] font-bold text-[10px] border border-[#86EFAC]/50">
                        90% Catalog Match
                      </span>
                    </div>

                    {/* Buyer Request (Spotlight Zoom) */}
                    <div className="p-2.5 rounded-xl bg-[#F8FAF8] border border-[#E2E8F0] space-y-0.5">
                      <div className="text-[9.5px] font-semibold text-[#64748B] uppercase tracking-wider">
                        Live Buyer Request
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] font-semibold text-[#0F172A] leading-snug">
                        “Guys, anyone with a Toyota Wish 2009 front wheel bearing?”
                      </p>
                    </div>

                    {/* Instant 1-Tap Quote Drafted */}
                    <div className="p-2.5 rounded-xl bg-[#DCFCE7]/90 border border-[#86EFAC] space-y-1.5">
                      <div className="flex items-center justify-between text-[10.5px] font-bold text-[#166534]">
                        <span className="flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 fill-[#16A34A] text-[#16A34A]" />
                          <span>Instant 1-Tap Quote Drafted</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white text-[#16A34A] text-[9.5px] font-bold shadow-2xs">
                          Ready to send
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/95 border border-[#BBF7D0]/60">
                        <p className="text-[11.5px] leading-snug text-[#1C1C1E] font-medium">
                          “Hi Lui, we have the 2009 Toyota Wish front wheel bearing in stock. Original Japanese replacement. Shop at Kaguvi & Bank or delivery available.”
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#166534] font-medium pt-0.5">
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                          <span>Customer DM opened with quote pre-filled</span>
                        </span>
                        <span className="text-[#16A34A] font-bold tabular-nums">Dispatched in 40s</span>
                      </div>
                    </div>

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
