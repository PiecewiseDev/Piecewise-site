'use client';

import React from 'react';

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6 text-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-navy">Something went wrong</h1>

        <p className="text-navy-light mb-6">
          {error.message ||
            "An unexpected error occurred. We've been notified and are working to fix the issue."}
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => reset()}
            className="px-5 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-5 py-3 border border-gray-300 text-navy font-medium rounded-md hover:bg-gray-50 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
