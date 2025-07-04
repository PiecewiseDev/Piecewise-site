import React from 'react';
import { Hero, /* ClientLogoStrip, */ Testimonial, CallToAction } from '@/sections/shared';
import {
  Benefits,
  Explainer,
  UseCases,
  ToolsPartnership,
  PartnershipShowcase,
  WhatWeOffer,
} from '@/sections/home';
import { PageSection } from '@/components/layout';

// Import and export metadata for SEO
export { metadata } from './metadata';

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Piecewise',
  description: 'Custom AI tools and automation solutions for service businesses',
  url: 'https://piecewiseai.com',
  logo: 'https://piecewiseai.com/logos/PiecewiseLogo2.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX', // Add your phone number when available
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/in/kylelarsen1819/',
    // Add other social media profiles when available
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Development',
          description:
            'Custom AI tools and automation solutions built specifically for your business',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Implementation & Support',
          description: 'Professional implementation and ongoing support for AI business solutions',
        },
      },
    ],
  },
};

export default function HomePage() {
  // Hero section data
  const heroData = {
    subtitle: 'Equip your business with tools that think, act, and grow with you.',
    ctaText: 'Book a Discovery Call',
    ctaLink: '/contact',
    imageSrc: '/images/ChatGPTScreenshot.png',
    imageAlt:
      'Custom AI tools dashboard interface showing business automation and CustomGPT conversation examples for service businesses',
  };

  // Benefits section data
  const benefitsData = {
    title: 'How Our CustomGPTs Help You',
    subtitle:
      'Designed specifically for service businesses, our AI solutions streamline operations and improve client experience.',
    benefits: [
      {
        icon: (
          <svg
            className="h-7 w-7 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: 'Save Time',
        description:
          'Your GPT handles routine messages and tasks, freeing you to focus on what matters most in your business.',
      },
      {
        icon: (
          <svg
            className="h-7 w-7 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
        title: 'Stay Consistent',
        description:
          'Your policies, your tone, every time. Maintain a consistent voice and reliable information across all interactions.',
      },
      {
        icon: (
          <svg
            className="h-7 w-7 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: 'Stress Less',
        description:
          'Fewer questions, more clarity. Reduce repetitive inquiries and provide instant answers to common requests.',
      },
    ],
  };

  // Explainer section data
  const explainerData = {
    title: "What's a CustomGPT?",
    description:
      'A CustomGPT is a private AI assistant tailored specifically to your business, not a generic chatbot. It works behind the scenes to help you and your team, not as a customer-facing tool.',
    features: [
      {
        icon: (
          <svg
            className="h-6 w-6 text-navy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
        title: 'Policy Clarity',
        description: 'Instantly access your business policies and guidelines',
      },
      {
        icon: (
          <svg
            className="h-6 w-6 text-navy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: 'Estimate Support',
        description: 'Generate accurate pricing and time estimates',
      },
      {
        icon: (
          <svg
            className="h-6 w-6 text-navy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        ),
        title: 'Crew Messaging',
        description: 'Consistent instructions and answers for your team',
      },
    ],
    learnMoreText: 'Learn more about how it works',
    learnMoreLink: '/how-it-works',
  };

  // Use Cases section data
  const useCasesData = {
    title: 'Real-World Examples',
    subtitle: 'See how service businesses use CustomGPTs to respond to common situations',
    useCases: [
      {
        icon: (
          <svg
            className="h-6 w-6 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
        title: 'Reply to a discount request',
        description:
          'Let your CustomGPT handle discount requests consistently according to your business policies.',
        promptExample:
          "\"Customer is asking for 15% off. Here's what they wrote: 'I've been quoted less by another company. Can you match their price?'\"",
      },
      {
        icon: (
          <svg
            className="h-6 w-6 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
        title: 'Explain estimate policy',
        description:
          'Clearly communicate your stance on free estimates while maintaining positive customer relations.',
        promptExample:
          "\"Need to tell a customer why we don't offer free estimates. They said: 'Other companies come out for free, why do you charge?'\"",
      },
      {
        icon: (
          <svg
            className="h-6 w-6 text-emerald"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#5e8d75"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        ),
        title: 'Write crew instructions',
        description:
          'Create clear, thorough job prep communications for your crew with all necessary details.',
        promptExample:
          '"Generate detailed instructions for the crew about tomorrow\'s job prep. It\'s a bathroom remodel at 123 Main St, starting at 8am."',
      },
    ],
  };

  // Testimonial section data
  const testimonialData = {
    quote: "This isn't a chatbot. It thinks like we do. And it's made everything simpler.",
    name: 'Michael Reynolds',
    position: 'Owner, Reynolds Plumbing & Heating',
    clientInitials: 'MR',
    clientTestimonial:
      '"We\'ve reduced response time by 68% and our team has clear, consistent answers for customers."',
    linkText: 'View more success stories',
    linkHref: '/case-studies',
  };

  // CTA section data
  const ctaData = {
    title: 'Wondering where a smarter system might fit your business?',
    subtitle: "Let's talk.",
    buttonText: 'Book a Discovery Call',
    buttonLink: '/contact',
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero {...heroData} />

      {/* Temporarily archived client logo strip
      <PageSection background="white" width="full" className="pt-0 pb-6">
        <ClientLogoStrip />
      </PageSection>
      */}

      <ToolsPartnership />

      <PartnershipShowcase />

      <WhatWeOffer />

      {/* Temporarily archived Benefits section (How Our CustomGPTs Help You)
      <PageSection background="light" width="wide" animate={true} animationDelay={100}>
        <Benefits {...benefitsData} />
      </PageSection>
      */}

      {/* Temporarily archived Explainer section (What is a CustomGPT?)
      <PageSection background="white" width="wide" animate={true} animationDelay={200}>
        <Explainer {...explainerData} />
      </PageSection>
      */}

      {/* Temporarily archived UseCases section (Real-World Examples)
      <PageSection background="light" width="wide" animate={true} animationDelay={300}>
        <UseCases {...useCasesData} />
      </PageSection>
      */}

      {/* Temporarily archived Testimonial section (success stories)
      <Testimonial {...testimonialData} />
      */}

      <CallToAction {...ctaData} />
    </>
  );
}
