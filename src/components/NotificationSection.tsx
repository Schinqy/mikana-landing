'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';

export function NotificationSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAFAF8] border-t border-[#EBEBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            Instant Notifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            Don’t find the customer hours later.
          </h2>
          <p className="text-base sm:text-lg text-[#66645D]">
            Mikana brings the opportunity to you while the buyer is actively waiting.
          </p>
        </div>

        {/* 2-Column: Left Real Lock-Screen Alert, Right Actual Phone Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Real Lock Screen Alert Screenshot */}
          <div className="space-y-6">
            <div className="text-xs font-semibold text-[#8A8880] uppercase tracking-wider">
              1. What arrives on your phone:
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#2D3139] bg-[#16181D]">
              <img
                src="/screens/screenshot_notification.jpg"
                alt="Mikana Lock-Screen Notification: New Inquiry Automotive for Nissan Sunny"
                className="w-full h-auto object-cover select-none"
              />
            </div>

            {/* Supporting Copy */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1E] leading-snug">
                You don’t have to keep checking the groups.
              </h3>
              <p className="text-sm sm:text-base text-[#66645D] leading-relaxed">
                Mikana monitors your trade groups 24/7. The moment an inquiry matches your catalog, your phone alerts you with buyer details and urgency.
              </p>
            </div>
          </div>

          {/* Right Column: Actual Phone Screen That Opens */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="w-full text-xs font-semibold text-[#8A8880] uppercase tracking-wider">
              2. What opens when you tap:
            </div>

            <SamsungPhoneFrame
              src="/screens/screen_quote.jpg"
              alt="Mikana Quote Composer Screen"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
