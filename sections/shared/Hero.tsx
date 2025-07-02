'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageSection } from '@/components/layout';
import { HeroProps } from '@/lib/types';

const Hero: React.FC<HeroProps> = ({ subtitle, ctaText, ctaLink }) => {
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
      // Word is fully visible - hold for 3 seconds
      timer = setTimeout(() => {
        setFadeState('out');
      }, 3000);
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
    <PageSection
      background="white"
      width="wide"
      padding="large"
      animate={true}
      animationDelay={350}
      className="relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-[#DDE7F2] to-white"
    >
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 flex flex-col items-center"
            style={{ color: '#1a1a1d' }}
          >
            <span className="whitespace-nowrap mb-1 text-center">{staticText}</span>
            <span
              className="font-bold h-[1.2em] min-w-[6rem] flex items-center justify-center text-5xl md:text-7xl"
              style={{ color: '#3a66f7' }}
              aria-hidden="true"
            >
              <span className={`transition-opacity duration-500 ease-in-out ${getOpacityClass()}`}>
                {currentWord}
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center max-w-3xl" style={{ color: '#1a1a1d' }}>
            {subtitle}
          </p>
          <div className="flex justify-center items-center">
            <Link
              href={ctaLink || '/contact'}
              prefetch={true}
              className="text-white rounded-lg px-6 py-3 shadow-sm hover:opacity-90 inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:opacity-90 active:shadow-sm active:translate-y-0.5 gap-2"
              style={{ backgroundColor: '#3a66f7' }}
            >
              {ctaText || 'Book a Discovery Call'}
              <span aria-hidden="true" className="text-current">
                →
              </span>
            </Link>
          </div>
          {/* Image Card Placeholder */}
          <div className="mt-12 w-full max-w-4xl mx-auto mb-[-2rem]">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/images/ChatGPTScreenshot.png"
                alt="Hero Image"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;

// Add this to your global CSS file:
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
// .animate-fade-in { animation: fadeIn 500ms ease-in-out forwards; }
// .animate-fade-out { animation: fadeOut 500ms ease-in-out forwards; }
