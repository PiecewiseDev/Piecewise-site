'use client';

import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';
import { CallToActionProps } from '@/lib/types';

const CallToAction: React.FC<CallToActionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <PageSection
      background="white"
      width="wide"
      padding="normal"
      centered
      animate={true}
      animationDelay={350}
      className="!bg-[#f1f1f1]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#4a6fa5] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
            <Link
              href={buttonLink}
              className="group btn bg-white hover:bg-white/90 py-3 px-8 text-lg inline-flex items-center font-medium transition-all duration-200 rounded-lg shadow-lg hover:no-underline text-[#4a6fa5] hover:text-[#3a5f95] hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out focus:ring-2 focus:ring-white ring-offset-2 ring-offset-[#4a6fa5]"
            >
              {buttonText}
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default CallToAction;
