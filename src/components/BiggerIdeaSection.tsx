'use client';

import React from 'react';
import { ArrowDown, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

export function BiggerIdeaSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            THE BIGGER PICTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Business opportunities are already happening.
          </h2>
          <p className="text-base sm:text-lg text-[#486581]">
            Mikana helps businesses see the ones meant for them.
          </p>
        </div>

        {/* Funnel Visual: 100 conversations -> Relevant opportunities -> Your opportunities */}
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Level 1: 100 conversations */}
          <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-center shadow-xs">
            <span className="text-xs font-black uppercase tracking-wider text-[#829AB1]">
              LEVEL 1
            </span>
            <div className="text-xl sm:text-2xl font-black text-[#0B2545] mt-1">
              100 conversations
            </div>
            <p className="text-xs text-[#486581] mt-1">
              Scattered across dozens of trade groups, classifieds, and community chats.
            </p>
          </div>

          <div className="flex justify-center text-[#1E56A0]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Level 2: Relevant opportunities */}
          <div className="p-5 rounded-2xl bg-[#EEF4FA] border border-[#C6D8EB] text-center shadow-xs">
            <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
              LEVEL 2 • FILTERED BY MIKANA
            </span>
            <div className="text-xl sm:text-2xl font-black text-[#1E56A0] mt-1">
              Relevant opportunities
            </div>
            <p className="text-xs text-[#486581] mt-1">
              General chatter and spam are removed. Genuine buyer requests are extracted.
            </p>
          </div>

          <div className="flex justify-center text-[#059669]">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Level 3: Your opportunities */}
          <div className="p-6 rounded-2xl bg-[#0B2545] text-white text-center shadow-md space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-blue-300">
              LEVEL 3 • YOUR REVENUE
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white">
              Your opportunities
            </div>
            <p className="text-xs text-blue-100 max-w-md mx-auto">
              Delivered straight to your phone, matched to your price list, ready for 1-tap closing.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
