'use client';

import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';
import { CallToActionProps } from '@/lib/types';

const CallToAction: React.FC<CallToActionProps> = ({ title, primaryButton, secondaryButton, titleSize = 'large' }) => {
  return (
    <PageSection
      background="white"
      width="wide"
      padding="large"
      animate={true}
      animationDelay={350}
      className="!bg-[#f1f1f1] !py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Left-aligned title */}
        <h2
          className={`${titleSize === 'large' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} font-bold text-center md:text-left mb-16 max-w-3xl mx-auto md:mx-0 md:whitespace-nowrap`}
          style={{ color: '#1a1a1d' }}
        >
          {title}
        </h2>

        {/* Two buttons container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Button */}
          <div className="space-y-3">
            <Link
              href={primaryButton.link}
              className="group inline-flex items-center justify-between w-full px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-200 hover:shadow-sm"
            >
              <span className="text-lg font-semibold" style={{ color: '#1a1a1d' }}>
                {primaryButton.text}
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: '#1a1a1d' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <p className="text-sm" style={{ color: '#1a1a1d', opacity: 0.7 }}>
              {primaryButton.description}
            </p>
          </div>

          {/* Secondary Button */}
          <div className="space-y-3">
            <Link
              href={secondaryButton.link}
              className="group inline-flex items-center justify-between w-full px-6 py-4 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-all duration-200 hover:shadow-sm"
            >
              <span className="text-lg font-semibold" style={{ color: '#1a1a1d' }}>
                {secondaryButton.text}
              </span>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: '#1a1a1d' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <p className="text-sm" style={{ color: '#1a1a1d', opacity: 0.7 }}>
              {secondaryButton.description}
            </p>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default CallToAction;
