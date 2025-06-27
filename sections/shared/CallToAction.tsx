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
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#4b6a88] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">{subtitle}</p>
            <Link
              href={buttonLink}
              className="btn bg-white hover:bg-white/90 py-3 px-8 text-lg inline-flex items-center font-medium transition-all duration-200 rounded-lg shadow-lg hover:no-underline text-[#4b6a88] hover:shadow-xl hover:scale-[1.03] transition-all duration-200 ease-in-out focus:ring-2 focus:ring-white ring-offset-2 ring-offset-[#4b6a88]"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default CallToAction;
