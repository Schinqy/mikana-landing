'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function TryItSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    offering: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
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
    <section id="try-it" className="py-20 sm:py-28 bg-[#FAFAF8] border-t border-[#EBEBE6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1E56A0]">
            [ EARLY ACCESS ]
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#1C1C1E] tracking-tight">
            Ready to never miss your next customer?
          </h2>
          <p className="text-base sm:text-[17px] text-[#66645D] leading-relaxed">
            Tell us what products or services you offer. We will notify your WhatsApp the moment incoming trade requests match your catalog.
          </p>
        </div>

        {/* Clean Studio Access Card */}
        <div className="max-w-xl mx-auto rounded-3xl bg-white border border-[#E5E5E0] shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-7 sm:p-10">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E8F8EA] border border-[#D1F2D9] flex items-center justify-center text-[#16A34A] mx-auto shadow-2xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1C1C1E]">
                You’re on the priority list.
              </h3>
              <p className="text-sm text-[#66645D] max-w-sm mx-auto leading-relaxed">
                We will reach out directly on WhatsApp ({formData.phone || 'your number'}) with your early access invitation and setup guide.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-[#1C1C1E] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tinashe Moyo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-sm font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#1C1C1E] mb-1.5">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+263 77 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-sm font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-[#1C1C1E] mb-1.5">
                  What products or services do you sell?
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Toyota Hilux parts, borehole drilling, cement wholesale..."
                  value={formData.offering}
                  onChange={(e) => setFormData({ ...formData, offering: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-[#E5E5E0] text-sm font-medium text-[#1C1C1E] placeholder-[#A1A19A] focus:outline-none focus:border-[#1E56A0] focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-[#1C1C1E] hover:bg-black text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-xs disabled:opacity-50"
                >
                  <span>{loading ? 'Registering...' : 'Get Early Access'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust Features */}
              <div className="pt-4 border-t border-[#F0F0EB] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-[#66645D]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  Direct WhatsApp alerts
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  Zero spam, trade matches only
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
