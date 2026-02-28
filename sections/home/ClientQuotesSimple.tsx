'use client';

import React from 'react';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks';

interface Quote {
  text: string;
  author: string;
  title: string;
  company: string;
  image: string;
}

const quotes: Quote[] = [
  {
    text: 'Piecewise took my business from potentially scalable to <span class="text-blue-500 font-bold">imminently scalable</span>.',
    author: 'Luke Plescia',
    title: 'Owner',
    company: 'Legacy Repairs & Remodeling',
    image: '/images/LukePHeadshot.jpg',
  },
  {
    text: 'GPT is just beautiful for creating <span class="text-blue-500 font-bold">clear, repeatable, concise systems</span>.',
    author: 'Hunter Allison',
    title: 'Owner',
    company: 'Trinity Parking',
    image: '/images/HunterAllisonHeadshot2.jpeg',
  },
  {
    text: "I don't feel as overwhelmed by my business anymore. <span class=\"text-blue-500 font-bold\">I feel more enthusiastic</span> because I know there's levity in the things I don't love to do.",
    author: 'Jen Frontiero',
    title: 'Founder',
    company: 'Fresh Event Services',
    image: '/images/JennFrontieroHeadshot.jpeg',
  },
];

export default function ClientQuotesSimple() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative z-10"
      aria-labelledby="quotes-heading"
    >
      <div className="mx-auto max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Label */}
        <p
          className={`text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-semibold text-blue-500 uppercase tracking-wider mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-5 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Why Should I Work With Piecewise?
        </p>

        {/* Section Heading */}
        <h2
          id="quotes-heading"
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-12 sm:mb-14 md:mb-16 lg:mb-18 xl:mb-20 2xl:mb-24 max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl leading-tight transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Hear From Our Clients
        </h2>

        {/* Quotes Grid - Three side by side */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 bg-gray-50 border border-gray-200 rounded-xl px-5 pt-5 pb-6 sm:px-6 sm:pt-6 sm:pb-7 md:px-7 md:pt-7 md:pb-8 lg:px-8 lg:pt-8 lg:pb-9 xl:px-9 xl:pt-9 xl:pb-10 2xl:px-10 2xl:pt-10 2xl:pb-11 flex flex-col shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300"
              style={{
                transitionDelay: `${(index + 2) * 100}ms`,
              }}
            >
              {/* Quote Text */}
              <p
                className="text-base sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10 2xl:mb-12 flex-1"
                dangerouslySetInnerHTML={{ __html: `"${quote.text}"` }}
              />

              {/* Author Info - Inside the box, fixed at bottom */}
              <div className="flex items-start gap-3 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-5">
                {/* Headshot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 rounded-lg bg-gray-200 overflow-hidden">
                    <Image
                      src={quote.image}
                      alt={quote.author}
                      width={72}
                      height={72}
                      className={`w-full h-full object-cover ${quote.author === 'Luke Plescia' ? 'object-[center_20%]' : ''}`}
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <div className="space-y-0.5">
                  <p className="font-semibold text-neutral-darkest text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base leading-tight">
                    {quote.author}
                  </p>
                  <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-gray-600 leading-tight">
                    {quote.title}
                  </p>
                  <p className="text-[10px] sm:text-[10px] md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-gray-600 leading-tight">
                    {quote.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
