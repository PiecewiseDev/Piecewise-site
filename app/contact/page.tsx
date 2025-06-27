import React from 'react';
import {
  ContactIntro,
  ContactCallSteps,
  ContactForm,
  ContactDetails,
  ContactAlt,
} from '@/sections/contact';

export default function ContactPage() {
  return (
    <div className="section bg-gradient-to-b from-[#4b6a88]/10 to-white min-h-screen">
      <div className="container-wide">
        {/* Page Intro Section */}
        <ContactIntro />

        {/* Discovery Call Invitation Section */}
        <ContactCallSteps />

        <div className="max-w-5xl mx-auto">
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <ContactDetails />
          </div>
        </div>

        {/* Direct Email Alternative Section */}
        <ContactAlt />
      </div>
    </div>
  );
}
