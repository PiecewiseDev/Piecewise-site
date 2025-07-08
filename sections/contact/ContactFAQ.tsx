import React from 'react';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';

const faqs: FAQItem[] = [
  {
    question: 'What is Piecewise, exactly?',
    answer:
      "We're a service partner. What we deliver first might look like a tool, but what we actually provide is a structured, thoughtful way to bring AI into your business, with clarity and control.",
  },
  {
    question: 'So what exactly do you offer?',
    answer:
      "Most clients start with a custom GPT, because it's the best on-ramp into AI. It's powerful, simple to use, and helps teams build clarity around what AI <strong>can</strong> and <strong>shouldn't</strong> do in a service business. From there, we often evolve into other tools, structure, or support, based on what your team needs next.",
  },
  {
    question: 'Why do you start with a GPT?',
    answer:
      'Because it works, right away. A well-trained GPT brings immediate wins (fewer repeated questions, more consistent communication) and helps business owners get comfortable using AI as a support system. It also keeps humans in the loop, where judgment, tone, and trust still matter.',
  },
  {
    question: 'How custom is "custom"?',
    answer:
      "Completely. We use your policies, documents, tone, and priorities. Nothing is generic. We've developed a structured system for building these tools the right way, so they feel less like a gimmick and more like a reliable extension of your thinking.",
  },
  {
    question: 'How do I know if this is a fit?',
    answer:
      "We'll figure that out together. You don't need to prepare anything before reaching out. Just bring your business and your questions, we'll walk you through what's possible.",
  },
];

const ContactFAQ: React.FC = () => {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: '#1a1a1d' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: '#f1f1f1' }}
        >
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  );
};

export default ContactFAQ;
