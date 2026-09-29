'use client';

import React from 'react';
import { Search, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 border-y border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight leading-tight">
            The customer isn’t missing.<br />
            <span className="text-[#1E56A0]">The opportunity is.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#486581] leading-relaxed">
            Your next customer may already be asking for exactly what you sell. 
            But their message can disappear into:
          </p>

          {/* 3 Metric Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-[#0B2545]">
            <span className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]">
              10 groups.
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]">
              100 messages.
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1]">
              1 busy day.
            </span>
          </div>
        </div>

        {/* Visual WhatsApp Stream with Highlighted Opportunity */}
        <div className="max-w-xl mx-auto p-4 sm:p-6 rounded-3xl bg-[#F4F7FB] border border-[#E2E8F0] shadow-xs">
          
          <div className="text-xs font-bold text-[#486581] mb-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-[#075E54]" />
              Avondale Residents & Trade Chat
            </span>
            <span className="text-[#829AB1]">Active stream</span>
          </div>

          <div className="space-y-2.5 font-sans text-xs">
            {/* Ordinary message 1 */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] opacity-50">
              <span className="font-bold text-[#486581]">Kuda: </span>
              <span className="text-[#829AB1]">Good morning everyone, hope everyone has a productive week!</span>
            </div>

            {/* Ordinary message 2 */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] opacity-50">
              <span className="font-bold text-[#486581]">Farai: </span>
              <span className="text-[#829AB1]">Did the ZESA power return in section 3? Still off this side.</span>
            </div>

            {/* ── THE HIGHLIGHTED OPPORTUNITY MESSAGE ── */}
            <div className="relative p-3.5 rounded-2xl bg-[#FFFFFF] border-2 border-[#1E56A0] shadow-sm">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-md bg-[#1E56A0] text-white text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                <Search className="w-3 h-3" />
                <span>Mikana Detected</span>
              </div>

              <div className="font-bold text-[#075E54] text-xs">Brian M. (Avondale)</div>
              <p className="text-sm font-bold text-[#0B2545] mt-1 leading-snug">
                “Need someone to fix a leaking toilet in Avondale tomorrow.”
              </p>
              <div className="text-[10px] text-[#829AB1] mt-1">11:04 AM</div>
            </div>

            {/* Ordinary message 3 */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] opacity-50">
              <span className="font-bold text-[#486581]">Tariro: </span>
              <span className="text-[#829AB1]">Meeting is still scheduled for 2:30 PM. See you then.</span>
            </div>

            {/* Ordinary message 4 */}
            <div className="p-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E8F0] opacity-50">
              <span className="font-bold text-[#486581]">Chipo: </span>
              <span className="text-[#829AB1]">Thanks Farai, power just came back here now.</span>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-5 p-4 rounded-2xl bg-[#0B2545] text-white text-center space-y-1">
            <div className="text-base sm:text-lg font-bold">
              That message is an opportunity.
            </div>
            <div className="text-sm text-blue-200 font-semibold">
              Mikana finds it.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
