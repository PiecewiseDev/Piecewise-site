import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <div className="bg-gray-50 rounded-lg p-8 lg:p-12 text-center mb-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-navy max-w-3xl mx-auto leading-tight">
        If you&apos;re still reading, this might be the right kind of support.
      </h2>
      <Link
        href="/how-it-works"
        className="group inline-block px-8 py-4 text-lg font-medium text-white bg-accent/90 hover:bg-accent rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        See How It Works
        <svg
          className="ml-2 w-5 h-5 inline transition-transform duration-200 group-hover:translate-x-1"
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
          />
        </svg>
      </Link>
    </div>
  );
}
