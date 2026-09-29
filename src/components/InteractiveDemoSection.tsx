'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Send, Sparkles, MessageCircle, Bell, UserCheck, TrendingUp } from 'lucide-react';

export function InteractiveDemoSection() {
  const [activeStep, setActiveStep] = useState(0);

  const demoSteps = [
    {
      label: '1. Group Request',
      title: 'Customer asks in trade group',
      desc: 'An inquiry appears in a busy Harare trade group.',
      tag: 'WhatsApp Group',
    },
    {
      label: '2. Detection',
      title: 'Mikana detects & qualifies it',
      desc: 'Matches request to your catalog with 95% accuracy score.',
      tag: 'Instant Match',
    },
    {
      label: '3. Instant Alert',
      title: 'Lock-screen notification arrives',
      desc: 'Your phone buzzes immediately with key details and location.',
      tag: 'Phone Notification',
    },
    {
      label: '4. Suggested Quote',
      title: 'Ready-to-send WhatsApp quote',
      desc: 'A polite, catalog-grounded message is drafted for 1-tap dispatch.',
      tag: '1-Tap Quote',
    },
    {
      label: '5. Deal Pipeline',
      title: 'Captured into deal tracker',
      desc: 'Tracked from initial quotation to won sale.',
      tag: 'Pipeline CRM',
    },
  ];

  return (
    <section id="demo" className="py-20 sm:py-28 border-y border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            REAL PRODUCT DEMONSTRATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            See Mikana actually do it.
          </h2>
          <p className="text-base text-[#486581]">
            Step through the exact flow from incoming message to won deal.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {demoSteps.map((step, idx) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(idx)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeStep === idx
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'bg-[#F1F5F9] text-[#486581] hover:text-[#0B2545] hover:bg-[#E2E8F0]'
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Interactive Simulation Display Area */}
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
          
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4 mb-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1E56A0]">
                {demoSteps[activeStep].tag}
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                {demoSteps[activeStep].title}
              </h3>
            </div>
            <span className="text-xs font-bold text-[#829AB1]">
              Step {activeStep + 1} of {demoSteps.length}
            </span>
          </div>

          {/* Dynamic Content per Step */}
          <div className="min-h-[220px] flex flex-col justify-center">
            
            {activeStep === 0 && (
              <div className="space-y-3">
                <div className="text-xs font-semibold text-[#829AB1] flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#075E54]" />
                  <span>Harare Wholesale & Retail Trade (740 participants)</span>
                </div>
                <div className="p-4 rounded-2xl rounded-tl-xs bg-[#E7FFDB] border border-[#D0F2C2] text-[#111B21] max-w-md shadow-xs">
                  <div className="text-xs font-bold text-[#075E54]">Tatenda G.</div>
                  <p className="text-sm font-medium mt-1">
                    “Looking for 40 cases of brown sugar for delivery in the CBD tomorrow.”
                  </p>
                  <div className="text-[10px] text-right text-[#667781] mt-1">11:15 AM</div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border-2 border-[#1E56A0] shadow-sm space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[#1E56A0]">
                    OPPORTUNITY IDENTIFIED
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#ECFDF5] text-[#059669]">
                    95% Match
                  </span>
                </div>
                <div className="text-base font-bold text-[#0B2545]">
                  40 Cases Brown Sugar (CBD Delivery)
                </div>
                <div className="text-xs text-[#486581] flex items-center gap-3">
                  <span>📍 Harare CBD</span>
                  <span className="text-xs font-bold text-[#E11D48] bg-[#FFF1F2] px-2 py-0.5 rounded">
                    Urgent (Tomorrow)
                  </span>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#0B2545] text-white shadow-md space-y-2">
                <div className="flex items-center justify-between text-xs text-blue-200">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Bell className="w-3.5 h-3.5 text-blue-300" />
                    <span>Mikana Alert</span>
                  </div>
                  <span className="text-[10px] text-blue-300">Just now</span>
                </div>
                <div className="text-sm font-bold">
                  New trade opportunity found
                </div>
                <p className="text-xs text-blue-100">
                  Tatenda is looking for 40 cases of brown sugar in CBD tomorrow.
                </p>
              </div>
            )}

            {activeStep === 3 && (
              <div className="max-w-lg mx-auto p-5 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs space-y-3">
                <div className="text-xs font-bold text-[#486581]">
                  Suggested Response (Grounded in your catalog)
                </div>
                <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0B2545] font-medium leading-relaxed">
                  “Hi Tatenda, reaching out regarding your request for 40 cases of brown sugar in Harare Wholesale. We have stock available and can deliver to the CBD tomorrow. Would you like our current case rate?”
                </div>
                <button className="w-full py-2.5 rounded-xl bg-[#0B2545] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#133B5C]">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Private Reply (Linked to Group)</span>
                </button>
              </div>
            )}

            {activeStep === 4 && (
              <div className="max-w-lg mx-auto p-5 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs space-y-3">
                <div className="text-xs font-bold text-[#486581]">
                  Deal Pipeline Status
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-bold">
                  <div className="p-2 rounded-lg bg-[#F1F5F9] text-[#829AB1]">Captured</div>
                  <div className="p-2 rounded-lg bg-[#0B2545] text-white">Quoted</div>
                  <div className="p-2 rounded-lg bg-[#F1F5F9] text-[#829AB1]">Negotiating</div>
                  <div className="p-2 rounded-lg bg-[#F1F5F9] text-[#829AB1]">Won</div>
                </div>
                <p className="text-xs text-center text-[#059669] font-semibold pt-1">
                  Opportunity tracked and active in pipeline.
                </p>
              </div>
            )}

          </div>

          {/* Next / Previous Controls */}
          <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 rounded-lg text-xs font-bold text-[#486581] hover:text-[#0B2545] disabled:opacity-30"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(demoSteps.length - 1, prev + 1))}
              disabled={activeStep === demoSteps.length - 1}
              className="px-5 py-2 rounded-lg bg-[#1E56A0] hover:bg-[#16488A] text-white text-xs font-bold disabled:opacity-30 flex items-center gap-1.5"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
