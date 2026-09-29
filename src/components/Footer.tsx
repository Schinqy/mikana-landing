'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#05070a] py-12 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center p-1">
              <img src="/logo-white.svg" alt="Mikana Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">MIKANA</span>
              <span className="text-zinc-500 ml-2">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#demo" className="hover:text-white transition-colors">Live Radar</a>
            <a href="#expo" className="hover:text-white transition-colors">Expo Booth</a>
            <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
            <a href="#testing" className="hover:text-white transition-colors">Closed Testing</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>

          {/* Privacy Note */}
          <div className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>End-to-End Client Data Privacy</span>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400">
          <p>Built with Google Gemini Multimodal AI & RevenueCat Monetization Engine.</p>
          <p className="flex items-center gap-1">
            Engineered for high-volume WhatsApp business channels.
          </p>
        </div>

      </div>
    </footer>
  );
}
