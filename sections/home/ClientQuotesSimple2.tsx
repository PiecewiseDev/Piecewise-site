'use client';

import React, { useState } from 'react';
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
    text: 'Piecewise took my business from potentially scalable to imminently scalable.',
    author: 'Luke Plescia',
    title: 'Owner',
    company: 'Legacy Repairs & Remodeling',
    image: '/images/LukePHeadshot.jpg',
  },
  {
    text: 'GPT is just beautiful for creating clear, repeatable, concise systems.',
    author: 'Hunter Allison',
    title: 'Owner',
    company: 'Trinity Parking',
    image: '/images/HunterAllisonHeadshot2.jpeg',
  },
  {
    text: "I don't feel as overwhelmed by my business anymore. I feel more enthusiastic because I know there's levity in the things I don't love to do.",
    author: 'Jen Frontiero',
    title: 'Founder',
    company: 'Fresh Event Services',
    image: '/images/JennFrontieroHeadshot.jpeg',
  },
];

export default function ClientQuotesSimple2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative z-10 border-b border-slate-200"
      aria-labelledby="quotes-heading-2"
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
          id="quotes-heading-2"
          className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest mb-16 sm:mb-18 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32 max-w-full sm:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-4xl leading-tight transition-all duration-500 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Hear From Our Clients
        </h2>

        {/* Quote Display with Navigation Arrows Aligned to Top */}
        <div
          className={`flex gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 items-start transition-all duration-500 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Quote Content */}
          <div className="flex-1">
            {/* Quote Text */}
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-gray-800 leading-loose mb-8 sm:mb-9 md:mb-10 lg:mb-11 xl:mb-12 2xl:mb-14 text-left">
              "{currentQuote.text}"
            </p>

            {/* Author Info */}
            <div className="text-left">
              <p className="font-semibold text-gray-900 text-base sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3">
                {currentQuote.author}
              </p>
              <p className="font-medium text-gray-500 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg">
                {currentQuote.title}, {currentQuote.company}
              </p>
            </div>
          </div>

          {/* Navigation Arrows - Aligned with Quote Top */}
          <div className="flex gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3 flex-shrink-0">
            <button
              onClick={handlePrevious}
              className="p-1.5 sm:p-1.5 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 hover:bg-gray-100 rounded transition-all duration-200"
              aria-label="Previous quote"
            >
              <svg
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 sm:p-1.5 md:p-2 lg:p-2 xl:p-2.5 2xl:p-3 hover:bg-gray-100 rounded transition-all duration-200"
              aria-label="Next quote"
            >
              <svg
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
