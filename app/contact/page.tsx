import React from 'react';
import { ContactIntro, ContactOptions, ContactFAQ } from '@/sections/contact';
import {
  generateSchemaScript,
  contactPageSchema,
  enhancedContactPointSchema,
  aiConsultingServiceSchema,
} from '@/lib/structured-data';

export default function ContactPage() {
  return (
    <>
      {/* Enhanced Structured Data for Contact Page SEO */}
      <script {...generateSchemaScript(contactPageSchema)} />
      <script {...generateSchemaScript(enhancedContactPointSchema)} />
      <script {...generateSchemaScript(aiConsultingServiceSchema)} />

      {/* Page Intro Section */}
      <ContactIntro />

      {/* Contact Options Section */}
      <ContactOptions />

      {/* FAQ Section */}
      <ContactFAQ />
    </>
  );
}
