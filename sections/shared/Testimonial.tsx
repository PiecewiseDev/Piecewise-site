import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  clientInitials: string;
  clientTestimonial: string;
  linkText: string;
  linkHref: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  position,
  clientInitials,
  clientTestimonial,
  linkText,
  linkHref,
}) => {
  return (
    <PageSection background="light" width="narrow" padding="large">
      <div className="max-w-5xl mx-auto relative">
        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-full hidden md:block"></div>

        {/* Success icon for mobile */}
        <div className="flex justify-center md:hidden mb-6">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
            <svg
              className="h-6 w-6 text-accent"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center md:pl-10">
          {/* Quote text */}
          <div className="md:col-span-3">
            <svg
              className="text-accent h-10 w-10 mb-4 opacity-30"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-navy mb-6">
              {quote}
            </h2>
            <div className="md:hidden mt-6">
              <p className="font-semibold text-lg text-navy">{name}</p>
              <p className="text-navy-light">{position}</p>
            </div>
          </div>

          {/* Client info */}
          <div className="md:col-span-2 hidden md:block">
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mr-4">
                  <span className="text-xl font-bold text-navy">{clientInitials}</span>
                </div>
                <div>
                  <p className="font-semibold text-lg text-navy">{name}</p>
                  <p className="text-navy-light">{position}</p>
                </div>
              </div>
              <p className="text-navy-light">{clientTestimonial}</p>
            </div>
          </div>
        </div>

        {/* Additional testimonials hint */}
        <div className="flex justify-center mt-12">
          <Link
            href={linkHref}
            className="inline-flex items-center text-navy font-medium hover:text-accent hover:no-underline transition-colors"
          >
            {linkText}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </PageSection>
  );
};

export default Testimonial;
