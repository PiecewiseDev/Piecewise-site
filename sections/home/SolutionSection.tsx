'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface SolutionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const solutions: SolutionCard[] = [
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'We Remove the Blank Page',
    description:
      'Starting from scratch is slow and painful. Our AI gives you strong drafts in seconds, so your team can fix and finish instead of starting cold.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'We Build You a Custom AI Tool',
    description:
      'Your AI learns from your documents and your rules. It helps your team write clean steps, follow the right process, and stay on track.',
  },
  {
    icon: (
      <svg
        className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: 'We Make Updates Easy',
    description:
      'Processes change. People change. Your AI helps you update your SOPs fast, so your business stays clear as you grow.',
  },
];

export default function SolutionSection() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative overflow-hidden"
      aria-labelledby="solution-heading"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-grey-200/50 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Label */}
        <p
          className={`text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          How Do We Solve It?
        </p>

        {/* Section Heading */}
        <h2
          id="solution-heading"
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-18 max-w-full sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto leading-tight text-center transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          An AI Tool That Makes Building Systems Fast and Easy
        </h2>

        {/* Solution Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 group relative bg-white rounded-2xl p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 2xl:p-12 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-grey-200 hover:border-grey-400"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-xl bg-blue-100 mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7 2xl:mb-8 transition-colors duration-300 group-hover:bg-blue-200 text-blue-500">
                {solution.icon}
              </div>

              {/* Card content */}
              <div className="space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-4 2xl:space-y-4">
                <h3 className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-bold text-gray-700 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-gray-500 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
