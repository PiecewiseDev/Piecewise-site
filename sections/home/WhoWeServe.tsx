'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface ClientProfile {
  category: string;
  name: string;
  title: string;
  company: string;
  headshot: string;
  companyLogo: string;
  quote: string;
}

const clients: ClientProfile[] = [
  {
    category: 'SCALING FOUNDERS',
    name: 'Luke Plescia',
    title: 'Owner',
    company: 'Legacy Repairs & Remodeling',
    headshot: '/images/LukePHeadshot.jpg',
    companyLogo: '/logos/Legacy+Logo+Black.png',
    quote:
      'Piecewise helped us scale from a local contractor to a regional leader. Their AI tools transformed how we manage projects.',
  },
  {
    category: 'OWNER-INDEPENDENT BUILDERS',
    name: 'Hunter Allison',
    title: 'Owner',
    company: 'Trinity Parking',
    headshot: '/images/HunterAllisonHeadshot2.jpeg',
    companyLogo: '/logos/Trinity+Logo+Wordmark.png',
    quote:
      'As an independent builder, I needed efficiency without sacrificing quality. Piecewise delivered exactly that.',
  },
  {
    category: 'ESTABLISHED BUSINESS OWNERS',
    name: 'Nick & John Kalogeromitros',
    title: 'Co-Owners',
    company: 'Albemarle Paper Supply',
    headshot: '/images/NickandJohnKalogeromitros.jpeg',
    companyLogo: '/logos/APSfulllogo.png',
    quote:
      'The automation solutions saved us 15+ hours a week. Now we can focus on growing our business instead of managing spreadsheets.',
  },
  {
    category: 'SOLOPRENEURS',
    name: 'Jen Frontiero',
    title: 'Founder',
    company: 'Fresh Event Services',
    headshot: '/images/JennFrontieroHeadshot.jpeg',
    companyLogo: '/logos/Fresheventsserviceslogo.png',
    quote:
      'Piecewise modernized our operations while keeping our personal touch. Our clients notice the difference.',
  },
];

export default function WhoWeServe() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 relative overflow-hidden"
      aria-labelledby="who-we-serve-heading"
    >
      <div className="relative mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Label */}
        <p
          className={`text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Who do we solve it for?
        </p>

        {/* Section Heading */}
        <h2
          id="who-we-serve-heading"
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 max-w-full sm:max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl leading-tight transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Business Owners at Every Stage
        </h2>

        {/* Client Profiles Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Container with right and bottom borders only */}
              <div className="relative border-r border-b border-gray-300 rounded-br-xl py-6 px-4 h-full flex flex-col overflow-hidden">
                {/* White overlay to hide the left 25% of bottom border */}
                <div className="absolute bottom-0 left-0 w-[25%] h-px bg-white z-10"></div>

                {/* Hover overlay with quote - slides up from bottom */}
                <div className="absolute inset-0 bg-gray-100 rounded-tl-xl rounded-br-xl translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-30 flex flex-col items-start justify-start p-6 px-4 pt-6">
                  {/* Category Label - shown in hover state */}
                  <p className="text-[8px] sm:text-[8px] md:text-[9px] lg:text-[9px] xl:text-[10px] 2xl:text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-6">
                    {client.category}
                  </p>

                  {/* Quote */}
                  <p className="text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-medium text-gray-800 text-left pr-8">
                    "{client.quote}"
                  </p>
                </div>

                {/* Content */}
                <div className="flex flex-col items-start relative z-20 flex-1 justify-between">
                  {/* Category Label */}
                  <div>
                    <p className="text-[8px] sm:text-[8px] md:text-[9px] lg:text-[9px] xl:text-[10px] 2xl:text-[10px] font-medium text-gray-500 uppercase tracking-wider mb-4 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-6 2xl:mb-8">
                      {client.category}
                    </p>

                    {/* Headshot */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 rounded-2xl bg-gray-200 overflow-hidden mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4 2xl:mb-4">
                      <Image
                        src={client.headshot}
                        alt={client.name}
                        width={208}
                        height={208}
                        className={`w-full h-full ${
                          client.name === 'Nick & John Kalogeromitros'
                            ? 'object-cover object-[center_30%] scale-150'
                            : client.name === 'Luke Plescia'
                              ? 'object-cover object-[center_20%]'
                              : 'object-cover'
                        }`}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base font-medium text-neutral-darkest mb-0">
                      {client.name}
                    </h3>

                    {/* Title */}
                    <p className="text-[9px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-xs text-gray-500 mb-0.5">
                      {client.title}
                    </p>

                    {/* Company Name */}
                    <p className="text-[9px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-xs text-gray-500 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-18">
                      {client.company}
                    </p>
                  </div>

                  {/* Company Logo - aligned to bottom */}
                  <div className="w-12 h-6 sm:w-16 sm:h-8 md:w-20 md:h-10 lg:w-24 lg:h-10 xl:w-28 xl:h-12 2xl:w-32 2xl:h-14 relative">
                    <Image
                      src={client.companyLogo}
                      alt={`${client.company} logo`}
                      fill
                      className="object-contain grayscale opacity-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
