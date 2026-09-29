'use client';

import React from 'react';
import { Bell, ArrowRight, Clock, Check } from 'lucide-react';

export function NotificationSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            INSTANT NOTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Don’t find the customer hours later.
          </h2>
          <p className="text-base sm:text-lg text-[#486581]">
            Mikana brings the opportunity to you while it is still fresh.
          </p>
        </div>

        {/* 2-Column: Left Lock-Screen Alert, Right Actual Mikana Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Realistic Lock Screen Alert Card */}
          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0B2545] text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between text-xs text-blue-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center">
                    <Bell className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-bold text-white text-sm">Mikana</span>
                </div>
                <span className="text-xs text-blue-300">Just now</span>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-300">
                  New Opportunity
                </span>
                <p className="text-base sm:text-lg font-bold text-white mt-1">
                  Someone is looking for a plumber in Avondale.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-blue-900/60 text-xs">
                <span className="font-bold text-rose-300 bg-rose-950/40 px-2 py-0.5 rounded">
                  High urgency
                </span>
                <span className="text-blue-300 font-bold flex items-center gap-1">
                  <span>View opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Supporting Copy Statements */}
            <div className="space-y-3 pt-2">
              <div className="text-xl sm:text-2xl font-black text-[#0B2545] leading-snug">
                You don’t have to keep checking the groups.
              </div>
              <p className="text-sm sm:text-base text-[#486581] leading-relaxed">
                Mikana checks for the opportunities that matter to you, so you can focus on working, driving, or serving existing customers.
              </p>
            </div>
          </div>

          {/* Right Column: Actual Screen That Opens */}
          <div className="flex flex-col items-center">
            <div className="relative rounded-3xl p-3 bg-white border border-[#CBD5E1] shadow-lg max-w-sm">
              <div className="text-[11px] font-bold text-[#829AB1] mb-2 px-1 flex items-center justify-between">
                <span>Direct Quote Screen</span>
                <span className="text-[#059669] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>Ready to send</span>
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
                <img
                  src="/screens/screen_inquiry_quote.png"
                  alt="Mikana Opportunity Quote Screen"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
