'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

export default function AboutUsSection() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      role="region"
      aria-labelledby="our-purpose-heading"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-slate-100"
      ref={containerRef}
    >
      <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-7 xl:col-span-7 2xl:col-span-7">
            <h2
              id="our-purpose-heading"
              className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-snug mb-8 sm:mb-9 md:mb-10 lg:mb-11 xl:mb-12 2xl:mb-14 text-center lg:text-left text-slate-900 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Our Purpose
            </h2>

            <div className="space-y-5 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-7 2xl:space-y-8 max-w-full sm:max-w-full md:max-w-prose lg:max-w-prose xl:max-w-prose 2xl:max-w-prose">
              <p
                className={`text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed text-left text-slate-600 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Piecewise helps business owners use AI to build stronger, more organized companies.
                We believe AI should be practical and accessible, something that helps owners get
                out of day-to-day chaos and focus on the work that actually grows the business.
              </p>

              <p
                className={`text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed text-left text-slate-600 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Our mission is to help you create a business with real structure, stability, and
                long-term value, whether you&apos;re scaling operations or planning for an eventual
                exit.
              </p>

              <p
                className={`text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed text-left text-slate-600 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Based in Charlotte, NC, we&apos;re committed to helping local businesses work
                smarter and build a foundation that lasts.
              </p>
            </div>
          </div>

          {/* Right Column - Charlotte Image */}
          <div
            className={`lg:col-span-5 xl:col-span-5 2xl:col-span-5 flex justify-center lg:justify-end xl:justify-end 2xl:justify-end transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-full sm:max-w-full md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/Charlotteimage2.jpg"
                alt="Charlotte, NC cityscape"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
