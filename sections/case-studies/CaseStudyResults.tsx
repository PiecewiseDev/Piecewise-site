'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyResultsProps } from '@/lib/types';

const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ title, description, results }) => {
  return (
    <PageSection background="white" width="wide" animate={true} animationDelay={200}>
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="prose prose-lg text-neutral-darkest-light mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {results.map((result, index) => (
          <div
            key={index}
            className="md:col-span-6 lg:col-span-4 bg-primary/5 rounded-xl p-6 text-center"
          >
            <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
            <div className="text-lg font-medium">{result.metric}</div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default CaseStudyResults;
