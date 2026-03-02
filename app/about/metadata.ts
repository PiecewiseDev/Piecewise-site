import { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Piecewise | Custom AI for Service Business Owners',
  description:
    'Meet the Charlotte-based team behind Piecewise. We build custom AI assistants that help service business owners reduce stress, save time, and scale operations.',
  path: '/about',
  images: [
    {
      url: '/images/kyle-profile.webp',
      width: 300,
      height: 300,
      alt: 'Kyle Larsen, Founder & CEO of Piecewise - Custom AI Solutions for Service Businesses',
    },
  ],
});

export const viewport = defaultViewport;
