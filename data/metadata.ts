import { Metadata, Viewport } from 'next/types';

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: 'Piecewise | Custom GPTs for Service Businesses',
    template: '%s | Piecewise',
  },
  description: 'We build private CustomGPTs that think like your business, not like a chatbot.',
  keywords: ['custom gpt', 'ai assistant', 'service business', 'business automation'],
  authors: [{ name: 'Piecewise' }],
  creator: 'Piecewise',
  publisher: 'Piecewise',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

// Default viewport configuration
export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Generate metadata for specific pages
export function generateMetadata({
  title,
  description,
  ...rest
}: {
  title?: string;
  description?: string;
  [key: string]: any;
}): Metadata {
  return {
    ...defaultMetadata,
    ...(title && { title }),
    ...(description && { description }),
    ...rest,
  };
}
