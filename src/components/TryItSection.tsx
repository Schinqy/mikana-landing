'use client';

import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Smartphone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { GooglePlayButton } from './GooglePlayButton';
import { PlayStoreQrCard } from './PlayStoreQrCard';

export function TryItSection() {
  const [showConcierge, setShowConcierge] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    offering: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          offering: formData.offering,
        }),
      });
    } catch (e) {
      // Fallback
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="try-it" className="py-14 sm:py-20 bg-[#FAFAF8] border-t border-[#EBEBE6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Google Play Store • Android</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            Get Mikana on Android Today
          </h2>
          <p className="text-base sm:text-[17px] text-[#66645D] leading-relaxed">
            Mikana is officially live. Install the app, link your WhatsApp in 60 seconds, and start catching every buyer request that matches what you sell.
          </p>
        </div>

        {/* Two-Column Download Experience */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Direct Download & 3-Step Setup */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl bg-white border border-[#E5E5E0] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-7 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">
                  Install & Start Monitoring
                </h3>
                <p className="text-sm text-[#71717A] mt-1">
                  Available now for all Android devices. No subscription required to get started.
                </p>
              </div>

              {/* Big CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <GooglePlayButton variant="hero" className="justify-center" />
              </div>

              {/* 3 Steps */}
              <div className="pt-4 border-t border-[#F0F0EB] space-y-3">
                <div className="text-xs font-bold text-[#1C1C1E] uppercase tracking-wider">
                  Quick 60-Second Setup
                </div>
                <div className="grid gap-2.5 text-xs text-[#55534E]">
                  <div className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E56A0]/10 text-[#1E56A0] font-bold shrink-0">
                      1
                    </span>
                    <span>Download and install Mikana from Google Play.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E56A0]/10 text-[#1E56A0] font-bold shrink-0">
                      2
                    </span>
                    <span>Link your WhatsApp account via secure multi-device pairing.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#1E56A0]/10 text-[#1E56A0] font-bold shrink-0">
                      3
                    </span>
                    <span>Enter what you sell and select which trade groups to monitor.</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#71717A]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span>Google Play Protect Verified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1E56A0]" />
                  <span>Signal-Protocol Encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scan with Phone QR Card (for desktop users) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <PlayStoreQrCard />
            </div>
          </div>

        </div>

        {/* Concierge & Team Onboarding Callout */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <button
            onClick={() => setShowConcierge(!showConcierge)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#55534E] hover:text-[#1C1C1E] transition-colors py-2 px-4 rounded-full hover:bg-black/5"
          >
            <span>Need personalized setup or multi-group enterprise onboarding?</span>
            {showConcierge ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showConcierge && (
            <div className="mt-4 rounded-3xl bg-white border border-[#E5E5E0] shadow-sm p-6 sm:p-8 text-left transition-all">
              {submitted ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#E8F8EA] border border-[#D1F2D9] flex items-center justify-center text-[#16A34A] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C1C1E]">
                    Request Received
                  </h3>
                  <p className="text-xs text-[#66645D] max-w-sm mx-auto leading-relaxed">
                    Our team will contact <strong className="text-[#1C1C1E]">{formData.email}</strong> to assist with onboarding and custom group configuration.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="text-sm font-bold text-[#1C1C1E] mb-1">
                    Request Concierge Onboarding
                  </div>
                  <p className="text-xs text-[#71717A] mb-3">
                    If you manage multiple sales staff or large wholesale groups, let us help configure Mikana for your team.
                  </p>
                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1C1E] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tinashe Moyo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1C1E] mb-1">
                      Email or WhatsApp Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. tinashe@company.co.zw or +263 77..."
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1C1E] mb-1">
                      Business or Products Offered
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Auto parts wholesaler, borehole drilling..."
                      value={formData.offering}
                      onChange={(e) => setFormData({ ...formData, offering: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-xs font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 rounded-full bg-[#1C1C1E] hover:bg-black text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                  >
                    <span>{loading ? 'Submitting...' : 'Request Setup Assistance'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
