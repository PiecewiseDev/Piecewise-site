import React from 'react';

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

// FAQ Items Data
export const faqItems: FAQItem[] = [
  {
    question: 'How long does it take to build a CustomGPT?',
    answer:
      'Typically, our process takes about 2 weeks from the Discovery call to launch. The exact timeline depends on the complexity of your knowledge base and specific requirements.',
  },
  {
    question: 'Do I need technical knowledge to use my CustomGPT?',
    answer:
      'Not at all! We design your CustomGPT to be incredibly user-friendly. If you can use a chat app, you can use your CustomGPT. We also provide training for your team during the handoff.',
  },
  {
    question: 'How is my business information protected?',
    answer:
      'We take data security seriously. All your information is handled with strict confidentiality, and we can sign NDAs if required. Your CustomGPT is built privately and can only be accessed by authorized users in your organization.',
  },
  {
    question: 'Can my CustomGPT be updated as my business evolves?',
    answer:
      'Absolutely! We offer support plans to keep your CustomGPT updated as your business grows and changes. This ensures your AI assistant always has the most current information and capabilities.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer:
      'Most clients see ROI within the first month. Our CustomGPTs typically save teams 10-20 hours per week in repetitive tasks and inquiries. This translates to thousands in labor costs monthly, plus improved response times and consistency.',
  },
  {
    question: 'How is this different from using ChatGPT directly?',
    answer:
      "While public ChatGPT is a powerful general AI, it doesn't know your specific business processes, policies, or voice. Your CustomGPT is trained exclusively on your information and designed to handle your specific use cases with your brand's unique approach.",
  },
];
