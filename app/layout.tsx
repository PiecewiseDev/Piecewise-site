import '@/styles/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { defaultMetadata, defaultViewport, generateWebsiteSchema } from '@/lib/metadata';
import { organizationSchema } from '@/lib/structured-data';

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Use centralized viewport configuration
export const viewport = defaultViewport;

// Use centralized metadata configuration
export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white px-4 py-2 text-neutral-darkest"
        >
          Skip to main content
        </a>
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="flex-grow bg-background">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
