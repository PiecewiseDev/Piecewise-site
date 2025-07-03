import React from 'react';

const ContactAlt: React.FC = () => {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="h-px w-24 bg-gray-400 mx-auto mb-8"></div>
        <p style={{ color: '#1a1a1d', opacity: 0.8 }}>
          Prefer to reach out directly? Email us at{' '}
          <a
            href="mailto:kyle@piecewiseai.com"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#3a66f7' }}
          >
            kyle@piecewiseai.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactAlt;
