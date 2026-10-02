'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';
import { GooglePlayButton } from './GooglePlayButton';

const SWAP_WORDS = ['customer', 'client', 'deal', 'buyer', 'sale'];

export function HeroVisual() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reduced) return;

    // Full word typed: hold for 1.8s
    if (!isDeleting && subIndex === SWAP_WORDS[wordIndex].length) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }

    // Word deleted: pause, then next word
    if (isDeleting && subIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % SWAP_WORDS.length);
      }, 250);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? 45 : 95;
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIndex, reduced]);

  const typedWord = reduced ? SWAP_WORDS[0] : SWAP_WORDS[wordIndex].substring(0, subIndex);

  return (
    <section id="overview" className="relative lg:min-h-[calc(100vh-4rem)] flex items-center pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-0 bg-[#FAFAF8] overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <div className="grid lg:grid-cols-12 gap-x-10 xl:gap-x-14 gap-y-8 lg:gap-y-0 items-center">
          
          {/* ── Left Column: Headline, Pitch & CTAs ── */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-5">
            

            {/* Headline with Typewriter */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold tracking-[-0.035em] text-[#1C1C1E] leading-[1.12]">
              What if you never missed your next potential{' '}
              <span className="relative inline-block text-[#1E56A0] min-w-[1ch] text-left">
                <span>{typedWord || '\u00A0'}</span>
                {!reduced && (
                  <span className="inline-block w-[2.5px] h-[0.8em] bg-[#1E56A0] ml-1 align-baseline animate-pulse rounded-full" />
                )}
                <span className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-[#1E56A0]/25 rounded-full" />
              </span>
              ?
            </h1>

            {/* Thickened Subtext with pure color highlights */}
            <p className="max-w-xl text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#1C1C1E] leading-relaxed">
              Mikana watches <span className="text-[#0B2545] font-bold">WhatsApp groups</span> for opportunities that match what you sell, then sends
              them straight to you as <span className="text-[#1E56A0]">instant notifications</span>. When you're busy, <span className="text-[#1C1C1E] font-bold">AutoPilot</span> can
              reply for you.
            </p>

            {/* Action Buttons: Direct Play Store CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              <GooglePlayButton variant="hero" />
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-[14px] font-medium text-[#1C1C1E] bg-white hover:bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#D0D0CA] active:scale-[0.98] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                See how it works
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#71717A]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span className="font-medium">Monitors groups 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1E56A0]" />
                <span className="font-medium">Under 30s response time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1C1C1E]" />
                <span className="font-medium">Zero spam, matches only</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Clean, Prominent Phone Frame with Home Feed ── */}
          <div className="lg:col-span-5 flex justify-center items-center pt-2 lg:pt-0">
            <SamsungPhoneFrame
              src="/screens/screen_home.jpg"
              alt="Mikana Home Feed showing live buyer requests in WhatsApp groups"
            />
          </div>

        </div>
      </div>
    </section>
  );
}