'use client';

import React from 'react';
import { ContactFormProps } from '@/lib/types';

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  // TODO: Replace with real submission logic or form handler.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      // Get form data and pass to onSubmit handler
      onSubmit({});
    } else {
      alert("Thank you! We'll be in touch shortly.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 md:p-8">
      <h2 className="text-xl mb-6">Send us a message</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-navy">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="Enter your name"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-navy">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="you@example.com"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-accent focus:border-accent"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-navy">
            Message (Optional)
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            placeholder="Tell us how we can help..."
          ></textarea>
        </div>

        <button type="submit" className="btn-primary w-full py-3 text-lg font-medium">
          Send Message
        </button>
      </form>

      {/* Reassurance & Trust Note */}
      <div className="mt-6 flex items-center text-sm text-gray-500">
        <svg
          className="h-4 w-4 text-accent mr-2 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <p>
          We don't spam or sell your info. This just starts a real conversation—nothing automated.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
