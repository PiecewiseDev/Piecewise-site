'use client';

import React from 'react';
import { PageSection } from '@/components/layout';
import { CaseStudyProblemSolutionProps } from '@/lib/types';

const CaseStudyProblemSolution: React.FC<CaseStudyProblemSolutionProps> = ({
  challenge,
  solution,
}) => {
  return (
    <PageSection background="light" width="wide" animate={true} animationDelay={150}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Challenge */}
        <div>
          <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
          <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: challenge }} />
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-2xl font-bold mb-4">The Solution</h3>
          <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: solution }} />
        </div>
      </div>
    </PageSection>
  );
};

export default CaseStudyProblemSolution;
