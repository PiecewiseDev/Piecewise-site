import React from 'react';
import { ProcessIntro, ProcessTimeline, NotReadyNote, ProcessStory } from '@/sections/how-it-works';
import { CallToAction } from '@/sections/shared';
import Link from 'next/link';

export default function HowItWorksPage() {
  // CTA section data
  const ctaData = {
    title: 'Curious if this is a fit?',
    subtitle:
      'Book a 30-minute discovery call to explore how a CustomGPT can transform your business.',
    buttonText: 'Book a Discovery Call',
    buttonLink: '/contact',
  };

  return (
    <div className="section bg-gradient-to-b from-[#4b6a88]/10 to-white min-h-screen">
      <div className="container-wide">
        {/* 1. Page Intro Section */}
        <ProcessIntro />

        <div className="max-w-4xl mx-auto">
          {/* 2. 4-Phase Timeline Section (Vertical) */}
          <ProcessTimeline />

          {/* 3. You Don't Need to Be Ready Section */}
          <NotReadyNote />

          {/* 4. Real-Life Walkthrough - Client Story */}
          <ProcessStory />

          {/* 5. Enhanced CTA */}
          <CallToAction {...ctaData} />
        </div>
      </div>
    </div>
  );
}
