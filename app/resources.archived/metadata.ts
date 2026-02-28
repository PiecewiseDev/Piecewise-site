import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'AI Tools & Resources | Piecewise - 100+ AI Tools Across 17 Categories',
  description:
    'Comprehensive directory of 100+ AI tools for business. Browse LLMs, automation, design, sales, SEO, voice generation, and more. Find the perfect AI tool with pricing and direct links.',
  path: '/resources',
  images: [
    {
      url: '/images/og-resources.png',
      width: 1200,
      height: 630,
      alt: 'Piecewise AI Resources - 100+ AI Tools Directory',
    },
  ],
});
