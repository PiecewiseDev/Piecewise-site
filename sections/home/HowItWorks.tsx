'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks';

interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const BADGE_BG = 'bg-blue-200';

const steps: Step[] = [
  {
    number: '1',
    title: 'We learn your business',
    description: 'Share what you have and walk us through your day-to-day. No prep needed.',
    image: '/images/Meetingphoto1.jpg',
    imageAlt: 'Discovery conversation and information gathering',
  },
  {
    number: '2',
    title: 'We build the AI tool',
    description: 'We turn what you shared into a custom ChatGPT tool. No setup on your end.',
    image: '/images/ChatGPTgreeting.jpg',
    imageAlt: 'Custom GPT development process',
  },
  {
    number: '3',
    title: 'You test it',
    description: 'Use it to answer questions, build SOPs, draft messages, and run operations.',
    image: '/images/stock_team_photo_1.jpg',
    imageAlt: 'Team deployment and implementation',
  },
  {
    number: '4',
    title: 'We start building systems',
    description: 'We work alongside you to document processes so your team can run without you.',
    image: '/images/stock_team_image_2.jpg',
    imageAlt: 'Building business systems and processes',
  },
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Piecewise Builds Custom AI Systems for Your Service Business',
  description:
    'Our 4-step process to capture your business knowledge and turn it into AI-powered systems your team can follow without you.',
  totalTime: 'P2W',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  step: steps.map((step) => ({
    '@type': 'HowToStep',
    position: step.number,
    name: step.title,
    text: step.description,
    image: `https://piecewiseai.com${step.image}`,
  })),
};

export default function HowItWorks() {
  const { isVisible, ref: sectionRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-it-works-heading"
      className="relative bg-slate-100 py-16 md:py-20 xl:py-28 overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div className="relative mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-blue-500 tracking-wider mb-3">
            THE PIECEWISE PROCESS
          </p>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl xl:text-5xl font-bold text-neutral-darkest leading-tight tracking-tight">
            How it works
          </h2>
        </div>

        {/* Steps Grid - Four Columns */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 list-none">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`flex h-full flex-col rounded-lg bg-white overflow-hidden border border-gray-100 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : '0ms',
              }}
            >
              {/* Image with centered number */}
              <div className="relative aspect-[2/1] sm:aspect-[4/3] overflow-hidden flex-shrink-0">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover object-[50%_45%]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/25"></div>
                <span
                  className={`absolute top-3 left-3 inline-flex items-center justify-center w-10 h-10 rounded-full ${BADGE_BG}`}
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-500">
                    <span className="text-lg font-bold text-blue-700">{step.number}</span>
                  </span>
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 md:p-5 xl:p-6">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link href="/contact" className="btn-primary">
            Start for free today
          </Link>
        </div>
      </div>
    </section>
  );
}
