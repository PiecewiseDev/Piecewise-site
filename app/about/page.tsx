import React from 'react';
import {
  AboutIntro,
  AboutUsSection,
  MissionVision,
  CoreValues,
  FounderNote,
  OurTeam,
  OurMission,
  OurValues,
} from '@/sections/about';
import { PageLabel } from '@/components/ui';
import { CallToAction } from '@/sections/shared';
// import { Comparison } from '@/sections/shared'; // Temporarily archived

export default function AboutPage() {
  // CTA section data
  const ctaData = {
    title: 'Ready to see how AI can transform your business?',
    subtitle: "Let's talk.",
    buttonText: 'Book a Discovery Call',
    buttonLink: '/contact',
  };

  return (
    <>
      {/* Hero Section with Charlotte Skyline Background */}
      <div className="relative h-[85vh] -mt-20 flex items-center justify-center overflow-hidden">
        {/* Charlotte Skyline Background - Only for hero + navbar area */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: 'url(/images/Charlotteskyline.png)',
            filter: 'blur(1px)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4b6a88]/10 to-[#f8f8f8]" />

        {/* Hero Content */}
        <div className="relative z-20 pt-20 pb-32 h-full flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
            <PageLabel label="About Us" />
            <h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-center animate-fade-in"
              style={{ color: '#1a1a1d' }}
            >
              Why We&apos;re Here
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200"
              style={{ color: '#1a1a1d' }}
            >
              Learn about our mission to help service business owners work smarter.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Sections - Clean backgrounds */}
      <AboutUsSection />

      <OurTeam />

      <OurMission />

      <OurValues />

      {/* Temporarily archived Core Values Section
      <CoreValues />
      */}

      {/* Temporarily archived Mission and Vision Section
      <MissionVision />
      */}

      {/* Temporarily archived Why This Exists Section
      <AboutIntro />
      */}

      {/* Comparison Section - Temporarily archived
      <Comparison />
      */}

      {/* Temporarily archived Founder Note Section
      <FounderNote />
      */}

      <CallToAction {...ctaData} />
    </>
  );
}
