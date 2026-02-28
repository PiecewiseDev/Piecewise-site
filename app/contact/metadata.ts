import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Piecewise | Schedule Your Custom AI Discovery Call Today',
  description:
    'Ready to transform your service business with custom AI? Schedule a free discovery call to learn how our custom AI assistants can save you time, reduce stress, and streamline operations. Get started with Piecewise today.',
  path: '/contact',
  images: [
    {
      url: '/logos/piecewiselogo7.png',
      width: 1200,
      height: 630,
      alt: 'Contact Piecewise - Schedule Your Custom AI Discovery Call',
    },
  ],
});

export const viewport = defaultViewport;

export default metadata;
