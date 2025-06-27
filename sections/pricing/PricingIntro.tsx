import React from 'react';
import { PageLabel } from '@/components/ui';

const PricingIntro: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <PageLabel label="Pricing" />
      <h1 className="mb-6 text-center animate-fade-in">Clear. Simple. Built Right.</h1>
      <p className="text-responsive text-navy-light mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
        One flat fee. No tiers. No upsells. One GPT that supports your business from the inside out.
      </p>
    </div>
  );
};

export default PricingIntro;
