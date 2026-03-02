import React from 'react';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

// Business type mapping for case studies
const businessTypes: Record<string, string> = {
  'legacy-repairs-remodeling': 'Small Business',
  'trinity-parking': 'Small Business',
  'fresh-events-services': 'Solopreneur',
};

export default function OurWork() {
  return (
    <section
      aria-labelledby="success-stories-heading"
      className="relative bg-slate-100 py-16 sm:py-18 md:py-20 lg:py-22 xl:py-24 2xl:py-28"
    >
      <div className="relative z-10 max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Header with Title */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-gray-400 tracking-wider mb-3">
            CHANGING THE OWNER EXPERIENCE
          </p>
          <h2
            id="success-stories-heading"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-neutral-darkest leading-tight tracking-tight"
          >
            Success Stories
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">
          {caseStudies.slice(0, 2).map((study, index) => (
            <div
              key={study.slug}
              className={`${index === 0 ? 'md:col-span-7 lg:col-span-7 xl:col-span-7 2xl:col-span-7' : 'md:col-span-5 lg:col-span-5 xl:col-span-5 2xl:col-span-5'} group`}
            >
              {/* Image */}
              <div className="relative h-[15rem] sm:h-[17rem] md:h-[20rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[30rem] overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 mb-4 md:mb-5">
                {study.image ? (
                  <>
                    <Image
                      src={study.image}
                      alt={study.imageAlt || study.title}
                      fill
                      className={`object-cover grayscale-[50%] transition-transform duration-500 ${
                        study.slug === 'legacy-repairs-remodeling' ? 'object-[40%_3%]' : ''
                      } ${study.imageObjectPosition || ''}`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-emerald-900/15"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-slate-400 text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-medium">
                      {study.client}
                    </span>
                  </div>
                )}

                {/* Client Logo - Bottom Left */}
                {study.slug === 'legacy-repairs-remodeling' && (
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-7 lg:left-7 xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10">
                    <Image
                      src="/logos/Legacy+Logo+Black.webp"
                      alt="Legacy Repairs & Remodeling Logo"
                      width={160}
                      height={54}
                      className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                )}
                {study.slug === 'trinity-parking' && (
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-7 lg:left-7 xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10">
                    <Image
                      src="/logos/Trinity+Logo+Wordmark.png"
                      alt="Trinity Parking Logo"
                      width={160}
                      height={54}
                      className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                )}
                {study.slug === 'fresh-events-services' && (
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-7 lg:left-7 xl:bottom-8 xl:left-8 2xl:bottom-10 2xl:left-10">
                    <Image
                      src="/logos/Fresheventsserviceslogo.png"
                      alt="Fresh Events Services Logo"
                      width={160}
                      height={54}
                      className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                )}

                {/* Category Badge - Bottom Right - REMOVED */}
              </div>

              {/* Content */}
              <div className="px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 2xl:px-3">
                <h3 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-slate-900 mb-2 md:mb-3 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm md:text-base lg:text-base xl:text-lg text-slate-500 font-medium leading-relaxed">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
