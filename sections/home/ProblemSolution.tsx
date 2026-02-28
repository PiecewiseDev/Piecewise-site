'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

const painPoints = [
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
    title: 'Everything depends on you',
    text: 'Decisions, approvals, and answers all flow through one person.',
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
    ),
    title: 'Delegation is inconsistent',
    text: 'Without clear systems, quality depends on who is doing the work.',
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-2.5 0-4.5 1.4-4.5 3.2 0 1.8 2 3.2 4.5 3.2s4.5 1.4 4.5 3.2c0 1.8-2 3.2-4.5 3.2m0-14V4m0 16v-2"
        />
      </svg>
    ),
    title: 'Growth and valuation cap out',
    text: 'A founder-dependent business is harder to scale, step back from, or sell.',
  },
];

const solutionSteps = [
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Extract your process',
    text: "We capture what's in your head and structure it into repeatable playbooks.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Build your operating layer',
    text: 'Tools, SOPs, and workflows your team can use without waiting on you.',
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Scale with guidance',
    text: 'We keep improving the system as your business grows and changes.',
  },
];

export default function ProblemSolution() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden"
      aria-labelledby="problem-solution-heading"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div
          className={`text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-sm font-semibold text-gray-400 tracking-wider">WHAT WE SOLVE</p>
          <h2 id="problem-solution-heading" className="sr-only">
            The Problem and Our Solution
          </h2>
        </div>

        <div className="space-y-8 md:space-y-10 lg:space-y-12">
          {/* The Problem — title above, panel bleeds left */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h3 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-neutral-darkest leading-tight tracking-tight mb-6">
              The Problem
            </h3>
            <div className="-ml-4 sm:-ml-6 md:-ml-14 lg:-ml-24 xl:-ml-28 2xl:-ml-32 md:mr-[15%] lg:mr-[20%] rounded-r-xl rounded-l-none border border-neutral-200 border-l-0 bg-neutral-50/70 py-6 sm:py-8 pl-8 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-36 2xl:pl-40 pr-6 sm:pr-8 md:pr-10 lg:pr-12">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list">
                {painPoints.map((item) => (
                  <li key={item.title}>
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-neutral-800 sm:text-base">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Solution — title above, panel bleeds right */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h3 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-neutral-darkest leading-tight tracking-tight mb-6">
              Our Solution
            </h3>
            <div className="-mr-4 sm:-mr-6 md:-mr-14 lg:-mr-24 xl:-mr-28 2xl:-mr-32 md:ml-[15%] lg:ml-[20%] rounded-l-xl rounded-r-none border border-neutral-200 border-r-0 bg-neutral-50/70 py-6 sm:py-8 pr-8 sm:pr-10 md:pr-20 lg:pr-32 xl:pr-36 2xl:pr-40 pl-6 sm:pl-8 md:pl-10 lg:pl-12">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list">
                {solutionSteps.map((item) => (
                  <li key={item.title}>
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-neutral-800 sm:text-base">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
