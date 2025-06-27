import React from 'react';

export interface PricingIntroProps {
  title: string;
  subtitle: string;
}

export interface PricingFeature {
  text: string;
}

export interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  features: PricingFeature[];
  ctaText: string;
  ctaLink: string;
}

export interface PricingAddOnProps {
  title: string;
  price: string;
  description: string;
}

export interface PricingAddOnsProps {
  title: string;
  subtitle: string;
  addOns: PricingAddOnProps[];
}

export interface ReferralBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Pricing Intro Data
export const pricingIntroData: PricingIntroProps = {
  title: 'Simple, Transparent Pricing',
  subtitle: 'No hidden fees. Choose the plan that works best for your business needs.',
};

// Build Plan Data
export const buildPlanData: PricingPlanProps = {
  title: 'One-Time Custom Build',
  subtitle: 'No tech skills needed',
  price: '$2,000',
  features: [
    { text: 'Discovery intake + document setup' },
    { text: 'Policy-based logic + tone training' },
    { text: 'Sales, service, and internal tools' },
    { text: '1-on-1 walkthrough and testing' },
    { text: '30-day satisfaction guarantee' },
  ],
  ctaText: 'Get Started',
  ctaLink: '/contact',
};

// Growth Plan Data
export const growthPlanData: PricingPlanProps = {
  title: 'Monthly Growth Plan',
  subtitle: 'For ongoing optimization',
  price: '$300/mo',
  features: [
    { text: 'Regular updates to your CustomGPT' },
    { text: 'Monthly reporting and insights' },
    { text: 'Priority email support' },
    { text: 'Training for new team members' },
    { text: 'Content and policy updates' },
  ],
  ctaText: 'Subscribe',
  ctaLink: '/contact',
};

// Add-Ons Data
export const addOnsData: PricingAddOnsProps = {
  title: 'Optional Add-On GPTs',
  subtitle: 'Enhance your main CustomGPT with these specialized tools',
  addOns: [
    {
      title: 'Estimate Generator',
      price: '$750',
      description:
        'Quickly create accurate project estimates based on your pricing structure and business rules.',
    },
    {
      title: 'Customer Feedback Analyzer',
      price: '$500',
      description:
        'Automatically analyze and categorize customer feedback to identify trends and improvement areas.',
    },
    {
      title: 'Team Training Assistant',
      price: '$600',
      description:
        'Create consistent training experiences for new team members with custom onboarding materials.',
    },
  ],
};

// Referral Banner Data
export const referralBannerData: ReferralBannerProps = {
  title: 'Refer a Friend Program',
  description:
    "Know another service business that could benefit? Refer them and you'll both receive a $250 credit.",
  buttonText: 'Learn More',
  buttonLink: '/contact',
};
