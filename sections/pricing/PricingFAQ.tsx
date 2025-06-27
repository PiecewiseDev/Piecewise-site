import React from 'react';
import FAQAccordion, { FAQItem } from '@/components/ui/FAQAccordion';

const faqs: FAQItem[] = [
  {
    question: 'Why is there a one-time build fee?',
    answer:
      "We build each GPT from scratch, based on your real documents and tone. It's a hands-on process—not a template or automation. The fee reflects the time and care put into getting it right from the start.",
  },
  {
    question: "What's included in the $200/month Growth Plan?",
    answer:
      'Unlimited updates, priority support, and quarterly improvement reviews. Your assistant evolves as your business grows—without you needing to retrain or rewrite anything.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      "Yes. You can cancel your subscription anytime. You'll keep access through the end of the billing cycle, and we'll pause support until you return.",
  },
  {
    question: 'Is this a chatbot for customers?',
    answer:
      "No. This GPT is built for you—the owner—and your team. It supports quotes, policies, internal questions, and repeat tasks. It doesn't replace you. It supports you.",
  },
];

const PricingFAQ: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default PricingFAQ;
