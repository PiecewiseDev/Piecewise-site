import React from 'react';

interface ChecklistItem {
  title: string;
  description: string;
}

interface BuildChecklistProps {}

const BuildChecklist: React.FC<BuildChecklistProps> = () => {
  const checklistItems: ChecklistItem[] = [
    {
      title: 'Discovery intake',
      description:
        'Thorough assessment of your business needs, communication style, and key processes',
    },
    {
      title: 'Policy-based logic & tone setup',
      description: 'Custom programming using your actual business policies and brand voice',
    },
    {
      title: 'Customer, sales, and internal support responses',
      description: 'Multi-purpose functionality for both client-facing and team communications',
    },
    {
      title: '1-on-1 walkthrough',
      description:
        'Personalized training session to ensure you get maximum value from your assistant',
    },
    {
      title: '30-day satisfaction guarantee',
      description:
        "We guarantee your assistant will work as intended or we'll fix it at no extra cost",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
        <p className="text-lg text-navy-light mb-10 text-center max-w-3xl mx-auto">
          Every CustomGPT we build includes a comprehensive package of services to ensure your AI
          assistant works exactly the way your business does.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 lg:gap-12 items-start">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4 md:mb-0">
              Included in Every Build
            </h2>
          </div>

          {/* Right Column - Checklist */}
          <div className="bg-gray-50 rounded-lg p-6 lg:p-8">
            <ul className="space-y-5">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-accent"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-navy">{item.title}</p>
                    <p className="text-navy-light text-sm mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildChecklist;
