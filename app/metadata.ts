import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://piecewiseai.com'),
  title: 'Piecewise | Custom AI Tools for Your Business',
  description:
    'Transform your service business with custom AI tools that understand your processes. We build private Custom GPTs for contractors, managers, and teams to streamline operations and improve efficiency.',
  keywords: [
    'custom GPT for small business',
    'AI support for service teams',
    'AI for trades and contractors',
    'internal AI assistant',
    'simple AI tools for operations',
    'business automation',
    'AI consulting',
    'custom AI solutions',
    'service business AI',
    'ChatGPT for business',
  ],
  openGraph: {
    title: 'Piecewise | Custom AI Tools for Your Business',
    description:
      'Equip your business with tools that think, act, and grow with you. Custom AI solutions designed specifically for service businesses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Piecewise',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise - Custom AI Tools for Your Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piecewise | Custom AI Tools for Your Business',
    description:
      'Transform your service business with custom AI tools that understand your processes.',
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
