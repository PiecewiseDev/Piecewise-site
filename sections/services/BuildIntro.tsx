import React from 'react';
import { PageSection } from '@/components/layout';

interface BuildIntroProps {}

const BuildIntro: React.FC<BuildIntroProps> = () => {
  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Icon Column */}
          <div className="lg:w-1/4 flex justify-center">
            <div className="w-28 h-28 lg:w-32 lg:h-32 bg-accent/10 rounded-full flex items-center justify-center">
              <svg
                className="w-14 h-14 lg:w-16 lg:h-16 text-accent"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.5 2.25m0 0v2.628a2.25 2.25 0 01-.659 1.591L14.5 21l-4.5-2.25L5 21l.75-3.272M19.5 10.5c0 2.485-2.015 4.5-4.5 4.5"
                />
              </svg>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-3/4 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-navy">What We Build</h1>
            <p className="text-lg md:text-xl text-navy-light font-dm-sans leading-relaxed">
              You're not getting a chatbot. You're getting a private AI assistant trained to work
              like your business—from quotes to crew reminders to customer replies. Built from your
              policies, tone, and real documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildIntro;
