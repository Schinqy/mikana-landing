'use client';

import React, { useState } from 'react';
import { Smartphone, Download, Play, Apple, Key, ExternalLink, Check, Copy } from 'lucide-react';

interface ClosedTestingSectionProps {
  initialTestingUrl?: string;
}

export function ClosedTestingSection({ initialTestingUrl = '#' }: ClosedTestingSectionProps) {
  const [testingUrl, setTestingUrl] = useState(initialTestingUrl);
  const [copied, setCopied] = useState(false);
  const [inviteCode, setInviteCode] = useState('');
  const [codeVerified, setCodeVerified] = useState(false);

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteCode.trim().length >= 4) {
      setCodeVerified(true);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href + '#testing');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="testing" className="relative py-20 border-t border-zinc-800 bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Key className="w-3.5 h-3.5 text-purple-400" />
            <span>Closed Testing & APK Builds</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Early Access & TestFlight Hub
          </h2>
          <p className="text-zinc-400 text-sm">
            Access internal builds, developer previews, and Google Play Console closed testing tracks.
          </p>
        </div>

        {/* 3 Channels Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Google Play Console Closed Beta Track */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <h3 className="text-base font-bold text-white">Google Play Closed Beta</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Join our official Google Play 20-tester closed internal testing track for continuous auto-updates.
              </p>
            </div>

            <div className="pt-2">
              {testingUrl && testingUrl !== '#' ? (
                <a
                  href={testingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open Google Play Invite</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href="#waitlist"
                  className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request Tester Link (Waitlist)</span>
                </a>
              )}
              <span className="block text-center text-[10px] text-zinc-500 mt-2">
                Available for Android 10+ devices
              </span>
            </div>
          </div>

          {/* Card 2: Direct APK Download for Expo Testing */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Direct APK Sideload</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                  Expo Ready
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Download the standalone Expo / Android development build directly to test live without waiting for Play Store review.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#expo"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-600/20"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Test Live at Expo Booth</span>
              </a>
              <span className="block text-center text-[10px] text-zinc-500 mt-2">
                Pixel 9 Pro / Universal ARM64
              </span>
            </div>
          </div>

          {/* Card 3: iOS TestFlight */}
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                <Apple className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Apple TestFlight</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-semibold">
                  Q4 2026
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                iOS builds are undergoing Apple Sandbox review. Enter your Apple ID email on the waitlist to receive the first wave invitation.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#waitlist"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Notify When iOS Drops</span>
              </a>
              <span className="block text-center text-[10px] text-zinc-500 mt-2">
                Requires iOS 17.0+
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
