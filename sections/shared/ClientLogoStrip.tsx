'use client';

import React, { useEffect, useState, useRef } from 'react';

interface Logo {
  src: string;
  alt: string;
  height?: number;
}

interface ClientLogoStripProps {
  title?: string;
  logos?: Logo[];
}

export default function ClientLogoStrip({
  title = 'Trusted by Local Businesses Serving Communities Near You:',
  logos,
}: ClientLogoStripProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default logos if none are provided
  const defaultLogos: Logo[] = [
    { src: '/logos/greenworks.svg', alt: 'GreenWorks' },
    { src: '/logos/modernroof.svg', alt: 'ModernRoof' },
    { src: '/logos/LKNF-Logo-2022-06.png', alt: 'LKNF', height: 50 },
    { src: '/logos/Trinity+Logo+Wordmark (1).png', alt: 'Trinity', height: 45 },
    { src: '/logos/Legacy+Logo+Black.png', alt: 'Legacy', height: 45 },
  ];

  const logosToDisplay = logos || defaultLogos;
  // No need to duplicate logos since we're not scrolling
  // const duplicatedLogos = [...logosToDisplay, ...logosToDisplay];

  // Use IntersectionObserver for fade-in when scrolled into view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Once visible, no need to keep observing
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      className="py-6 bg-white relative overflow-hidden w-full border-t border-b border-gray-100"
      ref={containerRef}
    >
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
      <div className="w-full px-4 text-center">
        {title && (
          <p
            className={`
            text-sm text-slate-500 mb-6
            opacity-0 transition-opacity duration-1000 ease-in-out
            ${isVisible ? 'opacity-100' : ''}
          `}
          >
            {title}
          </p>
        )}
        <div className="w-full max-w-7xl mx-auto">
          <div
            className={`
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8
              opacity-0 transition-opacity duration-1000 ease-in-out
              ${isVisible ? 'opacity-100' : ''}
            `}
          >
            {logosToDisplay.map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-10 md:h-12 max-w-[130px] filter grayscale-[60%] hover:grayscale-0 transition duration-300 ease-in-out object-contain ${
                    logo.alt === 'Trinity' ? 'drop-shadow-sm contrast-110' : ''
                  }`}
                  style={
                    logo.alt === 'Trinity'
                      ? {
                          filter:
                            'grayscale(60%) drop-shadow(0 0.5px 1px rgba(0, 0, 0, 0.12)) contrast(110%)',
                        }
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
