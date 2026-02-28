'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    name: 'Legacy Repairs & Remodeling',
    logo: '/logos/Legacy+Logo+Black.png',
  },
  {
    name: 'Fresh Event Services',
    logo: '/logos/Fresheventsserviceslogo.png',
  },
  {
    name: 'Trinity Parking',
    logo: '/logos/Trinity+Logo+Wordmark.png',
  },
  {
    name: 'Lake Norman Fence',
    logo: '/logos/LKNF-Logo-2022-06.png',
  },
  {
    name: 'Albemarle Paper Supply',
    logo: '/logos/APSfulllogo.png',
  },
];

export default function OurCustomers() {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <div
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-slate-50"
      ref={containerRef}
    >
      <div className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20 items-center">
          {/* Left Column - Text Content (5 columns) */}
          <div className="lg:col-span-5 xl:col-span-5 2xl:col-span-5">
            <h2
              className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-semibold leading-snug mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7 2xl:mb-8 text-neutral-darkest text-center lg:text-left transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Who we work with
            </h2>
            <p
              className={`text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl leading-relaxed text-gray-500 mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7 2xl:mb-8 pr-0 sm:pr-0 md:pr-0 lg:pr-6 xl:pr-8 2xl:pr-10 text-center lg:text-left transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              We partner with service-driven businesses across Charlotte and beyond, helping them
              leverage AI to work smarter and grow stronger.
            </p>
            {/* Temporarily archived "Read their stories" link */}
          </div>

          {/* Right Column - Logo Grid (7 columns) */}
          <div
            className={`lg:col-span-7 xl:col-span-7 2xl:col-span-7 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 max-w-full sm:max-w-full md:max-w-xl lg:max-w-none xl:max-w-none 2xl:max-w-none mx-auto lg:mx-0 xl:mx-0 2xl:mx-0">
              {clients.map((client, index) => (
                <div
                  key={client.name}
                  className={`flex items-center justify-center bg-white rounded-2xl p-6 sm:p-7 md:p-8 lg:p-7 xl:p-8 2xl:p-9 aspect-[4/3] transition-all duration-700 hover:shadow-lg ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms',
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={64}
                    className="w-full h-auto object-contain grayscale opacity-60"
                    loading="lazy"
                  />
                </div>
              ))}

              {/* CTA card */}
              <a
                href="/contact"
                className={`group flex items-center justify-center bg-blue-50 border-2 border-dashed border-blue-100 rounded-2xl p-6 sm:p-7 md:p-8 lg:p-7 xl:p-8 2xl:p-9 aspect-[4/3] transition-all duration-700 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + clients.length * 100}ms` : '0ms',
                }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-light text-blue-500">+</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
