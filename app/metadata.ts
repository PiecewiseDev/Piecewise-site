import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://piecewiseai.com'),
  title: 'Piecewise | Custom GPT Solutions That Save Time for Service Business Owners',
  description:
    'Transform your service business with custom AI assistants that reduce stress and save hours daily. We build private Custom GPTs for contractors, managers, and service teams to automate operations while maintaining your unique voice. Get started today.',
  keywords: [
    'custom GPT for service businesses',
    'AI automation for contractors',
    'service business AI assistant',
    'reduce business stress with AI',
    'custom AI for small business owners',
    'ChatGPT for service companies',
    'business process automation',
    'AI consulting for service trades',
    'custom AI implementation',
    'save time with AI automation',
    'AI for field service management',
    'custom business AI solutions',
  ],
  openGraph: {
    title: 'Piecewise | Custom GPT Solutions That Save Time for Service Business Owners',
    description:
      'Transform your service business with custom AI assistants that reduce stress and save hours daily. Private Custom GPTs designed specifically for service businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Piecewise',
    url: 'https://piecewiseai.com',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise - Custom GPT Solutions for Service Business Owners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piecewise | Custom GPT Solutions for Service Business Owners',
    description:
      'Transform your service business with custom AI assistants that reduce stress and save hours daily.',
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
  verification: {
    google: '', // Add your Google Search Console verification code here when ready
  },
  alternates: {
    canonical: 'https://piecewiseai.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};
