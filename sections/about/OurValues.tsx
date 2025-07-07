'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function OurValues() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for fade-in and spin animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger peek animation after all cards have finished rising
          // Last card finishes at: (5 * 150 + 300) + 1000 = 2050ms
          setTimeout(() => {
            setIsSpinning(true);
            setHasSpun(true);
          }, 1800);
          // Remove spinning state after animation completes
          setTimeout(
            () => {
              setIsSpinning(false);
            },
            1800 + 6 * 150 + 800
          ); // delay + stagger + animation duration
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

  const values = [
    {
      title: 'Service',
      description:
        'We prioritize serving our clients with excellence and putting their success first.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Clarity',
      description:
        'We communicate simply, making complex technology accessible and understandable.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
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
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-16 md:py-24" style={{ backgroundColor: '#1a1a1d' }} ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className={`text-3xl md:text-4xl font-bold leading-tight mb-16 text-center md:text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ color: '#f1f1f1' }}
        >
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group h-48 transition-all duration-1000 ${
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
                  className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: '#f1f1f1',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div style={{ color: '#1a1a1d' }} className="mb-4">
                    {value.icon}
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-bold text-center"
                    style={{ color: '#1a1a1d' }}
                  >
                    {value.title}
                  </h3>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: '#1a1a1d',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3
                    className="text-lg md:text-xl font-bold mb-4 text-center"
                    style={{ color: '#f1f1f1' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed text-center"
                    style={{ color: '#f1f1f1', opacity: 0.9 }}
                  >
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
