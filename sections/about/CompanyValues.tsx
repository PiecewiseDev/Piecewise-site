import React from 'react';

interface Value {
  title: string;
  description: string;
  icon: string;
}

export default function CompanyValues() {
  const values: Value[] = [
    {
      title: 'Human-Centered',
      description:
        'We believe technology should serve people, not the other way around. Every solution we create puts human needs first.',
      icon: '🧠',
    },
    {
      title: 'Transparent',
      description:
        "We're open about our processes, pricing, and capabilities. No surprises, just clear communication every step of the way.",
      icon: '🔍',
    },
    {
      title: 'Practical',
      description:
        'We focus on solutions that deliver real business value rather than chasing the latest trends or unnecessary complexity.',
      icon: '🛠️',
    },
    {
      title: 'Educational',
      description:
        "We're committed to helping you understand AI capabilities so you can make informed decisions about your business.",
      icon: '📚',
    },
  ];

  return (
    <div className="py-16 bg-sky-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Our Values</h2>
        <p className="text-navy-light text-center max-w-3xl mx-auto mb-12">
          These principles guide everything we do and define how we work with our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
              <p className="text-navy-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
