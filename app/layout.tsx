import '@/styles/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font display
});

export const metadata = {
  title: 'Piecewise | Custom AI Development, Implementation, and Support',
  description:
    'Transform your service business with custom AI tools built specifically for your needs',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  icons: {
    icon: [
      { url: '/logos/piecewiselogo6.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logos/piecewiselogo6.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
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
