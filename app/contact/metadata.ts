import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Piecewise | Book a Free AI Discovery Call',
  description:
    'Book a free discovery call with Piecewise. We build custom AI assistants for service businesses — try free for 14 days, no payment until you approve.',
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
