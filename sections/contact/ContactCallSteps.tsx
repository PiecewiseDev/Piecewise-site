import React from 'react';
import Link from 'next/link';

const ContactCallSteps: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-xl border border-accent/20 shadow-sm p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy text-center">
          What Happens on a Discovery Call?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Steps */}
          <div>
            <ol className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-accent font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-1">
                    You share how your business works
                  </h3>
                  <p className="text-navy-light">
                    We'll ask questions to understand your workflows and client needs.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-1">
                    We walk you through a real demo
                  </h3>
                  <p className="text-navy-light">
                    See a CustomGPT in action for a business similar to yours.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mr-4 mt-1">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-navy mb-1">
                    You decide if it's worth exploring
                  </h3>
                  <p className="text-navy-light">
                    No pressure—you'll know if this is a good fit for your business.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Right Column - Calendar & Reassurance */}
          <div className="bg-emerald-50 rounded-lg p-8 text-center flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
              <svg
                className="h-12 w-12 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">25 minutes, fully guided</h3>
            <p className="text-navy-light mb-6">
              No tech skills needed. We'll walk you through everything.
            </p>
            <a href="#contact-form" className="btn-primary hover:no-underline">
              Schedule Your Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCallSteps;
