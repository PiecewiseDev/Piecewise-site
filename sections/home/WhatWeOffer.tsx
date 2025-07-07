'use client';

import React, { useEffect, useState, useRef } from 'react';

const WhatWeOffer: React.FC = () => {
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

  const offerings = [
    {
      phase: '1',
      title: 'Discovery & Strategy',
      description:
        'We understand your business, identify opportunities, and map out an AI implementation plan that fits your workflow.',
      features: ['Business assessment', 'Workflow analysis', 'Custom strategy roadmap'],
      color: '#3a66f7',
    },
    {
      phase: '2',
      title: 'Custom AI Development',
      description:
        'We build and train AI tools specifically for your business, using your data, processes, and business knowledge.',
      features: ['Custom AI training', 'Integration setup', 'Knowledge base creation'],
      color: '#3DAEFF',
    },
    {
      phase: '3',
      title: 'Implementation & Support',
      description:
        'We ensure smooth adoption with training, ongoing support, and continuous optimization as your business evolves.',
      features: ['Team training', 'Ongoing support', 'Performance optimization'],
      color: '#9A8CFB',
    },
  ];

  return (
    <div
      style={{ backgroundColor: '#1a1a1d' }}
      className="py-16 md:py-24 shadow-[0_-8px_32px_rgba(0,0,0,0.15),0_8px_32px_rgba(0,0,0,0.15)]"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: '#f1f1f1' }}
          >
            What We Offer
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {offerings.map((offering, index) => (
                        <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-1000 border border-white/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                background: `linear-gradient(to right, #1a1a1d, ${offering.color}30)`,
                transitionDelay: isVisible ? `${index * 200 + 300}ms` : '0ms',
              }}
            >
              {/* Content */}
              <div className="space-y-6 pt-4">
                <h3
                  className="text-lg md:text-xl font-bold text-left"
                  style={{ color: '#f1f1f1' }}
                >
                  {offering.title}
                </h3>

                <p
                  className="text-base leading-relaxed text-left"
                  style={{ color: '#f1f1f1', opacity: 0.9 }}
                >
                  {offering.description}
                </p>

                {/* Features List */}
                <div>
                  <ul className="space-y-3 pt-2">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span
                          className="inline-block w-2 h-2 rounded-full mt-2.5 mr-3 flex-shrink-0"
                          style={{
                            backgroundColor: offering.color,
                          }}
                        ></span>
                        <span className="text-sm" style={{ color: '#f1f1f1', opacity: 0.8 }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
