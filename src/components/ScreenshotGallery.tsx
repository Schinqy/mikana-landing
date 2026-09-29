'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ScreenshotGallery() {
  const slides = [
    {
      title: 'Opportunity found',
      caption: 'See exactly what the customer needs.',
      tag: 'Live Buyer Inquiries',
      src: '/screens/screen_radar_feed.png',
    },
    {
      title: 'Instant alert',
      caption: 'Know about it immediately.',
      tag: 'Lock Screen & Alert',
      src: '/screens/screen_lead.png',
    },
    {
      title: 'Suggested response',
      caption: 'Pre-drafted quote ready to send via WhatsApp.',
      tag: 'Quote Composer',
      src: '/screens/screen_inquiry_quote.png',
    },
    {
      title: 'AutoPilot',
      caption: 'Keep things moving when you’re busy.',
      tag: 'Pro Trader & Autopilot',
      src: '/screens/screen_paywall.png',
    },
    {
      title: 'Monitored groups',
      caption: 'Choose the exact trade channels you watch.',
      tag: 'Group Filter',
      src: '/screens/screen_groups.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 border-t border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            PRODUCT WALKTHROUGH
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            A closer look at Mikana
          </h2>
          <p className="text-base text-[#486581]">
            Real screenshots captured from the live Android build.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-md mx-auto flex flex-col items-center">
          
          {/* Bezel frame around current screenshot */}
          <div className="relative rounded-[40px] p-2 bg-[#1A1C22] shadow-xl border border-zinc-700">
            <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19.5] w-[280px]">
              <img
                src={slides[currentIndex].src}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Caption & Navigation Controls */}
          <div className="mt-6 text-center space-y-2 w-full">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1E56A0] bg-[#EEF4FA] px-2.5 py-1 rounded-md inline-block">
              {slides[currentIndex].tag}
            </span>
            <h3 className="text-lg font-bold text-[#0B2545]">
              {slides[currentIndex].title}
            </h3>
            <p className="text-xs text-[#486581]">
              “{slides[currentIndex].caption}”
            </p>

            {/* Prev / Next Buttons */}
            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center hover:bg-[#E2E8F0] transition-colors"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold text-[#829AB1]">
                {currentIndex + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center hover:bg-[#E2E8F0] transition-colors"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
