'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function OurMission() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
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
    <div className="py-16 md:py-24" style={{ backgroundColor: '#f1f1f1' }} ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mission Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8 text-center md:text-left"
              style={{ color: '#1a1a1d' }}
            >
              Our Mission
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed text-center md:text-left"
              style={{ color: '#1a1a1d', opacity: 0.9 }}
            >
              To equip businesses with the tools and support they need to navigate emerging
              technologies with confidence, so they can grow with purpose and serve their
              communities faithfully.
            </p>
          </div>

          {/* Right Column - Bible and Notebook Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="relative w-full max-w-md h-64 md:h-80 rounded-2xl overflow-hidden border-[0.5px] border-gray-300/20"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Image
                src="/images/t-steele-x-mIAFbAL-o-unsplash.jpg"
                alt="Open Bible with notebook and pen - representing our faith-centered mission"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
