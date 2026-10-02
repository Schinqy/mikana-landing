'use client';

import React from 'react';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.mikana.mikana';

export function GooglePlayIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.609 1.814L13.793 12 3.61 22.186a2.22 2.22 0 0 1-.22-.977V2.791c0-.361.08-.7.22-.977z"
        fill="#00C1A6"
      />
      <path
        d="M17.202 8.591L13.793 12l3.409 3.409 3.864-2.227c1.026-.591 1.026-1.554 0-2.146L17.202 8.59z"
        fill="#FFD400"
      />
      <path
        d="M13.793 12L3.609 1.814A2.083 2.083 0 0 1 4.773 1.5c.616 0 1.258.204 1.84.54l10.589 6.104L13.793 12z"
        fill="#00D7FF"
      />
      <path
        d="M13.793 12l3.409 3.855-10.59 6.105c-.581.336-1.223.54-1.839.54a2.083 2.083 0 0 1-1.164-.314L13.793 12z"
        fill="#FF3A44"
      />
    </svg>
  );
}

interface GooglePlayButtonProps {
  variant?: 'hero' | 'pill' | 'nav' | 'outline';
  className?: string;
}

export function GooglePlayButton({
  variant = 'hero',
  className = '',
}: GooglePlayButtonProps) {
  if (variant === 'nav') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium text-white bg-[#1C1C1E] hover:bg-black active:scale-[0.97] transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_6px_rgba(28,28,30,0.15)] ${className}`}
      >
        <GooglePlayIcon className="w-4 h-4 shrink-0" />
        <span>Get on Google Play</span>
      </a>
    );
  }

  if (variant === 'pill') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-[#1C1C1E] hover:bg-black active:scale-[0.98] transition-all shadow-sm ${className}`}
      >
        <GooglePlayIcon className="w-5 h-5 shrink-0" />
        <span>Get on Google Play</span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[14px] font-semibold text-[#1C1C1E] bg-white hover:bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#D0D0CA] active:scale-[0.98] transition-all shadow-2xs ${className}`}
      >
        <GooglePlayIcon className="w-5 h-5 shrink-0" />
        <span>View on Google Play</span>
      </a>
    );
  }

  // Default: 'hero'
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-white bg-[#1C1C1E] hover:bg-black active:scale-[0.98] transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_16px_rgba(28,28,30,0.16)] ${className}`}
    >
      <GooglePlayIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:scale-105" />
      <div className="flex flex-col text-left">
        <span className="text-[10px] tracking-wider text-zinc-400 font-semibold uppercase leading-none">
          GET IT ON
        </span>
        <span className="text-[15px] sm:text-[16px] font-bold text-white leading-tight mt-0.5">
          Google Play
        </span>
      </div>
    </a>
  );
}
