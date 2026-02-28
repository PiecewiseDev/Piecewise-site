'use client';

import React from 'react';
import { FilePenLine, Rocket, UserRound } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks';

interface ComparisonOption {
  label: string;
  headline: string;
  points: string[];
  highlighted?: boolean;
  icon: React.ReactNode;
}

const options: ComparisonOption[] = [
  {
    label: 'Do it yourself',
    headline: '200+ hours of your time',
    icon: <FilePenLine aria-hidden="true" className="h-4 w-4" strokeWidth={2} />,
    points: [
      'Pen-and-paper approach',
      'Easy to abandon halfway',
      "Get through a fraction of what's needed",
    ],
  },
  {
    label: 'Hire a consultant',
    headline: '$15K–$30K+',
    icon: <UserRound aria-hidden="true" className="h-4 w-4" strokeWidth={2} />,
    points: [
      'Takes months to deliver',
      'Deliverables go stale fast',
      'Starts over when your business changes',
    ],
  },
  {
    label: 'Piecewise',
    headline: 'Free to start',
    icon: <Rocket aria-hidden="true" className="h-4 w-4" strokeWidth={2} />,
    points: [
      'Formalize systems in minutes',
      'We keep building as your business grows',
      'Try before you pay',
    ],
    highlighted: true,
  },
];

export default function ComparisonSection() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-36 relative"
      aria-labelledby="comparison-heading"
    >
      <div className="relative mx-auto max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold text-gray-400 tracking-wider mb-3">
            VS. TRADITIONAL METHODS
          </p>
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-neutral-darkest leading-tight tracking-tight"
          >
            A better way to build systems
          </h2>
        </div>

        {/* Comparison Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {options.map((option, index) => (
            <div
              key={option.label}
              className={`relative flex flex-col p-6 sm:p-8 md:p-8 lg:p-10 ${
                option.highlighted
                  ? 'bg-blue-700 text-white rounded-lg md:rounded-r-lg md:rounded-l-none md:scale-[1.03] shadow-xl shadow-blue-900/30 z-10'
                  : index === 0
                    ? 'bg-slate-50 border border-slate-200 rounded-lg md:rounded-l-lg md:rounded-r-none'
                    : 'bg-slate-50 border border-slate-200 border-l-0 rounded-lg md:rounded-none'
              }`}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              {/* Label + Icon */}
              <div className="flex items-center gap-2 mb-4 justify-start">
                <span
                  className={`inline-flex items-center justify-center h-8 w-8 rounded-md ${
                    option.highlighted ? 'bg-blue-800 text-blue-200' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {option.icon}
                </span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${option.highlighted ? 'text-blue-200' : 'text-slate-400'}`}
                >
                  {option.label}
                </span>
              </div>

              {/* Headline / Price */}
              <h3
                className={`text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight text-left ${
                  option.highlighted ? 'text-white' : 'text-slate-900'
                }`}
              >
                {option.headline}
              </h3>

              {/* Divider */}
              <div
                className={`w-full h-px mb-6 ${
                  option.highlighted ? 'bg-blue-600' : 'bg-slate-200'
                }`}
              />

              {/* Points */}
              <ul className="space-y-3 flex-1">
                {option.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {option.highlighted ? (
                      <svg
                        className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`text-sm leading-relaxed ${
                        option.highlighted ? 'text-blue-100' : 'text-slate-500'
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
