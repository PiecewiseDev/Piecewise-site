import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Stories | Piecewise - Real Results from Custom AI Solutions',
  description:
    'See how service businesses like yours are using custom AI solutions to save time, reduce stress, and scale operations. Real stories, real results from contractors, service teams, and small business owners.',
  path: '/customer-stories',
  noIndex: true,
  images: [
    {
      url: '/logos/piecewiselogo7.png',
      width: 1200,
      height: 630,
      alt: 'Piecewise Customer Stories - Custom AI Success Stories',
    },
  ],
});
