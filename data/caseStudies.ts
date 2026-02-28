import { CaseStudy } from '@/types';

// Mock case studies data
export const caseStudies: CaseStudy[] = [
  {
    slug: 'legacy-repairs-remodeling',
    client: 'Legacy Repairs & Remodeling',
    title: "How We Cut a Construction CEO's Workweek From 70 to 30 Hours",
    htmlTitle:
      "How We Cut a Construction CEO's Workweek From <strong>70</strong> to <strong>30</strong> Hours",
    category: 'Construction',
    services: ['Custom GPT'],
    description:
      "Luke was grinding 70-hour weeks with a baby on the way and no way to step back. We helped him formalize processes to de-centralize leadership. Now he's home for dinner and his team doesn't miss a beat.",
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
    image: '/images/LegacyRRteam1.jpg',
    imageAlt: 'Legacy Repairs & Remodeling project',
    imageObjectPosition: 'object-left',
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
    companyInfo: {
      about:
        'A full-service residential construction company specializing in remodeling and repairs in Louisville, KY.',
      companySize: '5-10 employees',
      headquarters: 'Louisville, KY',
      founded: '2018',
      website: 'legacyrepairsremodeling.com',
    },
    story: `Luke Plescia didn't plan to work 70-hour weeks. But that's what happens when you're the only person who can answer every question, solve every problem, and make every decision.

His team was capable. His projects were profitable. But everything stalled without him. Sales couldn't hand off to production. New hires took months to train. Systems existed in his head, not in documents.

With a newborn on the way, something had to change. He could keep grinding, hire more people and hope it worked, or shut it all down.

None of those felt right. So he called Piecewise.

**Building Systems, Not Just Tools**

Most AI tools promise to "automate everything." Piecewise took a different approach. They built a custom GPT trained on how Legacy actually worked—Luke's processes, communication style, and decision-making frameworks.

The goal wasn't to replace Luke. It was to scale his thinking.

Within weeks, Luke used the GPT to document the sales-to-production handoff that had been causing bottlenecks for years. He created role-specific SOPs. He built training materials that used to take him hours in minutes.

For the first time, his knowledge lived outside his head.

**The Shift**

Four months in, Luke's work weeks dropped from 70 hours to 40. His team stopped waiting for him to make every call. New hires onboarded in weeks, not months.

Revenue grew. Profit margins improved. And Luke started working out again.

The business didn't just survive the transition to fatherhood. It thrived because of it.

**What Changed**

It wasn't magic. Luke still made the hard decisions. But now his team had the systems, training, and clarity to execute without him micromanaging every step.

The custom GPT didn't do the work for him. It let him build the business he'd been trying to build for years—in months instead of decades.

**Where They Are Now**

Legacy went from 6 to 9 employees in six months. They're hiring three more this year. New team members are fully trained in under 30 days.

Luke has dinner with his family most nights. He's present for his daughter's first year. And he runs a more profitable company than when he was working twice as hard.

He built systems first. AI just made it possible to do it fast enough to matter.`,
  },
  {
    slug: 'trinity-parking',
    client: 'Trinity Parking',
    title: "How We Slashed a Valet Company President's Work Hours in Half",
    htmlTitle: "How We Slashed a Valet Company President's Work Hours in <strong>Half</strong>",
    category: 'Valet Services',
    services: ['Custom GPT'],
    description:
      'Hunter was missing growth opportunities because too many strategic decisions ran through him. We helped him document his brain and halved his hours in the process.',
    challenge:
      "Hunter Allison faced the classic entrepreneur's dilemma: his business was poised for growth, but internal challenges threatened to hold him back. Systems and processes were chaotic, critical business knowledge resided in Hunter's mind creating constant bottlenecks, client management struggles persisted, and limited bandwidth for growth meant opportunities were being missed.",
    solution:
      "Piecewise built a custom GPT trained on Hunter's expertise, processes, and communication style through detailed knowledge extraction sessions. Existing policies and procedures were integrated into the GPT, creating a unified knowledge base. The GPT serves multiple functions: systems documentation, content generation, communication enhancement, training materials, and contract creation.",
    results: [
      '100% business growth (from 3 to 6 annual recurring accounts)',
      '50% reduction in owner work hours (from 40 to 20 hours/week)',
      '3-month acceleration on Black Book operations manual completion',
      'Team efficiency gains with reduced meeting frequency',
      'Successfully managing 50 valet staff with $25,000 monthly payroll',
    ],
    image: '/images/Trinityphoto2.jpg',
    imageAlt: 'Trinity Parking valet service operations',
    quote: {
      text: 'The GPT has absolutely nothing to do with the right people. But man, the systems aspect—GPT is just beautiful for creating clear, repeatable, concise systems.',
      author: 'Hunter Allison',
    },
    implementationSteps: [
      'Knowledge extraction sessions capturing expertise',
      'Document integration of existing policies and procedures',
      'Team training for operations managers',
      'Systems documentation automation',
      'Content generation workflows',
      'Communication enhancement tools',
    ],
  },
  {
    slug: 'fresh-events-services',
    client: 'Fresh Event Services',
    title: 'How We Saved a Solo Event Planner 15 Hours per Week',
    category: 'Event Planning',
    services: ['Custom GPT'],
    description:
      'Fresh Event Services transformed from a part-time, one-person operation into a streamlined business, saving 10–15 hours a week and managing multiple events at the same time.',
    challenge:
      'As a solo entrepreneur building her business, Jen faced critical obstacles that prevented her from focusing on what she does best—creating exceptional event experiences. Administrative tasks like communications, email drafting, website updates, and social media consumed disproportionate amounts of time. Without a thought partner, decision-making often stalled, and maintaining consistent brand voice was challenging.',
    solution:
      "Piecewise developed a Custom GPT solution specifically trained on Fresh Event Services' business practices, communication style, and service offerings. This AI-powered assistant functions as a virtual business partner, understanding Jen's brand voice and business philosophy, providing strategic thought partnership, and automating document generation while maintaining brand consistency.",
    results: [
      '10-15 hours saved per week',
      'Same-call pricing capability for faster booking decisions',
      'Multi-event capacity - confidence to book multiple events per week',
      'First organic Google lead from improved online presence',
      'Streamlined client onboarding with automated processes',
    ],
    image: '/images/fresheventsimage2.jpg',
    imageAlt: 'Fresh Event Services event coordination',
    quote: {
      text: "I don't feel as overwhelmed by my business anymore. I feel more enthusiastic because I know there's levity in the things I don't love to do. It makes me want to get out and network and have fun with people.",
      author: 'Jen',
    },
    implementationSteps: [
      'Brand voice training on existing content',
      'Business knowledge base integration',
      'Communication template development',
      'Strategic thought partnership capabilities',
      'Document generation automation',
      'Process documentation and systemization',
    ],
  },
  {
    slug: 'lake-norman-fence',
    client: 'Lake Norman Fence',
    title: "How We Reduced a Local Fence Company's Weekly Workload",
    category: 'Residential & Commercial Fencing',
    services: ['Custom GPT Development'],
    description:
      'Lake Norman Fence sped up document creation and email responses, giving their team back over two hours each week to focus on higher-value work.',
    challenge:
      "As Lake Norman Fence's primary salesperson, Chase Foley faced time management challenges: spending significant time on the road for sales calls made it difficult to respond to emails and customer inquiries promptly. Creating business documents, formulas, and Excel sheets was time-consuming and pulled focus from revenue-generating activities.",
    solution:
      "Piecewise developed a custom GPT specifically tailored to Lake Norman Fence's business operations, trained on the company's specific processes, communication style, and industry context. The tool was intuitive enough for immediate integration with no learning curve.",
    results: [
      '2+ hours saved per week on document creation and administrative tasks',
      'Faster customer response times',
      'Quick onboarding with minimal time investment',
      'Immediate adoption with zero learning curve',
    ],
    image: '/images/lakenormanfenceimage2.jpg',
    imageAlt: 'Lake Norman Fence construction and installation',
    quote: {
      text: "It definitely saves a lot of time in creating documents and formulas. I'd say it saves me a couple hours a week, probably, on having to create documents.",
      author: 'Chase Foley, Sales Manager',
    },
    implementationSteps: [
      'Quick onboarding process with brief conversations',
      'Custom training on fencing industry context',
      'Integration with daily workflow',
      'Document and formula creation templates',
      'Email response assistance setup',
    ],
  },
];
