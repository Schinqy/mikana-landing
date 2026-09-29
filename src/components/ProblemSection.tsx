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

          {/* Card 2: With Mikana (Instant qualified response) */}
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

              {/* Fast response flow card */}
              <div className="rounded-2xl bg-white border border-[#BBF7D0] p-4 space-y-3 font-sans text-xs shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#F4F4F0] pb-2 text-[11px] text-[#71717A]">
                  <span className="font-semibold text-[#166534]">Mikana Community Group C</span>
                  <span className="text-[#16A34A] font-bold">90% Catalog Match</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#1C1C1E]">
                  <div className="font-bold text-[11px] text-[#4B5563]">Buyer request:</div>
                  <div className="text-[13px] mt-0.5 font-medium">“Guys, anyone with a Toyota Wish 2009 front wheel bearing?”</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#DCFCE7] text-[#166534] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span>⚡ Instant 1-Tap Quote Drafted</span>
                    <span>Ready to send</span>
                  </div>
                  <p className="text-[12.5px] leading-snug text-[#1C1C1E]">
                    “Hi Lui, we have the 2009 Toyota Wish front wheel bearing in stock. Original Japanese replacement. Shop at Kaguvi & Bank or delivery available.”
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-[#FAF9F6] border border-[#E5E5E0] text-[11.5px] text-[#4B5563] flex items-center justify-between">
                  <span>Customer DM opened with quote pre-filled</span>
                  <span className="text-[#16A34A] font-bold">Dispatched in 40s</span>
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
