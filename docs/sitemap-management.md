# Sitemap Management Guide

This document explains how the dynamic sitemap system works and how to manage it.

## Overview

The sitemap is automatically generated and includes only live pages (excluding those that redirect). This ensures search engines only index accessible content.

## How It Works

### Automatic Page Detection

- **Live pages**: Included in sitemap automatically
- **Redirecting pages**: Automatically excluded from sitemap
- **Non-existent pages**: Automatically excluded

### Current Status (Auto-detected)

- `/` (Home) ✅ **INCLUDED** - Live page
- `/about` ✅ **INCLUDED** - Live page
- `/contact` ✅ **INCLUDED** - Live page
- `/services` ❌ **EXCLUDED** - Redirects to home
- `/pricing` ❌ **EXCLUDED** - Redirects to home
- `/how-it-works` ❌ **EXCLUDED** - Redirects to home
- `/case-studies` ❌ **EXCLUDED** - Redirects to home

## Adding New Pages

### 1. Create the Page

Create your new page in the `app/` directory:

```
app/
  your-new-page/
    page.tsx
    metadata.ts
```

### 2. Add to Sitemap Configuration

Edit `lib/sitemap-utils.ts` and add your page:

```typescript
export const DEFAULT_PAGE_CONFIGS: SitemapPageConfigs = {
  // ... existing pages
  '/your-new-page': {
    priority: 0.7,
    changeFrequency: 'monthly',
    lastModified: new Date(),
  },
};
```

### 3. That's It!

The sitemap will automatically include your page if it doesn't redirect.

## SEO Configuration

### Priority Guidelines

- **1.0** - Homepage (most important)
- **0.9** - About/Company pages
- **0.8** - Main service/contact pages
- **0.7** - Secondary pages (pricing, case studies)
- **0.6** - Informational pages (how-it-works)
- **0.5** - Blog posts, resources
- **0.4** - Archives, less important content

### Change Frequency Guidelines

- **weekly** - Homepage, frequently updated content
- **monthly** - Most static pages (about, contact)
- **daily** - Blog, news sections
- **yearly** - Very static content (terms, privacy)

## Reactivating Archived Pages

When you reactivate an archived page:

1. **Remove the redirect** from the page component
2. **Restore the page content**
3. **Update robots.txt** if needed (remove any Disallow directives)
4. The sitemap will **automatically include** the page on next build

### Example: Reactivating Pricing Page

```typescript
// app/pricing/page.tsx - BEFORE (redirecting)
export default function PricingPage() {
  redirect('/');
}

// app/pricing/page.tsx - AFTER (reactivated)
export default function PricingPage() {
  return (
    <div>
      {/* Your pricing page content */}
    </div>
  );
}
```

The sitemap will automatically detect this change and include `/pricing` in the next generation.

## Robots.txt Management

The `robots.txt` file is now simplified and doesn't block specific pages:

```
User-agent: *
Allow: /

# Static assets are allowed
Allow: /*.css
Allow: /*.js
Allow: /images/
Allow: /logos/

# The sitemap handles page inclusion/exclusion
Sitemap: https://piecewiseai.com/sitemap.xml
```

## Testing

### Development

Run the development server and check the sitemap:

```bash
npm run dev
curl http://localhost:3000/sitemap.xml
```

### Production

Build and check the generated sitemap:

```bash
npm run build
npm start
curl http://localhost:3000/sitemap.xml
```

## Benefits

✅ **Automatic Updates** - No manual sitemap maintenance  
✅ **Error Prevention** - Can't accidentally include redirecting pages  
✅ **SEO Optimized** - Proper priorities and change frequencies  
✅ **Easy Management** - Central configuration in one file  
✅ **Developer Friendly** - Clear guidelines and helpers

## Troubleshooting

### Page Not Appearing in Sitemap

1. Check if the page redirects (it will be auto-excluded)
2. Verify the page exists in `DEFAULT_PAGE_CONFIGS`
3. Check the page file exists at the correct path
4. Rebuild the site to regenerate the sitemap

### Page Should Be Excluded

1. If it redirects, it will be auto-excluded
2. If you want to permanently exclude it, remove from `DEFAULT_PAGE_CONFIGS`
3. For temporary exclusion, use robots.txt `Disallow:` directives
