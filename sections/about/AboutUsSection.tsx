'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function AboutUsSection() {
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
        <h2
          className={`text-3xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8 text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ color: '#1a1a1d' }}
        >
          About Us
        </h2>

        <div className="space-y-4">
          <p
            className={`text-base md:text-lg leading-relaxed text-left transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            At Piecewise, we specialize in building custom AI solutions that help service businesses
            work smarter, not harder. We understand that every business has unique challenges, which
            is why we take a personalized approach to each project.
          </p>

          <p
            className={`text-base md:text-lg leading-relaxed text-left transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            Our team combines deep technical expertise with real-world business experience to create
            AI tools that actually solve problems. From automating repetitive tasks to improving
            customer interactions, we help you leverage technology to grow your business.
          </p>

          <p
            className={`text-base md:text-lg leading-relaxed text-left transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#1a1a1d', opacity: 0.9 }}
          >
            Based in Charlotte, NC, we&apos;re passionate about helping local and national service
            businesses discover how AI can transform their operations while maintaining the personal
            touch that sets them apart.
          </p>
        </div>
      </div>
    </div>
  );
}
