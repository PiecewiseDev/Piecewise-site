import React from 'react';
import { ContactIntro, ContactOptions } from '@/sections/contact';
import {
  generateSchemaScript,
  contactPageSchema,
  enhancedContactPointSchema,
  aiConsultingServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/structured-data';

export default function ContactPage() {
  return (
    <>
      {/* Enhanced Structured Data for Contact Page SEO */}
      <script {...generateSchemaScript(contactPageSchema)} />
      <script {...generateSchemaScript(enhancedContactPointSchema)} />
      <script {...generateSchemaScript(aiConsultingServiceSchema)} />
      <script
        {...generateSchemaScript(
          generateBreadcrumbSchema([
            { name: 'Home', url: 'https://piecewiseai.com' },
            { name: 'Contact', url: 'https://piecewiseai.com/contact' },
          ])
        )}
      />

      {/* Page Intro Section */}
      <ContactIntro />

      {/* Contact Options Section */}
      <ContactOptions />

      {/* Temporarily archived FAQ Section - moved to home page
      <ContactFAQ />
      */}
    </>
  );
}
