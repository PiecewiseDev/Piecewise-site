'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface ClientSlide {
  id: number;
  backgroundImage: string;
  logoSrc: string;
  logoAlt: string;
  location: string;
  website: string;
}

const PartnershipShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3); // 3 slides total
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, isVisible]);

  // Clear auto-play when component unmounts
  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Client data with website URLs
  const clients: ClientSlide[] = [
    {
      id: 1,
      backgroundImage: '/images/LRRBackground2.jpg',
      logoSrc: '/logos/Legacy+Logo+Black.png',
      logoAlt: 'Legacy Logo',
      location: 'Louisville, KY',
      website: 'https://www.legacy-remodeling.com/',
    },
    {
      id: 2,
      backgroundImage: '/images/TrinityBackground2.png',
      logoSrc: '/logos/Trinity+Logo+Wordmark.png',
      logoAlt: 'Trinity Logo',
      location: 'Nashville, TN',
      website: 'https://www.trinity-parking.com/',
    },
    {
      id: 3,
      backgroundImage: '/images/LKNFBackground2.jpg',
      logoSrc: '/logos/LKNF-Logo-2022-06.png',
      logoAlt: 'LKNF Logo',
      location: 'Charlotte, NC',
      website: 'https://www.lakenormanfence.com/',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clients.length);
    // Pause auto-play briefly when user manually navigates
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // Resume after 6 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clients.length) % clients.length);
    // Pause auto-play briefly when user manually navigates
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // Resume after 6 seconds
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    // Pause auto-play briefly when user manually navigates
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000); // Resume after 6 seconds
  };

  return (
    <div style={{ backgroundColor: '#f1f1f1' }} className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Carousel */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="relative h-[32rem] rounded-xl overflow-hidden shadow-[-8px_0_16px_-4px_rgba(0,0,0,0.1)]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {clients.map((client, index) => (
                  <div key={client.id} className="min-w-full h-full relative flex-shrink-0">
                    {/* Background Image with Placeholder */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500"
                      style={{
                        backgroundImage: `url(${client.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark Overlay for Logo Visibility */}
                      <div className="absolute inset-0 bg-black/30"></div>

                      {/* Logo and Location Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        {/* Logo Strip */}
                        <div
                          className={`w-full h-32 flex items-center justify-center mb-4 shadow-lg ${
                            client.logoAlt === 'Trinity Logo' ? 'bg-white/50' : 'bg-white/75'
                          }`}
                        >
                          <Link
                            href={client.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:opacity-80"
                          >
                            <img
                              src={client.logoSrc}
                              alt={client.logoAlt}
                              className={`w-auto object-contain cursor-pointer ${
                                client.logoAlt === 'Trinity Logo'
                                  ? 'h-12 drop-shadow-md filter contrast-110 saturate-110'
                                  : client.logoAlt === 'LKNF Logo'
                                    ? 'h-20'
                                    : 'h-16'
                              }`}
                              style={
                                client.logoAlt === 'Trinity Logo'
                                  ? {
                                      filter:
                                        'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15)) contrast(110%)',
                                    }
                                  : undefined
                              }
                            />
                          </Link>
                        </div>

                        {/* Location Text */}
                        <p className="text-lg font-medium text-white drop-shadow-lg">
                          {client.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
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
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
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

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <h2
              className={`text-4xl md:text-5xl font-bold leading-tight text-center md:text-left transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ color: '#1a1a1d' }}
            >
              Who We Partner With
            </h2>

            {/* Bulleted List */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p
                className="text-lg md:text-xl leading-relaxed max-w-lg text-center md:text-left"
                style={{ color: '#1a1a1d', opacity: 0.9 }}
              >
                We work closely with:
              </p>
              <div className="flex justify-center md:justify-start">
                <ul
                  className="space-y-3 text-lg inline-block text-left"
                  style={{ color: '#1a1a1d' }}
                >
                  <li className="flex items-start">
                    <span
                      className="inline-block w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                      style={{ backgroundColor: '#1a1a1d' }}
                    ></span>
                    <span>Contractors and crew-based operations</span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="inline-block w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                      style={{ backgroundColor: '#1a1a1d' }}
                    ></span>
                    <span>Owners and managers with full plates</span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="inline-block w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                      style={{ backgroundColor: '#1a1a1d' }}
                    ></span>
                    <span>Admins and team leads managing details</span>
                  </li>
                  <li className="flex items-start">
                    <span
                      className="inline-block w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                      style={{ backgroundColor: '#1a1a1d' }}
                    ></span>
                    <span>Teams exploring smarter systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipShowcase;
