import { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'ApexFlow Plumbing & Rooter',
    tagline: "Austin's Premier 24/7 Emergency & Residential Plumbing Contractor",
    phone: '(512) 555-7473',
    displayPhone: '(512) 555-PIPE',
    email: 'dispatch@apexflowplumbing.com',
    licenseNumber: 'Texas Master Plumber Lic #MP-41982',
    insuranceAmount: '$2,000,000 Comprehensive General Liability',
    city: 'Austin',
    state: 'TX',
    fullAddress: '1021 E 7th St, Austin, TX 78702',
    emergencyArrivalText: 'Average arrival time: Under 45 minutes',
  },
  services: [
    {
      id: 'leak-repair',
      title: 'Emergency Leak Detection & Repair',
      shortDesc: 'Rapid acoustic & thermal leak locating with immediate non-invasive pipe isolation and repair.',
      features: [
        'Acoustic & thermal imaging leak detection',
        'Copper, PEX & galvanized pipe repair',
        'Non-invasive slab leak diagnosis',
        'Full water shutoff & pressure stabilization',
      ],
      startingPrice: 149,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
      badge: '24/7 Fast Response',
      category: 'Emergency',
    },
    {
      id: 'drain-cleaning',
      title: 'Drain Cleaning & Hydro-Jetting',
      shortDesc: 'High-pressure 4,000 PSI hydro-jetting and motorized snaking to eliminate stubborn clogs and tree roots.',
      features: [
        '4,000 PSI high-pressure hydro-jetting',
        'HD sewer in-pipe camera inspection',
        'Main line & lateral root clearing',
        'Backed by 90-day clog-free guarantee',
      ],
      startingPrice: 99,
      image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
      badge: 'Most Requested',
      category: 'Drain & Sewer',
    },
    {
      id: 'water-heater',
      title: 'Water Heater Repair & Replacement',
      shortDesc: 'Same-day servicing and replacement for tankless and standard gas or electric water heaters.',
      features: [
        'Tankless & conventional tank repair',
        'Same-day emergency heater swap-out',
        'Burner, element & valve replacement',
        'Energy-efficient high-output upgrades',
      ],
      startingPrice: 189,
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      badge: 'Same-Day Install',
      category: 'Water Heaters',
    },
    {
      id: 'fixture-pipe',
      title: 'Fixture & Whole-House Piping Installation',
      shortDesc: 'Master-grade installation for sinks, faucets, toilets, garbage disposals, and whole-home PEX repiping.',
      features: [
        'Premium fixture, faucet & toilet installation',
        'Whole-house PEX repiping retrofits',
        'Pressure regulator valve (PRV) tuning',
        'Code-compliant gas line testing',
      ],
      startingPrice: 129,
      image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80',
      badge: 'Precision Fit',
      category: 'Repiping & Fixtures',
    },
  ],
  coupons: [
    {
      id: 'coupon-first50',
      title: '$50 OFF Any Plumbing Repair',
      discountText: '$50 OFF',
      code: 'FIRST50',
      description: 'Valid for any residential repair service of $200 or more. Mention code when booking or show technician on arrival.',
      expiresText: 'Valid this month',
      terms: 'Cannot be combined with other offers. One coupon per residential address. Valid for repairs exceeding $200.',
    },
    {
      id: 'coupon-heater100',
      title: '$100 OFF Water Heater Replacement',
      discountText: '$100 OFF',
      code: 'HEATER100',
      description: 'Instant savings applied directly to any tankless or standard 40/50-gallon water heater installation.',
      expiresText: 'Valid this month',
      terms: 'Valid only on complete new water heater unit replacements. Cannot be combined with other discounts.',
    },
    {
      id: 'coupon-camfree',
      title: 'FREE In-Pipe Camera Inspection',
      discountText: 'FREE INSPECTION',
      code: 'CAMFREE',
      description: 'Get a comprehensive HD color video camera inspection of your main sewer line free with any qualifying drain clearing service ($189 value).',
      expiresText: 'Valid this month',
      terms: 'Applicable with any main drain clearing or hydro-jetting service. Includes digital copy of video inspection.',
    },
  ],
  pricing: [
    {
      service: 'In-Home Diagnostic & Safety Inspection',
      standardRange: '$89 Standard Fee',
      diagnosticCost: '$0 (Waived with repair)',
      highlights: 'Diagnostic fee is 100% waived when you authorize any recommended repair on the same visit.',
    },
    {
      service: 'Drain Cleaning & Hydro-Jetting',
      standardRange: '$99 – $189',
      diagnosticCost: 'Waived with service',
      highlights: 'Includes cable snaking, stoppage clearance, and initial camera line inspection.',
    },
    {
      service: 'Emergency Leak Detection & Pipe Repair',
      standardRange: '$149 – $299',
      diagnosticCost: 'Waived with service',
      highlights: 'Acoustic detection, targeted wall/floor isolation, and copper/PEX permanent solder or crimp repair.',
    },
    {
      service: 'Water Heater Diagnostic & Tune-Up',
      standardRange: '$189 – $450+',
      diagnosticCost: 'Waived with repair',
      highlights: 'Thermostat, thermocouple, anode rod, relief valve repairs, or applied toward new replacement.',
    },
  ],
  beforeAfter: [
    {
      id: 'ba-galvanized-pex',
      title: 'Galvanized Supply Line to PEX Repipe',
      problem: '40-year-old corroded galvanized lines causing low water pressure, recurring leaks, and rust-tinted tap water.',
      solution: 'Replaced main supply lines with high-grade cross-linked PEX tubing and dedicated brass shutoff manifold system.',
      beforeImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
      timeframe: 'Completed in 4 Hours',
    },
    {
      id: 'ba-root-drain',
      title: 'Root-Blocked Sewer to Hydro-Jetted Clear',
      problem: 'Aggressive live oak root intrusion penetrating lateral sewer line, triggering continuous sewage backups.',
      solution: 'Hydro-jetted at 4,000 PSI with reciprocating root cutter head, clearing 100% of roots with video proof.',
      beforeImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      timeframe: 'Completed in 2.5 Hours',
    },
    {
      id: 'ba-tank-tankless',
      title: 'Leaking 50-Gal Tank to Navien Tankless System',
      problem: 'Active bottom seam rupture on 12-year-old 50-gallon tank flooding mechanical closet and garage.',
      solution: 'Upgraded to Navien high-efficiency condensing tankless system with emergency drain pan, scale filter, and shutoff.',
      beforeImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
      afterImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      timeframe: 'Same-Day (5 Hours)',
    },
  ],
  whyChooseUs: [
    {
      id: 'pillar-licensed',
      title: 'Licensed & Drug-Tested Technicians',
      description: 'Every technician is background-checked, drug-tested, and holds Texas Master or Journeyman credentials.',
      iconName: 'ShieldCheck',
    },
    {
      id: 'pillar-inventory',
      title: 'Warehouse On Wheels',
      description: 'Fully stocked service vans carrying 1,200+ commercial-grade parts so 92% of repairs are finished in one visit.',
      iconName: 'Truck',
    },
    {
      id: 'pillar-diagnostics',
      title: 'Advanced Diagnostics',
      description: 'Non-invasive electronic leak detection and high-definition sewer cameras identify issues without tearing up walls.',
      iconName: 'SearchCheck',
    },
    {
      id: 'pillar-clean',
      title: 'Clean Home Guarantee',
      description: 'We protect your property with shoe covers, floor runners, and leave your bathroom or kitchen cleaner than we found it.',
      iconName: 'Sparkles',
    },
  ],
  serviceArea: {
    centerCity: 'Austin',
    state: 'TX',
    neighborhoods: [
      'Downtown Austin',
      'South Congress (SoCo)',
      'Zilker & Barton Hills',
      'Travis Heights',
      'Hyde Park & Campus',
      'South Lamar (SoLa)',
      'West Lake Hills',
      'Circle C Ranch',
      'Allandale & Crestview',
      'Anderson Mill',
      'Round Rock',
      'Pflugerville',
      'Cedar Park',
    ],
    zipCodes: [
      '78701',
      '78702',
      '78703',
      '78704',
      '78705',
      '78745',
      '78746',
      '78748',
      '78750',
      '78759',
      '78613',
      '78660',
      '78664',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74637213854!2d-97.82025345722656!3d30.267153000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },
  testimonials: [
    {
      id: 'test-1',
      author: 'Sarah M.',
      neighborhood: 'Zilker (Austin)',
      rating: 5,
      date: '2 days ago',
      serviceRendered: 'Emergency Copper Pipe Burst Repair',
      quote:
        "Broke a pipe behind the drywall at 10 PM on a Saturday. ApexFlow arrived in 35 minutes, shut it down, repaired the copper joint, and didn't charge ridiculous after-hours fees. Lifesavers!",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 'test-2',
      author: 'Marcus D.',
      neighborhood: 'Round Rock',
      rating: 5,
      date: '1 week ago',
      serviceRendered: 'Hydro-Jetting & Sewer Root Removal',
      quote:
        'Our sewer line backed up right before hosting family for Thanksgiving. They brought out the hydro-jetter, cleared tree roots, and showed us camera footage of the clean line. True professionals.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    },
    {
      id: 'test-3',
      author: 'Elena R.',
      neighborhood: 'South Congress (SoCo)',
      rating: 5,
      date: '2 weeks ago',
      serviceRendered: 'Emergency Tankless Water Heater Install',
      quote:
        'Our 50-gallon water heater blew a gasket and started flooding the garage. Called ApexFlow at 7 AM; by 1 PM we had a new high-efficiency tankless system up and running. Flat rate, no surprises.',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    },
  ],
  faq: [
    {
      id: 'faq-arrival',
      question: 'How quickly can an emergency plumber arrive at my Austin home?',
      answer:
        'We dispatch immediately from multiple zoned hubs across Greater Austin. Our average emergency arrival time is under 45 minutes, 24 hours a day, 7 days a week. We provide real-time updates while our technician is in route.',
    },
    {
      id: 'faq-after-hours',
      question: 'Do you charge extra for nights, weekends, or holidays?',
      answer:
        'No. Plumbing emergencies don\'t wait for regular business hours. We maintain flat-rate upfront pricing with zero after-hours, holiday, or weekend surcharges.',
    },
    {
      id: 'faq-diagnostic',
      question: 'How does the free diagnostic fee waiver work?',
      answer:
        'Our standard dispatch diagnostic fee is $89. If you approve and proceed with any recommended repair or installation, that diagnostic fee is 100% waived from your total invoice.',
    },
    {
      id: 'faq-licensing',
      question: 'Are your technicians licensed and insured in Texas?',
      answer:
        'Yes. ApexFlow is fully licensed by the Texas State Board of Plumbing Examiners (Lic #MP-41982) and carries $2,000,000 in comprehensive commercial general liability insurance for your complete protection.',
    },
    {
      id: 'faq-warranty',
      question: 'What kind of warranty do you provide on repairs and installations?',
      answer:
        'All standard plumbing repairs include our 1-Year Workmanship Warranty alongside manufacturer warranties on all installed parts. Major installations like water heaters and re-pipes carry up to 10-year warranties.',
    },
    {
      id: 'faq-payment',
      question: 'What payment methods do you accept, and do you offer financing?',
      answer:
        'We accept all major credit cards (Visa, MasterCard, Amex, Discover), debit, cash, and electronic bank transfer. We also offer 0% APR financing options for 12 months on qualifying major replacements.',
    },
  ],
};
export default SITE_CONFIG;
