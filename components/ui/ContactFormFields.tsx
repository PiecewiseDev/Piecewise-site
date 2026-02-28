import React from 'react';
import { ContactFormData } from '@/hooks/useContactForm';

interface ContactFormFieldsProps {
  formData: ContactFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  variant?: 'default' | 'modern';
}

export function ContactFormFields({
  formData,
  onChange,
  variant = 'default',
}: ContactFormFieldsProps) {
  const inputClasses =
    variant === 'modern'
      ? 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors'
      : 'w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors';

  const labelClasses =
    variant === 'modern'
      ? 'block text-sm font-medium mb-2 text-neutral-darkest'
      : 'block text-sm font-medium mb-2 text-neutral-darkest';

  return (
    <>
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name {variant === 'modern' && '*'}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
          className={inputClasses}
          placeholder={variant === 'modern' ? 'Your full name' : 'Enter your name'}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email {variant === 'modern' && '*'}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
          className={inputClasses}
          placeholder={variant === 'modern' ? 'your@email.com' : 'you@example.com'}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="business" className={labelClasses}>
          {variant === 'modern' ? 'Business Type' : 'Company Name'}
        </label>
        <input
          type="text"
          id="business"
          name="business"
          value={formData.business}
          onChange={onChange}
          className={inputClasses}
          placeholder={variant === 'modern' ? 'e.g., Plumbing, HVAC, Landscaping' : 'Acme Inc.'}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={variant === 'modern' ? 3 : 6}
          className={`${inputClasses} resize-none`}
          placeholder={
            variant === 'modern'
              ? "Tell us about your business and what you're hoping to accomplish"
              : 'How can we help you?'
          }
        />
      </div>
    </>
  );
}
