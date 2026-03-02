import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog | Piecewise - AI Insights & Business Growth',
  description:
    'Insights on AI automation, Custom GPTs, and scaling service businesses. Learn how to transform operations and reclaim your time with intelligent solutions.',
  path: '/blog',
  noIndex: true,
  images: [
    {
      url: '/images/og-blog.png',
      width: 1200,
      height: 630,
      alt: 'Piecewise Blog - AI Insights & Business Growth',
    },
  ],
});
