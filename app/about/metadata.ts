import { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Piecewise | Custom AI Solutions for Service Business Owners',
  description:
    'Meet the Charlotte-based team behind Piecewise. We help service business owners reduce stress and save time with custom AI assistants. Learn our mission to empower businesses through simple, effective AI automation. Schedule your discovery call today.',
  path: '/about',
  images: [
    {
      url: '/images/kyle-profile.webp',
      width: 1200,
      height: 630,
      alt: 'Kyle Larsen, Founder & CEO of Piecewise - Custom AI Solutions for Service Businesses',
    },
  ],
});

export const viewport = defaultViewport;
