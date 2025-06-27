'use client';

import React from 'react';
import Link from 'next/link';
import {
  CaseStudiesIntro,
  FeaturedCaseStudy,
  CaseStudiesGrid,
  CaseWins,
  CaseStudyQuotes,
  CaseStudyBackLink,
} from '@/sections/case-studies';
import { CallToAction } from '@/sections/shared';

export default function CaseStudiesPage() {
  return (
    <div className="section bg-gradient-to-b from-[#4b6a88]/10 to-white min-h-screen">
      <div className="container-wide">
        {/* Page Intro Section */}
        <CaseStudiesIntro />

        <div className="max-w-4xl mx-auto">
          {/* Featured Case Study Section */}
          <FeaturedCaseStudy />

          {/* Case Studies Grid */}
          <CaseStudiesGrid />

          {/* How It Helped Section - Micro-wins Grid */}
          <CaseWins />

          {/* Quote Carousel */}
          <CaseStudyQuotes />

          <div className="bg-navy rounded-lg shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-white font-bold">
              Could This Work for You?
            </h2>
            <p className="mb-8 text-blue-100 text-lg">
              Let's find out—no pressure, no tech knowledge needed.
            </p>
            <Link
              href="/contact"
              className="btn-primary ring-green bg-green-500 text-white hover:bg-green-600 inline-block hover:no-underline px-8 py-3 text-lg font-medium shadow-xl transition-colors duration-200"
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
