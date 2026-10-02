'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';

interface FlowStep {
  number: string;
  stage: string;
  title: string;
  timestamp: string;
  description: string;
  bullet: string;
  caption: string;
  renderScreen: () => React.ReactNode;
}

export function InteractiveDemoSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const steps: FlowStep[] = [
    {
      number: '01',
      stage: 'Incoming Request',
      title: 'Customer asks in trade group',
      timestamp: '11:05 AM',
      description:
        'Buyers in busy trade groups post quick requests like "Anyone with Toyota Wish bearing?" or "40 cases brown sugar in CBD". Manually monitoring dozens of active groups means missing the sale.',
      bullet: 'Monitors multiple trade groups simultaneously without manual scrolling',
      caption: 'Live buyer inquiry posted in monitored WhatsApp trade group',
      renderScreen: () => (
        <div className="relative w-full h-full bg-[#0B141A] flex flex-col justify-between p-3.5 select-none">
          {/* Subtle WhatsApp-style group top bar */}
          <div className="flex items-center gap-2.5 pt-4 pb-2 border-b border-white/10">
            <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-xs font-bold text-white shrink-0">
              HW
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-white truncate">
                Harare Wholesale &amp; Retail
              </div>
              <div className="text-[10px] text-white/50">740 participants</div>
            </div>
          </div>

          {/* Real WhatsApp chat inquiry screenshot crop rendered at true aspect ratio */}
          <div className="my-auto py-2">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#1F2C34]">
              <img
                src="/screens/screen_missed_opp.jpg"
                alt="WhatsApp trade group inquiry"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Bottom message indicator */}
          <div className="text-[10px] text-center text-white/40 pb-2">
            Captured automatically by Mikana
          </div>
        </div>
      ),
    },
    {
      number: '02',
      stage: 'Radar Detection',
      title: 'Mikana qualifies & scores the match',
      timestamp: '11:05 AM · Instant',
      description:
        'Mikana parses the buyer’s message, extracts product specifications, volume, and delivery location, then checks against your catalog with a 90%–95% relevance match.',
      bullet: 'Filters group noise and surfaces qualified buyer intent only',
      caption: 'Inquiry qualified and matched against merchant catalog',
      renderScreen: () => (
        <div className="relative w-full h-full bg-white">
          <img
            src="/screens/screen_lead.png"
            alt="Mikana Home feed showing matched trade opportunities"
            className="w-full h-full object-cover object-top select-none"
          />
        </div>
      ),
    },
    {
      number: '03',
      stage: 'Priority Alert',
      title: 'Lock-screen notification fires',
      timestamp: '+2 seconds',
      description:
        'Your phone alerts you instantly with product name, customer details, and urgency. You don’t need WhatsApp open to know an inquiry for your product just arrived.',
      bullet: 'Heads-up notification arrives while you are driving, working, or offline',
      caption: 'Real-time alert on lock-screen with buyer inquiry context',
      renderScreen: () => (
        <div className="relative w-full h-full bg-[#0D1117] overflow-hidden select-none">
          {/* Real Android phone lock screen background */}
          <img
            src="/screens/screen_live.png"
            alt="Android Lock Screen"
            className="w-full h-full object-cover select-none opacity-85"
          />
          {/* Real push notification banner sitting naturally at true proportions */}
          <div className="absolute top-12 sm:top-14 inset-x-2.5 z-20">
            <div className="rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.6)] border border-white/15 bg-[#16181D]">
              <img
                src="/screens/screenshot_notification.jpg"
                alt="Mikana Lock-Screen Notification"
                className="w-full h-auto object-contain select-none"
              />
            </div>
            <div className="mt-3 text-center">
              <span className="inline-block px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-medium text-white/80">
                1-tap opens pre-filled quote
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: '04',
      stage: 'One-Tap Quote',
      title: 'Pre-drafted quotation ready to send',
      timestamp: '1-Tap Dispatch',
      description:
        'Tap the alert to open the quote composer. Mikana pulls current pricing, stock availability, and drafts a polite DM response. Tap Send to dispatch directly to the buyer.',
      bullet: 'Dispatches privately to the buyer so competing sellers cannot undercut',
      caption: 'Pre-filled WhatsApp quote ready for instant private dispatch',
      renderScreen: () => (
        <div className="relative w-full h-full bg-white">
          <img
            src="/screens/screen_quote.jpg"
            alt="Mikana Quick Quote composer screen"
            className="w-full h-full object-cover object-top select-none"
          />
        </div>
      ),
    },
    {
      number: '05',
      stage: 'Deal Tracker',
      title: 'Organized into your sales pipeline',
      timestamp: 'CRM Pipeline',
      description:
        'Every quoted inquiry moves into your CRM deal stages (Unquoted → Quoted → Negotiating → Won). Track which deals are awaiting response, follow up on time, and measure won revenue.',
      bullet: 'Maintains deal history and prompts timely follow-ups automatically',
      caption: 'Deal logged and tracked through Quoted, Negotiating, and Won stages',
      renderScreen: () => (
        <div className="relative w-full h-full bg-white">
          <img
            src="/screens/screen_pipeline_clean.png"
            alt="Mikana deal pipeline tracking sales stages"
            className="w-full h-full object-cover object-top select-none"
          />
        </div>
      ),
    },
  ];

  const currentStep = steps[activeIdx];

  return (
    <section id="demo" className="py-16 sm:py-24 bg-white border-y border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            Product Walkthrough
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            See Mikana actually do it.
          </h2>
          <p className="text-base sm:text-lg text-[#66645D]">
            Step through the exact flow from incoming trade message to won deal in the real app.
          </p>
        </div>

        {/* Split Screen Layout: Steps on Left, Real Device Frame on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 5-Step Stepper Rail */}
          <div className="lg:col-span-6 space-y-2.5">
            {steps.map((step, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FAFAF8] border-[#1E56A0] shadow-[0_2px_12px_rgba(30,86,160,0.08)]'
                      : 'bg-white border-[#E5E5E0] hover:border-[#D0D0CA] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive
                            ? 'bg-[#1E56A0] text-white'
                            : 'bg-[#F4F4F0] text-[#71717A]'
                        }`}
                      >
                        {step.number}
                      </span>
                      <span className="text-xs font-semibold text-[#71717A]">
                        {step.stage}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#94A3B8]">
                      {step.timestamp}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-bold mt-2 ${
                      isActive ? 'text-[#0B2545]' : 'text-[#1C1C1E]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  {isActive && (
                    <div className="mt-2.5 space-y-3 pt-2.5 border-t border-[#E5E5E0]/70 animate-fadeIn">
                      <p className="text-xs sm:text-sm text-[#66645D] leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#1E56A0]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-[#16A34A]" />
                        <span>{step.bullet}</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}

            {/* Stepper Navigation Actions */}
            <div className="flex items-center justify-between pt-2 px-1 text-xs">
              <button
                type="button"
                onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                disabled={activeIdx === 0}
                className="px-4 py-2 rounded-lg font-medium text-[#71717A] hover:text-[#1C1C1E] disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Previous Step
              </button>
              <div className="text-[#94A3B8] font-mono">
                {activeIdx + 1} of {steps.length}
              </div>
              <button
                type="button"
                onClick={() =>
                  setActiveIdx((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                }
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1E56A0] hover:bg-[#16488A] text-white font-semibold transition-colors"
              >
                <span>{activeIdx === steps.length - 1 ? 'Start Again' : 'Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Real Device Frame Viewport */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center pt-4 lg:pt-0">
            <div className="relative w-full flex flex-col items-center">
              
              {/* Samsung Phone Frame with custom native screen compositions */}
              <SamsungPhoneFrame
                key={activeIdx}
                caption={currentStep.caption}
                className="transition-opacity duration-200"
              >
                {currentStep.renderScreen()}
              </SamsungPhoneFrame>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
