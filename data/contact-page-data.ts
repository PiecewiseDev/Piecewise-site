import React from 'react';

export interface ContactIntroProps {
  title: string;
  subtitle: string;
}

export interface FormLabelsProps {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
}

// Contact Intro Data
export const contactIntroData: ContactIntroProps = {
  title: "Let's Talk",
  subtitle: "We'll walk you through what this could look like for your business.",
};

// Contact Form Labels Data
export const contactFormLabels: FormLabelsProps = {
  namePlaceholder: 'Your Name',
  emailPlaceholder: 'Your Email',
  messagePlaceholder: "Tell us about your business and what you're looking for",
  submitButtonText: 'Send Message',
};
