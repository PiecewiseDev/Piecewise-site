import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Our AI Development Process Works | 4-Phase Custom GPT Implementation',
  description:
    'Learn our proven 4-phase process for building custom AI solutions for service businesses. From discovery to deployment, we guide you through each step with no tech skills required. Understand how we build AI that thinks like your business.',
  keywords: [
    'AI development process',
    'custom GPT implementation',
    'AI consulting methodology',
    'custom AI development phases',
    'business AI deployment process',
    'how AI development works',
    'AI project timeline',
    'custom AI building process',
    'service business AI implementation',
    'AI solution development steps',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/how-it-works',
  },
  openGraph: {
    title: 'How Our AI Development Process Works | 4-Phase Custom GPT Implementation',
    description:
      'Our proven 4-phase process for building custom AI solutions. From discovery to deployment, we guide service businesses through each step with no tech skills required.',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise Process - 4-Phase Custom GPT Implementation for Service Businesses',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/how-it-works',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Our AI Development Process Works | 4-Phase Implementation',
    description:
      'Our proven 4-phase process for building custom AI solutions. No tech skills needed, no rushed decisions.',
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
