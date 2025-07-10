'use client';

import React, { useEffect, useState, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  business: string;
  message: string;
}

const ContactOptions: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for fade-in animation
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          business: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="pt-6 pb-12 sm:pt-10 sm:pb-16"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)',
      }}
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Book a Discovery Call */}
          <div
            className={`bg-white rounded-xl p-8 shadow-md flex flex-col h-full transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <h2
                  className="text-2xl md:text-3xl font-bold text-center md:text-left"
                  style={{ color: '#1a1a1d' }}
                >
                  Book a Discovery Call
                </h2>
              </div>

              <div className="flex-grow flex flex-col justify-between space-y-6 md:space-y-4">
                <div className="bg-gray-50 rounded-lg p-8 flex items-center min-h-[120px] relative overflow-hidden border border-gray-200">
                  {/* Blue tint overlay */}
                  <div className="absolute inset-0 rounded-lg" style={{ backgroundColor: 'rgba(37, 99, 235, 0.01)' }}></div>
                  <div className="relative z-10 w-full">
                    <p
                      className="text-base leading-relaxed m-0"
                      style={{ color: '#1a1a1d', opacity: 0.8 }}
                    >
                      Schedule a{' '}
                      <span className="font-semibold" style={{ color: '#1a1a1d' }}>
                        30-minute conversation
                      </span>{' '}
                      to explore how a Custom GPT could work for your business.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3
                    className="text-base font-semibold text-center md:text-left"
                    style={{ color: '#1a1a1d' }}
                  >
                    What you&apos;ll get:
                  </h3>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#2563eb' }}
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
                      <p className="text-xs -mt-1" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        Just a focused discussion about your specific needs
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#2563eb' }}
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
                      <p className="text-xs -mt-1" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        See how businesses like yours are using AI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: '#2563eb' }}
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
                      <p className="text-xs -mt-1" style={{ color: '#1a1a1d', opacity: 0.7 }}>
                        Walk away with a concrete plan forward
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <a
                  href="https://calendly.com/piecewiseai/discovery-call"
                  className="group w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-white hover:text-white hover:opacity-90 hover:shadow-md hover:scale-105 transform hover:-translate-y-0.5 text-lg"
                  style={{
                    background: '#2563eb',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Call
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Send Us a Message Form */}
          <div
            className={`bg-white rounded-xl p-8 shadow-md flex flex-col h-full transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-6">
              <h2
                className="text-2xl md:text-3xl font-bold text-center md:text-left"
                style={{ color: '#1a1a1d' }}
              >
                Send Us a Message
              </h2>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-green-800 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-red-800 font-medium">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              </div>
            )}

            <form className="space-y-4 flex-grow" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: '#1a1a1d' }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
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
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
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
                  value={formData.business}
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your business and what you're hoping to accomplish"
                ></textarea>
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-white hover:opacity-90 hover:shadow-md hover:scale-105 transform hover:-translate-y-0.5 text-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background: '#2563eb',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="ml-3 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Direct Email Alternative */}
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="h-px w-24 bg-gray-400 mx-auto mb-8"></div>
          <p style={{ color: '#1a1a1d', opacity: 0.8 }}>
            Prefer to reach out directly? Email us at{' '}
            <a
              href="mailto:kyle@piecewiseai.com"
              className="font-semibold hover:opacity-80 transition-opacity"
              style={{ color: '#2563eb' }}
            >
              kyle@piecewiseai.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
