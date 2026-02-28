'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface Criteria {
  text: string;
}

const criteria: Criteria[] = [
  {
    text: 'You run a business where most, if not all, decision making runs through you',
  },
  {
    text: 'You are ready to invest in building systems',
  },
  {
    text: 'You want to document your current processes faster',
  },
  {
    text: 'You currently do, or would like to, start using AI in your business',
  },
];

export default function IsThisForMe() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36"
      aria-labelledby="fit-heading"
    >
      <div className="mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
          {/* Left column with label and heading */}
          <div className="md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 mb-12 md:mb-0">
            {/* Section Label */}
            <p
              className={`text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              Is this for you?
            </p>

            {/* Section Heading */}
            <h2
              id="fit-heading"
              className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest max-w-full leading-tight transition-all duration-500 delay-75 motion-reduce:transition-none motion-reduce:transform-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              You're a Good Fit If
            </h2>
          </div>

          {/* Right column with checklist */}
          <div className="md:col-span-8 lg:col-span-8 xl:col-span-8 2xl:col-span-8 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-7">
            {/* Checklist - each item in rounded white container */}
            <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-6">
              {criteria.map((item, index) => (
                <div
                  key={index}
                  className={`flex gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 2xl:gap-12 items-center bg-gray-50 rounded-xl px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-12 py-5 sm:py-6 md:py-7 lg:py-7 xl:py-8 2xl:py-9 shadow-sm transition-all duration-400 motion-reduce:transition-none motion-reduce:transform-none ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${150 + index * 75}ms`,
                  }}
                >
                  {/* Blue checkmark */}
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-full bg-blue-200 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Clean, readable text */}
                  <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-medium text-gray-600 leading-snug flex-1 m-0">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
