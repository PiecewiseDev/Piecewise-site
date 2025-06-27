import React from 'react';

interface ComparisonItem {
  negative: {
    title: string;
    description: string;
  };
  positive: {
    title: string;
    description: string;
  };
}

interface BuildComparisonProps {}

const BuildComparison: React.FC<BuildComparisonProps> = () => {
  const comparisonItems: ComparisonItem[] = [
    {
      negative: {
        title: 'Chatbot for customers',
        description: 'Not a public-facing tool with generic responses.',
      },
      positive: {
        title: 'Private assistant for your business',
        description: 'A trusted tool that understands your specific business needs and context.',
      },
    },
    {
      negative: {
        title: 'Pre-written answers',
        description: 'Not generic templates or canned responses with no flexibility.',
      },
      positive: {
        title: 'Responses in your exact tone',
        description:
          'Adaptive responses that match your communication style and business vocabulary.',
      },
    },
    {
      negative: {
        title: 'Automation tool',
        description: 'Not a replacement for human judgment or fully automated system.',
      },
      positive: {
        title: 'Guidance, not auto-reply',
        description: 'A tool that assists your decision-making while keeping you in control.',
      },
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-navy">
          What This Is Not
        </h2>

        <div className="space-y-8">
          {comparisonItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center"
            >
              <div className="bg-red-50 rounded-lg p-6 flex items-start hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
                <div className="shrink-0 mr-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-red-500"
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
                  </div>
                </div>
                <div>
                  <p className="font-bold text-navy">{item.negative.title}</p>
                  <p className="text-navy-light text-sm mt-1">{item.negative.description}</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 flex items-start hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
                <div className="shrink-0 mr-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-500"
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
                  </div>
                </div>
                <div>
                  <p className="font-bold text-navy">{item.positive.title}</p>
                  <p className="text-navy-light text-sm mt-1">{item.positive.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildComparison;
