'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SamsungPhoneFrame } from './SamsungPhoneFrame';

const SWAP_WORDS = ['customer', 'client', 'deal', 'buyer', 'sale'];

export function HeroVisual() {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [activeScreen, setActiveScreen] = useState<'home' | 'quote'>('home');

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
    <section id="overview" className="pt-4 pb-16 sm:pt-8 sm:pb-24 bg-[#FAFAF8] overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
          
          {/* ── Left Column: Pitch, Interactive Sequence & Details ── */}
          <div className="lg:col-span-7">
            
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.035em] text-[#1C1C1E] leading-[1.12] sm:leading-[1.08]">
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
            <p className="mt-5 sm:mt-6 max-w-xl text-[17px] sm:text-[18.5px] font-semibold text-[#1C1C1E] leading-relaxed">
              Mikana watches <span className="text-[#0B2545] font-bold">WhatsApp groups</span> for real opportunities that match what you sell, then sends
              them straight to you as <span className="text-[#1E56A0]">instant notifications</span>. When you're busy, <span className="text-[#1C1C1E] font-bold">AutoPilot</span> can
              reply for you.
            </p>

            {/* Refined Simple & Tactile Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#try-it"
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full text-[14px] font-medium text-white bg-[#1C1C1E] hover:bg-black active:scale-[0.98] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(28,28,30,0.12)]"
              >
                <span>Try Mikana</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-[14px] font-medium text-[#1C1C1E] bg-white hover:bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#D0D0CA] active:scale-[0.98] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                See what it can do
              </a>
            </div>

            {/* Interactive Timeline Sequence: message → match → alert */}
            <div className="mt-14 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E] tracking-tight">
                From group noise to your phone in seconds.
              </h2>

              <div className="relative mt-6 sm:mt-8 pl-6 sm:pl-7 border-l-2 border-dashed border-[#D5D5CE] space-y-6 sm:space-y-7">
                
                {/* 1. The group message */}
                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#8A8880]" />
                  <div className="w-full max-w-md">
                    <div className="flex items-center justify-between text-xs text-[#55544E] mb-1.5">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                        Harare Auto Spares Traders (Group C)
                      </span>
                      <span className="tabular-nums text-[#8A8880]">11:05 AM</span>
                    </div>
                    <div className="p-3.5 sm:p-4 rounded-2xl rounded-tl-sm bg-[#E8F8EA] border border-[#D1F2D9] shadow-2xs">
                      <div className="text-xs font-bold text-[#111827]">Lui (Customer)</div>
                      <p className="text-sm sm:text-[15px] text-[#1F2937] leading-snug mt-1 font-normal">
                        “Look for a engine for a nissan sunny”
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. What Mikana matched */}
                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#1E56A0] border-2 border-[#1E56A0]" />
                  <div className="w-full max-w-md sm:ml-6 md:ml-8">
                    <div className="text-xs text-[#1E56A0] font-bold mb-1.5 uppercase tracking-wide">Mikana noticed</div>
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-white border-2 border-[#1E56A0] shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#1E56A0]">New opportunity</span>
                        <span className="font-bold text-[#0E8F63]">95% match</span>
                      </div>
                      <div className="mt-1.5 text-base sm:text-[17px] font-bold text-[#111827] leading-tight">
                        Nissan Sunny Engine
                      </div>
                      <p className="text-xs text-[#66645D] mt-0.5">
                        Matches your catalog: Engine &amp; Component Parts
                      </p>
                      <div className="mt-2.5 pt-2.5 border-t border-[#F1F1ED] flex items-center justify-between text-xs">
                        <span className="text-[#66645D]">Harare</span>
                        <span className="font-bold text-[#DC2626]">Urgent</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. The alert on your phone: Real Mikana Notification Screenshot */}
                <div className="relative">
                  <span className="absolute -left-[31px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#FAFAF8] border-2 border-[#8A8880]" />
                  <div className="w-full max-w-md sm:ml-12 md:ml-16">
                    <div className="text-xs text-[#55544E] font-medium mb-1.5 flex items-center justify-between">
                      <span>Real lock-screen alert</span>
                      <span className="text-[11px] text-[#1E56A0] font-semibold">Live Mikana notification</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveScreen('quote')}
                      className="w-full text-left rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#2D3139] bg-[#16181D] hover:scale-[1.01] transition-transform duration-200 cursor-pointer group"
                    >
                      <img
                        src="/screens/screenshot_notification.jpg"
                        alt="Real Mikana Lock Screen Notification: New Inquiry Automotive for Nissan Sunny"
                        className="w-full h-auto object-cover select-none"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveScreen('quote')}
                      className="mt-2 text-xs text-[#1E56A0] font-medium flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                      <span>Tap alert to open drafted WhatsApp quote</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Mobile-Only Phone Frame (Keeps flow intact on mobile scrolling!) ── */}
            <div className="lg:hidden mt-10 pt-6 border-t border-[#EBEBE6] flex flex-col items-center">
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#EFEFEA] border border-[#E0E0DA] text-xs font-medium text-[#71717A] mb-4 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveScreen('home')}
                  className={`px-3.5 py-1 rounded-full transition-all ${
                    activeScreen === 'home'
                      ? 'bg-white text-[#1C1C1E] font-semibold shadow-xs'
                      : 'hover:text-[#1C1C1E]'
                  }`}
                >
                  Home Feed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScreen('quote')}
                  className={`px-3.5 py-1 rounded-full transition-all ${
                    activeScreen === 'quote'
                      ? 'bg-white text-[#1C1C1E] font-semibold shadow-xs'
                      : 'hover:text-[#1C1C1E]'
                  }`}
                >
                  Drafted Quote
                </button>
              </div>

              <SamsungPhoneFrame
                src={activeScreen === 'home' ? '/screens/screen_home.jpg' : '/screens/screen_quote.jpg'}
                alt={activeScreen === 'home' ? 'Mikana Home Screen Live Feed' : 'Real Mikana WhatsApp quote screen'}
                caption={
                  activeScreen === 'home'
                    ? 'Live Mikana screen: Buyer inquiries detected across WhatsApp groups in real time'
                    : 'Live Mikana screen: Instant WhatsApp quote ready to send with 1 tap'
                }
              />
            </div>

            {/* Feature Callouts: What the tap does */}
            <div className="mt-12 sm:mt-16 max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E] tracking-tight">
                Tap the alert. Your quote is already drafted.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#66645D] leading-relaxed">
                Mikana checks the buyer's request against your actual stock, verifies your pricing,
                and writes a WhatsApp reply that's ready to send.
              </p>

              <dl className="mt-6 divide-y divide-[#E5E5E0] border-y border-[#E5E5E0]">
                <div className="py-3.5 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-[#1C1C1E]">Your real prices</dt>
                  <dd className="mt-1 sm:mt-0 text-xs sm:text-sm text-[#66645D] leading-relaxed">
                    Mikana pulls your exact stock, pricing, and warranty terms from your uploaded catalog.
                  </dd>
                </div>
                <div className="py-3.5 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-[#1C1C1E]">One-tap reply</dt>
                  <dd className="mt-1 sm:mt-0 text-xs sm:text-sm text-[#66645D] leading-relaxed">
                    Opens the customer's WhatsApp DM with the quote pre-filled. You just tap "Send via WhatsApp".
                  </dd>
                </div>
                <div className="py-3.5 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-[#1C1C1E]">AutoPilot</dt>
                  <dd className="mt-1 sm:mt-0 text-xs sm:text-sm text-[#66645D] leading-relaxed">
                    Driving or serving another customer? AutoPilot can send the verified quote automatically within 2 minutes.
                  </dd>
                </div>
              </dl>
            </div>

          </div>

          {/* ── Right Column (Desktop Sticky): Real app screen stays in view when scrolling ── */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-12 flex flex-col items-center">
              
              {/* Segmented Screen Switcher Pill */}
              <div className="flex items-center gap-1 p-1 rounded-full bg-[#EFEFEA] border border-[#E0E0DA] text-xs font-medium text-[#71717A] mb-4 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setActiveScreen('home')}
                  className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeScreen === 'home'
                      ? 'bg-white text-[#1C1C1E] font-semibold shadow-xs'
                      : 'hover:text-[#1C1C1E]'
                  }`}
                >
                  Home Feed
                </button>
                <button
                  type="button"
                  onClick={() => setActiveScreen('quote')}
                  className={`px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                    activeScreen === 'quote'
                      ? 'bg-white text-[#1C1C1E] font-semibold shadow-xs'
                      : 'hover:text-[#1C1C1E]'
                  }`}
                >
                  Drafted Quote
                </button>
              </div>

              <SamsungPhoneFrame
                src={activeScreen === 'home' ? '/screens/screen_home.jpg' : '/screens/screen_quote.jpg'}
                alt={activeScreen === 'home' ? 'Mikana Home Screen Live Feed' : 'Real Mikana WhatsApp quote screen'}
                caption={
                  activeScreen === 'home'
                    ? 'Live Mikana screen: Real-time buyer inquiries intercepted across WhatsApp groups'
                    : 'Real Mikana screen: Instant WhatsApp quote grounded in your catalog'
                }
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}