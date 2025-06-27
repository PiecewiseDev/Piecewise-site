import React from 'react';

const ContactAlt: React.FC = () => {
  return (
    <div className="mt-16 mb-8 text-center">
      <div className="h-px w-24 bg-gray-200 mx-auto mb-8"></div>
      <p className="text-navy-light">
        Prefer to reach out directly? Email us at{' '}
        <a
          href="mailto:kyle@piecewiseai.com"
          className="text-accent hover:text-accent-dark transition-colors"
        >
          kyle@piecewiseai.com
        </a>
      </p>
    </div>
  );
};

export default ContactAlt;
