'use client';

import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 border-t border-zinc-800 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Clear, Predictable ROI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Pricing Built to Pay For Itself in 1 Deal
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            One extra captured grocery, hardware, or tech deal per month covers your entire year of Mikana Pro.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!annual ? 'text-white' : 'text-zinc-400'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full bg-zinc-800 border border-zinc-700 p-0.5 transition-colors focus:outline-none"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-500 shadow-md transform transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${annual ? 'text-white' : 'text-zinc-400'} flex items-center gap-1.5`}>
              <span>Annual Membership</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                SAVE 35%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Tier 1: Free Starter */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">Free Starter</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  For individual merchants testing the waters.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-zinc-500">/ forever</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-zinc-800/80 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>2 WhatsApp Trade Groups max</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Manual quote dispatch</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Standard AI extraction delay</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Local device storage</span>
                </li>
              </ul>
            </div>

            <a
              href="#waitlist"
              className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs text-center transition-colors block"
            >
              Get Started Free
            </a>
          </div>

          {/* Tier 2: Pro Trader (Featured / Highlighted) */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-blue-950/40 via-zinc-900/90 to-zinc-900/70 border-2 border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.25)] flex flex-col justify-between space-y-8">
            {/* Best Value Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-lg">
              Most Popular • Expo Favorite
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Pro Trader</span>
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  For active sellers, distributors, and contractors.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {annual ? '$79.99' : '$9.99'}
                </span>
                <span className="text-xs text-zinc-400">
                  {annual ? '/ year ($6.66/mo)' : '/ month'}
                </span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-blue-500/20 text-xs text-zinc-200">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>15 WhatsApp Trade Groups</strong> (7.5x deal exposure)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>24/7 Autopilot Quote Dispatch</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Google Gemini Flash AI Studio</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Deal Pipeline CRM & Cloud Sync</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Priority anti-ban rate limiting guardrails</span>
                </li>
              </ul>
            </div>

            <a
              href="#waitlist"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <span>Unlock Pro Access</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tier 3: Agency & Enterprise */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">Agency & Scale</h3>
                <p className="text-xs text-zinc-400 mt-1">
                  For multi-agent sales teams & wholesalers.
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">$24.99</span>
                <span className="text-xs text-zinc-500">/ month</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-zinc-800/80 text-xs text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Unlimited WhatsApp trade groups</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Multi-agent dispatch routing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Custom product catalogs & SKU sync</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-zinc-500 shrink-0" />
                  <span>Dedicated relay proxy cluster</span>
                </li>
              </ul>
            </div>

            <a
              href="#waitlist"
              className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs text-center transition-colors block"
            >
              Contact for Enterprise
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
