import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Piecewise | Book a Free AI Discovery Call',
  description:
    'Ready to transform your service business with custom AI? Schedule a free discovery call to learn how our custom AI assistants can save you time, reduce stress, and streamline operations. Get started with Piecewise today.',
  path: '/contact',
  images: [
    {
      url: '/logos/piecewiselogo7.png',
      width: 300,
      height: 300,
      alt: 'Contact Piecewise - Schedule Your Custom AI Discovery Call',
    },
  ],
});

export const viewport = defaultViewport;
