import React from 'react';

export default function ProcessStory() {
  return (
    <div className="mb-16 animate-fade-in animation-delay-200">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy">
        What This Looks Like in Real Life
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-card overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left column - Image/Icon */}
            <div className="md:w-1/3 bg-gradient-to-br from-accent/10 to-accent/5 p-8 flex flex-col justify-center items-center">
              <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center shadow-md mb-4">
                <svg
                  className="h-10 w-10 text-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-navy text-lg mb-1">GreenVista Landscaping</h3>
                <p className="text-navy-light text-sm">Residential & Commercial</p>
              </div>
            </div>

            {/* Right column - Story */}
            <div className="md:w-2/3 p-8 md:p-10">
              <div className="relative">
                {/* Large quote mark */}
                <div className="absolute -top-2 -left-1 text-6xl text-accent/20 leading-none font-serif">
                  "
                </div>

                <div className="relative z-10 pl-6 md:pl-8">
                  {/* Client story */}
                  <p className="text-navy-light text-lg mb-6 leading-relaxed">
                    GreenVista Landscaping started with just a flyer and a few old emails. Their GPT
                    now handles customer replies, quote follow-ups, and internal crew notes—without
                    repeating themselves.
                  </p>

                  {/* Results highlight box */}
                  <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-accent">
                    <div className="flex items-center mb-2">
                      <svg
                        className="h-5 w-5 text-accent mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <h4 className="font-bold text-navy">Results</h4>
                    </div>
                    <p className="text-navy-light">
                      75% reduction in response time to customer inquiries, and crew productivity
                      increased by 22% in the first month.
                    </p>
                  </div>
                </div>

                {/* Testimony attribution */}
                <div className="mt-8 flex items-center justify-end">
                  <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent font-bold">MB</span>
                  </div>
                  <div>
                    <p className="font-medium text-navy">Mike Benson</p>
                    <p className="text-sm text-navy-light">Owner, GreenVista Landscaping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
