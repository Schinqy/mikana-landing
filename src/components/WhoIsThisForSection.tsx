'use client';

import React from 'react';
import { Check } from 'lucide-react';

export function WhoIsThisForSection() {
  const sellItems = [
    'Spare parts',
    'Building materials',
    'Agricultural products',
    'Electronics',
    'Clothing',
    'Food & Commodities',
  ];

  const serviceItems = [
    'Plumbing',
    'Electrical work',
    'Construction',
    'Repairs',
    'Transport & Logistics',
    'Professional services',
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Question Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            Who It's For
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Do customers find you through WhatsApp?
          </h2>
          <p className="text-base text-[#486581]">
            If your revenue depends on replying to inquiries across trade groups, Mikana is built for you.
          </p>
        </div>

        {/* 2-Column Split: Sell vs Provide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* If you sell */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
                PHYSICAL GOODS
              </span>
              <h3 className="text-xl font-bold text-[#0B2545] mt-1">
                If you sell:
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {sellItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0B2545]"
                >
                  <Check className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Or provide */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
                SERVICES & TRADES
              </span>
              <h3 className="text-xl font-bold text-[#0B2545] mt-1">
                Or provide:
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {serviceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0B2545]"
                >
                  <Check className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Closing Punchline */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-lg sm:text-xl font-bold text-[#0B2545]">
            Mikana can help you find the people already looking for what you offer.
          </p>
        </div>

      </div>
    </section>
  );
}
