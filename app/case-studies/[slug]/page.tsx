import React from 'react';
import { redirect } from 'next/navigation';
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

export function generateMetadata(): Metadata {
  // Return empty metadata since we're redirecting anyway
  return {};
}

export default function CaseStudyPage() {
  // Redirect to home page - case study pages temporarily archived
  redirect('/');

  // Case study pages temporarily archived
  // Original implementation code removed
}
