'use client';

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks';

export default function OurValues() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });
  const [hasSpun, setHasSpun] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Trigger spin animation after fade-in
  useEffect(() => {
    if (!isVisible || hasSpun) return;

    // Trigger peek animation after all cards have finished rising
    // Last card finishes at: (5 * 150 + 300) + 1000 = 2050ms
    const spinTimer = setTimeout(() => {
      setIsSpinning(true);
      setHasSpun(true);
    }, 1800);

    // Remove spinning state after animation completes
    const resetTimer = setTimeout(
      () => {
        setIsSpinning(false);
      },
      1800 + 6 * 150 + 800
    ); // delay + stagger + animation duration

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(resetTimer);
    };
  }, [isVisible, hasSpun]);

  const values = [
    {
      title: 'Service',
      description:
        'We prioritize serving our clients with excellence and putting their success first.',
      icon: (
        <svg
          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-7 2xl:h-7"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Clarity',
      description:
        'We communicate simply, making complex technology accessible and understandable.',
      icon: (
        <svg
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description:
        'We operate with honesty and transparency, building trust through ethical practices.',
      icon: (
        <svg
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Stewardship',
      description:
        'We responsibly manage resources, creating lasting value for clients and community.',
      icon: (
        <svg
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path
            fillRule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Faith in Action',
      description:
        'We live out our faith through work, treating every interaction with respect and purpose.',
      icon: (
        <svg
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: 'Partnership',
      description:
        'We build genuine partnerships, working together toward shared goals and mutual success.',
      icon: (
        <svg
          className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      role="region"
      aria-labelledby="our-values-heading"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-slate-100"
      ref={containerRef}
    >
      <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <h2
          id="our-values-heading"
          className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-12 sm:mb-14 md:mb-16 lg:mb-18 xl:mb-20 2xl:mb-24 text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-slate-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Our Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className={`md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-4 group h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 2xl:h-60 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                perspective: '1000px',
                transitionDelay: isVisible ? `${index * 150 + 300}ms` : '0ms',
              }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                style={{
                  transformStyle: 'preserve-3d',
                  animation: isSpinning ? `peek 800ms ease-in-out ${index * 150}ms` : 'none',
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-xl p-5 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8 flex flex-col items-center justify-center bg-white shadow-md"
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 flex items-center justify-center w-9 h-9 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 rounded-full bg-blue-100 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-medium text-center text-slate-800">
                    {value.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-xl p-6 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10 flex flex-col items-center justify-center bg-white shadow-md"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm uppercase tracking-wider font-semibold mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-4 text-center text-slate-400">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-normal leading-relaxed text-center text-slate-700">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
