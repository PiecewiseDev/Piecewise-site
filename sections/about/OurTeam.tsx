'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

export default function OurTeam() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-[rgb(26,26,29)]"
      ref={containerRef}
    >
      <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <h2
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold leading-snug mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-20 2xl:mb-24 text-center lg:text-left text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our People
        </h2>

        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12 items-start transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Profile Image */}
          <div
            className="lg:col-span-4 xl:col-span-4 2xl:col-span-4 flex justify-center lg:justify-start"
            style={{
              transitionDelay: isVisible ? '150ms' : '0ms',
            }}
          >
            <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 rounded-2xl overflow-hidden shadow-md">
              <picture>
                <source srcSet="/images/kyle-profile.webp" type="image/webp" />
                <Image
                  src="/images/kyle-profile.jpg"
                  alt="Kyle Larsen - Founder & Lead Consultant"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl grayscale"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="lg:col-span-8 xl:col-span-8 2xl:col-span-8 flex flex-col text-center lg:text-left w-full">
            <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-9 2xl:mb-10">
              <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-2 sm:mb-2 md:mb-2.5 lg:mb-3 xl:mb-3 2xl:mb-4 text-white">
                Kyle Larsen
              </h3>
              <p className="text-base sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold text-sky-400 mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6">
                Founder & Lead Consultant
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center lg:justify-start space-x-1.5 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3">
                <a
                  href="https://www.linkedin.com/in/kylelarsen1819/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 sm:p-1 md:p-1.5 lg:p-1.5 xl:p-2 2xl:p-2 text-white hover:text-white/70 transition-colors duration-200 flex-shrink-0"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="mailto:kyle@piecewise.ai"
                  className="p-1 sm:p-1 md:p-1.5 lg:p-1.5 xl:p-2 2xl:p-2 text-white hover:text-white/70 transition-colors duration-200 flex-shrink-0"
                  aria-label="Email"
                >
                  <svg
                    className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-1 space-y-5 sm:space-y-5 md:space-y-6 lg:space-y-6 xl:space-y-7 2xl:space-y-8 text-left max-w-prose">
              <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base leading-relaxed font-light text-slate-300">
                Kyle is passionate about helping business owners embrace new technology. With a
                background in finance and consulting, he understands the demands of a successful
                business and the importance of maximizing time and resources. His mission is to make
                AI simple and practical so owners can work smarter and stay ahead.
              </p>
              <p className="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-sm 2xl:text-base leading-relaxed font-light text-slate-300">
                He believes technology should support people, not replace them. By streamlining
                day-to-day operations, he helps business owners free up time for what matters most:
                family, faith, and the life they&apos;re building beyond work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
