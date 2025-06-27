import React from 'react';

const PricingGrowthPlan: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100 h-full transform transition-all hover:shadow-2xl hover:-translate-y-1">
      <div className="bg-gradient-to-r from-[#5e8d75]/5 to-[#5e8d75]/10 p-8 md:p-10 border-b border-green-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">Monthly Growth Plan</h2>
            <p className="text-navy-light text-sm md:text-base">First month included with build</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-baseline">
              <span className="text-4xl md:text-5xl font-bold text-navy">$200</span>
              <span className="text-navy-light ml-1">/month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-10">
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#5e8d75]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#5e8d75]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">
              Unlimited GPT updates (services, pricing, tone)
            </span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#5e8d75]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#5e8d75]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">Priority support (1–2 day turnaround)</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#5e8d75]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#5e8d75]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">Quarterly reviews + improvements</span>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-6 h-6 bg-[#5e8d75]/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
              <svg className="h-4 w-4 text-[#5e8d75]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className="text-navy-light text-lg">
              Optional GPT ownership transfer after 6–12 months
            </span>
          </li>
        </ul>

        <div className="bg-green-50 rounded-lg p-4 mt-6 border-l-4 border-[#5e8d75]">
          <p className="text-green-800 text-sm">
            <span className="font-medium">Long-term value:</span> As your business evolves, your GPT
            evolves with it. We keep it current with your latest services, policies, and team
            changes.
          </p>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="bg-[#5e8d75] hover:bg-[#4a7058] text-white w-full block text-center py-4 text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-lg"
          >
            Start Growth Plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingGrowthPlan;
