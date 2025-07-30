import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Piecewise | Schedule Your Custom AI Discovery Call Today',
  description:
    'Ready to transform your service business with custom AI? Schedule a free discovery call to learn how our custom AI assistants can save you time, reduce stress, and streamline operations. Get started with Piecewise today.',
  keywords: [
    'contact AI consultant',
    'schedule AI discovery call',
    'custom AI consultation',
    'AI solutions for service business',
    'free AI consultation',
    'custom GPT development inquiry',
    'business automation consultation',
    'AI implementation services',
    'service business AI support',
    'get started with custom AI',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/contact',
  },
  openGraph: {
    title: 'Contact Piecewise | Schedule Your Custom AI Discovery Call Today',
    description:
      'Ready to transform your service business with custom AI? Schedule a free discovery call and learn how we can help you save time and reduce stress.',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Contact Piecewise - Schedule Your Custom AI Discovery Call',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/contact',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Piecewise | Schedule Your Custom AI Discovery Call Today',
    description:
      'Ready to transform your service business with custom AI? Schedule a free discovery call today.',
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

export default metadata;
