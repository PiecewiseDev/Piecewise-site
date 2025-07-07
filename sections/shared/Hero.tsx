'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageSection } from '@/components/layout';
import { HeroProps } from '@/lib/types';

const Hero: React.FC<HeroProps> = ({ subtitle, ctaText, ctaLink, imageAlt }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'visible' | 'out'>('in');

  const words = ['Lead.', 'Serve.', 'Grow.'];
  const staticText = 'Custom AI Tools Built to Help You ';

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (fadeState === 'in') {
      // Word is fading in
      setCurrentWord(words[wordIndex]);
      timer = setTimeout(() => {
        setFadeState('visible');
      }, 500); // 500ms fade in duration
    } else if (fadeState === 'visible') {
      // Word is fully visible - hold for 2 seconds
      timer = setTimeout(() => {
        setFadeState('out');
      }, 2000);
    } else if (fadeState === 'out') {
      // Word is fading out
      timer = setTimeout(() => {
        // Move to next word after fade out
        setWordIndex((prev) => (prev + 1) % words.length);
        setFadeState('in');
      }, 500); // 500ms fade out duration
    }

    return () => clearTimeout(timer);
  }, [fadeState, wordIndex, words]);

  // Determine opacity based on fade state
  const getOpacityClass = () => {
    switch (fadeState) {
      case 'in':
        return 'opacity-0 animate-fade-in';
      case 'visible':
        return 'opacity-100';
      case 'out':
        return 'opacity-0 animate-fade-out';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div className="relative h-[85vh] -mt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/ChatGPTScreenshot.png"
          alt={imageAlt || 'Hero Background'}
          fill
          className="object-cover object-center"
          priority
        />
        {/* Lightened overlay with subtle blur */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px]"></div>
        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/40 to-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 sm:px-8 pt-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 flex flex-col items-center text-gray-900">
            <span className="mb-1 leading-tight drop-shadow-sm">{staticText}</span>
            <span
              className="font-bold h-[1.2em] min-w-[4rem] sm:min-w-[6rem] flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-blue-600 drop-shadow-sm"
              aria-hidden="true"
            >
              <span className={`transition-opacity duration-500 ease-in-out ${getOpacityClass()}`}>
                {currentWord}
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-center max-w-3xl px-2 sm:px-4 text-gray-700 drop-shadow-sm">
            {subtitle}
          </p>
          <div className="flex justify-center items-center">
            <Link
              href={ctaLink || '/contact'}
              prefetch={true}
              className="group bg-blue-600 text-white hover:text-gray-100 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-blue-800 active:shadow-sm active:translate-y-0.5 gap-2 text-sm sm:text-base"
            >
              {ctaText || 'Book a Discovery Call'}
              <span
                aria-hidden="true"
                className="text-current transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Add this to your global CSS file:
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
// .animate-fade-in { animation: fadeIn 500ms ease-in-out forwards; }
// .animate-fade-out { animation: fadeOut 500ms ease-in-out forwards; }
