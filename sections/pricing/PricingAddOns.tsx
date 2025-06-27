import React from 'react';

interface AddOn {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PricingAddOns: React.FC = () => {
  const addOns: AddOn[] = [
    {
      title: 'Estimate Assistant',
      description:
        'Creates accurate cost estimates based on your pricing model. Handles complex variables and explains calculations to clients.',
      icon: (
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
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Review Responder',
      description:
        'Crafts thoughtful responses to online reviews. Acknowledges feedback, offers solutions, and maintains your brand voice.',
      icon: (
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
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      title: 'Proposal Builder',
      description:
        'Generates customized project proposals with accurate scopes, timelines, and pricing. Saves hours of writing while maintaining quality.',
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="mb-16 animate-fade-in animation-delay-400 bg-slate-50 rounded-xl p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-navy mb-3">
        Optional Add-On GPTs – $500 Each
      </h2>
      <p className="text-center text-navy-light mb-10 max-w-2xl mx-auto">
        Delivered in under a week. Built from your tone and policies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {addOns.map((addon, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1 border border-slate-100"
          >
            <div className="mb-4 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              {addon.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-navy">{addon.title}</h3>
            <p className="text-navy-light mb-4">{addon.description}</p>
            <a
              href="/contact"
              className="text-accent font-medium hover:underline inline-flex items-center"
            >
              Learn more
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingAddOns;
