'use client';

import React from 'react';

export default function CaseWins() {
  return (
    <section className="py-16 bg-[#FCFCFD]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">How It Helped</h2>
          <p className="text-lg text-navy-light max-w-3xl mx-auto">
            Through our partnership, the client experienced significant improvements in both
            operational efficiency and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Win 1 */}
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">50% Less Time</h3>
            <p className="text-navy-light">
              Customer service team now spends 50% less time on routine customer replies.
            </p>
          </div>

          {/* Win 2 */}
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">95% Accuracy</h3>
            <p className="text-navy-light">
              Automated responses show 95% accuracy in addressing customer questions correctly.
            </p>
          </div>

          {/* Win 3 */}
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">3.2× Increase</h3>
            <p className="text-navy-light">
              Customer satisfaction scores increased 3.2× compared to the previous system.
            </p>
          </div>

          {/* Win 4 */}
          <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Effortless Refunds</h3>
            <p className="text-navy-light">
              Refund processing now handled with ease thanks to improved systems integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
