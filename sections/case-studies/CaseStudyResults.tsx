'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyResultsProps } from '@/lib/types';

const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({ title, description, results }) => {
  return (
    <PageSection background="white" width="wide" animate={true} animationDelay={200}>
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="prose prose-lg text-navy-light mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((result, index) => (
          <div key={index} className="bg-accent/5 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">{result.value}</div>
            <div className="text-lg font-medium">{result.metric}</div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default CaseStudyResults;
