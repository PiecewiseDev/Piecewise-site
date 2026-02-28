'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface ComparisonItem {
  generic: string;
  concept: string;
  custom: string;
}

const comparisonItems: ComparisonItem[] = [
  {
    generic: 'Gives generic advice that could apply to any business in your industry',
    concept: 'Context',
    custom:
      'Provides specific guidance tailored to your exact services, team structure, and processes',
  },
  {
    generic: 'Requires you to explain your situation, policies, and background every single time',
    concept: 'Memory',
    custom:
      'Already knows your team roles, client types, service offerings, and business operations',
  },
  {
    generic: "Uses formal, generic language that doesn't match your brand or company culture",
    concept: 'Voice',
    custom: 'Communicates in your authentic tone and reflects your unique company values and style',
  },
  {
    generic: 'Produces documents and materials that need significant editing and reformatting',
    concept: 'Templates',
    custom:
      'Creates work-ready materials using your proven formats, templates, and style guidelines',
  },
  {
    generic: "Can't reference your specific policies, pricing structures, or procedures",
    concept: 'Knowledge',
    custom: 'Trained on your SOPs, pricing models, service packages, and operational guidelines',
  },
];

export default function CustomGPTIntro2() {
  const { isVisible, ref: sectionRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-neutral-darkest via-slate-800 to-neutral-darkest py-20 md:py-24 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-20">
            ChatGPT is intelligent, but it doesn&apos;t know{' '}
            <span className="relative inline-block">
              <span className="relative z-10">you</span>
              <span
                className="absolute bottom-0 left-0 w-full h-[3px] bg-white"
                style={{
                  transform: 'rotate(-1deg)',
                  borderRadius: '50% 40% 60% 30%',
                }}
              ></span>
            </span>
            .
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Take the first step in your AI journey by upgrading to a custom GPT.
          </p>
        </div>

        {/* Comparison Grid */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Column Headers */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 mb-0 pb-4 border-b border-slate-700">
            <h3 className="text-xl font-bold text-white text-center px-6 flex items-center justify-center">
              Default ChatGPT
            </h3>
            <div className="w-16 hidden md:flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center px-6 flex items-center justify-center">
              A Custom GPT
            </h3>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-0">
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 ${
                  index !== comparisonItems.length - 1 ? 'border-b border-slate-700' : ''
                }`}
              >
                {/* Generic ChatGPT - Left Aligned with padding */}
                <div className="py-5 pr-20 pl-32 flex items-center min-h-[90px]">
                  <p className="text-slate-300 leading-relaxed text-left w-full">{item.generic}</p>
                </div>

                {/* Concept Badge - Center Aligned */}
                <div className="py-5 flex items-center justify-center w-16 flex-shrink-0 min-h-[90px]">
                  <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold whitespace-nowrap">
                    {item.concept}
                  </span>
                </div>

                {/* Custom GPT - Left Aligned with padding */}
                <div className="py-5 pl-20 pr-32 flex items-center min-h-[90px]">
                  <p className="text-white leading-relaxed font-medium text-left w-full">
                    {item.custom}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
