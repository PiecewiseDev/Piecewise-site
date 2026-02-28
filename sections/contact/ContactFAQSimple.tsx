'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/components/ui/FAQAccordion';

const faqs: FAQItem[] = [
  {
    question: 'Does this work for my business type?',
    answer:
      'We work with service businesses, contractors, agencies, and founder-led companies across industries. If your business runs on processes, communication, and people, this is built for you.',
  },
  {
    question: 'Do I need to be technical?',
    answer:
      'No. If you can send a text message, you can use this. Your part is talking about your business, we handle everything else.',
  },
  {
    question: 'What do I need to prepare before getting started?',
    answer:
      "Nothing. Just bring yourself and any documents you already have, even if they're messy or incomplete. We'll guide you through everything in a few short conversations.",
  },
  {
    question: 'How does the free trial work?',
    answer:
      "We build it first, you test it for 14 days. If you love it, you pay. If not, you walk away. You're never charged unless you say yes.",
  },
];

const ContactFAQSimple: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ schema for search engines (invisible to users)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
          .replace(/<[^>]*>/g, '')
          .replace(/&[^;]+;/g, ' ')
          .trim(),
      },
    })),
  };

  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-slate-100">
      {/* Invisible FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* Left Column - Title */}
          <div className="lg:col-span-5 text-center sm:text-left">
            <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 md:mb-4 2xl:mb-5">
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-darkest">
              Need more info?
            </h2>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="py-3 md:py-4 xl:py-5 2xl:py-6">
                    {/* Question Row - Clickable */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-start text-left group"
                      aria-expanded={isOpen ? 'true' : 'false'}
                    >
                      <h3
                        className={`text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium group-hover:text-gray-900 transition-colors duration-150 pr-6 md:pr-8 xl:pr-10 ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}
                      >
                        {faq.question}
                      </h3>

                      <svg
                        className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 mt-1 group-hover:text-gray-900 transition-all duration-200 ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Answer - Collapsible with smooth animation */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'max-h-96 opacity-100 mt-3 md:mt-4 xl:mt-5'
                          : 'max-h-0 opacity-0 mt-0'
                      }`}
                    >
                      <p
                        className="text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed max-w-prose"
                        dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br/>') }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFAQSimple;
