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
      {/* Outer Phone Shell - Sleek Samsung Galaxy Style Bezel */}
      <div className="relative w-[240px] xs:w-[260px] sm:w-[280px] lg:w-[260px] xl:w-[295px] max-w-[85vw] aspect-[9/19.5] rounded-[36px] sm:rounded-[42px] bg-[#16181D] p-[5px] sm:p-[6px] shadow-[0_25px_60px_-15px_rgba(11,37,69,0.22),0_0_0_1px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Hardware side buttons (Right edge: Power + Volume) */}
        <div className="absolute -right-[3px] top-24 sm:top-28 w-[3px] h-10 sm:h-12 bg-[#2D3139] rounded-r-xs" />
        <div className="absolute -right-[3px] top-38 sm:top-44 w-[3px] h-16 sm:h-20 bg-[#2D3139] rounded-r-xs" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full rounded-[34px] sm:rounded-[38px] overflow-hidden bg-black flex flex-col">
          
          {/* Real App Screenshot - native status bar from screenshot displays cleanly without artificial overlay clash */}
          <div className="relative w-full h-full overflow-hidden bg-[#FFFFFF]">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top select-none"
              loading="lazy"
            />
          </div>

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
