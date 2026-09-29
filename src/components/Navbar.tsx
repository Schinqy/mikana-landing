'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAFAF8] py-3 sm:py-3.5 sticky top-0 z-50 backdrop-blur-md bg-[#FAFAF8]/95 border-b border-[#F0F0EB]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logotype */}
          <Link href="/" className="flex items-center">
            <img
              src="/logotype.svg"
              alt="Mikana"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Clean Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-[13.5px] font-medium text-[#66645D]">
            <a href="#how-it-works" className="hover:text-[#1C1C1E] transition-colors">
              How It Works
            </a>
            <a href="#examples" className="hover:text-[#1C1C1E] transition-colors">
              Real Examples
            </a>
            <a href="#demo" className="hover:text-[#1C1C1E] transition-colors">
              Live Flow
            </a>
            <a href="#faq" className="hover:text-[#1C1C1E] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Action Button - Moonjar style dark pill */}
          <div className="hidden sm:flex items-center">
            <a
              href="#try-it"
              className="px-5 py-2.5 rounded-full text-[13px] font-medium text-white bg-[#1C1C1E] hover:bg-black transition-all shadow-xs"
            >
              Try Mikana
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1C1E]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-5 space-y-3 text-sm font-medium">
          <a
            href="#overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0B2545] py-1"
          >
            Overview
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0B2545] py-1"
          >
            How It Works
          </a>
          <a
            href="#examples"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0B2545] py-1"
          >
            Examples
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#0B2545] py-1"
          >
            FAQ
          </a>
          <div className="pt-2">
            <a
              href="#try-it"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-[#0B2545] text-white font-semibold"
            >
              Try Mikana
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
