'use client';

import React, { useState, useRef, useEffect } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface CaseStudyFiltersProps {
  industries: FilterOption[];
  services: FilterOption[];
  selectedIndustries: string[];
  selectedServices: string[];
  onIndustryChange: (industries: string[]) => void;
  onServiceChange: (services: string[]) => void;
}

export default function CaseStudyFilters({
  industries,
  services,
  selectedIndustries,
  selectedServices,
  onIndustryChange,
  onServiceChange,
}: CaseStudyFiltersProps) {
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const industryRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIsIndustryOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleIndustry = (value: string) => {
    if (selectedIndustries.includes(value)) {
      onIndustryChange(selectedIndustries.filter((i) => i !== value));
    } else {
      onIndustryChange([...selectedIndustries, value]);
    }
  };

  const toggleService = (value: string) => {
    if (selectedServices.includes(value)) {
      onServiceChange(selectedServices.filter((s) => s !== value));
    } else {
      onServiceChange([...selectedServices, value]);
    }
  };

  const removeIndustry = (value: string) => {
    onIndustryChange(selectedIndustries.filter((i) => i !== value));
  };

  const removeService = (value: string) => {
    onServiceChange(selectedServices.filter((s) => s !== value));
  };

  const totalFilters = selectedIndustries.length + selectedServices.length;

  return (
    <div>
      {/* Filter Dropdowns */}
      <div className="flex justify-end gap-4 pb-8">
        {/* Industry Filter */}
        <div ref={industryRef} className="relative min-w-[200px]">
          <button
            onClick={() => setIsIndustryOpen(!isIndustryOpen)}
            aria-expanded={isIndustryOpen ? 'true' : 'false'}
            aria-haspopup="true"
            className={`flex items-center gap-2 px-8 py-2.5 bg-slate-50 border rounded-lg text-sm font-medium text-primary hover:bg-slate-100 transition-all ${
              isIndustryOpen
                ? 'border-primary border-2 bg-slate-100'
                : 'border-slate-300 hover:border-primary hover:border-2'
            }`}
          >
            <span>Filter by Industry</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isIndustryOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isIndustryOpen && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-primary/30 rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
              {industries.map((industry, index) => (
                <label
                  key={industry.value}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-primary/5 cursor-pointer transition-colors ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === industries.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry.value)}
                    onChange={() => toggleIndustry(industry.value)}
                    className="w-4 h-4 border-2 border-slate-300 rounded cursor-pointer accent-primary focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  />
                  <span className="text-sm text-slate-700 font-medium">{industry.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Service Filter */}
        <div ref={serviceRef} className="relative min-w-[200px]">
          <button
            onClick={() => setIsServiceOpen(!isServiceOpen)}
            aria-expanded={isServiceOpen ? 'true' : 'false'}
            aria-haspopup="true"
            className={`flex items-center gap-2 px-8 py-2.5 bg-slate-50 border rounded-lg text-sm font-medium text-primary hover:bg-slate-100 transition-all ${
              isServiceOpen
                ? 'border-primary border-2 bg-slate-100'
                : 'border-slate-300 hover:border-primary hover:border-2'
            }`}
          >
            <span>Filter by Service</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isServiceOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isServiceOpen && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white border border-primary/30 rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
              {services.map((service, index) => (
                <label
                  key={service.value}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-primary/5 cursor-pointer transition-colors ${
                    index === 0 ? 'rounded-t-lg' : ''
                  } ${index === services.length - 1 ? 'rounded-b-lg' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.value)}
                    onChange={() => toggleService(service.value)}
                    className="w-4 h-4 border-2 border-slate-300 rounded cursor-pointer accent-primary focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  />
                  <span className="text-sm text-slate-700 font-medium">{service.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Horizontal Line - Only show if filters are active */}
      {totalFilters > 0 && <div className="border-t border-slate-200"></div>}

      {/* Active Filters Display */}
      {totalFilters > 0 && (
        <div className="flex items-center gap-3 flex-wrap pt-4 pb-4">
          <span className="text-sm font-medium text-slate-700">Filtered by:</span>
          {selectedIndustries.map((industry) => (
            <button
              key={industry}
              onClick={() => removeIndustry(industry)}
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-hover transition-colors"
            >
              <span>{industry}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ))}
          {selectedServices.map((service) => (
            <button
              key={service}
              onClick={() => removeService(service)}
              className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary-hover transition-colors"
            >
              <span>{service}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
