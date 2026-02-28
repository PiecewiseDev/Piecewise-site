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
    telephone: '+1-980-218-0346',
    url: 'https://piecewiseai.com/contact',
  },
  foundingDate: '2025',
  numberOfEmployees: '1-10',
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
  description:
    'Custom AI development and implementation for service businesses based in Charlotte, NC',
  url: 'https://piecewiseai.com',
  telephone: '+1-980-218-0346',
  email: 'contact@piecewiseai.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '436 East 36th Street',
    addressCountry: 'US',
    addressRegion: 'NC',
    addressLocality: 'Charlotte',
    postalCode: '28205',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '35.2271',
    longitude: '-80.8431',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Charlotte',
      '@id': 'https://en.wikipedia.org/wiki/Charlotte,_North_Carolina',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Mecklenburg County',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  serviceArea: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '35.2271',
        longitude: '-80.8431',
      },
      geoRadius: '50 miles',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
  ],
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

// Enhanced Service Schemas for specific offerings
export const customGPTServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom GPT Development',
  description:
    'Private AI assistants built specifically for service businesses to automate operations while maintaining your unique voice',
  provider: {
    '@type': 'Organization',
    name: 'Piecewise',
    foundingDate: '2025',
    url: 'https://piecewiseai.com',
    sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  },
  serviceType: 'AI Development',
  category: 'Custom AI Solutions',
  areaServed: [
    {
      '@type': 'City',
      name: 'Charlotte',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Service Business Owners',
  },
  offers: {
    '@type': 'Offer',
    name: 'Custom GPT Development Package',
    description: 'Complete custom AI assistant development with training and support',
    priceRange: '$$',
    availability: 'https://schema.org/InStock',
    validFrom: '2025-01-01',
  },
};

export const aiConsultingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AI Consulting Services',
  description:
    'Professional AI consulting and implementation for service businesses based in Charlotte, NC',
  provider: {
    '@type': 'Organization',
    name: 'Piecewise',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '436 East 36th Street',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      addressCountry: 'US',
      postalCode: '28205',
    },
    sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  },
  serviceType: 'Technology Consulting',
  category: 'AI Consulting',
  areaServed: [
    {
      '@type': 'City',
      name: 'Charlotte',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Mecklenburg County',
    },
    {
      '@type': 'State',
      name: 'North Carolina',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'AI Strategy Consultation',
        description: 'Strategic planning for AI implementation in service businesses',
      },
      {
        '@type': 'Offer',
        name: 'Custom AI Development',
        description: 'Bespoke AI solution development and deployment',
      },
      {
        '@type': 'Offer',
        name: 'AI Training & Support',
        description: 'Team training and ongoing technical support for AI systems',
      },
    ],
  },
};

export const automationServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Process Automation',
  description:
    'AI-powered automation solutions that reduce stress and save hours daily for service business teams',
  provider: {
    '@type': 'Organization',
    name: 'Piecewise',
    foundingDate: '2025',
    sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  },
  serviceType: 'Business Automation',
  category: 'Process Automation',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Contractors, Managers, Service Teams',
  },
};

// Enhanced Contact Point Schema
export const enhancedContactPointSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPoint',
  contactType: 'customer service',
  availableLanguage: ['English'],
  telephone: '+1-980-218-0346',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://piecewiseai.com/contact',
  contactOption: 'TollFree',
  hoursAvailable: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
      validFrom: '2025-01-01',
    },
  ],
};

// WebPage Schemas for individual pages
export const generateWebPageSchema = (pageName: string, pageUrl: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: pageName,
  url: pageUrl,
  description: description,
  isPartOf: {
    '@type': 'WebSite',
    name: 'Piecewise',
    url: 'https://piecewiseai.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Piecewise',
    foundingDate: '2025',
    sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  },
  inLanguage: 'en-US',
  dateModified: new Date().toISOString().split('T')[0],
});

export const servicesPageSchema = generateWebPageSchema(
  'AI Services for Service Businesses | Piecewise',
  'https://piecewiseai.com/services',
  'Custom AI development services including GPT creation, automation, and implementation for service businesses'
);

export const pricingPageSchema = generateWebPageSchema(
  'AI Development Pricing | Piecewise',
  'https://piecewiseai.com/pricing',
  'Transparent pricing for custom AI development and consulting services for service businesses'
);

export const aboutPageSchema = generateWebPageSchema(
  'About Piecewise | Charlotte AI Consultants',
  'https://piecewiseai.com/about',
  'Meet the Charlotte-based team behind Piecewise helping service business owners with custom AI solutions'
);

export const contactPageSchema = generateWebPageSchema(
  'Contact Piecewise | AI Consulting Charlotte',
  'https://piecewiseai.com/contact',
  'Get in touch with our Charlotte-based AI consulting team for custom GPT and automation solutions'
);

export const howItWorksPageSchema = generateWebPageSchema(
  'How Our AI Development Process Works | Piecewise',
  'https://piecewiseai.com/how-it-works',
  'Learn about our proven 4-phase process for developing custom AI solutions for service businesses'
);

export const caseStudiesPageSchema = generateWebPageSchema(
  'Customer Stories | Piecewise - Real Results from Custom AI Solutions',
  'https://piecewiseai.com/customer-stories',
  'See how service businesses are using custom AI solutions to save time, reduce stress, and scale operations. Real stories, real results.'
);

export const blogPageSchema = generateWebPageSchema(
  'Blog | Piecewise - AI Insights & Business Growth',
  'https://piecewiseai.com/blog',
  'Insights on AI automation, Custom GPTs, and scaling service businesses. Learn how to transform operations and reclaim your time with intelligent solutions.'
);

export const resourcesPageSchema = generateWebPageSchema(
  'AI Tools & Resources | Piecewise - Comprehensive AI Tool Directory',
  'https://piecewiseai.com/resources',
  'Comprehensive directory of AI tools for business. Browse LLMs, image generation, automation, transcription, and more. Find the right AI tool for your needs.'
);

// Helper function to generate schema script tag
export function generateSchemaScript(schema: object) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
