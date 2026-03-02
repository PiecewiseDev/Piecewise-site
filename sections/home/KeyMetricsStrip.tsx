'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks';

const metrics = [
  {
    eyebrow: 'INVEST',
    value: '2-4',
    unit: 'hrs',
    label: 'Your total time to get started',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
  {
    eyebrow: 'SAVE',
    value: '20+',
    unit: 'hrs/week',
    label: 'Avg owner time reclaimed',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 10.5l-2.5 2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l1 -1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h-4" />
      </svg>
    ),
  },
  {
    eyebrow: 'RETURN',
    value: '$100k+',
    unit: '/year',
    label: 'Value of owner time at $100/hr',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
];

export default function KeyMetricsStrip() {
  const { isVisible, ref } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-slate-900 py-8 md:py-10 relative z-10 shadow-[0_-1px_2px_rgba(15,23,42,0.04),0_-2px_6px_rgba(15,23,42,0.06),0_1px_2px_rgba(15,23,42,0.04),0_2px_6px_rgba(15,23,42,0.06)]"
      aria-label="Key business metrics"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <h2 className="text-xs md:text-sm font-semibold tracking-widest text-slate-400 uppercase text-center mb-6 md:mb-8">
          By the Numbers
        </h2>
        <div
          className={`grid grid-cols-3 divide-x divide-slate-800 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="flex flex-col justify-center px-2 py-5 text-center sm:px-5 md:px-6 md:py-6"
            >
              {/* Icons temporarily removed
              <div className="mb-3 flex justify-center">
                <span className="text-blue-400">
                  {metric.icon}
                </span>
              </div>
              */}
              <p className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3">
                {metric.eyebrow}
              </p>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight [font-variant-numeric:tabular-nums]">
                <span>{metric.value}</span>{' '}
                <span className="text-sm sm:text-base lg:text-lg font-normal text-white">
                  {metric.unit}
                </span>
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed tracking-wide">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
