'use client';

import React from 'react';
import Link from 'next/link';

export default function InlineCTA() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="relative mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Rounded container with blue-700 background */}
        <div className="bg-blue-700 rounded-2xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-18 relative overflow-hidden">
          {/* Subtle grid pattern inside container */}
          <div
            className="absolute inset-0 opacity-[0.05] rotate-12 scale-150"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center md:items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline justify-between gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
            {/* Text - Left Side */}
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-white leading-relaxed font-medium max-w-full sm:max-w-full md:max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl">
              If you want to start using AI to improve your business, Piecewise is for you.
            </p>

            {/* CTA Button - Right Side */}
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center justify-center gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-3 px-6 sm:px-7 md:px-8 lg:px-8 xl:px-9 2xl:px-10 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-5 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg font-semibold bg-white text-blue-800 hover:bg-neutral-lightest rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
            >
              <span>Get Started for Free Today</span>
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
