'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyImplementationProps } from '@/lib/types';

const CaseStudyImplementation: React.FC<CaseStudyImplementationProps> = ({ steps }) => {
  return (
    <PageSection background="light" width="wide" animate={true} animationDelay={300}>
      <h2 className="text-3xl font-bold mb-12 text-center">Implementation Steps</h2>

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-6">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                {index + 1}
              </div>
            </div>

            {/* Step Content */}
            <div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-navy-light">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default CaseStudyImplementation;
