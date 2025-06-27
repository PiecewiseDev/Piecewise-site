import React from 'react';
import Link from 'next/link';

export default function AboutCTA() {
  return (
    <div className="bg-gray-50 rounded-lg p-8 lg:p-12 text-center mb-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-navy max-w-3xl mx-auto leading-tight">
        If you're still reading, this might be the right kind of support.
      </h2>
      <Link
        href="/how-it-works"
        className="inline-block px-8 py-4 text-lg font-medium text-white bg-accent/90 hover:bg-accent rounded-lg transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      >
        See How It Works
      </Link>
    </div>
  );
}
