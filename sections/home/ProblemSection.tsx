'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface ProblemCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const problems: ProblemCard[] = [
  {
    icon: (
      <svg
        className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    title: 'No Shared Way',
    description: 'Everyone does tasks in their own way. This leads to mistakes and slow work.',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    icon: (
      <svg
        className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: 'Growth Makes Gaps Bigger',
    description: 'What worked with 5 people stops working at 25 or 50. Problems grow fast.',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  {
    icon: (
      <svg
        className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Writing SOPs Takes Too Long',
    description: 'No one has hours to start from a blank page, so things never get written.',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
];

export default function ProblemSection() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative overflow-hidden"
      aria-labelledby="problem-heading"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-grey-200/50 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Label */}
        <p
          className={`text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          What Problem Do We Solve?
        </p>

        {/* Section Heading */}
        <h2
          id="problem-heading"
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 max-w-full sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto leading-tight text-center transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Scaling a Business Without Systems is Painful
        </h2>

        {/* Problem Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 group relative"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Title with inline icon */}
              <div className="flex items-baseline gap-3 mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5">
                <span className={`${problem.iconColor} flex-shrink-0`}>{problem.icon}</span>
                <h3 className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl font-bold text-gray-700 leading-tight">
                  {problem.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-gray-500 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
