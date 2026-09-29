'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Search, TrendingUp } from 'lucide-react';

export function PipelineSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            END-TO-END DEAL WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Finding the opportunity is only the beginning.
          </h2>
          <p className="text-base text-[#486581]">
            Mikana takes you from the initial group request all the way to a won sale.
          </p>
        </div>

        {/* 3 Pillars: Understand, Respond, Follow Up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
              01 • UNDERSTAND
            </span>
            <h3 className="text-lg font-bold text-[#0B2545]">
              What does the customer actually need?
            </h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Mikana extracts exact product quantities, locations, turnaround dates, and urgency tags so you don’t have to parse through slang or long chat threads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
              02 • RESPOND
            </span>
            <h3 className="text-lg font-bold text-[#0B2545]">
              Create a response tailored to the opportunity.
            </h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Generate a custom quote grounded in your current stock and prices, formatted for WhatsApp DM with direct link to the buyer's original group message.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
              03 • FOLLOW UP
            </span>
            <h3 className="text-lg font-bold text-[#0B2545]">
              Keep track of what happened next.
            </h3>
            <p className="text-xs text-[#486581] leading-relaxed">
              Organize every lead in your deal tracker so quotes don’t get forgotten, follow-ups happen on time, and won revenue is clearly tracked.
            </p>
          </div>

        </div>

        {/* Visual Progression: Captured -> Quoted -> Negotiating -> Won */}
        <div className="mt-12 max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#0B2545] text-white shadow-md">
          <div className="text-xs uppercase font-extrabold tracking-widest text-blue-300 text-center mb-4">
            LIVE DEAL PIPELINE PROGRESSION
          </div>

          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="p-2 sm:p-3 rounded-xl bg-blue-900/40 border border-blue-800 text-xs font-bold text-blue-200">
              Captured
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-blue-800/60 border border-blue-700 text-xs font-bold text-white">
              Quoted
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-blue-700/60 border border-blue-600 text-xs font-bold text-white">
              Negotiating
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-emerald-600 border border-emerald-500 text-xs font-extrabold text-white flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Won</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
