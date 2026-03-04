'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  {
    name: 'Legacy Repairs & Remodeling',
    logo: '/logos/Legacy+Logo+Black.png',
    url: 'https://www.legacy-remodeling.com/',
  },
  {
    name: 'Fresh Event Services',
    logo: '/logos/Fresheventsserviceslogo.png',
    url: 'https://www.fresheventservices.com/',
  },
  {
    name: 'Trinity Parking',
    logo: '/logos/Trinity+Logo+Wordmark.png',
    url: 'https://www.trinity-parking.com/',
  },
  {
    name: 'Lake Norman Fence',
    logo: '/logos/LKNF-Logo-2022-06.png',
    url: 'https://www.lakenormanfence.com/',
  },
  {
    name: 'Albemarle Paper Supply',
    logo: '/logos/APSfulllogo.png',
    url: 'https://albemarlepaper.com',
  },
];

export function ClientLogoStrip() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-6 md:py-10 xl:py-14 relative z-10 shadow-[0_-1px_2px_rgba(0,0,0,0.01),0_-2px_6px_rgba(0,0,0,0.015),0_1px_2px_rgba(0,0,0,0.02),0_2px_6px_rgba(0,0,0,0.02)]"
      aria-labelledby="clients-heading"
    >
      <div className="inner-section-container">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-14">
          {/* Section Heading */}
          <h2
            id="clients-heading"
            className={`text-sm md:text-base font-medium text-slate-400 text-center md:text-left mb-6 md:mb-0 md:shrink-0 md:max-w-[14rem] transition-[opacity,transform] duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Clients reclaiming an average of 20+ hours/week
          </h2>

          {/* Logo grid */}
          <div
            className={`flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 items-center sm:grid sm:grid-cols-5 sm:justify-items-center flex-1`}
          >
            {clients.map((client, index) => (
              <div
                key={client.name}
                className={`flex items-center justify-center w-[calc(33%-1rem)] sm:w-auto transition-[opacity,transform] duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${100 + index * 75}ms` }}
              >
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${client.name}`}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={150}
                    height={60}
                    className={`h-auto w-auto max-h-8 md:max-h-9 xl:max-h-11 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                      client.name === 'Lake Norman Fence' ? 'scale-110' : ''
                    }`}
                    loading="lazy"
                    title={client.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
