import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { DEFAULT_PAGE_CONFIGS } from '@/lib/sitemap-utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://piecewiseai.com';
  const appDir = path.join(process.cwd(), 'app');

  // Function to check if a page redirects by reading its content
  function pageRedirects(pagePath: string): boolean {
    try {
      const fullPath = path.join(appDir, pagePath, 'page.tsx');
      if (!fs.existsSync(fullPath)) {
        return false;
      }

      const content = fs.readFileSync(fullPath, 'utf-8');
      // Check if the page contains a redirect call
      return content.includes('redirect(') && content.includes("redirect('/')");
    } catch (error) {
      console.warn(`Could not check redirect status for ${pagePath}:`, error);
      return false;
    }
  }

  // Function to check if a page exists and is not a redirect
  function isLivePage(route: string): boolean {
    if (route === '/') {
      // Home page always exists
      return true;
    }

    const pagePath = route.substring(1); // Remove leading slash
    return !pageRedirects(pagePath);
  }

  // Generate sitemap entries for live pages only
  const sitemapEntries: MetadataRoute.Sitemap = [];

  Object.entries(DEFAULT_PAGE_CONFIGS).forEach(([route, config]) => {
    if (isLivePage(route)) {
      sitemapEntries.push({
        url: route === '/' ? baseUrl : `${baseUrl}${route}`,
        lastModified: config.lastModified,
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      });
    }
  });

  // Log which pages are included/excluded for debugging
  if (process.env.NODE_ENV === 'development') {
    console.log('Sitemap generation:');
    Object.keys(DEFAULT_PAGE_CONFIGS).forEach((route) => {
      const isLive = isLivePage(route);
      console.log(`  ${route}: ${isLive ? 'INCLUDED' : 'EXCLUDED (redirects)'}`);
    });
  }

  return sitemapEntries;
}
