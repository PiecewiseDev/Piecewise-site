import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { site } from '@/site';

// Public Sans descends from Franklin Gothic, the typeface long used for
// newspaper financial tables. Plain, sturdy, with even-width numbers.
// Self-hosted (SIL Open Font License, see assets/fonts/OFL.txt) so the build
// doesn't depend on Google Fonts and visitors' browsers don't contact Google.
const publicSans = localFont({
  src: '../assets/fonts/PublicSans-latin-wght.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_US',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
