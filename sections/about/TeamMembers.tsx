import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export default function TeamMembers() {
  const team: TeamMember[] = [
    {
      name: 'Kyle Larsen',
      role: 'Founder & Developer',
      bio: 'With over a decade of experience building web applications and businesses, Kyle combines technical expertise with business strategy to create solutions that actually work.',
      imageSrc: '/images/team/kyle.jpg',
    },
    {
      name: 'Rachel Larsen',
      role: 'Operations Director',
      bio: 'Rachel ensures our processes run smoothly and clients receive exceptional service. Her background in education and leadership brings organization and clarity to every project.',
      imageSrc: '/images/team/rachel.jpg',
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
      <p className="text-navy-light text-center max-w-3xl mx-auto mb-12">
        We're a small, dedicated team committed to personal service and exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-card overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 relative h-64 md:h-auto">
              <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                loading="lazy"
                style={{ objectFit: 'cover' }}
                className="transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-navy-light">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
