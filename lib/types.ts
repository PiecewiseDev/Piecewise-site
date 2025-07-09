/**
 * Shared Types and Interfaces
 *
 * This file contains all the shared interfaces used throughout the application.
 * Import types from this file instead of defining them in individual components.
 */

// Case Study Types
export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: {
    text: string;
    author: string;
  };
  implementationSteps?: string[];
}

export interface Result {
  metric: string;
  value: string;
}

export interface ImplementationStep {
  title: string;
  description: string;
}

// Component Props Types
export interface CaseStudyHeroProps {
  category: string;
  title: string;
  description: string;
  client: string;
}

export interface CaseStudyResultsProps {
  title: string;
  description: string;
  results: Result[];
}

export interface CaseStudyQuoteProps {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudyImplementationProps {
  steps: ImplementationStep[];
}

export interface CaseStudyProblemSolutionProps {
  challenge: string;
  solution: string;
}

// Shared UI Component Props
export interface CallToActionProps {
  title: string;
  primaryButton: {
    text: string;
    link: string;
    description: string;
  };
  secondaryButton: {
    text: string;
    link: string;
    description: string;
  };
  titleSize?: 'large' | 'small';
}

export interface HeroProps {
  title?: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ContactFormProps {
  onSubmit?: (data: any) => void;
}

// Add additional shared interfaces below as needed
