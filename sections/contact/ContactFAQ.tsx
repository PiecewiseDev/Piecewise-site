import React from 'react';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';

const faqs: FAQItem[] = [
  {
    question: 'How long does a discovery call take?',
    answer:
      "Discovery calls are scheduled for 25 minutes. We keep them focused and productive—just enough time to understand your business and show you what's possible, without taking up your whole day.",
  },
  {
    question: 'What happens after the discovery call?',
    answer:
      "If it seems like a good fit, we'll discuss next steps and timeline. If not, no worries—you'll still walk away with clarity on how AI tools could work for your type of business.",
  },
  {
    question: 'Do I need any technical knowledge?',
    answer:
      'Not at all. We handle all the technical setup and explain everything in plain terms. You focus on running your business—we focus on making the technology work for you.',
  },
  {
    question: 'Is this a sales call?',
    answer:
      "It's a conversation about your business needs. We'll ask questions to understand how you work and show you real examples. There's no pressure—you'll know if this makes sense for your situation.",
  },
  {
    question: "What if I'm not ready to commit yet?",
    answer:
      "That's perfectly fine. Many business owners need time to think it over or discuss with their team. We're here when you're ready, and there's no rush.",
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
