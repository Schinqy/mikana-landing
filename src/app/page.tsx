import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroVisual } from '@/components/HeroVisual';
import { ProblemSection } from '@/components/ProblemSection';
import { ProductFlowSection } from '@/components/ProductFlowSection';
import { InteractiveDemoSection } from '@/components/InteractiveDemoSection';
import { NotificationSection } from '@/components/NotificationSection';
import { AutoPilotSection } from '@/components/AutoPilotSection';
import { PipelineSection } from '@/components/PipelineSection';
import { RealExamplesSection } from '@/components/RealExamplesSection';
import { WhoIsThisForSection } from '@/components/WhoIsThisForSection';
import { BiggerIdeaSection } from '@/components/BiggerIdeaSection';
import { TryItSection } from '@/components/TryItSection';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { FaqSection } from '@/components/FaqSection';
import { FinalScreen } from '@/components/FinalScreen';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1C1E] flex flex-col font-sans selection:bg-[#1C1C1E] selection:text-white pb-16 sm:pb-0">
      {/* Sticky Clean Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: First Screen — The "Oh, I get it" Moment (Toyota Hilux injector -> Mikana -> Notification) */}
        <HeroVisual />

        {/* Section 2: The Problem in One Sentence ("The customer isn't missing. The opportunity is.") */}
        <ProblemSection />

        {/* Section 3: Show the Product in One Flow (01 -> 02 -> 03 -> 04 -> 05) */}
        <ProductFlowSection />

        {/* Section 4: Don't Make People Take Our Word For It ("See Mikana actually do it.") */}
        <InteractiveDemoSection />

        {/* Section 5: The Magic: Instant Notifications ("Don't find the customer hours later.") */}
        <NotificationSection />

        {/* Section 6: AutoPilot ("What happens when you're too busy to answer?") */}
        <AutoPilotSection />

        {/* Section 7: Beyond Alerts ("Finding the opportunity is only the beginning." Understand -> Respond -> Follow up) */}
        <PipelineSection />

        {/* Section 8: Real Examples (Spare parts, plumbing, cement, beans, electrical) */}
        <RealExamplesSection />

        {/* Section 9: Who Is This For? ("Do customers find you through WhatsApp?") */}
        <WhoIsThisForSection />

        {/* Section 10: The Bigger Idea (100 conversations -> Relevant -> Your opportunities) */}
        <BiggerIdeaSection />

        {/* Section 11: Try It (Try Mikana + Short 3-field Join Test form) */}
        <TryItSection />

        {/* Section 12: Screenshot Gallery (Real screenshots carousel with short captions) */}
        <ScreenshotGallery />

        {/* Section 13: FAQ (9 exact questions in clean accordion) */}
        <FaqSection />

        {/* Section 14: Final Screen (QR Code, mikana.lui.co.zw, POTRAZ note) */}
        <FinalScreen />
      </main>

      {/* Mobile Sticky Bottom CTA */}
      <MobileStickyBar />
    </div>
  );
}
