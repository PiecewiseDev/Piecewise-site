import React from 'react';

const PricingBuildPlan: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 h-full transform transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="bg-gradient-to-r from-[#4b6a88]/5 to-[#4b6a88]/10 p-8 md:p-10 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">One-Time Custom Build</h2>
            <p className="text-navy-light text-sm md:text-base">No tech skills needed</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl font-bold text-navy">$2,000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#4b6a88]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#4b6a88]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">Discovery intake + document setup</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#4b6a88]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#4b6a88]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">Policy-based logic + tone training</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#4b6a88]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#4b6a88]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">Sales, service, and internal tools</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#4b6a88]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#4b6a88]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">1-on-1 walkthrough and testing</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#4b6a88]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#4b6a88]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">30-day satisfaction guarantee</span>
          </li>
        </ul>

        <div className="bg-slate-50 rounded-lg p-4 mt-6 border-l-4 border-[#4b6a88]">
          <p className="text-slate-800 text-sm">
            <span className="font-medium">One-time investment:</span> Your custom GPT is built to
            your exact specifications, with your policies, tone of voice, and business logic.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="bg-[#4b6a88] hover:bg-[#3d5a75] text-white w-full block text-center py-4 text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingBuildPlan;
