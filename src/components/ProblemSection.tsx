'use client';

import React from 'react';
import { XCircle, CheckCircle2, Clock, Zap } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28 border-y border-[#E5E5E0] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1E56A0]">
            WHY SPEED MATTERS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight leading-tight">
            The customer isn’t missing.<br />
            <span className="text-[#1E56A0]">The speed is.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#66645D] leading-relaxed max-w-2xl mx-auto">
            In WhatsApp trade groups, the first business with an accurate quote wins the deal. Replying a few hours late means the customer has already bought from your competitor.
          </p>
        </div>

        {/* Without Mikana vs With Mikana Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Without Mikana */}
          <div className="rounded-3xl border border-[#FCA5A5]/60 bg-[#FEF2F2]/40 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-semibold">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>Without Mikana</span>
                </span>
                <span className="text-xs font-medium text-[#991B1B] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Replying 3 hours late</span>
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="rounded-2xl bg-white border border-[#FCA5A5]/40 p-4 space-y-3 font-sans text-xs shadow-2xs">
                <div className="text-[11px] text-[#71717A] text-center border-b border-[#F4F4F0] pb-2 font-mono">
                  WhatsApp Group • 11:05 AM
                </div>
                
                <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#1C1C1E] max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#4B5563]">Buyer (in group):</div>
                  <div className="text-[13px] mt-0.5">“Anyone selling a Nissan Sunny engine? Need one urgently.”</div>
                </div>

                <div className="pt-2 text-[11px] text-[#DC2626] font-semibold text-center italic">
                  — 3 hours later (you finally check the group) —
                </div>

                <div className="p-2.5 rounded-xl bg-[#DCF8C6] text-[#1C1C1E] ml-auto max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#075E54]">You (2:15 PM):</div>
                  <div className="text-[13px] mt-0.5">“Hi, do you still need the engine? We have one in stock.”</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#1C1C1E] max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#4B5563]">Buyer (2:18 PM):</div>
                  <div className="text-[13px] mt-0.5 font-medium">“Ah sorry mkoma, already got it from someone who replied 15 minutes after I posted. Payment done 🙏”</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#FCA5A5]/40 flex items-center justify-between text-xs">
              <span className="text-[#991B1B] font-semibold">Outcome: Deal lost to competitor</span>
              <span className="text-[#DC2626] font-bold">Lost sale</span>
            </div>
          </div>

          {/* Card 2: With Mikana */}
          <div className="rounded-3xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#16A34A] text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>With Mikana</span>
                </span>
                <span className="text-xs font-medium text-[#166534] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Replying in 45 seconds</span>
                </span>
              </div>

              {/* Chat Simulation */}
              <div className="rounded-2xl bg-white border border-[#BBF7D0] p-4 space-y-3 font-sans text-xs shadow-2xs">
                <div className="text-[11px] text-[#71717A] text-center border-b border-[#F4F4F0] pb-2 font-mono">
                  WhatsApp Group • 11:05 AM
                </div>
                
                <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#1C1C1E] max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#4B5563]">Buyer (11:05 AM):</div>
                  <div className="text-[13px] mt-0.5">“Anyone selling a Nissan Sunny engine? Need one urgently.”</div>
                </div>

                <div className="pt-2 text-[11px] text-[#16A34A] font-semibold text-center">
                  ⚡ Mikana alerts your phone at 11:05 AM with drafted quote
                </div>

                <div className="p-2.5 rounded-xl bg-[#DCF8C6] text-[#1C1C1E] ml-auto max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#075E54]">You (11:06 AM):</div>
                  <div className="text-[13px] mt-0.5">“Hi Lui, yes we have engine parts available for the Nissan Sunny with 6-month warranty. Ready for dispatch.”</div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F4F4F0] text-[#1C1C1E] max-w-[85%]">
                  <div className="font-bold text-[11px] text-[#4B5563]">Buyer (11:08 AM):</div>
                  <div className="text-[13px] mt-0.5 font-medium">“Great! Where is your shop located? Sending my driver right now.”</div>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#BBF7D0] flex items-center justify-between text-xs">
              <span className="text-[#166534] font-semibold">Outcome: Deal won before competitors see it</span>
              <span className="text-[#16A34A] font-bold">Deal closed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
