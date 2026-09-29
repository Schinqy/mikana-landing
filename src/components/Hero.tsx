'use client';

import React from 'react';
import { DeviceFrame } from './DeviceFrame';

const hl = (delay: number): React.CSSProperties => ({ ['--d' as string]: `${delay}s` });

const noise = [
  { who: 'Chipo', time: '13:41', text: 'Good morning everyone 🙏 blessed day' },
  { who: 'Farai', time: '13:48', text: 'Forwarded: win a free phone, click the link' },
  { who: 'Grace', time: '13:55', text: 'Selling 2 sofas, Bulawayo, cash only' },
];
const noiseAfter = [
  { who: 'Tino', time: '14:03', text: 'Lol 😂' },
  { who: 'Sam', time: '14:05', text: 'Who has the expo link?' },
];

function Msg({ who, time, text }: { who: string; time: string; text: string }) {
  return (
    <li className="flex gap-3 text-sm text-zinc-500">
      <span className="w-24 shrink-0 truncate text-zinc-600">{who} <span className="tabular-nums">{time}</span></span>
      <span>{text}</span>
    </li>
  );
}

export function Hero() {
  return (
    <section id="overview" className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-x-clip">
      <style>{`
        .mk-hl {
          color: #fff;
          background: linear-gradient(transparent 58%, rgb(59 130 246 / .5) 58%) no-repeat 0 0 / 0% 100%;
          animation: mk-sweep .5s ease-out forwards;
          animation-delay: var(--d);
        }
        @keyframes mk-sweep { to { background-size: 100% 100%; } }
        .mk-slip { opacity: 0; transform: translateY(10px) rotate(-1.5deg); animation: mk-slip .5s ease-out 2.6s forwards; }
        @keyframes mk-slip { to { opacity: 1; transform: translateY(0) rotate(-1.5deg); } }
        @media (prefers-reduced-motion: reduce) {
          .mk-hl { animation: none; background-size: 100% 100%; }
          .mk-slip { animation: none; opacity: 1; transform: rotate(-1.5deg); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Headline runs long and tucks over the device's top edge */}
          <div className="lg:col-span-9 lg:row-start-1 relative z-10">
            <p className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Android build on show at the Tech Expo tomorrow
            </p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold tracking-[-0.04em] text-white leading-[0.96]">
              90+ WhatsApp groups. Mostly noise. Some of it is a customer.
            </h1>
          </div>

          {/* Device: cols 8–12, breaks out right, starts lower */}
          <div
            id="demo"
            className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-3 lg:mt-56 lg:-mr-24 xl:-mr-40 scroll-mt-24"
          >
            <DeviceFrame />
          </div>

          {/* Pitch + CTAs */}
          <div className="lg:col-span-6 lg:row-start-2">
            <p className="max-w-lg text-lg text-zinc-300 leading-relaxed">
              Mikana reads your trade groups day and night, spots the people who
              want to buy, and drafts your reply. You check it and send it in one tap.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#waitlist"
                className="px-6 py-3 rounded-md font-semibold text-sm text-zinc-950 bg-white hover:bg-zinc-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                Join the waitlist
              </a>
              <a
                href="#demo"
                className="text-sm font-medium text-zinc-300 hover:text-white underline underline-offset-[6px] decoration-zinc-600 hover:decoration-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                Open the app mockup
              </a>
            </div>
          </div>

          {/* The feed: everything dims except the one message that matters */}
          <div
            className="lg:col-span-7 lg:row-start-3 relative"
            role="img"
            aria-label="A group chat where one buyer request is picked out and turned into a drafted quote"
          >
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 pr-5 lg:pr-56">
              <ul className="space-y-3">
                {noise.map((m) => <Msg key={m.time} {...m} />)}
                <li className="flex gap-3 text-[15px] text-zinc-200 py-3 -mx-5 px-5 bg-zinc-800/60 border-y border-zinc-700/70">
                  <span className="w-24 shrink-0 truncate text-zinc-400">Tendai <span className="tabular-nums">14:02</span></span>
                  <span className="leading-relaxed">
                    Anyone supplying{' '}
                    <mark className="mk-hl" style={hl(0.4)}>50 bags of 50kg cement</mark>{' '}
                    delivered to{' '}
                    <mark className="mk-hl" style={hl(1.1)}>Bulawayo</mark>{' '}
                    by{' '}
                    <mark className="mk-hl" style={hl(1.7)}>Friday</mark>? Pm me prices.
                  </span>
                </li>
                {noiseAfter.map((m) => <Msg key={m.time} {...m} />)}
              </ul>
            </div>

            {/* Paper quote slip: the one bright thing on the page */}
            <aside className="mk-slip mt-4 lg:mt-0 lg:absolute lg:-right-10 lg:top-8 w-full max-w-xs bg-zinc-100 text-zinc-900 rounded-sm shadow-xl shadow-black/40 px-5 py-4">
              <p className="text-sm font-semibold">Quote for Tendai</p>
              <dl className="mt-3 text-sm divide-y divide-dashed divide-zinc-400">
                <div className="flex justify-between py-1.5"><dt className="text-zinc-500">Item</dt><dd>50 x 50kg cement</dd></div>
                <div className="flex justify-between py-1.5"><dt className="text-zinc-500">Deliver to</dt><dd>Bulawayo</dd></div>
                <div className="flex justify-between py-1.5"><dt className="text-zinc-500">By</dt><dd>Friday</dd></div>
              </dl>
              <p className="mt-3 text-[13px] leading-snug text-zinc-700">
                Hi, we can supply 50 x 50kg cement, delivered to Bulawayo by Friday. Sending our prices now.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-300 pt-3 text-xs text-zinc-500">
                <span>Read in under 2.4s</span>
                <span>95% match</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}