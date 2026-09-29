'use client';

import React from 'react';
import { Sparkles, Zap, Bot, ArrowRight, CheckCircle2, Shield, TrendingUp, Layers, Check } from 'lucide-react';

export function SpotlightFeature() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-zinc-800/80 bg-[#090b11]">
      {/* Background panoramic spotlight image overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('/background-panoramic-spotlight.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e] via-transparent to-[#07090e] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/40 border border-blue-500/40 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Spotlight Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineered for High-Velocity WhatsApp Trade
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Stop losing thousands in missed trade opportunities. While competitors scroll endlessly through group chat logs, 
            Mikana captures, evaluates, and prepares quotes automatically.
          </p>
        </div>

        {/* 2-Column Spotlight Feature: Left Spec Cards, Right Spotlight Pop-Up Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Core Value Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-blue-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    Multimodal AI Lead Ingestion
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Powered by Google Gemini to parse rapid text inquiries, OCR commodity flyer images, and transcribe forwarded voice notes in seconds.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Zero-Hallucination Service Matching
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    The proposal generator is strictly grounded against your active catalog of stock, fixed rates, delivery terms, and turnaround guarantees.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    Visual Deal Pipeline CRM
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Track every conversation from <span className="text-zinc-200">Captured → Quoted → Negotiating → Won</span> with real-time pipeline valuation and closing metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    Anti-Ban Guardrails & Private Relays
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Client-side rate limiters, randomized response delays (3–8s), and daily quota caps protect your WhatsApp account while you scale.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Spotlight Pop-Up Graphic with Real Bezel Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative">
              
              {/* Vertical Spotlight Glow Backdrop */}
              <div 
                className="absolute -inset-10 bg-contain bg-center opacity-60 pointer-events-none filter blur-xl"
                style={{ backgroundImage: `url('/background-vertical-spotlight.jpg')` }}
              />

              {/* Spotlight Device Frame */}
              <div className="relative rounded-[48px] p-2 bg-gradient-to-b from-zinc-700 via-zinc-900 to-black shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-white/20">
                <div className="relative rounded-[40px] overflow-hidden bg-black max-w-[310px] aspect-[9/19.5]">
                  <img
                    src="/screens/screen_paywall.png"
                    alt="Mikana Pro Trader Spotlight"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle glass reflection */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 40%)',
                    }}
                  />
                </div>

                {/* Floating Highlights Tag */}
                <div className="absolute -bottom-5 -left-5 bg-[#0e1320] border border-blue-500/40 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">15 Trade Groups Monitored</div>
                    <div className="text-[10px] text-zinc-400">7.5x more deal exposure than free</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#0e1320] border border-emerald-500/40 rounded-xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">24/7 Autopilot Responder</div>
                    <div className="text-[10px] text-zinc-400">Scores & dispatches while offline</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
