import React from 'react';
import { AboutUsSection, OurCustomers, OurTeam, OurMission, OurValues } from '@/sections/about';
import { CallToAction } from '@/sections/shared';
import {
  generateSchemaScript,
  founderSchema,
  aboutPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/structured-data';
// import { Comparison } from '@/sections/shared'; // Temporarily archived

export { metadata, viewport } from './metadata';

export default function AboutPage() {
  // CTA section data
  const ctaData = {
    title: 'Want to meet?',
    subtitle: 'Book a free 15-minute call to see if Piecewise is a fit.',
    primaryButton: {
      text: 'Get in touch',
      link: '/contact',
      description: '',
    },
    secondaryButton: {
      text: 'Back to home',
      link: '/',
      description: '',
    },
  };

  return (
    <>
      {/* Preload LCP hero image for Core Web Vitals */}
      <link rel="preload" as="image" href="/images/Charlotteskyline.webp" type="image/webp" />

      {/* Enhanced Structured Data for About Page SEO */}
      <script {...generateSchemaScript(founderSchema)} />
      <script {...generateSchemaScript(aboutPageSchema)} />
      <script
        {...generateSchemaScript(
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://piecewiseai.com' },
            { name: 'About', url: 'https://piecewiseai.com/about' },
          ])
        )}
      />

      {/* Hero Section with Charlotte Skyline Background */}
      <div className="relative -mt-20 flex items-center justify-center overflow-hidden">
        {/* Charlotte Skyline Background - Balanced visibility */}
        <div
          className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat opacity-80"
          style={{
            backgroundImage:
              'url(/images/Charlotteskyline.webp), url(/images/Charlotteskyline.png)',
            filter: 'grayscale(100%)',
          }}
        />

        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-blue-900/75" />

        {/* Hero Content */}
        <div className="relative z-20 pt-52 md:pt-44 xl:pt-52 pb-32 md:pb-28 xl:pb-36 w-full">
          <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32 w-full">
            <div className="grid grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7 2xl:col-span-7">
                <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12 text-center lg:text-left animate-fade-in text-white">
                  Why We&apos;re Here
                </h1>
                <p className="text-lg md:text-xl xl:text-2xl text-center lg:text-left max-w-[54ch] leading-relaxed animate-fade-in animation-delay-200 text-white/90 mx-auto lg:mx-0">
                  Learn about our mission to help business owners take the first step in their AI
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections - Clean backgrounds */}
      <AboutUsSection />

      <OurMission />

      <OurCustomers />

      <OurTeam />

      <OurValues />

      {/* Comparison Section - Temporarily archived
      <Comparison />
      */}

      <CallToAction {...ctaData} />
    </>
  );
}
