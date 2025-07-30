import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Services for Service Businesses | Custom GPT Development & Implementation',
  description:
    'Discover how Piecewise builds custom GPT solutions tailored for service businesses. From consultation to implementation, we help contractors, managers, and teams automate operations and improve efficiency. Learn about our AI development services.',
  keywords: [
    'custom GPT development services',
    'AI automation for service businesses',
    'custom AI implementation',
    'business AI consulting',
    'AI solutions for contractors',
    'service business automation',
    'custom AI assistant development',
    'ChatGPT for business services',
    'AI integration services',
    'custom AI workflow automation',
  ],
  alternates: {
    canonical: 'https://piecewiseai.com/services',
  },
  openGraph: {
    title: 'AI Services for Service Businesses | Custom GPT Development & Implementation',
    description:
      'Custom GPT solutions for service businesses. From consultation to implementation, we help automate operations and improve efficiency while maintaining your unique voice.',
    images: [
      {
        url: '/logos/piecewiselogo7.png',
        width: 1200,
        height: 675,
        alt: 'Piecewise Services - Custom GPT Development for Service Businesses',
      },
    ],
    type: 'website',
    url: 'https://piecewiseai.com/services',
    siteName: 'Piecewise',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services for Service Businesses | Custom GPT Development',
    description:
      'Custom GPT solutions for service businesses. Automate operations while maintaining your unique voice and expertise.',
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
