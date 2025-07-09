import React, { ReactNode } from 'react';
import { HeroProps, CallToActionProps } from '@/lib/types';
import { IconMap } from '@/components/icons';

// Hero section data
export const heroData: HeroProps = {
  subtitle: 'Equip your business with tools that think like you.',
  ctaText: 'Book a Discovery Call',
  ctaLink: '/contact',
  imageSrc: '/images/IMG_2941.png',
  imageAlt: 'Hero background image',
};

// Benefits section with icon components
export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: BenefitItem[];
}

// Benefits section data
export const benefitsData: BenefitsProps = {
  title: 'How Our Custom GPTs Help You',
  subtitle:
    'Built for service businesses. Designed to support clarity, consistency, and calm inside your operation.s3',
  benefits: [
    {
      icon: 'clock',
      title: 'Protect Your Time',
      description:
        'Your GPT handles routine messages and tasks, freeing you to focus on what matters most in your business.',
    },
    {
      icon: 'shield-check',
      title: 'Keep Standards Clear',
      description:
        'Your GPT reflects your policies, tone, and values, every time. It becomes a reliable source of truth for staff and client communication.',
    },
    {
      icon: 'smile',
      title: 'Reduce Mental Load',
      description:
        'Fewer questions, more clarity. Reduce repetitive inquiries and provide instant answers to common requests.',
    },
  ],
};

// Explainer section with icon components
export interface ExplainerFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ExplainerProps {
  title: string;
  description: string;
  features: ExplainerFeature[];
  learnMoreText: string;
  learnMoreLink: string;
}

// Explainer section data
export const explainerData: ExplainerProps = {
  title: 'How a Custom GPT Helps You Work Faster, Clearer, and With Less Effort',
  description:
    'Your Custom GPT is built from your documents, tone, and policies. It serves you and your team—not your customers—so you can operate with more clarity, consistency, and calm.',
  features: [
    {
      icon: 'document',
      title: 'Aligned Responses',
      description: 'Refer back to your actual policies—every time. No second-guessing or retyping.',
    },
    {
      icon: 'currency',
      title: 'Fast, Professional Drafts',
      description:
        'Respond to sensitive client requests or internal questions in seconds—not 15 minutes.',
    },
    {
      icon: 'chat',
      title: 'Internal Support',
      description:
        'Offer your team instant clarity on job process, expectations, or scheduling rules.',
    },
  ],
  learnMoreText: 'Learn more about how it works',
  learnMoreLink: '/how-it-works',
};

// Use Cases section with icon components
export interface UseCase {
  icon: string;
  title: string;
  description: string;
  promptExample: string;
}

export interface UseCasesProps {
  title: string;
  subtitle: string;
  useCases: UseCase[];
}

// Use Cases section data
export const useCasesData: UseCasesProps = {
  title: 'Real-World Examples',
  subtitle: 'See how service businesses use Custom GPTs to respond to common situations',
  useCases: [
    {
      icon: 'currency',
      title: 'Reply to a discount request',
      description:
        'Let your Custom GPT handle discount requests consistently according to your business policies.',
      promptExample:
        "\"Customer is asking for 15% off. Here's what they wrote: 'I've been quoted less by another company. Can you match their price?'\"",
    },
    {
      icon: 'document',
      title: 'Explain estimate policy',
      description:
        'Clearly communicate your stance on free estimates while maintaining positive customer relations.',
      promptExample:
        "\"Need to tell a customer why we don't offer free estimates. They said: 'Other companies come out for free, why do you charge?'\"",
    },
    {
      icon: 'chat',
      title: 'Write crew instructions',
      description:
        'Create clear, thorough job prep communications for your crew with all necessary details.',
      promptExample:
        '"Generate detailed instructions for the crew about tomorrow\'s job prep. It\'s a bathroom remodel at 123 Main St, starting at 8am."',
    },
    {
      icon: 'user',
      title: 'Handle schedule changes',
      description:
        'Respond professionally to customer requests for appointment changes or rescheduling.',
      promptExample:
        '"Customer needs to reschedule their Thursday appointment due to a family emergency. Our next available slot is in two weeks."',
    },
  ],
};

// Testimonial section data
export interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  clientInitials: string;
  clientTestimonial: string;
  linkText: string;
  linkHref: string;
}

export const testimonialData: TestimonialProps = {
  quote: "This isn't a chatbot. It thinks like we do. And it's made everything simpler.",
  name: 'Michael Reynolds',
  position: 'Owner, Reynolds Plumbing & Heating',
  clientInitials: 'MR',
  clientTestimonial:
    '"We\'ve reduced response time by 68% and our team has clear, consistent answers for customers."',
  linkText: 'View more success stories',
  linkHref: '/case-studies',
};

// CTA section data
export const ctaData: CallToActionProps = {
  title: 'Ready to explore AI for your business?',
  primaryButton: {
    text: "Let's talk",
    link: '/contact',
    description: 'Schedule a discovery call to explore AI solutions for your business',
  },
  secondaryButton: {
    text: 'Learn more about us',
    link: '/about',
    description: 'Discover our mission and approach to custom AI development',
  },
};
