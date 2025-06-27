import React from 'react';
import { PageLabel } from '@/components/ui';

const ContactIntro: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <PageLabel label="Contact" />
      <h1 className="mb-6 text-center animate-fade-in">Let&apos;s Talk</h1>
      <p className="text-responsive text-navy-light mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200">
        We&apos;ll walk you through what this could look like for your business. It&apos;s
        zero-pressure and 100% guided.
      </p>
    </div>
  );
};

export default ContactIntro;
