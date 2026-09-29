'use client';

import React from 'react';
import { ArrowRight, ArrowDown, Bell, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export function ProductFlowSection() {
  const steps = [
    {
      num: '01',
      title: 'CUSTOMER ASKS',
      badge: 'WhatsApp Group',
      content: '“Need a plumber in Avondale tomorrow.”',
      note: 'Customer posts in a local trade or community group.',
    },
    {
      num: '02',
      title: 'MIKANA FINDS IT',
      badge: 'Catalog Match',
      content: 'Identified: Plumbing Repair (Avondale, Urgent)',
      note: 'Mikana compares the request against your registered trade services.',
    },
    {
      num: '03',
      title: 'YOU GET AN INSTANT ALERT',
      badge: 'Lock-screen',
      content: 'New opportunity: Plumbing job in Avondale (Tomorrow, High urgency)',
      note: 'Your phone buzzes immediately with full context.',
    },
    {
      num: '04',
      title: 'YOU RESPOND',
      badge: '1-Tap Quote',
      content: '“Hi, I can assist with the plumbing repair tomorrow...”',
      note: 'Pre-drafted custom quote ready to dispatch via WhatsApp DM.',
    },
    {
      num: '05',
      title: 'OPPORTUNITY CAPTURED',
      badge: 'Deal Pipeline',
      content: 'Deal Stage: Quoted → Active Negotiation',
      note: 'Tracked in your pipeline from first message to payment.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            THE SIMPLE WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            From a message to a customer opportunity.
          </h2>
          <p className="text-base text-[#486581]">
            No complex setup. No complicated dashboards. Just five clear steps.
          </p>
        </div>

        {/* 5-Step Horizontal (desktop) / Vertical (mobile) Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1E56A0] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#1E56A0]">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F1F5F9] text-[#486581]">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0B2545] mt-2">
                  {step.title}
                </h3>

                <div className="mt-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#0B2545] leading-snug">
                  {step.content}
                </div>
              </div>

              <p className="text-[11px] text-[#829AB1] leading-relaxed">
                {step.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
