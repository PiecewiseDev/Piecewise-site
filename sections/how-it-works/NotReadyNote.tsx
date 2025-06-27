import React from 'react';

export default function NotReadyNote() {
  return (
    <div className="mb-16">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/60 rounded-xl p-8 lg:p-10 border border-blue-100 shadow-sm animate-fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="md:w-2/5">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-12 h-12 bg-accent/15 rounded-full flex items-center justify-center mr-3">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent">
                No Preparation Needed
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-0 text-center md:text-left">
              Not Ready?
              <br />
              That's Okay.
            </h2>
          </div>

          <div className="md:w-3/5">
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="h-3 w-3 text-accent"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-navy-light text-lg">
                  We build from whatever you have—even notes or texts. Your knowledge is more
                  organized than you think.
                </p>
              </li>

              <li className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="h-3 w-3 text-accent"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-navy-light text-lg">
                  You don't need to organize anything before we start. Our process is designed to
                  work with what you already have.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
