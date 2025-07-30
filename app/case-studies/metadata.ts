import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Success Stories | Real Custom GPT Results for Service Businesses',
  description:
    'See real results from our custom AI implementations. Discover how service businesses save time, improve consistency, and reduce stress with Piecewise solutions. Read client success stories and measurable business outcomes.',
  keywords: [
    'AI success stories',
    'custom GPT case studies',
    'AI results for service businesses',
    'business AI testimonials',
    'custom AI implementation results',
    'service business automation success',
    'AI ROI examples',
    'ChatGPT business results',
    'AI efficiency improvements',
    'custom AI client stories',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/case-studies',
  },
  openGraph: {
    title: 'AI Success Stories | Real Custom GPT Results for Service Businesses',
    description:
      'See real results from custom AI implementations. Service businesses saving time, improving consistency, and reducing stress with Piecewise solutions.',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise Case Studies - Real Custom GPT Results for Service Businesses',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/case-studies',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Success Stories | Real Custom GPT Results',
    description: 'See real results from custom AI implementations for service businesses.',
    images: ['/logos/piecewiselogo7.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
