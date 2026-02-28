'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface Logo {
  src: string;
  alt: string;
}

interface ClientLogoStripProps {
  title?: string;
  logos?: Logo[];
}

export default function ClientLogoStrip({
  title = 'Trusted by Local Businesses Serving Communities Near You:',
  logos,
}: ClientLogoStripProps) {
  const { isVisible, ref: containerRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  // Default logos if none are provided
  const defaultLogos: Logo[] = [
    { src: '/logos/greenworks.svg', alt: 'GreenWorks' },
    { src: '/logos/modernroof.svg', alt: 'ModernRoof' },
    { src: '/logos/LKNF-Logo-2022-06.png', alt: 'LKNF' },
    { src: '/logos/Trinity+Logo+Wordmark (1).png', alt: 'Trinity' },
    { src: '/logos/Legacy+Logo+Black.png', alt: 'Legacy' },
  ];

  const logosToDisplay = logos || defaultLogos;

  return (
    <section
      className="py-12 md:py-16 bg-white relative overflow-hidden w-full border-t border-b border-slate-200"
      ref={containerRef}
    >
      <div className="w-full px-4 text-center">
        {title && (
          <p
            className={`
            text-base md:text-lg text-slate-600 mb-8
            opacity-0 translate-y-2 transition-[opacity,transform] duration-300 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : ''}
          `}
          >
            {title}
          </p>
        )}
        <div className="w-full max-w-7xl mx-auto">
          <div
            className={`
              grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8
            `}
          >
            {logosToDisplay.map((logo, index) => (
              <div
                key={index}
                className={`
                  flex justify-center items-center p-2
                  opacity-0 translate-y-4 transition-[opacity,transform] duration-500 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : ''}
                `}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={48}
                  className="h-10 md:h-12 w-auto max-w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300 ease-in-out object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
