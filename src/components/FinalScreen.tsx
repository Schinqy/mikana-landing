'use client';

import React from 'react';
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export function FinalScreen() {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FAFAF8] text-[#1C1C1E]">
      {/* Pre-Footer CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1C1E] max-w-2xl mx-auto leading-tight">
          Your next customer might already be asking for you.
        </h2>
        <p className="text-lg sm:text-xl font-medium text-[#1E56A0] max-w-xl mx-auto">
          Mikana helps you find them in your WhatsApp groups and chats.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href="#demo"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-medium text-sm text-[#1C1C1E] bg-white hover:bg-[#F4F4F0] border border-[#E5E5E0] transition-colors shadow-2xs"
          >
            Try Mikana
          </a>
          <a
            href="#try-it"
            className="w-full sm:w-auto px-7 py-3 rounded-full font-medium text-sm text-white bg-[#1C1C1E] hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-2xs"
          >
            <span>Join Early Testing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Standard Footer */}
      <div className="border-t border-[#EBEBE6] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            {/* Column 1: Brand & Bio */}
            <div className="space-y-4 md:col-span-1">
              <a href="#" className="inline-block">
                <img src="/logotype.svg" alt="Mikana" className="h-7 w-auto object-contain" />
              </a>
              <p className="text-xs text-[#71717A] leading-relaxed">
                The AI sales assistant for WhatsApp business groups and chats in Zimbabwe. Never miss an inquiry or potential buyer.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#16A34A] font-medium pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Private & Secure On-Device</span>
              </div>
            </div>

            {/* Column 2: Product Links */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A8880]">Product</h3>
              <ul className="space-y-2.5 text-xs font-medium text-[#4B5563]">
                <li><a href="#how-it-works" className="hover:text-[#1C1C1E] transition-colors">How It Works</a></li>
                <li><a href="#demo" className="hover:text-[#1C1C1E] transition-colors">Live Opportunity Radar</a></li>
                <li><a href="#autopilot" className="hover:text-[#1C1C1E] transition-colors">AutoPilot Mode</a></li>
                <li><a href="#examples" className="hover:text-[#1C1C1E] transition-colors">Real Zimbabwe Examples</a></li>
                <li><a href="#try-it" className="hover:text-[#1C1C1E] transition-colors">Join Early Testing</a></li>
              </ul>
            </div>

            {/* Column 3: Event & Company */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A8880]">Expo & Support</h3>
              <ul className="space-y-2.5 text-xs font-medium text-[#4B5563]">
                <li><a href="#faq" className="hover:text-[#1C1C1E] transition-colors">Frequently Asked Questions</a></li>
                <li><span className="text-[#1C1C1E] font-semibold">POTRAZ Innovation Expo 2026</span></li>
                <li><span>Harare, Zimbabwe</span></li>
                <li><a href="https://mikana.lui.co.zw" className="text-[#1E56A0] hover:underline">mikana.lui.co.zw</a></li>
              </ul>
            </div>

            {/* Column 4: Contact & Phone Numbers */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A8880]">Contact Us</h3>
              <p className="text-xs text-[#71717A]">
                Reach out directly via WhatsApp or phone call:
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/263776432893"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#16A34A] hover:bg-white text-xs font-medium text-[#1C1C1E] transition-all group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span className="font-semibold tabular-nums">0776432893</span>
                  <span className="text-[10px] text-[#8A8880] group-hover:text-[#16A34A] ml-auto">WhatsApp / Call</span>
                </a>
                <a
                  href="https://wa.me/263780331740"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] hover:border-[#16A34A] hover:bg-white text-xs font-medium text-[#1C1C1E] transition-all group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span className="font-semibold tabular-nums">0780331740</span>
                  <span className="text-[10px] text-[#8A8880] group-hover:text-[#16A34A] ml-auto">WhatsApp / Call</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="mt-12 pt-6 border-t border-[#EBEBE6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8880]">
            <div>
              © {new Date().getFullYear()} Mikana. Built for Zimbabwe businesses. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>Harare, Zimbabwe</span>
              <span>•</span>
              <a href="#try-it" className="hover:text-[#1C1C1E] transition-colors">Early Access</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
