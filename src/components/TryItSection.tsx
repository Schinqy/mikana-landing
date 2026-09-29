'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Send, ShieldCheck } from 'lucide-react';

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
    <section id="try-it" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1E56A0]">
            GET STARTED
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B2545] tracking-tight">
            Want to see what Mikana can find for you?
          </h2>
          <p className="text-base text-[#486581]">
            Two clear paths to experience Mikana today.
          </p>
        </div>

        {/* 2 Clear Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Path 1: TRY MIKANA (Interactive / Expo Live Build) */}
          <div className="p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#1E56A0]">
                PATH 1
              </span>
              <h3 className="text-2xl font-black text-[#0B2545]">
                TRY MIKANA
              </h3>
              <p className="text-sm text-[#486581] leading-relaxed">
                Interact with the live demonstration or test the build on a device at our <strong>POTRAZ Innovation Expo booth</strong> tomorrow.
              </p>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2 text-xs font-semibold text-[#0B2545]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-xs bg-emerald-600" />
                  <span>Hands-on test on Pixel 9 Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-xs bg-emerald-600" />
                  <span>Instant demo in live WhatsApp group</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-xs bg-emerald-600" />
                  <span>Direct Android APK test link available</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#demo"
                className="w-full py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#133B5C] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>Try Mikana</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Path 2: JOIN THE EARLY TEST (Short 3-Field Form) */}
          <div className="p-8 rounded-3xl bg-white border border-[#CBD5E1] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#059669]">
                PATH 2
              </span>
              <h3 className="text-2xl font-black text-[#0B2545]">
                JOIN THE EARLY TEST
              </h3>
              <p className="text-sm text-[#486581]">
                Participate in our closed testing programme and get early access.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#059669] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0B2545]">
                    You’re in. We’ll be in touch.
                  </h4>
                  <p className="text-xs text-[#486581]">
                    Check your WhatsApp for your testing invitation link.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#0B2545] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tinashe Moyo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0B2545] focus:outline-none focus:border-[#1E56A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B2545] mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+263 77 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0B2545] focus:outline-none focus:border-[#1E56A0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B2545] mb-1">
                      What do you sell or what service do you provide?
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Auto parts, plumbing, cement..."
                      value={formData.offering}
                      onChange={(e) => setFormData({ ...formData, offering: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#0B2545] focus:outline-none focus:border-[#1E56A0]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#1E56A0] hover:bg-[#16488A] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
                  >
                    <span>{loading ? 'Submitting...' : 'Join the Test'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="text-[11px] text-[#829AB1] text-center pt-2">
              No long surveys. We respect your time.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
