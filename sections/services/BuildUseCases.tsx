import React from 'react';

interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BuildUseCasesProps {}

const BuildUseCases: React.FC<BuildUseCasesProps> = () => {
  const useCases: UseCase[] = [
    {
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
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      title: 'Handle refund requests',
      description:
        'Responds clearly using your policy, keeping consistency across all customer interactions.',
    },
    {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Help crew stay consistent',
      description:
        'Sends reminders in your tone, ensuring every team member follows standard procedures.',
    },
    {
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Train new hires',
      description:
        'Answers process questions with no confusion, reducing onboarding time and inconsistencies.',
    },
    {
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Support quote follow-ups',
      description:
        'Writes messages in your style, maintaining relationship momentum without constant attention.',
    },
    {
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Answer tough questions',
      description:
        'Like "Why are you more expensive?" with confident, value-focused explanations that win trust.',
    },
    {
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
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      title: 'Draft social posts',
      description:
        'From hiring to seasonal offers, creating on-brand content that engages your audience.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-card p-8 lg:p-12 hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-navy">
          What It Can Do
        </h2>
        <p className="text-lg text-navy-light mb-10 text-center max-w-3xl mx-auto">
          Your Custom GPT can handle a wide range of tasks, freeing up your time while maintaining
          your business standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-navy">{useCase.title}</h3>
              <p className="text-navy-light">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildUseCases;
