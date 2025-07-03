import React from 'react';
import { ContactIntro, ContactOptions, ContactFAQ } from '@/sections/contact';

export default function ContactPage() {
  return (
    <>
      {/* Page Intro Section */}
      <ContactIntro />

      {/* Contact Options Section */}
      <ContactOptions />

      {/* FAQ Section */}
      <ContactFAQ />
    </>
  );
}
