'use client';

import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';
import { PLAY_STORE_URL, GooglePlayIcon } from './GooglePlayButton';

export function PlayStoreQrCard() {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    PLAY_STORE_URL
  )}&format=svg&color=1C1C1E&bgcolor=FFFFFF`;

  return (
    <div className="relative rounded-3xl bg-white border border-[#E5E5E0] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 sm:p-7 text-center">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold mb-4">
        <Smartphone className="w-3.5 h-3.5" />
        <span>Scan to Install</span>
      </div>

      <div className="relative w-48 h-48 mx-auto bg-white rounded-2xl border border-[#EBEBE6] p-3 shadow-inner flex items-center justify-center">
        <img
          src={qrImageUrl}
          alt="Scan QR code to open Mikana on Google Play"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-[#1C1C1E]">
          <GooglePlayIcon className="w-3.5 h-3.5" />
          <span>Google Play Store</span>
        </div>
        <p className="text-[12px] text-[#71717A] max-w-[220px] mx-auto">
          Point your phone camera to download directly on your Android device
        </p>
      </div>
    </div>
  );
}
