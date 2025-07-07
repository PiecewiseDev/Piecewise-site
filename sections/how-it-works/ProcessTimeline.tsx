import React from 'react';

export default function ProcessTimeline() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-navy">How It Works</h2>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-accent/20 transform -translate-x-1/2 z-0 ml-6 md:ml-0"></div>

        {/* Step 1: Discovery Call */}
        <div className="relative z-10 mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex flex-row md:flex-col items-center md:items-center md:w-1/2 md:text-right md:pr-8">
              <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 md:mr-0 md:ml-auto shadow-md">
                1
              </div>
              <div className="hidden md:block md:w-full">
                <h3 className="text-xl font-bold mb-2 text-navy">Discovery Call</h3>
                <p className="text-navy-light">Understand your goals</p>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8 pl-16 -mt-12 md:mt-0">
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-2 text-navy">Discovery Call</h3>
                  <p className="text-navy-light mb-4">Understand your goals</p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="shrink-0 mr-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
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
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-navy-light">
                    We'll have a no-pressure conversation about your business, where you're spending
                    too much time, and how a Custom GPT could help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Build */}
        <div className="relative z-10 mb-12 animate-fade-in animation-delay-200">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex flex-row md:flex-col items-center md:items-center md:w-1/2 md:text-right md:pr-8 md:order-1">
              <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 md:mr-0 md:ml-auto shadow-md">
                2
              </div>
              <div className="hidden md:block md:w-full">
                <h3 className="text-xl font-bold mb-2 text-navy">Build</h3>
                <p className="text-navy-light">We train your GPT from your documents</p>
              </div>
            </div>

            <div className="md:w-1/2 md:pr-8 md:text-right pl-16 -mt-12 md:mt-0 md:order-0">
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-2 text-navy">Build</h3>
                  <p className="text-navy-light mb-4">We train your GPT from your documents</p>
                </div>
                <div className="flex items-start mb-4 md:flex-row-reverse">
                  <div className="shrink-0 mr-4 md:ml-4 md:mr-0">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
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
                  </div>
                  <p className="text-navy-light md:text-right">
                    Using your emails, documents, and policies, we create a Custom GPT that captures
                    your voice and business logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Review */}
        <div className="relative z-10 mb-12 animate-fade-in animation-delay-400">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex flex-row md:flex-col items-center md:items-center md:w-1/2 md:text-right md:pr-8">
              <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 md:mr-0 md:ml-auto shadow-md">
                3
              </div>
              <div className="hidden md:block md:w-full">
                <h3 className="text-xl font-bold mb-2 text-navy">Review</h3>
                <p className="text-navy-light">You test it, we adjust it</p>
              </div>
            </div>

            <div className="md:w-1/2 md:pl-8 pl-16 -mt-12 md:mt-0">
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-2 text-navy">Review</h3>
                  <p className="text-navy-light mb-4">You test it, we adjust it</p>
                </div>
                <div className="flex items-start mb-4">
                  <div className="shrink-0 mr-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-navy-light">
                    We walk through the Custom GPT together and make any refinements needed until it
                    feels like a natural extension of your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Support */}
        <div className="relative z-10 mb-12 animate-fade-in animation-delay-600">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex flex-row md:flex-col items-center md:items-center md:w-1/2 md:text-right md:pr-8 md:order-1">
              <div className="h-12 w-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 md:mr-0 md:ml-auto shadow-md">
                4
              </div>
              <div className="hidden md:block md:w-full">
                <h3 className="text-xl font-bold mb-2 text-navy">Support</h3>
                <p className="text-navy-light">We keep it updated as your business grows</p>
              </div>
            </div>

            <div className="md:w-1/2 md:pr-8 md:text-right pl-16 -mt-12 md:mt-0 md:order-0">
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="md:hidden">
                  <h3 className="text-xl font-bold mb-2 text-navy">Support</h3>
                  <p className="text-navy-light mb-4">We keep it updated as your business grows</p>
                </div>
                <div className="flex items-start mb-4 md:flex-row-reverse">
                  <div className="shrink-0 mr-4 md:ml-4 md:mr-0">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-navy-light md:text-right">
                    As your business evolves, we'll help keep your Custom GPT current with your
                    latest policies, products, and team changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-navy-light text-lg mt-8">
        <p>Total timeline: typically 2 weeks from Discovery to Launch</p>
      </div>
    </div>
  );
}
