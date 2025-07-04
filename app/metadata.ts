import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://piecewise.ai'),
  title: 'Custom AI Tools | Piecewise - Built for Service Businesses',
  description:
    'Transform your service business with custom AI tools that understand your processes. We build private CustomGPTs for contractors, managers, and teams to streamline operations and improve efficiency.',
  keywords: [
    'custom GPT for small business',
    'AI support for service teams',
    'AI for trades and contractors',
    'internal AI assistant',
    'simple AI tools for operations',
  ],
  openGraph: {
    title: 'Custom AI Tools Built to Help You Lead, Serve, and Grow',
    description:
      'Equip your business with tools that think, act, and grow with you. Custom AI solutions designed specifically for service businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Piecewise',
    images: [
      {
        url: '/images/ChatGPTScreenshot.png',
        width: 1200,
        height: 675,
        alt: 'Custom AI tools dashboard showing business automation interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Tools for Service Businesses | Piecewise',
    description:
      'Transform your service business with custom AI tools that understand your processes.',
    images: ['/images/ChatGPTScreenshot.png'],
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
  verification: {
    google: '', // Add your Google Search Console verification code here when ready
  },
};
