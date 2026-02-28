'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

export default function ClientQuoteHighlight() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-blue-900 py-8 md:py-12 xl:py-14"
      aria-label="Client testimonial"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        <blockquote
          className={`flex flex-row items-center gap-6 md:gap-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex-1 text-left">
            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-normal text-white/90 !leading-normal max-w-prose">
              &ldquo;When my daughter was born, I was able to step away from the business for the{' '}
              <strong className="font-extrabold text-white">first time ever</strong>. My team knew
              exactly what to do without me.&rdquo;
            </p>
            <footer
              className={`mt-4 md:mt-5 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <cite className="not-italic text-xs sm:text-xs md:text-sm">
                <span className="font-bold text-slate-300">Luke Plescia</span>
                <span className="text-slate-400"> Founder, Legacy Repairs &amp; Remodeling</span>
              </cite>
            </footer>
          </div>
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/LukePHeadshot.jpg"
              alt="Luke Plescia"
              fill
              className="object-cover object-[50%_25%]"
              sizes="96px"
            />
          </div>
        </blockquote>
      </div>
    </section>
  );
}
