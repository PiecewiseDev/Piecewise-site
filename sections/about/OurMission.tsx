'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

export default function OurMission() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      role="region"
      aria-labelledby="our-mission-heading"
      className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 bg-blue-900"
      ref={containerRef}
    >
      <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="our-mission-heading" className="text-sm font-medium text-slate-200 tracking-wider mb-4 md:mb-6 text-center uppercase">
            Our Mission
          </h2>

          <hr className="border-t border-slate-600 max-w-xs mx-auto mb-4 md:mb-6" />

          <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold !leading-[1.5] text-center text-white max-w-4xl mx-auto">
            <span className="text-white/85 font-normal">To help entrepreneurs</span> build better
            businesses, <span className="text-white/85 font-normal">to</span> magnify their impact{' '}
            <span className="text-white/85 font-normal">and</span> improve the communities they
            serve.
          </p>
        </div>
      </div>
    </div>
  );
}
