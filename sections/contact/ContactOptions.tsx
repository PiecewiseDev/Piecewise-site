import React from 'react';

const ContactOptions: React.FC = () => {
  return (
    <div className="pt-8 pb-16 sm:pt-12 sm:pb-24" style={{ backgroundColor: '#f1f1f1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Book a Discovery Call */}
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col h-full">
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1a1a1d' }}>
                  Book a Discovery Call
                </h2>
              </div>

              <div className="flex-grow space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: '#1a1a1d', opacity: 0.8 }}
                  >
                    Schedule a{' '}
                    <span className="font-semibold" style={{ color: '#3a66f7' }}>
                      25-minute conversation
                    </span>{' '}
                    to explore how a CustomGPT could work for your business.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold mb-2" style={{ color: '#1a1a1d' }}>
                    What you&apos;ll get:
                  </h3>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#3a66f7' }}
                      >
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="leading-tight">
                      <p className="text-sm font-medium" style={{ color: '#1a1a1d' }}>
                        No pressure consultation
                      </p>
                      <p className="text-xs -mt-0.5" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        Just a focused discussion about your specific needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#3a66f7' }}
                      >
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="leading-tight">
                      <p className="text-sm font-medium" style={{ color: '#1a1a1d' }}>
                        Real business examples
                      </p>
                      <p className="text-xs -mt-0.5" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        See how businesses like yours are using AI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#3a66f7' }}
                      >
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="leading-tight">
                      <p className="text-sm font-medium" style={{ color: '#1a1a1d' }}>
                        Clear next steps
                      </p>
                      <p className="text-xs -mt-0.5" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        Walk away with a concrete plan forward
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://calendly.com/piecewiseai/discovery-call"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-white hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3a66f7 0%, #667eea 100%)',
                    boxShadow: '0 4px 15px rgba(58, 102, 247, 0.3)',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Call
                  <svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Reach Out Directly Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#1a1a1d' }}>
                Reach Out Directly
              </h2>
            </div>
            <form className="space-y-4 flex-grow">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#1a1a1d' }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#1a1a1d' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#1a1a1d' }}
                >
                  Business Type
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="e.g., Plumbing, HVAC, Landscaping"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#1a1a1d' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your business and what you're hoping to accomplish"
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-white hover:opacity-90 hover:shadow-lg transform hover:-translate-y-0.5 text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #3a66f7 0%, #667eea 100%)',
                    boxShadow: '0 4px 15px rgba(58, 102, 247, 0.3)',
                  }}
                >
                  Send Message
                  <svg
                    className="ml-3 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Direct Email Alternative */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mt-16">
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

export default ContactOptions;
