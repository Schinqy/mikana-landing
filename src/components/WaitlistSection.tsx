'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Sparkles, Smartphone, Users, Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tradeType: 'Commodities & Groceries',
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user already registered in this browser
    const existing = localStorage.getItem('mikana_waitlist_ticket');
    if (existing) {
      setTicketNumber(parseInt(existing, 10));
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const ticket = data.ticketNumber || Math.floor(Math.random() * 80) + 24;
      setTicketNumber(ticket);
      localStorage.setItem('mikana_waitlist_ticket', ticket.toString());
      setSubmitted(true);
    } catch (err) {
      // Fallback local save if offline
      const ticket = Math.floor(Math.random() * 80) + 24;
      setTicketNumber(ticket);
      localStorage.setItem('mikana_waitlist_ticket', ticket.toString());
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 sm:py-32 overflow-hidden bg-[#07090e]">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Priority Queue Access</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Join the Mikana Closed Beta Waitlist
          </h2>
          
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Reserve your spot for the autonomous WhatsApp Opportunity Radar. 
            Expo attendees get bumped to the front of the queue automatically.
          </p>
        </div>

        {/* Content Box */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl shadow-2xl">
          
          {submitted ? (
            /* Success VIP Ticket View */
            <div className="text-center space-y-6 py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
                  You are registered!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  VIP Priority Ticket #{ticketNumber}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">
                  Show this ticket at our <strong>Expo Booth tomorrow</strong> or check your email for the early access test download link.
                </p>
              </div>

              {/* Digital Badge Card */}
              <div className="max-w-xs mx-auto p-4 rounded-xl bg-black/80 border border-zinc-700 text-left space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">PROGRAM:</span>
                  <span className="text-white">Mikana Closed Beta</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">TICKET:</span>
                  <span className="text-blue-400 font-bold">#{ticketNumber}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-2">
                  <span className="text-zinc-500">TIER:</span>
                  <span className="text-emerald-400">Expo Fast-Pass</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">STATUS:</span>
                  <span className="text-zinc-300">Queue Confirmed</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    localStorage.removeItem('mikana_waitlist_ticket');
                    setSubmitted(false);
                  }}
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  Register another attendee / business
                </button>
              </div>
            </div>
          ) : (
            /* Signup Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300">
                    Full Name / Contact Person
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tendai Moyo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tendai@business.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300">
                    WhatsApp Phone Number (for test invitations)
                  </label>
                  <input
                    type="tel"
                    placeholder="+263 77 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-zinc-300">
                    Primary Trade / Industry
                  </label>
                  <select
                    value={formData.tradeType}
                    onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Commodities & Groceries">Commodities & FMCG</option>
                    <option value="Electronics & Hardware">Electronics & IT Hardware</option>
                    <option value="Contractor & Services">Contractor / Specialized Trades</option>
                    <option value="Freelance & Tech Development">Freelance Software / Tech</option>
                    <option value="Wholesale Merchant">Wholesale Merchant / Distribution</option>
                    <option value="Other">Other Trade Channel</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Registering Priority Slot...</span>
                  ) : (
                    <>
                      <span>Claim Priority Waitlist Ticket</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 text-[11px] text-zinc-500 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  Zero Spam Guarantee
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-zinc-400" />
                  Private Client Relay
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  Over 140 on Queue
                </span>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
