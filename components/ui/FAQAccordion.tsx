'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItem[];
  className?: string;
};

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <div key={index} className="overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full text-left px-6 py-5 rounded-full flex justify-between items-center transition-all duration-300 shadow-sm ${
              openIndex === index 
                ? 'bg-[#4b6a88] text-white' 
                : 'bg-white text-gray-900 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
            aria-expanded={openIndex === index ? true : false}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-lg font-bold">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`flex-shrink-0 ml-4 ${openIndex === index ? 'text-white' : 'text-gray-900'}`}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="current-color"
              >
                <path 
                  d="M10 4.16667V15.8333" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M4.16669 10H15.8334" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="mt-2 rounded-2xl bg-[#4b6a88]/10 p-6 text-gray-900 shadow-sm">
                  <p className="text-base leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 