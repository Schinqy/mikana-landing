'use client';

import React from 'react';
import { GooglePlayIcon, PLAY_STORE_URL } from './GooglePlayButton';

export function MobileStickyBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-[#E5E5E0] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-4 rounded-xl bg-[#1C1C1E] text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all"
        >
          <GooglePlayIcon className="w-4 h-4 shrink-0" />
          <span>Get on Google Play</span>
        </a>
        <a
          href="#demo"
          className="py-3 px-4 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-[#1C1C1E] font-semibold text-xs text-center active:scale-[0.98] transition-all"
        >
          See Demo
        </a>
      </div>
    </div>
  );
}
