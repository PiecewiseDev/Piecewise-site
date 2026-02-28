# Metadata Best Practices Guide

## Overview

This guide covers the metadata system implemented for the Piecewise website, following modern SEO and Next.js 14+ best practices.

## What Changed

### ✅ Improvements Made

1. **Centralized Configuration**: All metadata utilities are now in `/lib/metadata.ts`
2. **Removed Deprecated Keywords**: The `keywords` meta tag has been deprecated by search engines
3. **Added Structured Data**: JSON-LD schema markup for better SEO
4. **Consistent OG Images**: All images now use the standard 1200x630 dimensions
5. **Unified Viewport**: Consistent viewport settings across all pages
6. **Better Type Safety**: Improved TypeScript interfaces and type checking

### ❌ Removed

- `keywords` field (deprecated, no longer used by search engines)
- Duplicate metadata configurations
- Inconsistent OG image dimensions (675px height → 630px standard)

## Core Files

### `/lib/metadata.ts`

The central hub for all metadata functionality:

```typescript
// Site configuration
export const SITE_CONFIG = {
  name: 'Piecewise',
  url: 'https://piecewiseai.com',
  description: '...',
  ogImage: '/logos/piecewiselogo7.png',
  twitterHandle: '@piecewiseai',
  locale: 'en_US',
  type: 'website',
}

// Helper functions
export function generatePageMetadata({ ... })
export function generateArticleSchema({ ... })
export function generateBreadcrumbSchema({ ... })

// Schema definitions
export const organizationSchema = { ... }
export function generateWebsiteSchema() { ... }
```

## Usage Examples

### Standard Page Metadata

For most pages (About, Contact, Case Studies, etc.):

```typescript
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Your Page Title | Piecewise',
  description: 'Your compelling page description for SEO',
  path: '/your-page',
  images: [
    {
      url: '/images/your-og-image.png',
      width: 1200,
      height: 630,
      alt: 'Descriptive alt text',
    },
  ],
});
```

### Article/Blog Post Metadata

For blog posts or case studies with publication dates:

```typescript
import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Article Title',
  description: 'Article description',
  path: '/blog/article-slug',
  type: 'article',
  publishedTime: '2024-01-15T00:00:00.000Z',
  modifiedTime: '2024-01-20T00:00:00.000Z',
  authors: ['Author Name'],
  images: [
    {
      url: '/images/article-image.png',
      width: 1200,
      height: 630,
      alt: 'Article image alt text',
    },
  ],
});
```

### Adding Structured Data (JSON-LD)

For pages that need custom structured data:

```typescript
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/metadata';

export default function ArticlePage() {
  const articleSchema = generateArticleSchema({
    title: 'Article Title',
    description: 'Article description',
    url: 'https://piecewiseai.com/blog/article',
    datePublished: '2024-01-15T00:00:00.000Z',
    dateModified: '2024-01-20T00:00:00.000Z',
    image: '/images/article-image.png',
    authorName: 'Piecewise',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://piecewiseai.com' },
    { name: 'Blog', url: 'https://piecewiseai.com/blog' },
    { name: 'Article Title', url: 'https://piecewiseai.com/blog/article' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page content */}
    </>
  );
}
```

### Using Default Viewport

Import and use the consistent viewport configuration:

```typescript
import { defaultViewport } from '@/lib/metadata';

export const viewport = defaultViewport;
```

## SEO Best Practices

### 1. Title Tags

- **Length**: 50-60 characters (optimal display in search results)
- **Format**: `Page Title | Piecewise`
- **Include**: Primary keyword and brand name
- **Unique**: Every page should have a unique title

✅ Good: `Contact Piecewise | Schedule Your Custom AI Discovery Call Today`
❌ Bad: `Contact - Piecewise`

### 2. Meta Descriptions

- **Length**: 150-160 characters
- **Content**: Compelling summary with call-to-action
- **Include**: Primary keywords naturally
- **Unique**: Different for every page

✅ Good: `Ready to transform your service business with custom AI? Schedule a free discovery call to learn how our custom AI assistants can save you time, reduce stress, and streamline operations.`
❌ Bad: `Contact page for Piecewise`

### 3. Open Graph Images

- **Dimensions**: 1200x630 pixels (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **Size**: Keep under 1MB
- **Alt Text**: Always provide descriptive alt text
- **Absolute URLs**: Use full URLs with domain

### 4. Canonical URLs

Always include canonical URLs to prevent duplicate content issues:

```typescript
alternates: {
  canonical: 'https://piecewiseai.com/your-page',
}
```

### 5. Structured Data (Schema.org)

Benefits:

- Rich snippets in search results
- Better understanding by search engines
- Improved click-through rates
- Enhanced social media sharing

Currently implemented:

- ✅ Organization schema (company info)
- ✅ Website schema (site structure)
- ✅ Article schema (for blog posts)
- ✅ Breadcrumb schema (navigation)

## Testing Your Metadata

### Tools to Use

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests: Structured data validation

2. **Facebook Sharing Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Tests: Open Graph tags

3. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Tests: Twitter card markup

4. **LinkedIn Post Inspector**
   - URL: https://www.linkedin.com/post-inspector/
   - Tests: LinkedIn sharing preview

5. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Tests: JSON-LD structured data

## Common Patterns

### Page-Specific Metadata File Structure

```
app/
  page-name/
    metadata.ts   # Page metadata
    page.tsx      # Page component
```

In `metadata.ts`:

```typescript
import { Metadata } from 'next';
import { generatePageMetadata, defaultViewport } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  // ... configuration
});

export const viewport = defaultViewport;
```

In `page.tsx`:

```typescript
import { metadata } from './metadata';

// Export metadata
export { metadata };

export default function Page() {
  return (
    // ... page content
  );
}
```

## Troubleshooting

### Issue: Metadata not showing up

**Solution**:

- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check that metadata is exported correctly

### Issue: OG images not loading

**Solution**:

- Verify image path is correct
- Check image exists in `/public` directory
- Ensure metadataBase is set in root metadata
- Use absolute URLs for external testing

### Issue: Duplicate metadata

**Solution**:

- Don't define metadata in both layout.tsx and page.tsx
- Page metadata overrides layout metadata
- Use the centralized system in `/lib/metadata.ts`

## Checklist for New Pages

- [ ] Create `metadata.ts` file in page directory
- [ ] Import and use `generatePageMetadata`
- [ ] Set unique, descriptive title (50-60 chars)
- [ ] Write compelling meta description (150-160 chars)
- [ ] Specify correct path for canonical URL
- [ ] Add appropriate OG image (1200x630px)
- [ ] Include descriptive alt text for images
- [ ] Add structured data if applicable
- [ ] Test with validation tools
- [ ] Verify on social media platforms

## Additional Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search/docs)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Maintenance

### Regular Tasks

1. **Quarterly Review**: Check all page metadata for accuracy
2. **Update Structured Data**: Keep organization info current
3. **Monitor Performance**: Use Google Search Console
4. **Test Social Sharing**: Verify OG images display correctly
5. **Update Images**: Refresh OG images as brand evolves

### When Adding New Pages

1. Use the centralized metadata system
2. Follow the established patterns
3. Test thoroughly before deployment
4. Update sitemap.xml if needed
5. Submit to Google Search Console

---

**Last Updated**: October 2024  
**Maintained By**: Piecewise Development Team
