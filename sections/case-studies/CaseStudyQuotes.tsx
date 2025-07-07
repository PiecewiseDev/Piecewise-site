'use client';

import React, { useEffect, useRef } from 'react';

export default function CaseStudyQuotes() {
  // Carousel autoplay reference
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  // Handle autoplay for quotes carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.snap-center');
    if (slides.length === 0) return;

    const scrollToNextSlide = () => {
      if (!carousel) return;

      currentIndexRef.current = (currentIndexRef.current + 1) % slides.length;
      const nextSlide = slides[currentIndexRef.current] as HTMLElement;

      carousel.scrollTo({
        left: nextSlide.offsetLeft - carousel.offsetLeft,
        behavior: 'smooth',
      });

      // Set timeout for next slide
      autoplayTimeoutRef.current = setTimeout(scrollToNextSlide, 5000);
    };

    // Start autoplay
    autoplayTimeoutRef.current = setTimeout(scrollToNextSlide, 5000);

    // Reset autoplay when user interacts with carousel
    const handleInteraction = () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
        autoplayTimeoutRef.current = setTimeout(scrollToNextSlide, 8000);
      }
    };

    carousel.addEventListener('touchstart', handleInteraction);
    carousel.addEventListener('mousedown', handleInteraction);
    carousel.addEventListener('scroll', handleInteraction);

    // Cleanup
    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }

      carousel.removeEventListener('touchstart', handleInteraction);
      carousel.removeEventListener('mousedown', handleInteraction);
      carousel.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  return (
    <div className="mb-16 animate-fade-in animation-delay-600">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy">
        What Our Clients Say
      </h2>

      <div className="bg-white rounded-xl shadow-md p-6 overflow-hidden relative">
        {/* Decorative large quote mark */}
        <div className="absolute top-4 left-6 md:top-6 md:left-10 opacity-10">
          <svg
            className="w-20 h-20 text-accent"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </div>

        {/* Quote carousel - scrollable container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-6 px-4 md:px-8 pt-8 md:pt-10 quotes-carousel snap-x snap-mandatory"
        >
          {/* Quote 1 */}
          <div className="flex-shrink-0 w-full md:w-80 lg:w-96 snap-center">
            <div className="bg-blue-50/50 rounded-lg p-6 h-full relative">
              <p className="text-navy-light italic mb-4 leading-relaxed text-lg">
                "I didn't think AI could help with crew reminders—but it nailed our tone. Our team
                actually likes using it."
              </p>
              <p className="font-medium text-navy">Tom, Tree Service Owner</p>
            </div>
          </div>

          {/* Quote 2 */}
          <div className="flex-shrink-0 w-full md:w-80 lg:w-96 snap-center">
            <div className="bg-blue-50/50 rounded-lg p-6 h-full relative">
              <p className="text-navy-light italic mb-4 leading-relaxed text-lg">
                "The Custom GPT handles billing questions better than most of my staff. Clients
                can't tell they're talking to AI."
              </p>
              <p className="font-medium text-navy">Sarah, Accounting Practice Manager</p>
            </div>
          </div>

          {/* Quote 3 */}
          <div className="flex-shrink-0 w-full md:w-80 lg:w-96 snap-center">
            <div className="bg-blue-50/50 rounded-lg p-6 h-full relative">
              <p className="text-navy-light italic mb-4 leading-relaxed text-lg">
                "Within a week of launching, our Custom GPT had already saved me from 15+ repetitive
                calls about project timelines."
              </p>
              <p className="font-medium text-navy">Miguel, Interior Designer</p>
            </div>
          </div>

          {/* Quote 4 */}
          <div className="flex-shrink-0 w-full md:w-80 lg:w-96 snap-center">
            <div className="bg-blue-50/50 rounded-lg p-6 h-full relative">
              <p className="text-navy-light italic mb-4 leading-relaxed text-lg">
                "My clients love getting immediate answers at 9 PM when I'm with my family. It's
                like having an assistant who never sleeps."
              </p>
              <p className="font-medium text-navy">Rachel, Real Estate Agent</p>
            </div>
          </div>
        </div>

        {/* Mobile swipe indicator */}
        <div className="md:hidden flex justify-center mt-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-accent/60"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
          </div>
        </div>

        {/* Mobile hint text */}
        <div className="md:hidden text-center mt-3">
          <p className="text-xs text-navy-light">Swipe for more</p>
        </div>
      </div>
    </div>
  );
}
