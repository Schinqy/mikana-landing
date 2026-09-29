'use client';

import React from 'react';
import { ArrowRight, Wrench, Package, Truck, Zap, ShoppingBag } from 'lucide-react';

export function RealExamplesSection() {
  const examples = [
    {
      category: 'SPARE PARTS',
      quote: '“Anyone with a Toyota Hilux 2KD injector?”',
      outcome: 'Mikana finds the opportunity.',
    },
    {
      category: 'PLUMBING',
      quote: '“Need a plumber in Avondale tomorrow.”',
      outcome: 'Mikana finds the opportunity.',
    },
    {
      category: 'BUILDING MATERIALS',
      quote: '“Where can I get 30 bags of cement?”',
      outcome: 'Mikana finds the opportunity.',
    },
    {
      category: 'AGRICULTURAL PRODUCTS',
      quote: '“Looking for 100kg of beans.”',
      outcome: 'Mikana finds the opportunity.',
    },
    {
      category: 'ELECTRICAL WORK',
      quote: '“Anyone who can install a new DB board?”',
      outcome: 'Mikana finds the opportunity.',
    },
  ];

  return (
    <section id="examples" className="py-12 sm:py-16 border-t border-[#E2E8F0] bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            Real Examples
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            What could Mikana find for your business?
          </h2>
          <p className="text-base text-[#486581]">
            These requests appear daily across Zimbabwean WhatsApp groups.
          </p>
        </div>

        {/* Swipeable / Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {examples.map((item) => (
            <div
              key={item.category}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#1E56A0] transition-colors"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#1E56A0] bg-[#EEF4FA] px-2.5 py-1 rounded-md inline-block">
                  {item.category}
                </span>

                <div className="p-3 rounded-xl bg-white border border-[#E2E8F0] text-xs font-bold text-[#0B2545] leading-snug">
                  {item.quote}
                </div>
              </div>

              <div className="pt-2 border-t border-[#E2E8F0]">
                <p className="text-xs font-bold text-[#059669]">
                  {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
