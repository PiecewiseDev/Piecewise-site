'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  imageSrc?: string;
}

export default function ClientTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        'Piecewise built us a Custom GPT that saves our team over 15 hours per week on customer inquiries. It feels like having an extra team member who knows all our policies and procedures.',
      name: 'Sarah Johnson',
      title: 'Operations Manager',
      company: 'GreenScape Landscaping',
      imageSrc: '/images/testimonials/sarah.jpg',
    },
    {
      quote:
        'I was skeptical about AI, but Piecewise took the time to understand our business and delivered a solution that actually works for our specific needs. The ROI has been incredible.',
      name: 'Michael Chen',
      title: 'Founder',
      company: 'EcoHome Solutions',
      imageSrc: '/images/testimonials/michael.jpg',
    },
    {
      quote:
        'The Custom GPT we got from Piecewise has transformed how we onboard new employees. Training time has been cut in half, and our new hires get up to speed much faster.',
      name: 'Lisa Rodriguez',
      title: 'HR Director',
      company: 'Bright Education Services',
      imageSrc: '/images/testimonials/lisa.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const resetAutoplayTimer = () => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }

    autoplayTimeoutRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      scrollToIndex(nextIndex);
    }, 8000);
  };

  useEffect(() => {
    resetAutoplayTimer();

    const scrollContainer = scrollRef.current;

    const handleInteraction = () => {
      resetAutoplayTimer();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('touchstart', handleInteraction);
      scrollContainer.addEventListener('mousedown', handleInteraction);
      scrollContainer.addEventListener('wheel', handleInteraction);
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }

      if (scrollContainer) {
        scrollContainer.removeEventListener('touchstart', handleInteraction);
        scrollContainer.removeEventListener('mousedown', handleInteraction);
        scrollContainer.removeEventListener('wheel', handleInteraction);
      }
    };
  }, [currentIndex, testimonials.length]);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">What Our Clients Say</h2>
        <p className="text-navy-light text-center max-w-3xl mx-auto mb-12">
          Don't just take our word for it. Here's what clients have experienced after implementing
          their Custom GPT solutions.
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full flex-shrink-0 snap-center px-4">
                <div className="bg-sky-50 rounded-lg p-8 md:p-10 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    {testimonial.imageSrc && (
                      <div className="w-24 h-24 relative flex-shrink-0">
                        <Image
                          src={testimonial.imageSrc}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-lg italic mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-navy">{testimonial.name}</p>
                        <p className="text-navy-light">
                          {testimonial.title}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-sky-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
