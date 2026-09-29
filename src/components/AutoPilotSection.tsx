'use client';

import React from 'react';
import { ArrowRight, Bot, Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function AutoPilotSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            24/7 AUTONOMOUS RESPONDER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            What happens when you’re too busy to answer?
          </h2>
          <p className="text-base sm:text-lg text-[#486581]">
            AutoPilot keeps the deal alive even while you are working, driving, or asleep.
          </p>
        </div>

        {/* 3-Step Sequence Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            
            {/* 1. Customer */}
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#829AB1]">
                CUSTOMER ASKS
              </span>
              <p className="text-sm font-bold text-[#0B2545] leading-snug">
                “Can you supply 30 bags of cement tomorrow?”
              </p>
              <div className="text-[10px] text-[#829AB1]">WhatsApp Message</div>
            </div>

            {/* 2. Business Owner Status */}
            <div className="p-5 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] text-center space-y-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E11D48]">
                BUSINESS OWNER
              </span>
              <div className="text-lg font-black text-[#E11D48]">
                Busy
              </div>
              <p className="text-xs text-[#E11D48]/80">
                Serving another client or driving
              </p>
            </div>

            {/* 3. Mikana AutoPilot */}
            <div className="p-5 rounded-2xl bg-[#0B2545] text-white shadow-md space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300">
                  MIKANA AUTOPILOT
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500 text-white font-bold">
                  Replied
                </span>
              </div>
              <p className="text-xs text-blue-100 font-medium leading-relaxed">
                “Yes, we can help with the 30 bags. Let me confirm the delivery details and final price for you.”
              </p>
              <div className="text-[10px] text-blue-300">Responded in 12 seconds</div>
            </div>

          </div>

          {/* Underneath Clarification */}
          <div className="mt-8 pt-8 border-t border-[#E2E8F0] text-center space-y-4 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base text-[#486581] leading-relaxed">
              AutoPilot can keep the conversation moving when you're busy or offline, 
              using the business information and instructions you've provided.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#CBD5E1] inline-block">
              <div className="text-sm font-black text-[#0B2545]">
                YOU SET IT UP. MIKANA TAKES IT FROM THERE.
              </div>
            </div>

            <div>
              <a
                href="#try-it"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E56A0] hover:text-[#0B2545] underline underline-offset-4"
              >
                <span>See AutoPilot in Action</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
