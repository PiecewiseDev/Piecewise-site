'use client';

import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';

interface CaseStudyBackLinkProps {}

const CaseStudyBackLink: React.FC<CaseStudyBackLinkProps> = () => {
  return (
    <PageSection padding="small" width="wide">
      <Link
        href="/case-studies"
        className="inline-flex items-center text-navy font-medium hover:text-accent transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to all case studies
      </Link>
    </PageSection>
  );
};

export default CaseStudyBackLink;
