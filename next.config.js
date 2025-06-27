/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // We'll handle images in the public directory
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
