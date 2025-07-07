import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Piecewise - Our Mission to Help Service Businesses',
  description:
    'Learn about our mission to help service business owners work smarter and reduce their daily stress with custom AI assistants.',
  alternates: {
    canonical: 'https://piecewiseai.com/about',
  },
  openGraph: {
    title: 'About Us | Piecewise - Our Mission to Help Service Businesses',
    description:
      'Learn about our mission to help service business owners work smarter and reduce their daily stress with custom AI assistants.',
    images: ['/images/og/about-og.jpg'],
    type: 'website',
    url: 'https://piecewiseai.com/about',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
