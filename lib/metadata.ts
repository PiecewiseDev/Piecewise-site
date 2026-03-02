import { Metadata, Viewport } from 'next/types';

// Site configuration
export const SITE_CONFIG = {
  name: 'Piecewise',
  url: 'https://piecewiseai.com',
  description: 'We build private Custom GPTs that think like your business, not like a chatbot.',
  ogImage: '/logos/piecewiselogo7.png',
  twitterHandle: '@piecewiseai',
  locale: 'en_US',
  type: 'website',
} as const;

// Default viewport configuration - consistent across all pages
export const defaultViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a1d',
};

// Organization structured data for SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logos/piecewiselogo7.png`,
  description: SITE_CONFIG.description,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+1-980-218-0346',
    email: 'kyle@piecewiseai.com',
    url: `${SITE_CONFIG.url}/contact`,
    availableLanguage: 'English',
  },
  sameAs: ['https://twitter.com/piecewiseai', 'https://linkedin.com/company/piecewiseai'],
};

// Website structured data
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.url}/#organization`,
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logos/piecewiselogo7.png`,
      },
    },
  };
}

// Default metadata for the site
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Piecewise | Custom AI Development, Implementation, and Support',
    template: '%s | Piecewise',
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: 'Piecewise', url: SITE_CONFIG.url }],
  creator: 'Piecewise',
  publisher: 'Piecewise',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
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
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Piecewise | Custom AI Development, Implementation, and Support',
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Custom AI Solutions`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.twitterHandle,
    creator: SITE_CONFIG.twitterHandle,
    title: 'Piecewise | Custom AI Development, Implementation, and Support',
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/logos/piecewiselogo6.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logos/piecewiselogo6.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
};

// Generate metadata for specific pages
export function generatePageMetadata({
  title,
  description,
  path = '',
  images,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;
  const ogImages = images || [
    {
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: `${title} | ${SITE_CONFIG.name}`,
    },
  ];

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type,
      images: ogImages.map((img) => ({
        url: img.url,
        width: img.width || 1200,
        height: img.height || 630,
        alt: img.alt || title,
        type: 'image/png',
      })),
      ...(type === 'article' && publishedTime && { publishedTime }),
      ...(type === 'article' && modifiedTime && { modifiedTime }),
      ...(type === 'article' && authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title,
      description,
      images: ogImages.map((img) => img.url),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
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
}

// Generate article schema for blog posts or case studies
export function generateArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  authorName = 'Piecewise',
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/logos/piecewiselogo7.png`,
      },
    },
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
