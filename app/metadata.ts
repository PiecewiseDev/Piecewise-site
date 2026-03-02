import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Piecewise | Custom AI for Service Business Owners',
    description:
      'Transform your service business with custom AI assistants that reduce stress and save hours daily. We build private Custom GPTs for contractors, managers, and service teams to automate operations while maintaining your unique voice. Get started today.',
    path: '/',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 630,
        alt: 'Piecewise - Custom GPT Solutions for Service Business Owners',
      },
    ],
  }),
  // Add Google Search Console verification when ready
  verification: {
    google: '', // Add your Google Search Console verification code here
  },
};

export const viewport = defaultViewport;
