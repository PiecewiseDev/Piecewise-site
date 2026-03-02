/**
 * @deprecated This file is deprecated. Use @/lib/metadata instead.
 *
 * All metadata utilities have been moved to @/lib/metadata for better
 * organization and to follow Next.js best practices.
 *
 * Import from @/lib/metadata:
 * - defaultMetadata
 * - defaultViewport
 * - generatePageMetadata
 * - SITE_CONFIG
 * - organizationSchema
 * - generateWebsiteSchema
 * - generateArticleSchema
 * - generateBreadcrumbSchema
 */

// Re-export from lib/metadata for backwards compatibility
export {
  defaultMetadata,
  defaultViewport,
  SITE_CONFIG,
  generatePageMetadata,
  generateWebsiteSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from '@/lib/metadata';

// organizationSchema is now only in @/lib/structured-data
export { organizationSchema } from '@/lib/structured-data';
