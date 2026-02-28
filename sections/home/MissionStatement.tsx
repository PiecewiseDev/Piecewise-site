'use client';

import React from 'react';
import Link from 'next/link';

export default function MissionStatement() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-darkest via-slate-800 to-neutral-darkest py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-20">
          Our mission is to <span className="text-primary italic">redefine work</span>. Restoring
          balance to those who serve.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
          We're a trusted partner and unwavering champion for service business owners who deserve to
          work smarter, not harder.
        </p>

        {/* CTA Button */}
        <Link
          href="/about"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-darkest rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <span>Learn about Piecewise</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
