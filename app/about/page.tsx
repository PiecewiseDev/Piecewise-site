import React from 'react';
import { AboutIntro, MissionVision, CoreValues, FounderNote, AboutCTA } from '@/sections/about';
import { PageLabel } from '@/components/ui';
// import { Comparison } from '@/sections/shared'; // Temporarily archived

export default function AboutPage() {
  return (
    <div className="section bg-gradient-to-b from-[#4b6a88]/10 to-white min-h-screen">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <PageLabel label="About Us" />
          <h1 className="mb-6 text-center animate-fade-in">Why We&apos;re Here</h1>
          <p className="text-responsive text-navy-light mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Learn about our mission to help service business owners work smarter and reduce their
            daily stress.
          </p>

          {/* Mission and Vision Section */}
          <MissionVision />

          {/* Why This Exists Section */}
          <AboutIntro />

          {/* Values Grid */}
          <CoreValues />

          {/* Comparison Section - Temporarily archived
          <Comparison />
          */}

          {/* Founder Note Section */}
          <FounderNote />

          {/* Gentle CTA Strip */}
          <AboutCTA />
        </div>
      </div>
    </div>
  );
}
