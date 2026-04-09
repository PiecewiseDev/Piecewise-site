import type { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Piecewise | Custom AI for Service Business Owners',
    description:
      'Custom AI assistants for service businesses. We build private GPTs that save owners 20+ hours/week. Free 14-day trial — we build it first, you only pay if you love it.',
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
  // verification: { google: 'YOUR_CODE_HERE' }, // Uncomment and add code when verifying Search Console
};

export const viewport = defaultViewport;
