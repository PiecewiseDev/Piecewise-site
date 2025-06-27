import React from 'react';
import { PageLabel } from '@/components/ui';

export default function ProcessIntro() {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <PageLabel label="How it works" />
      <h1 className="mb-6 text-center animate-fade-in">Simple, Guided, and Built Around You</h1>
      <p className="text-responsive text-navy-light mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
        Our 4-phase process walks with you from start to finish. No tech skills needed. No rushed
        decisions.
      </p>
    </div>
  );
}
