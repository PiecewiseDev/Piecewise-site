import React from 'react';

const ContactIntro: React.FC = () => {
  return (
    <section aria-labelledby="contact-intro-heading" className="bg-slate-100 -mt-20">
      {/* Hero Section - Minimalistic Refactoring UI approach */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-14 lg:px-24 xl:px-28 2xl:px-32 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-48 pb-6 sm:pb-7 md:pb-8 lg:pb-9 xl:pb-10 2xl:pb-12">
        {/* Header */}
        <div>
          <h1 id="contact-intro-heading" className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-[1.08] tracking-tight mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-9 2xl:mb-10 text-center lg:text-left">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 leading-[1.6] font-normal max-w-[54ch] text-center lg:text-left mx-auto lg:mx-0">
            Tell us about your business to see if we&apos;re a good fit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
