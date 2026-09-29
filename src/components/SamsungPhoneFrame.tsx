'use client';

import React from 'react';

interface SamsungPhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  caption?: string;
}

export function SamsungPhoneFrame({
  src,
  alt,
  className = '',
  caption,
}: SamsungPhoneFrameProps) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Outer Phone Shell - Samsung Galaxy S24 Style */}
      <div className="relative w-[260px] xs:w-[280px] sm:w-[320px] max-w-[85vw] aspect-[9/19.5] rounded-[40px] sm:rounded-[44px] bg-[#16181D] p-[6px] sm:p-[7px] shadow-[0_25px_60px_-15px_rgba(11,37,69,0.22),0_0_0_1px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Hardware side buttons (Right edge: Power + Volume) */}
        <div className="absolute -right-[3px] top-24 sm:top-28 w-[3px] h-10 sm:h-12 bg-[#2D3139] rounded-r-xs" />
        <div className="absolute -right-[3px] top-38 sm:top-44 w-[3px] h-16 sm:h-20 bg-[#2D3139] rounded-r-xs" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full rounded-[34px] sm:rounded-[38px] overflow-hidden bg-black flex flex-col">
          
          {/* Top Status Area with Samsung Centered Punch Hole Camera */}
          <div className="absolute top-0 left-0 right-0 z-30 pt-2 pb-1 px-4 sm:px-5 flex items-center justify-between pointer-events-none text-[10px] font-semibold text-white/90">
            {/* Time */}
            <span className="font-mono text-[10px] sm:text-[11px] tracking-tight">10:42</span>
            
            {/* Centered Camera Punch Hole */}
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#050608] border border-[#2B2E35] flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D1527]/90" />
            </div>

            {/* Battery & Signals */}
            <div className="flex items-center gap-1 text-[9px] sm:text-[10px]">
              <span>5G</span>
              <div className="w-3.5 sm:w-4 h-2 rounded-[2px] border border-white/80 p-[1px] flex items-center">
                <div className="w-full h-full bg-white rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Real App Screenshot */}
          <div className="relative w-full h-full overflow-hidden bg-[#FFFFFF]">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top select-none"
              loading="lazy"
            />
          </div>

          {/* Samsung Gesture Navigation Pill at Bottom */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-20 sm:w-24 h-1 bg-white/70 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Optional Caption */}
      {caption && (
        <div className="mt-3.5 text-center px-4">
          <p className="text-xs font-medium text-[#71717A] max-w-xs">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
