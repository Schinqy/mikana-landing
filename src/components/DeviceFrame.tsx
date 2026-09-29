'use client';

import React, { useState } from 'react';
import { Radio, MessageSquare, Users, ShieldCheck, Check } from 'lucide-react';

interface DeviceFrameProps {
  activeScreen?: string;
  onScreenChange?: (screen: string) => void;
  className?: string;
}

export const SCREEN_PRESETS = [
  {
    id: 'radar',
    title: 'Lead Stream',
    badge: '95% Match',
    description: 'Buyer requests intercepted from trade groups with match scoring',
    src: '/screens/screen_radar_feed.png',
  },
  {
    id: 'quote',
    title: 'Quote Composer',
    badge: 'WhatsApp DM',
    description: 'Custom quote drafted from your catalog ready for 1-tap dispatch',
    src: '/screens/screen_quote.jpg',
  },
  {
    id: 'groups',
    title: 'Monitored Groups',
    badge: '96 Groups',
    description: 'Select exactly which trade groups and channels Mikana monitors',
    src: '/screens/screen_groups.png',
  },
  {
    id: 'paywall',
    title: 'Pro Trader',
    badge: 'Autopilot',
    description: 'Scale to 15+ groups with 24/7 autonomous replies and pipeline sync',
    src: '/screens/screen_paywall.png',
  },
];

export function DeviceFrame({
  activeScreen: externalActive,
  onScreenChange,
  className = '',
}: DeviceFrameProps) {
  const [internalActive, setInternalActive] = useState('radar');
  const activeId = externalActive || internalActive;

  const currentPreset =
    SCREEN_PRESETS.find((p) => p.id === activeId) || SCREEN_PRESETS[0];

  const handleSelect = (id: string) => {
    if (onScreenChange) {
      onScreenChange(id);
    } else {
      setInternalActive(id);
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Clean Light-Mode Segmented Controls */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl mb-8 shadow-xs max-w-xl">
        {SCREEN_PRESETS.map((preset) => {
          const isSelected = preset.id === activeId;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelect(preset.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-150 ${
                isSelected
                  ? 'bg-[#0B2545] text-white shadow-xs'
                  : 'text-[#486581] hover:text-[#0B2545] hover:bg-[#FFFFFF]'
              }`}
            >
              <span>{preset.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                  isSelected
                    ? 'bg-[#1E56A0] text-white'
                    : 'bg-[#E2E8F0] text-[#486581]'
                }`}
              >
                {preset.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Device Presentation Wrapper */}
      <div className="relative">
        {/* Soft, clean ambient shadow under phone */}
        <div className="absolute -inset-4 bg-[#0B2545]/5 rounded-[60px] blur-2xl pointer-events-none" />

        {/* ── Vector Phone Device Bezel (Pixel 9 Pro Frame) ── */}
        <div
          className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-[#2A2D34] via-[#16181D] to-[#252830] shadow-[0_20px_60px_-15px_rgba(11,37,69,0.3),0_0_0_1px_rgba(255,255,255,0.15)]"
          style={{
            width: '320px',
            maxWidth: '88vw',
          }}
        >
          {/* Side hardware buttons */}
          <div className="absolute -left-[3px] top-[110px] w-[3px] h-[34px] bg-[#3B3E45] rounded-l-xs" />
          <div className="absolute -left-[3px] top-[152px] w-[3px] h-[52px] bg-[#3B3E45] rounded-l-xs" />
          <div className="absolute -right-[3px] top-[140px] w-[3px] h-[46px] bg-[#3B3E45] rounded-r-xs" />

          {/* Inner Display Frame */}
          <div className="relative rounded-[42px] overflow-hidden bg-black p-[2px]">
            {/* Viewport */}
            <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[40px] bg-white">
              
              {/* Top Dynamic Island / Punch Hole */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center">
                <div className="w-[80px] h-[20px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A1220] border border-blue-900/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                </div>
              </div>

              {/* Speaker Slit */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 z-40 w-12 h-[2.5px] bg-zinc-800 rounded-full opacity-60" />

              {/* Real Screenshot with smooth render */}
              <img
                key={currentPreset.src}
                src={currentPreset.src}
                alt={currentPreset.title}
                className="w-full h-full object-cover select-none"
              />

              {/* Natural glass glare reflection */}
              <div
                className="absolute inset-0 pointer-events-none z-30 opacity-20"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.02) 30%, transparent 50%)',
                }}
              />

              {/* Bottom Android home bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40 w-28 h-1 bg-zinc-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Micro-caption below bezel */}
        <div className="mt-4 text-center">
          <p className="text-xs font-bold text-[#0B2545] flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {currentPreset.title}
          </p>
          <p className="text-[11px] text-[#486581] mt-0.5 max-w-xs mx-auto">
            {currentPreset.description}
          </p>
        </div>
      </div>
    </div>
  );
}
