import React from 'react';
import { IconMap } from '@/components/icons';

export interface BuildIntroProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface ChecklistItem {
  title: string;
  description: string;
}

export interface BuildChecklistProps {
  title: string;
  description: string;
  items: ChecklistItem[];
}

export interface UseCase {
  icon: string;
  title: string;
  description: string;
}

export interface BuildUseCasesProps {
  title: string;
  description: string;
  useCases: UseCase[];
}

export interface AddOn {
  title: string;
  description: string;
  price: string;
}

export interface BuildAddOnsProps {
  title: string;
  description: string;
  addOns: AddOn[];
}

export interface ComparisonFeature {
  feature: string;
  customGPT: boolean;
  standardChatGPT: boolean;
}

export interface BuildComparisonProps {
  title: string;
  description: string;
  customGPTColumn: string;
  standardChatGPTColumn: string;
  features: ComparisonFeature[];
}

// Build Intro Data
export const buildIntroData: BuildIntroProps = {
  title: 'Custom AI Solutions',
  subtitle: 'AI tools built specifically for service businesses',
  paragraphs: [
    'Our custom AI solutions are designed to automate repetitive tasks and provide consistent answers to common questions, freeing up your time to focus on what matters most.',
    'We build and train AI models on your business data, processes, and voice to create a tool that works exactly how you need it to.',
  ],
};

// Build Checklist Data
export const buildChecklistData: BuildChecklistProps = {
  title: 'Our Build Process',
  description: 'We take a hands-on, collaborative approach to building your custom AI solution.',
  items: [
    {
      title: 'Discovery',
      description: 'We start by understanding your business, pain points, and specific needs.',
    },
    {
      title: 'Data Collection',
      description:
        'We gather and organize your business information, FAQ answers, processes, and voice examples.',
    },
    {
      title: 'Training',
      description:
        'We train a custom AI model on your data, optimizing for your specific use cases.',
    },
    {
      title: 'Testing',
      description:
        'We rigorously test the model to ensure accuracy, reliability, and alignment with your brand voice.',
    },
    {
      title: 'Implementation',
      description:
        'We implement the solution into your workflow, providing training for your team.',
    },
    {
      title: 'Ongoing Support',
      description:
        'We provide continued support, updates, and refinements to keep your AI performing at its best.',
    },
  ],
};

// Build Use Cases Data
export const buildUseCasesData: BuildUseCasesProps = {
  title: 'Common Use Cases',
  description: 'Here are some of the ways our custom AI can help your service business:',
  useCases: [
    {
      icon: 'document',
      title: 'Documentation Assistance',
      description:
        'Generate proposals, reports, and other documents using your templates and voice.',
    },
    {
      icon: 'currency',
      title: 'Pricing Estimates',
      description:
        'Provide accurate pricing estimates based on your pricing structure and past projects.',
    },
    {
      icon: 'chat',
      title: 'Customer Support',
      description:
        'Answer common questions and provide consistent information to clients and prospects.',
    },
    {
      icon: 'faq',
      title: 'FAQ Answering',
      description:
        "Provide instant responses to frequently asked questions, freeing up your team's time.",
    },
  ],
};

// Build Add-Ons Data
export const buildAddOnsData: BuildAddOnsProps = {
  title: 'Add-On Services',
  description: 'Enhance your custom AI solution with these additional services:',
  addOns: [
    {
      title: 'Website Integration',
      description:
        "We'll integrate your AI chatbot directly into your website for visitor engagement.",
      price: '$1,500',
    },
    {
      title: 'Internal Knowledge Base',
      description:
        "We'll build a searchable knowledge base for your team to access company information.",
      price: '$2,000',
    },
    {
      title: 'Team Training',
      description:
        "We'll provide comprehensive training for your team on using and maintaining your AI tools.",
      price: '$1,000',
    },
    {
      title: 'Monthly Optimization',
      description:
        "We'll continually update and optimize your AI model based on usage and feedback.",
      price: '$500/month',
    },
  ],
};

// Build Comparison Data
export const buildComparisonData: BuildComparisonProps = {
  title: 'Comparison',
  description: 'See how our CustomGPT solution compares to using standard ChatGPT:',
  customGPTColumn: 'CustomGPT',
  standardChatGPTColumn: 'Standard ChatGPT',
  features: [
    {
      feature: 'Trained on your specific business data',
      customGPT: true,
      standardChatGPT: false,
    },
    {
      feature: 'Uses your brand voice and terminology',
      customGPT: true,
      standardChatGPT: false,
    },
    {
      feature: 'Generates documents using your templates',
      customGPT: true,
      standardChatGPT: false,
    },
    {
      feature: 'Provides accurate pricing estimates',
      customGPT: true,
      standardChatGPT: false,
    },
    {
      feature: 'Answers questions consistently',
      customGPT: true,
      standardChatGPT: false,
    },
    {
      feature: 'Available 24/7',
      customGPT: true,
      standardChatGPT: true,
    },
    {
      feature: 'Requires manual prompt engineering',
      customGPT: false,
      standardChatGPT: true,
    },
    {
      feature: 'Risk of inconsistent responses',
      customGPT: false,
      standardChatGPT: true,
    },
    {
      feature: 'Built for general knowledge',
      customGPT: false,
      standardChatGPT: true,
    },
  ],
};
