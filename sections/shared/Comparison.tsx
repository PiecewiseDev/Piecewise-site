import React from 'react';

export default function Comparison() {
  return (
    <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Not a Chatbot. A Business Partner.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column - Generic Chatbot */}
        <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
          <h3 className="text-xl font-bold text-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 shrink-0">
              <svg
                className="h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
            Generic Chatbot
          </h3>

          <ul className="space-y-6">
            <li className="flex">
              <div className="mr-3 shrink-0 text-gray-400">—</div>
              <div>
                <p className="font-bold text-navy mb-1">Generic answers</p>
                <p className="text-navy-light">
                  One-size-fits-all replies based on general knowledge, not your company's specific
                  policies.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-gray-400">—</div>
              <div>
                <p className="font-bold text-navy mb-1">Customer-facing only</p>
                <p className="text-navy-light">
                  Primarily designed for external customer service, not internal business
                  operations.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-gray-400">—</div>
              <div>
                <p className="font-bold text-navy mb-1">Scripted replies</p>
                <p className="text-navy-light">
                  Limited to pre-programmed responses that can't adapt to nuanced business
                  situations.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-gray-400">—</div>
              <div>
                <p className="font-bold text-navy mb-1">Limited context</p>
                <p className="text-navy-light">
                  Can't remember past conversations or understand your business workflows.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-gray-400">—</div>
              <div>
                <p className="font-bold text-navy mb-1">Off-brand tone</p>
                <p className="text-navy-light">
                  Generic voice that doesn't match your company culture or communication style.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column - Your CustomGPT */}
        <div className="bg-accent/5 rounded-lg p-6 lg:p-8">
          <h3 className="text-xl font-bold text-navy mb-6 flex items-center">
            <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 shrink-0">
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
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            Your CustomGPT
          </h3>

          <ul className="space-y-6">
            <li className="flex">
              <div className="mr-3 shrink-0 text-accent">✓</div>
              <div>
                <p className="font-bold text-navy mb-1">Policy-aligned logic</p>
                <p className="text-navy-light">
                  Responses that perfectly align with your company policies, procedures, and values.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-accent">✓</div>
              <div>
                <p className="font-bold text-navy mb-1">Internal business support</p>
                <p className="text-navy-light">
                  Designed for both customer interactions and internal team support to boost
                  productivity.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-accent">✓</div>
              <div>
                <p className="font-bold text-navy mb-1">Adaptive messaging</p>
                <p className="text-navy-light">
                  Intelligent responses that adapt to each situation while maintaining your business
                  standards.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-accent">✓</div>
              <div>
                <p className="font-bold text-navy mb-1">Contextual memory</p>
                <p className="text-navy-light">
                  Understands workflows and retains context from conversations to provide relevant
                  support.
                </p>
              </div>
            </li>

            <li className="flex">
              <div className="mr-3 shrink-0 text-accent">✓</div>
              <div>
                <p className="font-bold text-navy mb-1">On-brand communication</p>
                <p className="text-navy-light">
                  Tailored to match your company's unique voice and communication style in every
                  interaction.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
