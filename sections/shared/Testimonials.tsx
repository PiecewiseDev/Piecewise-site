'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    quote:
      "The AI assistant has been a game-changer for our customer service team. It's like having an extra team member who never sleeps.",
    name: 'Sarah Johnson',
    title: 'Customer Service Manager',
    company: 'RetailPlus',
    avatar: '/images/testimonials/avatar-1.jpg',
  },
  {
    id: 2,
    quote:
      "We've been able to scale our operations without adding headcount. The ROI on this investment was clear within the first month.",
    name: 'Michael Chen',
    title: 'Operations Director',
    company: 'LogisticsPro',
    avatar: '/images/testimonials/avatar-2.jpg',
  },
  {
    id: 3,
    quote:
      "Our clients appreciate the faster response times. What used to take days now happens in minutes - it's transformed how we work.",
    name: 'Jessica Rodriguez',
    title: 'Client Relations',
    company: 'ConsultCorp',
    avatar: '/images/testimonials/avatar-3.jpg',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">What Our Clients Say</h2>
          <p className="text-lg text-navy-light max-w-3xl mx-auto">
            Hear from the businesses who have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out"
            >
              <div className="mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.667 13.333H5.33366C5.33366 8 9.33366 6.66667 12.0003 6.66667C12.0003 3.33333 9.33366 1.33333 5.33366 2.66667C1.33366 4 1.33366 9.33333 1.33366 13.333H1.33366C1.33366 14.3942 1.75509 15.4116 2.50523 16.1618C3.25538 16.9119 4.27281 17.3333 5.33366 17.3333H9.33366C10.3945 17.3333 11.4119 16.9119 12.1621 16.1618C12.9122 15.4116 13.3337 14.3942 13.3337 13.333V12C13.3341 11.4696 13.2396 10.9436 13.0545 10.4457C12.8694 9.94778 12.5967 9.48737 12.2505 9.09091C11.9042 8.69445 11.4909 8.36997 11.0321 8.13392C10.5734 7.89786 10.0785 7.75502 9.57143 7.71067C9.0643 7.66631 8.55229 7.72124 8.06599 7.87214C7.57968 8.02304 7.13036 8.26654 6.74479 8.58793C6.35922 8.90932 6.04558 9.30143 5.82388 9.74006C5.60218 10.1787 5.47725 10.6547 5.45566 11.1404L5.44632 11.4286C5.44632 11.522 5.44632 11.6153 5.44632 11.7087V12"
                    stroke="#4353FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.6666 13.333H21.3333C21.3333 8 25.3333 6.66667 28 6.66667C28 3.33333 25.3333 1.33333 21.3333 2.66667C17.3333 4 17.3333 9.33333 17.3333 13.333H17.3333C17.3333 14.3942 17.7547 15.4116 18.5049 16.1618C19.255 16.9119 20.2725 17.3333 21.3333 17.3333H25.3333C26.3942 17.3333 27.4116 16.9119 28.1618 16.1618C28.9119 15.4116 29.3333 14.3942 29.3333 13.333V12C29.3338 11.4696 29.2392 10.9436 29.0541 10.4457C28.869 9.94778 28.5964 9.48737 28.2501 9.09091C27.9039 8.69445 27.4906 8.36997 27.0318 8.13392C26.573 7.89786 26.0782 7.75502 25.5711 7.71067C25.064 7.66631 24.552 7.72124 24.0657 7.87214C23.5793 8.02304 23.13 8.26654 22.7445 8.58793C22.3589 8.90932 22.0452 9.30143 21.8235 9.74006C21.6018 10.1787 21.4769 10.6547 21.4553 11.1404L21.446 11.4286C21.446 11.522 21.446 11.6153 21.446 11.7087V12"
                    stroke="#4353FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="text-navy-light mb-6 text-lg">{testimonial.quote}</p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-navy-light text-sm">
                    {testimonial.title}, {testimonial.company}
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
