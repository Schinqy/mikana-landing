'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function FinalScreen() {
  return (
    <footer className="border-t border-[#E5E5E0] bg-[#FAFAF8] text-[#1C1C1E]">
      {/* Pre-Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center space-y-4">
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
                AI sales assistant for WhatsApp business groups.
              </p>
            </div>

            {/* Contact Details (Simple with Phone & Email, No Address) */}
            <div className="space-y-2 text-xs text-[#66645D]">
              <div className="font-bold text-[#1C1C1E] text-xs tracking-wider uppercase">
                CONTACT DETAILS
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Phone Numbers */}
                <div className="flex items-start gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1E56A0] mt-0.5 shrink-0" />
                  <div className="flex flex-col space-y-0.5">
                    <a href="tel:+263776432893" className="hover:text-[#1C1C1E] font-medium transition-colors tabular-nums">
                      +263 776 432 893
                    </a>
                    <a href="tel:+263780331740" className="hover:text-[#1C1C1E] font-medium transition-colors tabular-nums">
                      +263 780 331 740
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1E56A0] mt-0.5 shrink-0" />
                  <div className="flex flex-col space-y-0.5">
                    <a href="mailto:info@lui.co.zw" className="hover:text-[#1C1C1E] font-medium transition-colors">
                      info@lui.co.zw
                    </a>
                    <a href="mailto:luitechzw@gmail.com" className="hover:text-[#1C1C1E] font-medium transition-colors">
                      luitechzw@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom row: Links & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#how-it-works" className="hover:text-[#1C1C1E] transition-colors">How It Works</a>
              <a href="#demo" className="hover:text-[#1C1C1E] transition-colors">Live Flow</a>
              <a href="#examples" className="hover:text-[#1C1C1E] transition-colors">Examples</a>
              <a href="#try-it" className="hover:text-[#1C1C1E] transition-colors">Try Mikana</a>
              <a href="#faq" className="hover:text-[#1C1C1E] transition-colors">FAQ</a>
              <Link href="/privacy" className="hover:text-[#1C1C1E] transition-colors font-medium">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#1C1C1E] transition-colors font-medium">Terms of Service</Link>
              <Link href="/delete-account" className="hover:text-[#DC2626] transition-colors font-medium">Delete Account</Link>
            </div>
            <div>
              © {new Date().getFullYear()} Mikana • All rights reserved
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
