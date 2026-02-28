'use client';

import React from 'react';
import { ContactFormProps } from '@/lib/types';
import { useContactForm } from '@/hooks';
import { ContactFormFields, FormStatusMessages } from '@/components/ui';

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    formData,
    submitStatus,
    isSubmitting,
    handleInputChange,
    handleSubmit: formHandleSubmit,
  } = useContactForm();

  const handleSubmit = (event: React.FormEvent) => {
    if (onSubmit) {
      // If custom onSubmit is provided, use callback pattern
      event.preventDefault();
      onSubmit(formData);
    } else {
      // Otherwise use our default form submission
      formHandleSubmit(event);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 md:p-8">
      <h2 className="text-xl mb-6 text-neutral-darkest">Send us a message</h2>

      <FormStatusMessages status={submitStatus} />

      <form className="space-y-6" onSubmit={handleSubmit}>
        <ContactFormFields formData={formData} onChange={handleInputChange} variant="default" />

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3 text-lg font-medium disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Reassurance & Trust Note */}
      <div className="mt-6 flex items-center text-sm text-neutral-light">
        <svg
          className="h-4 w-4 text-primary mr-2 flex-shrink-0"
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
          We don&apos;t spam or sell your info. This just starts a real conversation—nothing
          automated.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
