import React from 'react';
import Link from 'next/link';
import { PageSection } from '@/components/layout';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ExplainerProps {
  title: string;
  description: string;
  features: Feature[];
  learnMoreText: string;
  learnMoreLink: string;
  backgroundColor?: string;
}

const Explainer: React.FC<ExplainerProps> = ({
  title,
  description,
  features,
  learnMoreText,
  learnMoreLink,
  backgroundColor = '#E2E8FF',
}) => {
  return (
    <PageSection background="white" width="narrow" padding="large">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <div>
          <div className="text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
            <p className="text-responsive text-slate-600 mb-6 max-w-2xl md:max-w-none mx-auto md:mx-0">
              {description}
            </p>
            <div className="flex justify-center md:justify-start mt-10">
              <Link
                href={learnMoreLink}
                className="group inline-flex items-center text-navy font-medium hover:text-accent hover:no-underline hover:scale-105 transition-all duration-200"
              >
                {learnMoreText}
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-5 flex items-start">
              <div className="w-12 h-12 bg-navy/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default Explainer;
