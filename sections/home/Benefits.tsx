'use client';

import React, { useEffect, useState, useRef } from 'react';
import { PageSection } from '@/components/layout';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ title, subtitle, benefits }) => {
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
    <PageSection background="light" width="wide" padding="large">
      <div ref={containerRef}>
        <div
          className={`max-w-4xl mx-auto mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{title}</h2>
          <p className="text-responsive font-medium leading-relaxed text-navy">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-card p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150 + 300}ms` : '0ms',
              }}
            >
              <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 tracking-tight">{benefit.title}</h3>
              <p className="font-medium leading-relaxed text-navy">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Benefits;
