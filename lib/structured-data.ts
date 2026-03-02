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
  '@id': 'https://piecewiseai.com/#organization',
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
  sameAs: [
    'https://www.linkedin.com/company/piecewiseai',
    'https://directory.charlotteareachamber.com/memberdirectory/Details/piecewise-4356204',
  ],
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
  '@id': 'https://piecewiseai.com/#localbusiness',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '2',
  },
};

// Person Schema for Kyle Larsen (About page)
export const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://piecewiseai.com/#kyle-larsen',
  name: 'Kyle Larsen',
  jobTitle: 'Founder & CEO',
  description:
    'Founder and CEO of Piecewise, helping service business owners systemize operations, reduce key-person dependency, and scale using custom AI tools built around their business.',
  image: 'https://piecewiseai.com/images/kyle-profile.webp',
  url: 'https://piecewiseai.com/about',
  worksFor: {
    '@id': 'https://piecewiseai.com/#organization',
    '@type': 'Organization',
    name: 'Piecewise',
    url: 'https://piecewiseai.com',
  },
  homeLocation: {
    '@type': 'City',
    name: 'Charlotte',
    containedInPlace: {
      '@type': 'State',
      name: 'North Carolina',
    },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI Consultant',
    occupationLocation: {
      '@type': 'City',
      name: 'Charlotte',
    },
    description:
      'Designs and builds custom AI assistants and automation systems for service businesses',
    skills: 'Custom GPT Development, AI Automation, Business Systems, Service Business Operations',
  },
  sameAs: ['https://www.linkedin.com/in/kylelarsen1819/'],
  knowsAbout: [
    'Artificial Intelligence',
    'Custom GPT Development',
    'Business Process Automation',
    'Service Business Operations',
    'AI Implementation for Small Business',
    'Standard Operating Procedures',
    'Business Systems Design',
    'ChatGPT and OpenAI API',
    'Workflow Automation',
    'Entrepreneur Productivity',
  ],
};

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
    sameAs: ['https://www.linkedin.com/company/piecewiseai'],
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
    name: 'Free 14-Day Trial',
    description:
      'We build your custom AI assistant first. You test it free for 14 days. Pay only if you love it — no risk, no upfront cost.',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free 14-day trial — no payment required until you approve',
    },
    eligibleDuration: {
      '@type': 'QuantitativeValue',
      value: 14,
      unitCode: 'DAY',
    },
    validFrom: '2025-03-01',
    url: 'https://piecewiseai.com/contact',
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
    sameAs: ['https://www.linkedin.com/company/piecewiseai'],
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
    sameAs: ['https://www.linkedin.com/company/piecewiseai'],
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
  offers: {
    '@type': 'Offer',
    name: 'Free 14-Day Trial',
    description:
      'We build your automation solution first. You test it free for 14 days. Pay only if you love it.',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free 14-day trial — no payment required until you approve',
    },
    eligibleDuration: {
      '@type': 'QuantitativeValue',
      value: 14,
      unitCode: 'DAY',
    },
    validFrom: '2025-03-01',
    url: 'https://piecewiseai.com/contact',
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
export const generateWebPageSchema = (
  pageName: string,
  pageUrl: string,
  description: string,
  dateModified: string = '2025-03-01',
  datePublished: string = '2025-03-01'
) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: pageName,
  url: pageUrl,
  description: description,
  isPartOf: {
    '@id': 'https://piecewiseai.com/#website',
    '@type': 'WebSite',
    name: 'Piecewise',
    url: 'https://piecewiseai.com',
  },
  publisher: {
    '@id': 'https://piecewiseai.com/#organization',
    '@type': 'Organization',
    name: 'Piecewise',
  },
  inLanguage: 'en-US',
  datePublished: datePublished,
  dateModified: dateModified,
});

export const homePageSchema = generateWebPageSchema(
  'Piecewise | Custom AI for Service Business Owners',
  'https://piecewiseai.com',
  'Custom AI tools and automation solutions that help service business owners systemize operations, delegate confidently, and scale without adding headcount'
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

// Helper function to generate schema script tag
export function generateSchemaScript(schema: object) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
