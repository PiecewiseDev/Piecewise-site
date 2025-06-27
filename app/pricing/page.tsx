import React from 'react';
import {
  PricingIntro,
  PricingBuildPlan,
  PricingGrowthPlan,
  PricingFAQ,
  // PricingAddOns, // Temporarily archived
} from '@/sections/pricing';
import { CallToAction } from '@/sections/shared';

export default function PricingPage() {
  return (
    <div className="section bg-gradient-to-b from-[#4b6a88]/10 to-white min-h-screen">
      <div className="container-wide">
        {/* 1. Intro Section */}
        <PricingIntro />

        <div className="max-w-7xl mx-auto">
          {/* Pricing Cards Grid - side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Core Build Pricing Card */}
            <div className="flex-1 h-full">
          <PricingBuildPlan />
            </div>

          {/* Monthly Growth Plan Card */}
            <div className="flex-1 h-full">
          <PricingGrowthPlan />
            </div>
          </div>

          {/* Optional Add-On GPTs Section - Temporarily archived
          <PricingAddOns />
          */}

          {/* FAQ Section */}
          <PricingFAQ />

          {/* Final CTA Block */}
          <div className="mt-4 mb-4 animate-fade-in animation-delay-800">
            <div className="bg-navy rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Want to see what this could look like for your business?
                </h2>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  We&apos;ll walk you through it. No pressure, no jargon.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-white text-navy font-medium px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-lg"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
