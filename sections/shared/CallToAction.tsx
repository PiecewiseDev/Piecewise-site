import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';
import { CallToActionProps } from '@/lib/types';

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  titleSize = 'large',
}) => {
  return (
    <PageSection
      background="white"
      width="wide"
      padding="large"
      animate={true}
      animationDelay={350}
      className="!bg-slate-900 !py-8 sm:!py-10 md:!py-12 lg:!py-14 xl:!py-16 2xl:!py-20"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-16 max-w-6xl 2xl:max-w-7xl mx-auto">
        {/* Left - Title + Subtitle */}
        <div>
          <h2
            className={`${titleSize === 'large' ? 'text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl' : 'text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl'} font-bold text-center md:text-left text-white ${subtitle ? 'mb-3 sm:mb-4 md:mb-5' : ''}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-slate-300 text-center md:text-left max-w-full md:max-w-xl lg:max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right - Primary Button */}
        <div className="flex-shrink-0 flex justify-center md:block">
          <Link
            href={primaryButton.link}
            className="inline-flex items-center justify-center w-auto px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 lg:py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <span className="text-sm sm:text-base md:text-base lg:text-lg font-semibold whitespace-nowrap">
              {primaryButton.text}
            </span>
          </Link>
        </div>
      </div>
    </PageSection>
  );
};

export default CallToAction;
