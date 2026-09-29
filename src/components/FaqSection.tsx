'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FaqSection() {
  const faqs = [
    {
      q: 'What is Mikana?',
      a: 'Mikana helps businesses find customer requests in WhatsApp groups that match what they sell or the services they provide.',
    },
    {
      q: 'Does Mikana replace WhatsApp?',
      a: 'No. Customers continue using WhatsApp. Mikana helps the business find relevant opportunities within the conversations where those customers are already asking.',
    },
    {
      q: 'Does Mikana monitor every WhatsApp group?',
      a: 'No. The business chooses the groups it wants Mikana to monitor.',
    },
    {
      q: 'How does Mikana know what I sell?',
      a: 'You provide information about your products, services and capabilities so Mikana knows what kinds of opportunities are relevant to you.',
    },
    {
      q: 'What happens when Mikana finds an opportunity?',
      a: 'Mikana identifies the request, provides the relevant opportunity details and sends an immediate notification so you can act.',
    },
    {
      q: 'Can Mikana respond for me?',
      a: 'Yes. AutoPilot can respond when enabled, using the business information and instructions you’ve provided.',
    },
    {
      q: 'What if I am offline?',
      a: 'You can still receive opportunity notifications when connectivity is available, and AutoPilot can continue responding when you’ve enabled it.',
    },
    {
      q: 'Is Mikana only for large businesses?',
      a: 'No. Mikana is designed for merchants, freelancers, contractors, service providers and small businesses.',
    },
    {
      q: 'Is Mikana available now?',
      a: 'Mikana is currently being developed and tested. Visitors can join the early testing programme.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#486581]">
            Clear answers about how Mikana works for your trade business.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-[#E2E8F0] shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B2545] hover:text-[#1E56A0]"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1E56A0] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#829AB1] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#486581] leading-relaxed border-t border-[#F1F5F9]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
