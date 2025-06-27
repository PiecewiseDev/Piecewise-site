import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ButtonPrimary } from '@/components/ui';
import {
  CaseStudyHero,
  CaseStudyProblemSolution,
  CaseStudyResults,
  CaseStudyQuote,
  CaseStudyImplementation,
  CaseStudyBackLink,
} from '@/sections/case-studies';
import { caseStudies } from '@/data/caseStudies';
import { CallToAction } from '@/sections/shared';
import { Result, ImplementationStep } from '@/types';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  // Find the case study by slug
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  // If no matching case study is found, return a fallback or call notFound()
  if (!caseStudy) {
    notFound();
  }

  return {
    title: `${caseStudy.title} | Case Study | Piecewise AI`,
    description: caseStudy.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // Find the case study by slug
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  // If no matching case study is found, return 404
  if (!caseStudy) {
    return notFound();
  }

  // Format results for the Results component
  const formattedResults: Result[] = caseStudy.results.map((result: string) => {
    const [value, metric] = result.split(':').map((part) => part.trim());
    return { value, metric };
  });

  // Create properly formatted implementation steps if they exist
  const implementationSteps: ImplementationStep[] = caseStudy.implementationSteps
    ? caseStudy.implementationSteps.map((step: string) => {
        const parts = step.split(':');
        return {
          title: parts[0].trim(),
          description: parts.slice(1).join(':').trim(),
        };
      })
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <CaseStudyHero
        title={caseStudy.title}
        category={caseStudy.category}
        client={caseStudy.client}
        description={caseStudy.description}
      />

      {/* Challenge & Solution Section */}
      <CaseStudyProblemSolution challenge={caseStudy.challenge} solution={caseStudy.solution} />

      {/* Results Section */}
      <CaseStudyResults
        title="The Results"
        description="Measurable improvements achieved through our AI solution"
        results={formattedResults}
      />

      {/* Quote Section (if available) */}
      {caseStudy.quote && (
        <CaseStudyQuote
          quote={caseStudy.quote.text}
          author={caseStudy.quote.author}
          role="Client"
        />
      )}

      {/* Implementation Steps Section */}
      {implementationSteps.length > 0 && <CaseStudyImplementation steps={implementationSteps} />}

      {/* CTA Section */}
      <CallToAction
        title="Ready to achieve similar results?"
        subtitle="Let's discuss how we can implement a custom AI solution for your business needs."
        buttonText="Schedule a Discovery Call"
        buttonLink="/contact"
      />

      {/* Back Link */}
      <CaseStudyBackLink />
    </div>
  );
}
