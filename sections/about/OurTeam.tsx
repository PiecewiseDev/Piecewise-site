'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function OurTeam() {
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
    <div className="py-16 md:py-24" style={{ backgroundColor: '#1a1a1d' }} ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-12 text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ color: '#f1f1f1' }}
        >
          Our Team
        </h2>

        <div
          className={`grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-12 items-start max-w-5xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/kyle-profile.jpg"
                alt="Kyle Larsen - Founder & Lead Consultant"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105 rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Profile Details */}
          <div className="flex flex-col md:h-80 text-center md:text-left w-full min-w-0">
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f1f1f1' }}>
                Kyle Larsen
              </h3>
              <p className="text-lg md:text-xl font-semibold" style={{ color: '#3daeff' }}>
                Founder & Lead Consultant
              </p>
            </div>

            <div className="flex-1 space-y-3 mb-6 text-left">
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ color: '#f1f1f1', opacity: 0.9 }}
              >
                Kyle is passionate about helping business owners embrace technology without the
                overwhelm. With a background in investment banking, he understands the demands of
                running a business and the importance of maximizing time and resources. His mission
                is to make AI simple, accessible, and empowering-so business owners can stay ahead
                without feeling left behind.
              </p>
              <p
                className="text-xs md:text-sm leading-relaxed"
                style={{ color: '#f1f1f1', opacity: 0.9 }}
              >
                Kyle believes that technology should serve people, not replace them. By introducing
                AI solutions that streamline operations, he helps business owners focus on what
                truly matters-family, faith, and the life they&apos;re building beyond work.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start space-x-4 pr-4 pb-2">
              <a
                href="https://www.linkedin.com/in/kylelarsen1819/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200 flex-shrink-0"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>

              <a
                href="mailto:kyle@piecewise.ai"
                className="w-6 h-6 text-white hover:text-gray-300 transition-colors duration-200 flex-shrink-0"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
