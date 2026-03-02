'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

interface GridCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const problems: GridCard[] = [
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: 'Too much runs through you',
    description: 'Too many decisions come back to you, creating key-person risk.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    title: 'No shared way',
    description: 'Everyone does tasks in their own way. This leads to mistakes and slow work.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    title: 'Growth makes gaps bigger',
    description: 'What worked with 5 people stops working at 25 or 50. Problems grow fast.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Writing SOPs takes too long',
    description: 'No one has hours to start from a blank page, so things never get written.',
  },
];

const solutions: GridCard[] = [
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: 'We build you a custom AI tool',
    description: 'Your AI learns your documents and rules so your team stays on track.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'We remove the blank page',
    description: 'Get strong drafts in seconds so your team can edit, not start from scratch.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: 'We make updates easy',
    description: 'Your AI helps you update SOPs fast so your business stays clear as you grow.',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: 'It gets smarter over time',
    description: 'The more you use it, the smarter and more valuable it becomes.',
  },
];

export default function ProblemSolutionGrid() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-b from-slate-50 to-slate-300 py-16 md:py-24 xl:py-32 relative overflow-hidden"
      aria-labelledby="problem-solution-grid-heading"
    >
      <h2 id="problem-solution-grid-heading" className="sr-only">
        The Problem and Our Solution
      </h2>

      <div className="relative mx-auto max-w-full px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        {/* Problems Section */}
        <div className="mb-12 md:mb-16">
          <p
            className={`text-sm font-semibold text-gray-400 tracking-wider mb-3 text-center transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            THE PROBLEM
          </p>
          <h3
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-neutral-darkest mb-6 md:mb-8 leading-tight text-center transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Systemless business ownership is painful
          </h3>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {problems.map((problem, index) => (
              <div
                key={index}
                className="px-2 md:px-4"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span aria-hidden="true" className="text-slate-500 flex justify-center mb-3">
                  {problem.icon}
                </span>
                <h4 className="text-base md:text-lg xl:text-xl font-semibold text-gray-700 leading-tight text-center mb-2">
                  {problem.title}
                </h4>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed text-center">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-slate-300/50 my-8 md:my-12" />

        {/* Solutions Section */}
        <div>
          <p
            className={`text-sm font-semibold text-blue-500 tracking-wider mb-3 text-center transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            OUR SOLUTION
          </p>
          <h3
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-slate-800 mb-6 md:mb-8 leading-tight text-center transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We make building systems quick and easy
          </h3>

          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-500 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="px-2 md:px-4"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span aria-hidden="true" className="text-blue-500 flex justify-center mb-3">
                  {solution.icon}
                </span>
                <h4 className="text-base md:text-lg xl:text-xl font-semibold text-slate-800 leading-tight text-center mb-2">
                  {solution.title}
                </h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed text-center">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
