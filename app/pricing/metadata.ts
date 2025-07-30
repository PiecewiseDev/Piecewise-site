import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Pricing Plans | Transparent Custom GPT Development Costs for Service Businesses',
  description:
    'Transparent pricing for custom AI solutions designed for service businesses. Our Build and Grow plans help you save time, reduce stress, and improve customer experience. Starting at affordable monthly rates. Get your custom AI quote today.',
  keywords: [
    'custom AI pricing',
    'GPT development costs',
    'AI consulting pricing',
    'service business AI plans',
    'custom AI assistant pricing',
    'business automation costs',
    'AI implementation pricing',
    'affordable custom AI',
    'ChatGPT for business pricing',
    'AI solution investment',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/pricing',
  },
  openGraph: {
    title: 'AI Pricing Plans | Transparent Custom GPT Development Costs',
    description:
      'Transparent pricing for custom AI solutions. Build and Grow plans designed to help service businesses save time and improve customer experience.',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise Pricing - Transparent Custom GPT Development Costs',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/pricing',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Pricing Plans | Transparent Custom GPT Development Costs',
    description: 'Transparent pricing for custom AI solutions designed for service businesses.',
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
