'use client';

import React from 'react';
import { Calendar, MapPin, Smartphone, QrCode, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function ExpoTomorrowBanner() {
  return (
    <section id="expo" className="relative py-20 border-y border-zinc-800 bg-gradient-to-b from-[#0a0f1d] via-[#090d18] to-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-blue-950/60 via-zinc-900/90 to-indigo-950/50 border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Announcement Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>EXPO SHOWCASE TOMORROW</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Experience Mikana Live at the Exhibition
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                We are demonstrating Mikana live at the expo tomorrow! Drop by our booth to test the autonomous lead interception engine in real-time, see the deal pipeline in action, and get instant early access.
              </p>

              {/* Booth Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Live Group Challenge:</strong> Post an inquiry & watch Mikana qualify it in 2.4s</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Hands-on Device:</strong> Test on physical Pixel 9 Pro device</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Closed Beta Invite:</strong> Direct access tokens & test APK downloads</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>Founder Perks:</strong> 50% discount on Pro Trader for early partners</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#waitlist"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all duration-200 shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <span>Reserve Expo VIP Fast-Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#testing"
                  className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 font-semibold text-xs transition-all duration-200"
                >
                  Request Closed Beta Link
                </a>
              </div>
            </div>

            {/* Right Column: Visual Fast-Pass Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-2xl bg-[#080d19] border border-blue-500/40 shadow-2xl relative text-center space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-blue-400">
                    Expo Live Build
                  </div>
                  <div className="text-lg font-bold text-white mt-1">
                    Mikana Mobile v1.0
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Powered by Google Gemini & RevenueCat
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Status</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Ready for Demo
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Target</span>
                    <span className="text-zinc-300 font-mono">Pixel 9 Pro / Android</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-500">Event</span>
                    <span className="text-zinc-300">Tomorrow Expo</span>
                  </div>
                </div>

                <a
                  href="#testing"
                  className="block w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs transition-colors"
                >
                  Claim Beta Slot at Booth
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
