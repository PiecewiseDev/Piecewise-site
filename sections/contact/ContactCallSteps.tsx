import React from 'react';
import Link from 'next/link';

const ContactCallSteps: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-section-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral-darkest">
            What Happens on a Discovery Call?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column - Steps */}
            <div className="md:col-span-6">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 bg-primary">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-neutral-darkest">
                      You share how your business works
                    </h3>
                    <p className="text-neutral-darkest opacity-70">
                      We&apos;ll ask questions to understand your workflows and client needs.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 bg-primary">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-neutral-darkest">
                      We walk you through a real demo
                    </h3>
                    <p className="text-neutral-darkest opacity-70">
                      See a Custom GPT in action for a business similar to yours.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 bg-primary">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-neutral-darkest">
                      You decide if it&apos;s worth exploring
                    </h3>
                    <p className="text-neutral-darkest opacity-70">
                      No pressure—you&apos;ll know if this is a good fit for your business.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Right Column - Calendar & Reassurance */}
            <div className="md:col-span-6 rounded-lg p-8 text-center flex flex-col items-center justify-center bg-section-light">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <svg
                  className="h-12 w-12 text-primary"
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
              <h3 className="text-xl font-bold mb-4 text-neutral-darkest">
                30 minutes, fully guided
              </h3>
              <p className="mb-6 text-neutral-darkest opacity-70">
                No tech skills needed. We&apos;ll walk you through everything.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://calendly.com/piecewiseai/discovery-call"
                  className="group inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-white bg-primary hover:bg-primary-hover hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Call
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCallSteps;
