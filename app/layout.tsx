import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { site } from '@/site';

// Fonts are self-hosted (SIL Open Font License, see assets/fonts) so the build doesn't
// depend on Google Fonts and visitors' browsers don't contact Google.
//
// Public Sans (body): descends from Franklin Gothic, the typeface long used for
// newspaper financial tables. Plain and sturdy, with even-width numbers.
const publicSans = localFont({
  src: '../assets/fonts/PublicSans-latin-wght.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-sans',
});

// Source Serif 4 (headings): a workmanlike serif in the tradition of financial
// print. Gives the headings the character a plain sans can't.
const sourceSerif = localFont({
  src: '../assets/fonts/SourceSerif4-latin-wght.woff2',
  weight: '200 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-serif',
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
  themeColor: '#f3f2ef',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${publicSans.variable} ${sourceSerif.variable}`}>
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
