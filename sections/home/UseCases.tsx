'use client';

import React, { useEffect, useState, useRef } from 'react';
import { PageSection } from '@/components/layout';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
  promptExample: string;
}

interface UseCasesProps {
  title: string;
  subtitle: string;
  useCases: UseCase[];
}

const UseCases: React.FC<UseCasesProps> = ({ title, subtitle, useCases }) => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-responsive text-slate-600 mb-6">{subtitle}</p>
        </div>

        {/* Static grid container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className={`h-full transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150 + 300}ms` : '0ms',
                }}
              >
                <div className="bg-white rounded-lg shadow-card p-6 h-full border border-gray-100">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-slate-600 mb-5">{useCase.description}</p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="text-xs font-medium text-navy-light uppercase mb-2">
                      Sample Prompt
                    </div>
                    <p className="text-navy italic">{useCase.promptExample}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default UseCases;
