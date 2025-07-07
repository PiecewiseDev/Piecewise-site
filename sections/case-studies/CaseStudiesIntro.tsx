'use client';

import React from 'react';
import { PageLabel } from '@/components/ui';

export default function CaseStudiesIntro() {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <PageLabel label="Case Studies" />
      <h1 className="mb-6 text-center animate-fade-in">Real Businesses. Real Wins.</h1>
      <p className="text-responsive text-navy-light mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
        Every Custom GPT is trained on one real company. Here&apos;s how it&apos;s working in the
        field.
      </p>
    </div>
  );
}
