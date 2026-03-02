/**
 * Sitemap utilities for managing dynamic sitemap generation
 *
 * This file centralizes sitemap logic to make it easy to:
 * - Add new pages to the sitemap
 * - Configure SEO properties for each page
 * - Automatically exclude redirecting pages
 */

export interface PageConfig {
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified: Date;
}

export interface SitemapPageConfigs {
  [route: string]: PageConfig;
}

/**
 * Default page configurations for SEO
 * Add new pages here when they are created
 */
export const DEFAULT_PAGE_CONFIGS: SitemapPageConfigs = {
  '/': {
    priority: 1.0,
    changeFrequency: 'weekly',
    lastModified: new Date('2026-03-02'),
  },
  '/about': {
    priority: 0.9,
    changeFrequency: 'monthly',
    lastModified: new Date('2026-03-02'),
  },
  '/contact': {
    priority: 0.8,
    changeFrequency: 'monthly',
    lastModified: new Date('2026-03-02'),
  },
  '/privacy': {
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: new Date('2026-03-02'),
  },
  '/terms': {
    priority: 0.3,
    changeFrequency: 'yearly',
    lastModified: new Date('2026-03-02'),
  },

  // --- Not yet launched — uncomment when ready ---
  // '/blog': {
  //   priority: 0.8,
  //   changeFrequency: 'weekly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/resources': {
  //   priority: 0.8,
  //   changeFrequency: 'weekly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/services': {
  //   priority: 0.8,
  //   changeFrequency: 'weekly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/pricing': {
  //   priority: 0.7,
  //   changeFrequency: 'monthly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/how-it-works': {
  //   priority: 0.6,
  //   changeFrequency: 'monthly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/case-studies': {
  //   priority: 0.7,
  //   changeFrequency: 'weekly',
  //   lastModified: new Date('2025-03-01'),
  // },
  // '/customer-stories': {
  //   priority: 0.7,
  //   changeFrequency: 'weekly',
  //   lastModified: new Date('2025-03-01'),
  // },
};

/**
 * Helper function to add a new page to the sitemap
 * Use this when creating new pages
 */
export function addPageToSitemap(route: string, config: Partial<PageConfig> = {}): PageConfig {
  const defaultConfig: PageConfig = {
    priority: 0.5,
    changeFrequency: 'monthly',
    lastModified: new Date(),
  };

  return {
    ...defaultConfig,
    ...config,
  };
}

/**
 * SEO Priority Guidelines:
 * 1.0 - Homepage (most important)
 * 0.9 - About/Company pages
 * 0.8 - Main service/contact pages
 * 0.7 - Secondary pages (pricing, case studies)
 * 0.6 - Informational pages (how-it-works)
 * 0.5 - Blog posts, resources
 * 0.4 - Archives, less important content
 */

/**
 * Change Frequency Guidelines:
 * - 'weekly' - Homepage, frequently updated content
 * - 'monthly' - Most static pages (about, contact, how-it-works)
 * - 'daily' - Blog, news sections (if added)
 * - 'yearly' - Very static content (terms, privacy)
 */
