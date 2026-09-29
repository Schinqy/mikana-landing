'use client';

import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function FinalScreen() {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FAFAF8] text-[#1C1C1E]">
      {/* Pre-Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center space-y-5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1E] leading-tight">
          Your next customer might already be asking for you.
        </h2>
        <p className="text-base sm:text-lg font-medium text-[#1E56A0]">
          Mikana helps you find them in your WhatsApp groups and chats.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="#demo"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full font-medium text-sm text-[#1C1C1E] bg-white hover:bg-[#F4F4F0] border border-[#E5E5E0] transition-colors shadow-2xs"
          >
            Try Mikana
          </a>
          <a
            href="#try-it"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full font-medium text-sm text-white bg-[#1C1C1E] hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <span>Join Early Testing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Real, Clean Footer */}
      <div className="border-t border-[#EBEBE6] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#F0F0EB]">
            
            {/* Brand */}
            <div className="space-y-1.5 max-w-sm">
              <img src="/logotype.svg" alt="Mikana" className="h-7 w-auto object-contain" />
              <p className="text-xs text-[#71717A]">
                AI sales assistant for WhatsApp business groups in Zimbabwe.
              </p>
            </div>

            {/* Direct Contacts */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
              <span className="text-xs font-semibold text-[#8A8880] uppercase tracking-wider">
                Direct Contacts:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://wa.me/263776432893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#16A34A] hover:bg-white text-xs font-medium text-[#1C1C1E] transition-all group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span className="font-semibold tabular-nums">0776432893</span>
                  <span className="text-[11px] text-[#71717A] group-hover:text-[#16A34A]">(WhatsApp / Call)</span>
                </a>
                <a
                  href="https://wa.me/263780331740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#16A34A] hover:bg-white text-xs font-medium text-[#1C1C1E] transition-all group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span className="font-semibold tabular-nums">0780331740</span>
                  <span className="text-[11px] text-[#71717A] group-hover:text-[#16A34A]">(WhatsApp / Call)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom row: Links & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <div className="flex flex-wrap items-center gap-6">
              <a href="#how-it-works" className="hover:text-[#1C1C1E] transition-colors">How It Works</a>
              <a href="#demo" className="hover:text-[#1C1C1E] transition-colors">Live Flow</a>
              <a href="#examples" className="hover:text-[#1C1C1E] transition-colors">Examples</a>
              <a href="#try-it" className="hover:text-[#1C1C1E] transition-colors">Try Mikana</a>
              <a href="#faq" className="hover:text-[#1C1C1E] transition-colors">FAQ</a>
            </div>
            <div>
              © {new Date().getFullYear()} Mikana • Harare, Zimbabwe
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
