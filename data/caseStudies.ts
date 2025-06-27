import { CaseStudy } from '@/types';

// Mock case studies data
export const caseStudies: CaseStudy[] = [
  {
    slug: 'accounting-advisory-gpt',
    client: 'Smith & Associates',
    title: 'Accounting Advisory GPT',
    category: 'Financial Services',
    description:
      "A custom GPT that helps accountants provide consistent advisory services to their clients, drawing from the firm's expertise and methodologies.",
    challenge:
      'The accounting firm struggled with scaling their advisory services while maintaining quality and consistency across all client interactions.',
    solution:
      'We developed a custom GPT trained on their internal documents, methodologies, and best practices that their team could use to generate consistent advisory content.',
    results: [
      '70% reduction in time spent creating client advisory reports',
      '35% increase in advisory service capacity',
      '92% consistency score in quality reviews',
    ],
    quote: {
      text: 'The CustomGPT has transformed how we deliver advisory services. Our team can now provide high-quality, consistent advice at scale, allowing us to serve more clients without sacrificing quality.',
      author: 'Jennifer Smith, Managing Partner',
    },
    implementationSteps: [
      'Document collection and organization',
      'GPT training on firm-specific methodologies',
      'Integration with existing workflows',
      'Team training and adoption program',
    ],
  },
  {
    slug: 'property-manager-gpt',
    client: 'Urban Properties',
    title: "Property Manager's Assistant",
    category: 'Real Estate',
    description:
      'A specialized AI assistant that helps property managers handle tenant inquiries, maintenance requests, and lease information.',
    challenge:
      'Property managers were overwhelmed with repetitive tenant questions and maintenance coordination, reducing their ability to focus on property improvement.',
    solution:
      'We created a custom GPT that could access property-specific information, lease terms, and maintenance procedures to assist with day-to-day tenant communication.',
    results: [
      '85% of routine tenant inquiries now handled by AI',
      '3 hours per day saved per property manager',
      '24% improvement in tenant satisfaction scores',
    ],
    quote: {
      text: 'Our property managers can finally focus on what matters - improving our properties and tenant relationships - rather than spending hours answering the same questions and coordinating routine maintenance.',
      author: 'Michael Roberts, Director of Operations',
    },
    implementationSteps: [
      'Property data integration',
      'Tenant communication templates',
      'Maintenance workflow automation',
      'Manager dashboard development',
    ],
  },
  {
    slug: 'landscaping-business-gpt',
    client: 'GreenScape Solutions',
    title: 'LandscapingGPT',
    category: 'Home Services',
    description:
      'An AI assistant that helps a landscaping business respond to customer inquiries, provide quotes, and schedule appointments.',
    challenge:
      'The business owner was spending 15+ hours per week responding to customer inquiries and creating custom quotes, limiting growth potential.',
    solution:
      'We built a specialized GPT that understands their services, pricing structure, and availability to handle initial customer interactions and quote generation.',
    results: [
      '90% reduction in response time to customer inquiries',
      '15 hours per week saved for the business owner',
      '28% increase in conversion rate from inquiry to booking',
    ],
    quote: {
      text: "Before the CustomGPT, I was skeptical about AI. Now it feels like I have a version of myself available to my team 24/7. It's transformed how I run my business, giving me time to focus on growth instead of admin.",
      author: 'Sarah Johnson, Owner',
    },
    implementationSteps: [
      'Service offering documentation',
      'Pricing template integration',
      'Scheduling system connection',
      'Customer communication style training',
    ],
  },
  {
    slug: 'design-consultation-gpt',
    client: 'Innovative Interiors',
    title: 'Design Consultation GPT',
    category: 'Design Services',
    description:
      'A custom GPT that helps interior designers provide initial consultations and design recommendations to potential clients.',
    challenge:
      "Designers were spending too much time on initial consultations with prospects who weren't ready to commit to full design services.",
    solution:
      "We developed an AI assistant trained on the firm's design philosophy, portfolio, and typical recommendations to handle preliminary client interactions.",
    results: [
      '40% increase in qualified leads',
      '65% reduction in time spent on initial consultations',
      '30% growth in conversion to full design projects',
    ],
    quote: {
      text: 'The AI assistant has completely transformed our consultation process. We now pre-qualify leads more effectively and can focus our designer time on clients who are ready to move forward.',
      author: 'David Chen, Creative Director',
    },
    implementationSteps: [
      'Design portfolio analysis',
      'Consultation process documentation',
      'Style preference questionnaire development',
      'Recommendation engine training',
    ],
  },
];
