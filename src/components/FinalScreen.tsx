'use client';

import React from 'react';
import { ArrowRight, QrCode, Phone, MessageSquare } from 'lucide-react';

export function FinalScreen() {
  return (
    <footer className="py-20 sm:py-28 border-t border-[#E5E5E0] bg-[#FAFAF8] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Large Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight leading-tight">
            Your next customer might already be asking for you.
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#1E56A0]">
            Mikana helps you find them.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#demo"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-medium text-sm text-[#1C1C1E] bg-white hover:bg-[#F4F4F0] border border-[#E5E5E0] transition-colors shadow-2xs"
          >
            Try Mikana
          </a>
          <a
            href="#try-it"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-medium text-sm text-white bg-[#1C1C1E] hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <span>Join Early Testing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Website & QR Code Display */}
        <div className="pt-4 flex flex-col items-center justify-center space-y-4">
          <div className="p-4 rounded-3xl bg-white border border-[#E5E5E0] shadow-xs inline-block">
            {/* SVG Vector QR Code representation for mikana.lui.co.zw */}
            <div className="w-40 h-40 bg-[#FAF9F6] p-3 rounded-2xl border border-[#EBEBE6] flex flex-col items-center justify-center">
              <QrCode className="w-32 h-32 text-[#1C1C1E]" strokeWidth={1.5} />
            </div>
            <div className="mt-2.5 font-mono text-xs font-semibold text-[#1C1C1E]">
              mikana.lui.co.zw
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#71717A] max-w-md mx-auto">
            Met us at the <strong className="text-[#1C1C1E] font-semibold">POTRAZ Innovation Expo</strong>? We’d love your feedback.
          </p>
        </div>

        {/* Contact Numbers */}
        <div className="pt-4 pb-2 border-t border-[#EBEBE6] max-w-xl mx-auto">
          <div className="text-xs font-semibold text-[#8A8880] uppercase tracking-wider mb-3">
            Contact & WhatsApp Support
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#1C1C1E]">
            <a
              href="https://wa.me/263776432893"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E5E5E0] hover:border-[#16A34A] hover:text-[#16A34A] transition-all shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="font-semibold tabular-nums">0776432893</span>
              <span className="text-[11px] text-[#8A8880] group-hover:text-[#16A34A] font-normal">(WhatsApp / Call)</span>
            </a>
            <a
              href="https://wa.me/263780331740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E5E5E0] hover:border-[#16A34A] hover:text-[#16A34A] transition-all shadow-2xs group"
            >
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span className="font-semibold tabular-nums">0780331740</span>
              <span className="text-[11px] text-[#8A8880] group-hover:text-[#16A34A] font-normal">(WhatsApp / Call)</span>
            </a>
          </div>
        </div>

        {/* Brand Copyright & Logotype */}
        <div className="pt-6 border-t border-[#EBEBE6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8880]">
          <div className="flex items-center gap-2.5">
            <img src="/logotype.svg" alt="Mikana" className="h-5 w-auto object-contain opacity-75" />
            <span>• Harare, Zimbabwe</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Mikana. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
