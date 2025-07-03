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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const ariaExpanded = isOpen ? 'true' : 'false';
        const ariaControls = `faq-answer-${index}`;

        return (
          <div key={index} className="relative">
            <button
              onClick={() => toggleAccordion(index)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="w-full text-left px-6 py-5 rounded-full flex justify-between items-center transition-all duration-300 shadow-sm relative z-10 overflow-hidden"
              style={{
                backgroundColor: '#1a1a1d',
                color: isOpen ? '#3a66f7' : 'white',
              }}
              aria-expanded={ariaExpanded}
              aria-controls={ariaControls}
            >
              {/* Animated white background fill */}
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{
                  scale: isOpen ? 1 : 1.2,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0 bg-white rounded-full"
                style={{ transformOrigin: 'center' }}
              />

              <span className="text-lg font-bold relative z-10">{faq.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4 relative z-10"
              >
                {/* Blue hover background */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoverIndex === index && !isOpen ? 1 : 0,
                    scale: hoverIndex === index && !isOpen ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 rounded-md -m-1"
                  style={{ backgroundColor: '#3a66f7' }}
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10"
                  style={{
                    color: isOpen ? '#3a66f7' : 'white',
                  }}
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
              {isOpen && (
                <motion.div
                  id={ariaControls}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden relative"
                  style={{
                    marginTop: '-1.25rem', // Pull up to overlap with middle of question button (half of py-5 = 1.25rem)
                    zIndex: 5, // Below the question button
                  }}
                >
                  <div
                    className="rounded-2xl shadow-sm"
                    style={{
                      backgroundColor: 'rgba(220, 220, 220, 0.6)',
                      color: '#3a66f7',
                      padding: '3.25rem 1.5rem 2rem 1.5rem', // Extra top padding to account for overlap
                    }}
                  >
                    <p className="text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
