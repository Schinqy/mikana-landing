import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { FinalScreen } from '@/components/FinalScreen';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — Mikana',
  description: 'Mikana Commercial Privacy Policy and Data Protection Disclosures.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1C1E] flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E56A0] hover:text-[#0B2545] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Document Header */}
        <div className="border-b border-[#E5E5E0] pb-8 mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF2FA] text-[#1E56A0] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1C1E]">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#71717A]">
            <span>Last Updated: September 12, 2026</span>
            <span>•</span>
            <span>Effective Date: September 12, 2026</span>
          </div>
        </div>

        {/* Policy Content */}
        <div className="prose prose-zinc max-w-none space-y-8 text-[15px] leading-relaxed text-[#4A4A48]">
          
          <div className="p-5 rounded-2xl bg-[#EBF2FA]/60 border border-[#D0E2F5] text-[#0B2545] text-sm font-medium">
            Mikana (“we”, “our”, or “us”) provides a commercial trade opportunity detection and WhatsApp quotation assistant for businesses, contractors, product merchants, and service providers. This Privacy Policy explains what information we collect, how it is processed, and your control over your data.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">1. Information We Collect</h2>
            <p>We collect information to provide, maintain, and protect our commercial opportunity discovery services:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Account & Business Profile Information:</strong> Business name, location, delivery/service areas, catalog offerings (product titles, pricing, services, capabilities), and custom quotation guidelines you configure.</li>
              <li><strong>WhatsApp Connection Data:</strong> Your paired WhatsApp phone number and cryptographic multi-device session credentials (handled via end-to-end Signal protocol keys) required to maintain your authorized WhatsApp web relay connection.</li>
              <li><strong>Group Chat Inquiries:</strong> Messages received within WhatsApp groups that you explicitly choose to monitor. We extract commercial trade inquiries (buyer requests, quotes, tenders). We do not collect, read, or retain your personal 1:1 chats with friends or family.</li>
              <li><strong>Device Identifiers & Push Notification Tokens:</strong> Expo Push Tokens and Firebase Cloud Messaging (FCM) tokens required to deliver real-time high-priority lead notifications to your mobile device.</li>
              <li><strong>Usage Analytics & Telemetry:</strong> Anonymized feature interactions, app performance, and AI token consumption metrics processed via PostHog to ensure platform reliability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">2. How We Use Your Information</h2>
            <p>We use your information exclusively for the following operational purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Semantic Opportunity Matching:</strong> Comparing buyer requests from your monitored channels against your registered offerings to compute match scores and detect trade leads.</li>
              <li><strong>Drafting Quotations & Pitches:</strong> Assisting you in generating quick, context-aware WhatsApp response drafts based on your verified catalog prices and stock.</li>
              <li><strong>Instant Lead Alerts:</strong> Dispatching native push notifications to alert you to urgent buyer requests within your serviceable area.</li>
              <li><strong>Autonomous Autopilot Dispatch:</strong> If explicitly enabled by you on eligible subscription tiers, dispatching pre-approved quotation templates to prospective buyers during business hours.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">3. Third-Party Service Providers</h2>
            <p>To deliver our service, we partner with industry-leading infrastructure providers under strict data-protection agreements:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Google Cloud (Gemini API):</strong> Processes buyer inquiry text for commercial classification, item extraction, and semantic matching against your business catalog. Google does not use our customer data to train foundation models.</li>
              <li><strong>Supabase Inc.:</strong> Hosts our encrypted PostgreSQL cloud database, real-time message stream, and authentication infrastructure with automated backup and role-based access control.</li>
              <li><strong>RevenueCat Inc. & Google Play:</strong> Handles secure in-app purchase validation and subscription tier management. We never handle or store your payment card numbers.</li>
              <li><strong>Expo / Google Firebase:</strong> Dispatches encrypted push notification payloads to your mobile device.</li>
              <li><strong>PostHog Inc.:</strong> Aggregates diagnostic telemetry, AI token volume, and app stability metrics.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">4. Data Storage & Security</h2>
            <p>We implement strict administrative, technical, and physical security measures:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All communications between the mobile app, relay server, and cloud databases are encrypted in transit using Transport Layer Security (TLS 1.3 / HTTPS / WSS).</li>
              <li>WhatsApp authentication credentials and Signal protocol keys are stored in encrypted cloud tables with strict service-role isolation.</li>
              <li>Access to production databases is strictly restricted to authenticated microservices and authorized engineers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">5. Your Rights & Data Deletion (Google Play Compliance)</h2>
            <p>You retain complete ownership and control over your data at all times:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>In-App Immediate Deletion:</strong> You can delete your account and all associated cloud data at any time directly within the Mikana mobile app by navigating to <em>Business Hub → Settings → Preferences → Delete Account & Data</em>.</li>
              <li><strong>Web Deletion Portal:</strong> If you no longer have access to the mobile app, you can submit an account deletion request through our web portal at <Link href="/delete-account" className="text-[#1E56A0] underline font-semibold">mikana.app/delete-account</Link>.</li>
              <li><strong>What Happens Upon Deletion:</strong> All your profile records, registered capabilities, products, deal pipeline records, detected opportunities, push tokens, and WhatsApp authentication keys are permanently erased from our databases.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">6. Children's Privacy</h2>
            <p>Mikana is a commercial business utility designed exclusively for business owners, contractors, and merchants. We do not knowingly collect personal data from children under 13 (or under 16 in certain jurisdictions).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1C1E]">7. Contact Information</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy or your data, please contact our Data Protection Team at:</p>
            <div className="p-4 rounded-xl bg-white border border-[#E5E5E0] space-y-1 text-sm">
              <div className="font-bold text-[#1C1C1E]">Mikana Support & Data Protection (Lui Tech)</div>
              <div>Email: <a href="mailto:info@lui.co.zw" className="text-[#1E56A0] hover:underline">info@lui.co.zw</a> / <a href="mailto:luitechzw@gmail.com" className="text-[#1E56A0] hover:underline">luitechzw@gmail.com</a></div>
              <div>Phone / WhatsApp: <a href="tel:+263776432893" className="text-[#1E56A0] hover:underline">+263 776 432 893</a> / <a href="tel:+263780331740" className="text-[#1E56A0] hover:underline">+263 780 331 740</a></div>
            </div>
          </section>

        </div>

        {/* Bottom Legal Navigation */}
        <div className="mt-12 pt-8 border-t border-[#E5E5E0] flex flex-wrap items-center gap-6 text-xs text-[#71717A]">
          <Link href="/terms" className="hover:text-[#1C1C1E] transition-colors underline">
            Terms of Service
          </Link>
          <Link href="/delete-account" className="hover:text-[#1C1C1E] transition-colors underline">
            Delete Account
          </Link>
          <Link href="/" className="hover:text-[#1C1C1E] transition-colors">
            Mikana Home
          </Link>
        </div>

      </main>

      <FinalScreen />
    </div>
  );
}
