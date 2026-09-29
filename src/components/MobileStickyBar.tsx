'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] shadow-lg">
      <div className="flex items-center gap-2">
        <a
          href="#try-it"
          className="flex-1 py-3 px-4 rounded-xl bg-[#0B2545] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Try Mikana</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="#demo"
          className="py-3 px-4 rounded-xl bg-[#F1F5F9] border border-[#CBD5E1] text-[#0B2545] font-bold text-xs text-center"
        >
          See Demo
        </a>
      </div>
    </div>
  );
}
