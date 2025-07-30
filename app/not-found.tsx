'use client';

import React from 'react';
import Link from 'next/link';
import { StyledLink } from '@/components/ui';

export default function NotFound() {
  // Helpful links for users who land on 404 pages
  const helpfulLinks = [
    {
      title: 'Home',
      href: '/',
      description: 'Return to our homepage',
    },
    {
      title: 'About Us',
      href: '/about',
      description: 'Learn about our AI development services',
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch for a discovery call',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-lg mx-auto text-center px-6">
        {/* Error Code */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may have been
            moved or doesn&apos;t exist.
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Looking for something specific?
          </h3>
          <p className="text-gray-600 mb-4">
            Try one of these popular pages or contact us directly.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="space-y-4 mb-8">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <StyledLink href="/contact" variant="bold" className="inline-block">
            Get Help
          </StyledLink>
          <p className="text-sm text-gray-500 mt-4">
            Still can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
        </div>
      </div>
    </div>
  );
}
