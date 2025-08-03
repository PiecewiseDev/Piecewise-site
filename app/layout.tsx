import '@/styles/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font display
  preload: true, // Preload the font for better performance
});

// Move viewport to separate export (fixes Next.js warnings)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a1d',
};

export const metadata = {
  title: 'Piecewise | Custom AI Development, Implementation, and Support',
  description:
    'Transform your service business with custom AI tools built specifically for your needs',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Preload critical assets for better Core Web Vitals */}
        <link rel="preload" href="/images/ChatGPTScreenshot.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logos/piecewiselogo7.png" as="image" type="image/png" />

        {/* Enhanced DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//vitals.vercel-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Enhanced resource hints for better performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" crossOrigin="" />

        {/* Module preload for critical JavaScript */}
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />

        {/* Prefetch critical navigation routes for faster transitions */}
        <link rel="prefetch" href="/about" as="document" />
        <link rel="prefetch" href="/contact" as="document" />
        <link rel="prefetch" href="/services" as="document" />

        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

        {/* Enhanced SEO meta tags for technical optimization */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="google" content="notranslate" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />

        {/* Performance optimization hints */}
        <meta name="resource-hints" content="preload,prefetch,preconnect,dns-prefetch" />
        <meta name="loading-optimization" content="critical-path" />
        <meta name="render-blocking" content="optimize" />

        {/* Enhanced crawl directives */}
        <meta name="slurp" content="noydir,noodp" />
        <meta name="teoma" content="index,follow" />
        <meta name="crawler" content="index,follow,archive" />

        {/* Geographic meta tags for local SEO */}
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Charlotte" />
        <meta name="geo.position" content="35.2271;-80.8431" />
        <meta name="ICBM" content="35.2271, -80.8431" />
        <meta name="geo.country" content="US" />
        <meta name="geo.state" content="North Carolina" />
        <meta name="geo.city" content="Charlotte" />

        {/* Advanced Content Classification */}
        <meta name="category" content="Technology,Business Services,AI Consulting" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="subject" content="AI consulting for service businesses" />
        <meta name="copyright" content="© 2025 Piecewise. All rights reserved." />
        <meta name="author" content="Kyle Larsen, Piecewise" />
        <meta name="publisher" content="Piecewise" />

        {/* Enhanced Apple/iOS Integration */}
        <meta name="apple-mobile-web-app-title" content="Piecewise" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Microsoft/Windows Integration */}
        <meta name="msapplication-TileColor" content="#3a66f7" />
        <meta name="msapplication-navbutton-color" content="#3a66f7" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-tooltip" content="Piecewise - Custom AI Solutions" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Enhanced Performance & Behavior Hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Additional Security Headers */}
        <meta httpEquiv="X-Download-Options" content="noopen" />
        <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* Enhanced SEO Signals */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="audience" content="business owners, contractors, service businesses" />
        <meta name="target" content="service business owners seeking AI automation solutions" />

        {/* Social Media Platform Hints */}
        <meta property="business:contact_data:locality" content="Charlotte" />
        <meta property="business:contact_data:region" content="North Carolina" />
        <meta property="business:contact_data:country_name" content="United States" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white px-4 py-2 text-navy"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-20 bg-background">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
