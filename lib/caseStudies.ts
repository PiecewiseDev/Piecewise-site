import { CaseStudy } from './types';

// Mock case studies data
export const caseStudies: CaseStudy[] = [
  {
    slug: 'legacy-repairs-remodeling',
    client: 'Legacy Repairs & Remodeling',
    title: 'How a Custom AI Solution Helped a Contractor Reclaim 30 Hours Per Week',
    category: 'Construction',
    description:
      'Working 70-hour weeks and facing burnout, Luke transformed his business from survival mode to sustainable growth—reducing his hours by 40% while increasing revenue and profit margins.',
    challenge:
      "Luke was working 60-70 hours per week with 30-40 of those hours spent firefighting. Managing 3-7 projects simultaneously across two divisions with a team of five, he faced an impossible choice: shut down the business, dramatically reduce his workforce, or make significant investments to transform operations. With a baby on the way, he needed to reclaim his life without destroying the business he'd built.",
    solution:
      "Piecewise built a custom GPT trained on Luke's company operations, enabling him to rapidly create and implement systems. The tool transformed how he built SOPs, trained staff, managed handoffs, and scaled operations—turning what would take hours into minutes and making system-building an achievable reality rather than a pipe dream.",
    results: [
      '30+ hours reclaimed per week (from 70 to 30-40 hours)',
      '10+ hours weekly for strategic leadership',
      'Increased revenue with better profit margins',
      'Scaled from 6 to 9 employees in 6 months',
    ],
    quote: {
      text: 'I loved the business, but I had to choose to love my family more. With a baby on the way, I was prepared to either make significant investments to change how the business ran, significantly reduce our workforce, or in a worst case, shutter the company. Piecewise took my business from potentially scalable to imminently scalable.',
      author: 'Luke Plescia',
    },
    implementationSteps: [
      'Sales-to-production handoff system creation',
      'Role-specific SOP documentation and implementation',
      'Training materials and onboarding processes',
      'Manager empowerment and delegation frameworks',
      'Adaptive business intelligence integration',
      'Scalable growth planning and execution',
    ],
  },
  {
    slug: 'trinity-parking',
    client: 'Trinity Parking',
    title: 'How Trinity Scaled from 3 to 6 Clients in 6 Months With a Custom GPT',
    category: 'Valet Services',
    description:
      'Trinity doubled their client base in 6 months by transforming founder knowledge into AI-powered systems, enabling rapid scaling without sacrificing quality.',
    challenge:
      "Hunter Allison faced a critical bottleneck: how to transfer years of expertise from his mind into scalable systems his team could follow. Knowledge was trapped in the founder's head with no clear way to transfer it, creating inefficient client management, lack of documented processes, and new team members struggling to get up to speed. After two years of poor fit in a key role, Trinity needed systems that could operate without Hunter's constant involvement.",
    solution:
      "Trinity partnered with Piecewise to build a custom GPT trained on Hunter's expertise, processes, and communication style. The GPT became Trinity's central nervous system for creating service agreements, documenting policies, training team members, generating client communications, and producing educational materials—transforming what used to take hours into minutes of work.",
    results: [
      '200% revenue growth (from 3 to 6 clients in 6 months)',
      'Documents now 95% complete in minutes instead of hours',
      'Successfully onboarded new client manager with GPT-enabled training',
      'Team independently producing high-quality work',
    ],
    quote: {
      text: 'The GPT has absolutely nothing to do with the right people. But man, the systems aspect—GPT is just beautiful for creating clear, repeatable, concise systems.',
      author: 'Hunter Allison',
    },
    implementationSteps: [
      'Custom GPT training on company expertise and processes',
      'Service agreements and contract standardization',
      'Policy and procedure documentation',
      'Team member training and onboarding systems',
      'Content creation workflows for client communication',
      'Educational material generation frameworks',
    ],
  },
  {
    slug: 'fresh-events-services',
    client: 'Fresh Events Services',
    title: "How a Solopreneur Event Planner 3X'd Client Capacity Without Hiring",
    category: 'Event Planning',
    description:
      'Jenn transformed from a maxed-out solopreneur managing 8 events per month into a scalable business handling 24+ events—all while maintaining her premium, personalized service quality.',
    challenge:
      'As a solopreneur event planner, Jenn faced the classic scaling dilemma: every client required hours of personalized communication, detailed planning documents, vendor coordination, and timeline management. Working 60+ hours per week and managing 8 events monthly, she had hit her ceiling. Taking on more clients meant sacrificing quality or burning out. She needed to scale her capacity without losing the personal touch that made her services premium.',
    solution:
      "Piecewise built a custom GPT trained on Jenn's event planning expertise, communication style, vendor relationships, and planning processes. The AI became her intelligent assistant for creating event proposals, generating timeline documents, drafting client communications, producing vendor briefs, and managing event details—transforming hours of manual work into minutes while maintaining her signature attention to detail.",
    results: [
      '3X event capacity (from 8 to 24+ events per month)',
      'Event planning documents generated in 10 minutes vs. 3 hours',
      'Client communication time reduced by 70%',
      'Premium pricing maintained with higher profit margins',
    ],
    quote: {
      text: "I was trapped by my own success. Every new client meant less sleep and more stress. The custom GPT didn't just save me time—it gave me my life back while letting me serve three times as many clients. I can finally take vacations without my business falling apart.",
      author: 'Jenn Frontiero',
    },
    implementationSteps: [
      'Event planning template and checklist digitization',
      'Vendor database and relationship management integration',
      'Client communication style and tone training',
      'Timeline and task management automation',
      'Proposal and contract generation workflows',
      'Event-specific customization frameworks',
    ],
  },
  {
    slug: 'lake-norman-fence',
    client: 'Lake Norman Fence',
    title: 'How Lake Norman Fence Cut Quote Time by 80% and Doubled Lead Response Speed',
    category: 'Home Services',
    description:
      'A family-owned fencing company transformed their quoting process with a custom GPT, enabling them to respond to leads instantly while maintaining their personal touch.',
    challenge:
      'With a small team and growing demand, Lake Norman Fence was losing leads due to slow quote turnaround times. The owner was spending 10-15 hours per week manually creating custom fence quotes, responding to customer questions about materials and pricing, and educating prospects about fence options—time that should have been spent on installations and business growth.',
    solution:
      "Piecewise built a custom GPT trained on Lake Norman Fence's complete product catalog, pricing structures, installation processes, and local regulations. The GPT helps the team instantly generate accurate quotes based on property specifications, answer common customer questions about fence types and materials, and provide educational content about maintenance and durability—all in the company's friendly, consultative voice.",
    results: [
      '80% reduction in time spent creating quotes',
      '2x faster lead response time (same day vs. 2-3 days)',
      '40% increase in quote-to-contract conversion rate',
      '15+ hours per week reclaimed for installations and growth',
    ],
    quote: {
      text: "We were drowning in quote requests and losing jobs because we couldn't respond fast enough. The Custom GPT turned our biggest bottleneck into our competitive advantage. Now we respond same-day with detailed, accurate quotes while I focus on what I do best—building great fences.",
      author: 'Mike Henderson, Owner',
    },
    implementationSteps: [
      'Product catalog and pricing documentation',
      'Local code and regulation training',
      'Quote template and calculation integration',
      'Customer education content development',
      'Team workflow optimization',
      'Lead response automation setup',
    ],
  },
];
