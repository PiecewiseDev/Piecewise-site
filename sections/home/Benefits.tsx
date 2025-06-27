import React from 'react';
import { PageSection } from '@/components/layout';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({ title, subtitle, benefits }) => {
  return (
    <PageSection background="light" width="wide" padding="large">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{title}</h2>
        <p className="text-responsive font-medium leading-relaxed text-navy">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 ease-in-out"
          >
            <div className="h-14 w-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-6 tracking-tight">{benefit.title}</h3>
            <p className="font-medium leading-relaxed text-navy">{benefit.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Benefits;
