'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';
import { GooglePlayButton, GooglePlayIcon, PLAY_STORE_URL } from './GooglePlayButton';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-2 sm:top-3 z-50 w-full px-3.5 sm:px-6 lg:px-8 pointer-events-none">
      <header className="max-w-5xl mx-auto rounded-full pointer-events-auto backdrop-blur-xl backdrop-saturate-150 bg-white/75 sm:bg-white/85 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-200">
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
          
          {/* Official Brand Logotype */}
          <Link href="/" className="flex items-center">
            <img
              src="/logotype.svg"
              alt="Mikana"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Clean Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-[#55534E]">
            <a href="#how-it-works" className="hover:text-[#1C1C1E] transition-colors">
              How It Works
            </a>
            <a href="#examples" className="hover:text-[#1C1C1E] transition-colors">
              Examples
            </a>
            <a href="#demo" className="hover:text-[#1C1C1E] transition-colors">
              Live Flow
            </a>
            <a href="#faq" className="hover:text-[#1C1C1E] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Button - Direct Google Play link */}
          <div className="hidden sm:flex items-center">
            <GooglePlayButton variant="nav" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full hover:bg-black/5 text-[#1C1C1E] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown inside glossy container */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/[0.06] px-5 pt-3 pb-5 space-y-3 text-sm font-medium">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1C1C1E] hover:text-[#1E56A0] py-1 transition-colors"
            >
              Overview
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1C1C1E] hover:text-[#1E56A0] py-1 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#examples"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1C1C1E] hover:text-[#1E56A0] py-1 transition-colors"
            >
              Examples
            </a>
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1C1C1E] hover:text-[#1E56A0] py-1 transition-colors"
            >
              Live Flow
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1C1C1E] hover:text-[#1E56A0] py-1 transition-colors"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#1C1C1E] text-white font-medium text-xs shadow-sm hover:bg-black transition-colors"
              >
                <GooglePlayIcon className="w-3.5 h-3.5" />
                <span>Get on Google Play</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
