import React from 'react';
import { Hero, CallToAction } from '@/sections/shared';
import {
  OurWork,
  HowItWorks,
  ClientLogoStrip,
  ClientQuoteHighlight,
  ClientQuoteHighlightTrinity,
  KeyMetricsStrip,
  ComparisonSection,
  ProblemSolutionGrid,
} from '@/sections/home';
import { ContactFAQSimple } from '@/sections/contact';
import {
  localBusinessSchema,
  customGPTServiceSchema,
  automationServiceSchema,
  homePageSchema,
  generateSchemaScript,
} from '@/lib/structured-data';

// Import and export metadata for SEO
export { metadata } from './metadata';

export default function HomePage() {
  // Hero section data
  const heroData = {
    title: 'Build a business that runs without you',
    subtitle:
      "We capture what's in your head and turn it into systems your team can follow, so you can finally delegate and scale.",
    ctaText: 'Start your free trial',
    ctaLink: '#content',
    imageSrc: '/images/ChatGPTScreenshot.png',
    imageAlt:
      'Custom AI tools dashboard interface showing business automation and Custom GPT conversation examples for service businesses',
  };

  // CTA section data
  const ctaData = {
    title: 'Ready to get started?',
    subtitle: 'Book a free 15-minute call to see if Piecewise is a fit.',
    primaryButton: {
      text: 'Book a call to start your free trial',
      link: '/contact',
      description: '',
    },
    secondaryButton: {
      text: 'Learn more about us',
      link: '/about',
      description: 'Discover our mission and approach to custom AI development',
    },
  };

  return (
    <>
      {/* Enhanced Structured Data for SEO */}
      <script {...generateSchemaScript(homePageSchema)} />
      <script {...generateSchemaScript(localBusinessSchema)} />
      <script {...generateSchemaScript(customGPTServiceSchema)} />
      <script {...generateSchemaScript(automationServiceSchema)} />

      <Hero {...heroData} />

      <div id="content">
        <ClientLogoStrip />
      </div>

      {/* Archived ProblemSection and SolutionSection — replaced by ProblemSolutionGrid
      <ProblemSection />
      <SolutionSection />
      <SolutionSectionAlt />
      */}

      <ProblemSolutionGrid />

      <ClientQuoteHighlight />

      <HowItWorks />

      <KeyMetricsStrip />

      <OurWork />

      <ClientQuoteHighlightTrinity />

      {/* Archived ProblemSolution — replaced by ProblemSolutionGrid
      <ProblemSolution />
      */}

      <ComparisonSection />

      {/* Archived WhoWeServe
      <WhoWeServe />
      */}

      {/* Temporarily archived CustomGPTIntro2 section (ChatGPT is intelligent but it doesn't know you)
      <CustomGPTIntro2 />
      */}

      {/* Temporarily archived IsThisForMe (Is This For Me?)
      <IsThisForMe />
      */}

      {/* Temporarily archived InlineCTA
      <InlineCTA />
      */}

      {/* Temporarily archived ClientQuotesSimple (Hear From Our Clients)
      <ClientQuotesSimple />
      */}

      {/* Temporarily archived ClientQuotesSimple2 section
      <ClientQuotesSimple2 />
      */}

      {/* Temporarily archived ToolsPartnership section (Tools That Work With You)
      <ToolsPartnership />
      */}

      {/* Temporarily archived WhatWeOffer section
      <WhatWeOffer />
      */}

      {/* Temporarily archived Testimonial section (success stories)
      <Testimonial {...testimonialData} />
      */}

      {/* Temporarily archived Mission Statement section
      <MissionStatement />
      */}

      {/* Blog Preview - Temporarily archived
      <BlogPreview />
      */}

      {/* FAQ Section - Simple Layout */}
      <ContactFAQSimple />

      <CallToAction {...ctaData} />

      {/* FAQ Section - Temporarily archived (dark background accordion)
      <ContactFAQ />
      */}
    </>
  );
}
