/**
 * Structured Data (Schema.org) utilities for SEO
 *
 * This file contains all schema markup for different page types
 * to help search engines better understand our content.
 */

// Organization Schema (Main company info)
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Piecewise',
  alternateName: 'Piecewise',
  description: 'Custom AI tools and automation solutions for service businesses',
  url: 'https://piecewiseai.com',
  logo: 'https://piecewiseai.com/logos/piecewiselogo7.png',
  image: 'https://piecewiseai.com/logos/piecewiselogo7.png',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
    url: 'https://piecewiseai.com/contact',
  },
  founder: {
    '@type': 'Person',
    name: 'Kyle Larsen',
    jobTitle: 'Founder & CEO',
    image: 'https://piecewiseai.com/images/kyle-profile.webp',
    sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  },
  sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Automation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom AI Development',
          description:
            'Custom AI tools and automation solutions built specifically for your business',
          provider: {
            '@type': 'Organization',
            name: 'Piecewise',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Implementation & Support',
          description: 'Professional implementation and ongoing support for AI business solutions',
          provider: {
            '@type': 'Organization',
            name: 'Piecewise',
          },
        },
      },
    ],
  },
};

// LocalBusiness Schema for enhanced local SEO (removed placeholder ratings)
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Piecewise',
  description: 'Custom AI development and implementation for service businesses',
  url: 'https://piecewiseai.com',
  telephone: 'Contact via website',
  email: 'contact@piecewiseai.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'Multiple States',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.8283', // Center of US
    longitude: '-98.5795',
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$',
  paymentAccepted: ['Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'USD',
  openingHours: 'Mo-Fr 09:00-17:00',
  founder: {
    '@type': 'Person',
    name: 'Kyle Larsen',
  },
};

// Person Schema for Kyle Larsen (About page)
export const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kyle Larsen',
  jobTitle: 'Founder & CEO',
  description:
    'Founder and CEO of Piecewise, helping service business owners reduce stress and save time with custom AI assistants.',
  image: 'https://piecewiseai.com/images/kyle-profile.webp',
  url: 'https://piecewiseai.com/about',
  worksFor: {
    '@type': 'Organization',
    name: 'Piecewise',
    url: 'https://piecewiseai.com',
  },
  sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  knowsAbout: [
    'Artificial Intelligence',
    'Custom GPT Development',
    'Business Automation',
    'Service Business Operations',
    'AI Implementation',
  ],
};

// FAQ Schema for common questions
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Custom GPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Custom GPT is a specialized AI assistant trained specifically for your business processes, industry knowledge, and communication style. Unlike generic chatbots, it understands your specific needs and can handle complex business tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a Custom GPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our typical implementation process takes 2-4 weeks, depending on complexity. We follow a 4-phase approach: Discovery, Design, Development, and Deployment with ongoing support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need technical knowledge to use a Custom GPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No technical knowledge required! We design our Custom GPTs to be user-friendly for business owners and their teams. We provide full training and ongoing support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses benefit from Custom GPTs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service businesses including contractors, consultants, healthcare providers, legal firms, and any business that handles repetitive inquiries or complex processes benefit most from Custom GPT solutions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my business data secure with Custom GPTs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we prioritize data security. Our Custom GPTs are built with enterprise-grade security measures, and we can implement additional privacy controls based on your specific requirements.',
      },
    },
  ],
};

// Service Schema for main services
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom AI Development',
  description: 'Professional custom AI and GPT development services for service businesses',
  provider: {
    '@type': 'Organization',
    name: 'Piecewise',
    url: 'https://piecewiseai.com',
  },
  serviceType: 'AI Development',
  audience: {
    '@type': 'Audience',
    audienceType: 'Service Businesses',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Custom GPT Development',
        description: 'Build custom AI assistants tailored to your business needs',
      },
      {
        '@type': 'Offer',
        name: 'AI Implementation',
        description: 'Professional implementation and integration of AI solutions',
      },
      {
        '@type': 'Offer',
        name: 'AI Support & Maintenance',
        description: 'Ongoing support and optimization for your AI systems',
      },
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

// WebSite Schema with search functionality
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Piecewise',
  alternateName: 'Piecewise',
  url: 'https://piecewiseai.com',
  description: 'Custom AI solutions for service businesses',
  publisher: {
    '@type': 'Organization',
    name: 'Piecewise',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://piecewiseai.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Review Schema for testimonials (for future use with real reviews)
export const generateReviewSchema = (
  reviews: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished: string;
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Piecewise',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  })),
});

// Breadcrumb Schema generator
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// Helper function to generate schema script tag
export function generateSchemaScript(schema: object) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
