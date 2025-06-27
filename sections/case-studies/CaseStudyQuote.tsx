'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyQuoteProps } from '@/lib/types';

const CaseStudyQuote: React.FC<CaseStudyQuoteProps> = ({ quote, author, role }) => {
  return (
    <PageSection background="accent" width="narrow" centered animate={true} animationDelay={250}>
      <div className="relative">
        <svg
          className="text-white opacity-10 w-24 h-24 absolute -top-10 -left-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <blockquote className="text-xl lg:text-2xl text-white font-medium text-center mb-6">
          "{quote}"
        </blockquote>

        <div className="text-center text-white">
          <div className="font-bold">{author}</div>
          <div className="text-white/80">{role}</div>
        </div>
      </div>
    </PageSection>
  );
};

export default CaseStudyQuote;
