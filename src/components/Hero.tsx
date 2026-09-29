'use client';

import React from 'react';
import { DeviceFrame } from './DeviceFrame';
import { Radio, Sparkles, ArrowRight, ShieldCheck, Zap, Bot, MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <section id="overview" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background radial spotlight beam & pattern */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-40" />
      
      {/* Radiant Spotlight Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-gradient-to-b from-blue-600/25 via-indigo-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Expo Announcement Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-medium shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-white">Live at Tech Expo Tomorrow</span>
            <span className="text-blue-400/60">•</span>
            <span>Experience Android Build Live</span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Turn WhatsApp Group Noise Into{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Won Deals
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Mikana continuously scans <strong>90+ WhatsApp trade channels 24/7</strong>, 
            evaluates buyer requests in milliseconds via <strong>Google Gemini AI</strong>, 
            and auto-synthesizes tailored quote messages with <strong>1-tap WhatsApp DM dispatch</strong>.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_45px_rgba(37,99,235,0.65)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Early Access & Waitlist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Explore Interactive Mockup</span>
            </a>
          </div>

          {/* Key Metric Badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">96+</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">Monitored Groups</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 tracking-tight">&lt; 2.4s</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">Gemini Extraction</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">95%</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">Match Accuracy</div>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 tracking-tight">1-Tap</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">WhatsApp DM Quote</div>
            </div>
          </div>
        </div>

        {/* ── Interactive Vector Device Frame Showcase ── */}
        <div id="demo" className="mt-16 sm:mt-24 pt-4">
          <DeviceFrame />
        </div>
      </div>
    </section>
  );
}
