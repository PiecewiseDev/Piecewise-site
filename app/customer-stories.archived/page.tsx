'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative -mt-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 2xl:pt-44 pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-6 2xl:pb-8 bg-[#f4f4f5]">
        <div className="inner-section-container">
          <div className="max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-darkest tracking-tight leading-tight mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12">
              Success Stories
            </h1>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-slate-500 leading-relaxed max-w-full sm:max-w-full md:max-w-lg lg:max-w-xl xl:max-w-xl 2xl:max-w-2xl">
              Don't take our word for it, see how leading local businesses are using AI to run
              smarter and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study - Large Hero Card */}
      <section className="relative pt-1 sm:pt-1 md:pt-2 lg:pt-3 xl:pt-4 2xl:pt-5 pb-2 sm:pb-2 md:pb-3 lg:pb-4 xl:pt-5 2xl:pb-6 bg-[#f4f4f5] overflow-hidden">
        <div className="inner-section-container">
          <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10 2xl:mt-12">
            <Link
              href={`/case-studies/${caseStudies[0].slug}`}
              className="group block bg-white rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-xl xl:rounded-xl 2xl:rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-7 2xl:gap-8 p-5 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8">
                {/* Image Side */}
                <div className="relative h-72 sm:h-80 md:h-96 lg:h-auto xl:h-auto 2xl:h-auto overflow-hidden rounded-md bg-gradient-to-br from-blue-100 to-indigo-100">
                  <Image
                    src={
                      caseStudies[0].slug === 'legacy-repairs-remodeling'
                        ? '/images/LegacyRRteam1.jpg'
                        : caseStudies[0].slug === 'trinity-parking'
                          ? '/images/TrinityBackground2.webp'
                          : caseStudies[0].slug === 'fresh-events-services'
                            ? '/images/fresheventsservicesflower1.png'
                            : caseStudies[0].slug === 'lake-norman-fence'
                              ? '/images/LKNFBackground2.webp'
                              : '/images/LKNFBackground2.webp'
                    }
                    alt={`${caseStudies[0].client} case study`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

                  {/* Client Logo - Bottom Left */}
                  {caseStudies[0].slug === 'legacy-repairs-remodeling' && (
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-6 lg:left-6 xl:bottom-7 xl:left-7 2xl:bottom-8 2xl:left-8">
                      <Image
                        src="/logos/Legacy+Logo+Black.webp"
                        alt="Legacy Repairs & Remodeling Logo"
                        width={180}
                        height={60}
                        className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  )}
                  {caseStudies[0].slug === 'trinity-parking' && (
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-6 lg:left-6 xl:bottom-7 xl:left-7 2xl:bottom-8 2xl:left-8">
                      <Image
                        src="/logos/Trinity+Logo+Wordmark.png"
                        alt="Trinity Parking Logo"
                        width={180}
                        height={60}
                        className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  )}
                  {caseStudies[0].slug === 'fresh-events-services' && (
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-6 lg:left-6 xl:bottom-7 xl:left-7 2xl:bottom-8 2xl:left-8">
                      <Image
                        src="/logos/Fresheventsserviceslogo.png"
                        alt="Fresh Events Services Logo"
                        width={180}
                        height={60}
                        className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  )}
                  {caseStudies[0].slug === 'lake-norman-fence' && (
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 md:bottom-6 md:left-6 lg:bottom-6 lg:left-6 xl:bottom-7 xl:left-7 2xl:bottom-8 2xl:left-8">
                      <Image
                        src="/logos/LKNF-Logo-2022-06.webp"
                        alt="Lake Norman Fence Logo"
                        width={180}
                        height={60}
                        className="opacity-90 brightness-0 invert w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-52"
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="p-1 sm:p-2 md:p-4 lg:p-6 xl:p-7 2xl:p-8 flex flex-col justify-center">
                  <div>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-neutral-darkest mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6 leading-tight transition-colors">
                      {caseStudies[0].title}
                    </h2>
                    <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-4 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-6 2xl:mb-6 pr-2 sm:pr-2 md:pr-4 lg:pr-6 xl:pr-8 2xl:pr-10">
                      {caseStudies[0].description}
                    </p>
                  </div>

                  {/* Key Results - Enhanced */}
                  {caseStudies[0].results && caseStudies[0].results.length > 0 && (
                    <div className="space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4 mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7 2xl:mb-8">
                      {caseStudies[0].results.slice(0, 3).map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4"
                        >
                          <div className="flex-shrink-0 w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full bg-blue-200 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-3.5 lg:h-3.5 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium text-gray-600">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4 text-primary text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-semibold group-hover:gap-4 transition-all">
                    <span>Read the full story</span>
                    <svg
                      className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* More Case Studies - Grid */}
      {caseStudies.length > 1 && (
        <section className="relative pt-2 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-5 2xl:pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32 bg-[#f4f4f5] overflow-hidden">
          <div className="inner-section-container">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
              {caseStudies.slice(1).map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-white rounded-lg p-5 sm:p-5 md:p-6 lg:p-6 xl:p-7 2xl:p-8 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 sm:h-60 md:h-64 lg:h-64 xl:h-72 2xl:h-80 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 rounded-md mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-9 2xl:mb-10">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.imageAlt || `${study.client} case study`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`object-cover group-hover:scale-110 transition-transform duration-500 ${study.imageObjectPosition || ''}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-slate-400 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
                          {study.client}
                        </span>
                      </div>
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Client Logo - Bottom Left */}
                    {study.slug === 'legacy-repairs-remodeling' && (
                      <div className="absolute bottom-3 left-3 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4 xl:bottom-5 xl:left-5 2xl:bottom-6 2xl:left-6">
                        <Image
                          src="/logos/Legacy+Logo+Black.webp"
                          alt="Legacy Repairs & Remodeling Logo"
                          width={140}
                          height={47}
                          className="opacity-90 brightness-0 invert w-28 sm:w-30 md:w-32 lg:w-34 xl:w-36 2xl:w-40"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                    )}
                    {study.slug === 'trinity-parking' && (
                      <div className="absolute bottom-3 left-3 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4 xl:bottom-5 xl:left-5 2xl:bottom-6 2xl:left-6">
                        <Image
                          src="/logos/Trinity+Logo+Wordmark.png"
                          alt="Trinity Parking Logo"
                          width={140}
                          height={47}
                          className="opacity-90 brightness-0 invert w-28 sm:w-30 md:w-32 lg:w-34 xl:w-36 2xl:w-40"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                    )}
                    {study.slug === 'fresh-events-services' && (
                      <div className="absolute bottom-3 left-3 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4 xl:bottom-5 xl:left-5 2xl:bottom-6 2xl:left-6">
                        <Image
                          src="/logos/Fresheventsserviceslogo.png"
                          alt="Fresh Events Services Logo"
                          width={140}
                          height={47}
                          className="opacity-90 brightness-0 invert w-28 sm:w-30 md:w-32 lg:w-34 xl:w-36 2xl:w-40"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                    )}
                    {study.slug === 'lake-norman-fence' && (
                      <div className="absolute bottom-3 left-3 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-4 lg:left-4 xl:bottom-5 xl:left-5 2xl:bottom-6 2xl:left-6">
                        <Image
                          src="/logos/LKNF-Logo-2022-06.webp"
                          alt="Lake Norman Fence Logo"
                          width={140}
                          height={47}
                          className="opacity-90 brightness-0 invert w-28 sm:w-30 md:w-32 lg:w-34 xl:w-36 2xl:w-40"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-medium text-gray-900 mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-7 2xl:mb-8 leading-tight transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-lg font-normal text-gray-500 leading-relaxed mb-12 sm:mb-14 md:mb-16 lg:mb-16 xl:mb-18 2xl:mb-20 pr-2 sm:pr-2 md:pr-3 lg:pr-4 xl:pr-4 2xl:pr-6">
                      {study.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section className="!bg-section-light !py-12 sm:!py-16 md:!py-20 lg:!py-24 xl:!py-28 2xl:!py-32">
        <div className="inner-section-container">
          {/* Left-aligned title */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-center md:text-left lg:text-left xl:text-left 2xl:text-left mb-10 sm:mb-11 md:mb-12 lg:mb-13 xl:mb-14 2xl:mb-16 max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl mx-auto md:mx-0 md:whitespace-nowrap text-neutral-darkest">
            Take the first step
          </h2>

          {/* Two buttons container */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10 2xl:gap-12">
            {/* Primary Button */}
            <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between w-full px-5 sm:px-5 md:px-6 lg:px-6 xl:px-7 2xl:px-8 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-6 border-2 border-gray-400 rounded-lg hover:border-neutral-darkest transition-all duration-200 hover:shadow-md"
              >
                <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-neutral-darkest">
                  Work with us
                </span>
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 transition-transform duration-200 group-hover:translate-x-1 text-neutral-darkest"
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
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-600">
                Schedule a discovery call to explore AI solutions for your business
              </p>
            </div>

            {/* Secondary Button */}
            <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 space-y-2 sm:space-y-2 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-between w-full px-5 sm:px-5 md:px-6 lg:px-6 xl:px-7 2xl:px-8 py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 2xl:py-6 border-2 border-gray-400 rounded-lg hover:border-neutral-darkest transition-all duration-200 hover:shadow-md"
              >
                <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-semibold text-neutral-darkest">
                  Learn more about us
                </span>
                <svg
                  className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 transition-transform duration-200 group-hover:translate-x-1 text-neutral-darkest"
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
              <p className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base text-gray-600">
                Discover our mission and approach to custom AI development
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
