'use client';

import React from 'react';
import Link from 'next/link';
import { caseStudies } from '@/lib/caseStudies';

export default function CaseStudiesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {caseStudies.map((study) => (
        <div
          key={study.slug}
          className="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out"
        >
          <div className="p-6 md:p-8">
            <div className="text-accent text-sm font-medium mb-2">{study.category}</div>
            <h2 className="text-xl mb-2 font-bold">{study.title}</h2>
            <p className="text-navy mb-2 font-medium">Client: {study.client}</p>
            <p className="text-navy-light mb-4">{study.description}</p>

            <h3 className="text-sm font-bold text-navy uppercase mb-2">Results:</h3>
            <ul className="text-navy-light space-y-1 mb-4">
              {study.results.map((result, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="h-2 w-2 text-accent"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>{result}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/case-studies/${study.slug}`}
              className="text-accent hover:text-accent-dark font-medium transition-colors duration-200 hover:no-underline flex items-center"
            >
              View Details
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
