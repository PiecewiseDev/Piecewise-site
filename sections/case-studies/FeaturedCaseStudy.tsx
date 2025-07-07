'use client';

import React from 'react';

export default function FeaturedCaseStudy() {
  return (
    <div className="mb-16 animate-fade-in animation-delay-400">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy">
        Featured Success Story
      </h2>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Client Info & Quote */}
          <div className="md:w-2/5 bg-accent/5 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
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
                    strokeWidth="1.5"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">GreenVista Landscaping</h3>
                <p className="text-accent text-sm font-medium">Service Business</p>
              </div>
            </div>

            <div className="mt-6 border-l-4 border-accent/30 pl-4 italic text-navy-light">
              <p className="text-lg">
                "Our team was spending hours each day responding to the same customer questions. Now
                our Custom GPT handles most of this automatically, giving us back time to focus on
                growing the business."
              </p>
              <p className="mt-4 font-medium text-navy not-italic">— Mike Benson, Owner</p>
            </div>
          </div>

          {/* Right Column - Before/Built/After */}
          <div className="md:w-3/5 p-6 md:p-8">
            <h4 className="text-lg font-bold text-navy mb-6">The Transformation</h4>

            <div className="space-y-6">
              {/* Before */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-navy mb-1">Before</h5>
                  <p className="text-navy-light">
                    Hours spent writing customer emails and answering the same questions about
                    scheduling, pricing, and plant care advice.
                  </p>
                </div>
              </div>

              {/* Built */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="h-5 w-5 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-navy mb-1">What We Built</h5>
                  <p className="text-navy-light">
                    Custom GPT trained on GreenVista's tone, pricing model, crew SOPs, and plant care
                    knowledge base.
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="h-5 w-5 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-navy mb-1">After</h5>
                  <p className="text-navy-light">
                    Customer replies now take 30 seconds instead of 10 minutes. Team saves 12+ hours
                    weekly and client satisfaction has increased.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
