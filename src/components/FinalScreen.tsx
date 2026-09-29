'use client';

import React from 'react';
import { ArrowRight, QrCode } from 'lucide-react';

export function FinalScreen() {
  return (
    <footer className="py-20 sm:py-28 border-t border-[#E2E8F0] bg-[#FFFFFF] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Large Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B2545] tracking-tight leading-tight">
            Your next customer might already be asking for you.
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-[#1E56A0]">
            Mikana helps you find them.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-[#0B2545] bg-[#F1F5F9] hover:bg-[#E2E8F0] border border-[#CBD5E1] transition-colors"
          >
            Try Mikana
          </a>
          <a
            href="#try-it"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0B2545] hover:bg-[#133B5C] shadow-sm transition-colors flex items-center justify-center gap-2"
          >
            <span>Join Early Testing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Website & QR Code Display */}
        <div className="pt-8 flex flex-col items-center justify-center space-y-4">
          <div className="p-4 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs inline-block">
            {/* SVG Vector QR Code representation for mikana.lui.co.zw */}
            <div className="w-40 h-40 bg-white p-3 rounded-2xl border border-[#CBD5E1] flex flex-col items-center justify-center shadow-xs">
              <QrCode className="w-32 h-32 text-[#0B2545]" strokeWidth={1.5} />
            </div>
            <div className="mt-2 font-mono text-xs font-bold text-[#0B2545]">
              mikana.lui.co.zw
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#486581] max-w-md mx-auto pt-2">
            Met us at the <strong>POTRAZ Innovation Expo</strong>? We’d love your feedback.
          </p>
        </div>

        {/* Brand Copyright */}
        <div className="pt-8 border-t border-[#E2E8F0] text-xs text-[#829AB1]">
          <span>MIKANA • Zimbabwe • All rights reserved</span>
        </div>

      </div>
    </footer>
  );
}
