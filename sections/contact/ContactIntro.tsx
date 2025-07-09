import React from 'react';
import { PageLabel } from '@/components/ui';

const ContactIntro: React.FC = () => {
  return (
    <div className="relative h-[55vh] -mt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/deskimage1.jpg)',
          filter: 'blur(4px)',
        }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60" />
      {/* Additional gradient overlay for enhanced readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/40" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-20">
        <PageLabel label="Contact" />
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-center animate-fade-in"
          style={{ color: '#1a1a1d', textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)' }}
        >
          Let&apos;s Talk
        </h1>
        <p
          className="text-lg md:text-xl mb-6 text-center max-w-3xl mx-auto animate-fade-in animation-delay-200"
          style={{ color: '#1a1a1d', textShadow: '0 1px 2px rgba(255, 255, 255, 0.6)' }}
        >
          We&apos;ll walk you through what this could look like for your business.
        </p>
      </div>
    </div>
  );
};

export default ContactIntro;
