import React from 'react';
import { PageLabel } from '@/components/ui';

const ContactIntro: React.FC = () => {
  return (
    <div className="py-8 sm:py-12" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <PageLabel label="Contact" />
        <h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-center animate-fade-in"
          style={{ color: '#1a1a1d' }}
        >
          Let&apos;s Talk
        </h1>
        <p
          className="text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200"
          style={{ color: '#1a1a1d' }}
        >
          We&apos;ll walk you through what this could look like for your business.
        </p>
      </div>
    </div>
  );
};

export default ContactIntro;
