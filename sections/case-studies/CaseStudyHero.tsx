'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyHeroProps } from '@/lib/types';

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ category, title, description, client }) => {
  return (
    <PageSection width="narrow" padding="large" animate={true}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
          {category}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="text-xl font-medium leading-relaxed text-navy mb-6">{description}</p>
        <div className="text-sm text-slate-500">
          Client: <span className="font-medium">{client}</span>
        </div>
      </div>
    </PageSection>
  );
};

export default CaseStudyHero;
