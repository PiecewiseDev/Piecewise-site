import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Piecewise | Custom AI Solutions for Service Business Owners',
  description:
    'Meet the team behind Piecewise. We help service business owners reduce stress and save time with custom AI assistants. Learn our mission to empower businesses through simple, effective AI automation. Schedule your discovery call today.',
  keywords: [
    'custom AI for service businesses',
    'AI automation for contractors',
    'business AI solutions',
    'custom GPT development',
    'service business automation',
    'AI consulting team',
    'Kyle Larsen founder',
    'reduce business stress with AI',
    'custom AI assistants',
    'AI for small business owners',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/about',
  },
  openGraph: {
    title: 'About Piecewise | Custom AI Solutions for Service Business Owners',
    description:
      'Meet the team helping service business owners save time and reduce stress with custom AI assistants. Learn our mission and schedule your discovery call.',
    images: [
      {
        url: '/images/kyle-profile.webp',
        width: 1200,
        height: 675,
        alt: 'Kyle Larsen, Founder & CEO of Piecewise - Custom AI Solutions for Service Businesses',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/about',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Piecewise | Custom AI Solutions for Service Business Owners',
    description:
      'Meet the team helping service business owners save time and reduce stress with custom AI assistants.',
    images: ['/images/kyle-profile.webp'],
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
