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
          
          {/* Card 1: Without Mikana */}
          <div className="rounded-3xl border border-[#E5E5E0] bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#71717A] border border-[#E5E5E0] text-xs font-semibold shadow-2xs">
                  <XCircle className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Without Mikana</span>
                </span>
                <span className="text-xs font-mono text-[#71717A] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>Replying late</span>
                </span>
              </div>

              {/* Phone Mockup with Zoomed Spotlight Card in Foreground */}
              <div className="relative w-full h-[390px] sm:h-[430px] rounded-2xl bg-[#F4F4F0] border border-[#E5E5E0] flex items-center justify-center overflow-hidden p-3 sm:p-4">
                {/* Background Phone Device */}
                <div className="relative w-[205px] sm:w-[225px] aspect-[9/19.5] rounded-[34px] sm:rounded-[38px] bg-[#16181D] p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] flex flex-col shrink-0 opacity-70 filter blur-[0.3px]">
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
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E5E0] shadow-sm text-[11px] font-medium text-[#71717A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A1A1AA]" />
                    <span>Un-alerted group post</span>
                    <span className="text-[#DC2626] font-semibold font-mono">3h late</span>
                  </div>
                </div>

                {/* Foreground Zoomed Callout Card */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-2.5 sm:inset-x-3.5 z-30">
                  <div className="bg-white rounded-2xl border border-[#E5E5E0] shadow-[0_16px_36px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)] p-3 sm:p-3.5 space-y-2.5">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-medium text-[#1C1C1E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#71717A]" />
                        <span>WhatsApp Trade Group</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#F4F4F0] text-[#71717A] font-medium text-[10px] border border-[#E5E5E0]">
                        Buried in 240+ Chats
                      </span>
                    </div>

                    {/* Chat screenshot crop */}
                    <div className="rounded-xl overflow-hidden border border-[#E5E5E0] bg-[#16181D]">
                      <img
                        src="/screens/screen_missed_opp.jpg"
                        alt="Customer already bought from someone else"
                        className="w-full h-auto object-cover select-none"
                      />
                    </div>

                    {/* Outcome detail */}
                    <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#E5E5E0] flex items-center justify-between text-[10.5px] text-[#71717A]">
                      <span>Buyer: “Already talked to someone else”</span>
                      <span className="text-[#DC2626] font-semibold font-mono tabular-nums">Dispatched in 3h 14m</span>
                    </div>

                  </div>
                </div>
              </div>

              <p className="text-xs text-[#71717A] leading-relaxed">
                You had the stock, but you saw the message late. By the time you replied, the buyer had already paid another trader.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between text-xs">
              <span className="text-[#71717A] font-medium">Lost deal to another seller</span>
              <span className="text-[#DC2626] font-semibold tabular-nums">$200 sale lost</span>
            </div>
          </div>

          {/* Card 2: With Mikana */}
          <div className="rounded-3xl border border-[#E5E5E0] bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1C1E] text-white text-xs font-semibold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>With Mikana</span>
                </span>
                <span className="text-xs font-mono text-[#16A34A] flex items-center gap-1 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Alerted in seconds</span>
                </span>
              </div>

              {/* Phone Mockup with Zoomed Spotlight Card in Foreground */}
              <div className="relative w-full h-[390px] sm:h-[430px] rounded-2xl bg-[#F4F4F0] border border-[#E5E5E0] flex items-center justify-center overflow-hidden p-3 sm:p-4">
                {/* Background Phone Device showing Real App Screenshot */}
                <div className="relative w-[205px] sm:w-[225px] aspect-[9/19.5] rounded-[34px] sm:rounded-[38px] bg-[#16181D] p-[5px] shadow-[0_16px_36px_rgba(0,0,0,0.12)] flex flex-col shrink-0">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Top Callout Bubble */}
                <div className="absolute top-5 left-3 sm:left-5 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E5E0] shadow-sm text-[11px] font-medium text-[#1C1C1E]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    <span>Live Match</span>
                    <span className="text-[#16A34A] font-semibold font-mono">Just now</span>
                  </div>
                </div>

                {/* Foreground Zoomed Spotlight Card */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-2.5 sm:inset-x-3.5 z-30">
                  <div className="bg-white rounded-2xl border border-[#E5E5E0] shadow-[0_16px_36px_rgba(0,0,0,0.07),0_2px_8px_rgba(0,0,0,0.04)] p-3 sm:p-3.5 space-y-2.5 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 font-semibold text-[#1C1C1E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                        <span>Mikana Community Group C</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#F4F4F0] text-[#16A34A] font-semibold text-[10px] border border-[#E5E5E0]">
                        90% Catalog Match
                      </span>
                    </div>

                    {/* Buyer Request (Spotlight Zoom) */}
                    <div className="p-2.5 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] space-y-0.5">
                      <div className="text-[9.5px] font-semibold text-[#71717A] uppercase tracking-wider">
                        Live Buyer Request
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] font-medium text-[#1C1C1E] leading-snug">
                        “Guys, anyone with a Toyota Wish 2009 front wheel bearing?”
                      </p>
                    </div>

                    {/* Instant 1-Tap Quote Drafted */}
                    <div className="p-2.5 rounded-xl bg-white border border-[#E5E5E0] space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between text-[10.5px]">
                        <span className="font-semibold text-[#1C1C1E] flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#16A34A]" />
                          <span>Instant 1-Tap Quote Drafted</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#E8F8EC] text-[#166534] text-[9.5px] font-semibold border border-[#D1F2D9]">
                          Ready to send
                        </span>
                      </div>
                      <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#E5E5E0]/70">
                        <p className="text-[11.5px] leading-snug text-[#1C1C1E]">
                          “Hi Lui, we have the 2009 Toyota Wish front wheel bearing in stock. Original Japanese replacement. Shop at Kaguvi & Bank or delivery available.”
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#71717A] pt-0.5">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                          <span>Customer DM opened with quote pre-filled</span>
                        </span>
                        <span className="text-[#16A34A] font-semibold font-mono tabular-nums">Dispatched in 40s</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <p className="text-xs text-[#71717A] leading-relaxed">
                Mikana alerts you the second the request lands. You tap once, quote the buyer privately, and close the sale before competitors notice.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E5E5E0] flex items-center justify-between text-xs">
              <span className="text-[#1C1C1E] font-medium">Deal closed before competitors see it</span>
              <span className="text-[#16A34A] font-semibold tabular-nums">$200 sale won</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
