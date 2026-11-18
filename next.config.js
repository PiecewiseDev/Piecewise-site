/** @type {import('next').NextConfig} */

// Preview deployments load the Vercel Toolbar (comments and feedback) from vercel.live.
// Production does not, so its policy stays strict. Hosts are from Vercel's toolbar docs:
// https://vercel.com/docs/vercel-toolbar/managing-toolbar#using-a-content-security-policy
const isProduction = process.env.VERCEL_ENV === 'production';
const toolbar = (sources) => (isProduction ? '' : ` ${sources}`);

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js needs inline scripts to start the page.
  `script-src 'self' 'unsafe-inline'${toolbar('https://vercel.live')}`,
  `style-src 'self' 'unsafe-inline'${toolbar('https://vercel.live')}`,
  `img-src 'self' data: blob:${toolbar('https://vercel.live https://vercel.com')}`,
  `font-src 'self'${toolbar('https://vercel.live https://assets.vercel.com')}`,
  `connect-src 'self'${toolbar('https://vercel.live wss://ws-us3.pusher.com')}`,
  `frame-src ${isProduction ? "'none'" : 'https://vercel.live'}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
        ],
      },
    ];
  },

  // Old pages from the previous site send visitors to the home page instead of a 404.
  async redirects() {
    return [
      '/about',
      '/contact',
      '/case-studies',
      '/case-studies/:path*',
      '/terms',
      '/blog/:path*',
      '/resources/:path*',
      '/customer-stories/:path*',
    ].map((source) => ({ source, destination: '/', permanent: true }));
  },
};

module.exports = nextConfig;
