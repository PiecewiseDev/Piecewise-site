import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Piecewise - Real Results from Custom AI Solutions',
  description:
    'See how our custom AI solutions have helped service businesses save time, improve consistency, and reduce stress. Real stories from real clients.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Case Studies | Piecewise - Real Results from Custom AI Solutions',
    description:
      'See how our custom AI solutions have helped service businesses save time, improve consistency, and reduce stress. Real stories from real clients.',
    images: ['/images/og/case-studies-og.jpg'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
