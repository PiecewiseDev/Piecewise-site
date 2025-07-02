import React, { ReactNode } from 'react';
import { IconMap } from '@/components/icons';

export interface AboutIntroProps {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface MissionVisionProps {
  missionTitle: string;
  missionText: string;
  visionTitle: string;
  visionText: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface CoreValuesProps {
  title: string;
  values: CoreValue[];
}

export interface FounderNoteProps {
  title: string;
  note: string;
  founderName: string;
  founderTitle: string;
  founderImage: string;
}

export interface AboutCTAProps {
  text: string;
  buttonText: string;
  buttonLink: string;
}

// About Intro Data
export const aboutIntroData: AboutIntroProps = {
  title: 'Why We Exist',
  subtitle:
    'Our mission is to empower service businesses with AI tools that simplify operations and reduce stress.',
  paragraphs: [
    'We created Piecewise AI after seeing firsthand how service business owners were overwhelmed by the constant flow of inquiries, repetitive tasks, and the challenge of maintaining consistent messaging.',
    'Our custom AI solutions are built to address these pain points directly, giving owners and their teams more time to focus on the high-value work that really matters.',
  ],
};

// Mission and Vision Data
export const missionVisionData: MissionVisionProps = {
  missionTitle: 'Our Mission',
  missionText:
    'To empower service businesses with AI tools that reduce daily stress and create more time for what matters most.',
  visionTitle: 'Our Vision',
  visionText:
    'A world where service business owners have the freedom to grow their companies without sacrificing their wellbeing.',
};

// Core Values Data
export const coreValuesData: CoreValuesProps = {
  title: 'Our Values',
  values: [
    {
      icon: 'building',
      title: 'Service',
      description: "We serve with humility and care, putting our clients' needs first.",
    },
    {
      icon: 'shield',
      title: 'Clarity',
      description: 'We simplify the complex and provide clear, accessible solutions.',
    },
    {
      icon: 'check-circle',
      title: 'Integrity',
      description: "We do what's right, even when it's difficult or no one is watching.",
    },
    {
      icon: 'currency',
      title: 'Stewardship',
      description: 'We carefully manage resources and relationships entrusted to us.',
    },
    {
      icon: 'heart',
      title: 'Faith in Action',
      description: 'We embody our beliefs through meaningful work and genuine relationships.',
    },
    {
      icon: 'users',
      title: 'Partnership',
      description: 'We build enduring relationships focused on sustained mutual success.',
    },
  ],
};

// Founder Note Data
export const founderNoteData: FounderNoteProps = {
  title: 'A Note From Our Founder',
  note: "I started Piecewise AI because I saw too many hardworking service business owners burning out from the constant stress of managing every detail. Our AI solutions are built specifically to lighten that load, giving you back time for what truly matters — whether that's growing your business or simply enjoying more of your life outside of work.",
  founderName: 'Kyle Larsen',
  founderTitle: 'Founder & CEO',
  founderImage: '/images/kyle-profile.jpg',
};

// About CTA Data
export const aboutCTAData: AboutCTAProps = {
  text: 'Want to learn more about how we can help your business?',
  buttonText: 'Schedule a Discovery Call',
  buttonLink: '/contact',
};
