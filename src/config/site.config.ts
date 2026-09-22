import { SiteConfig } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  business: {
    name: 'Apex Plumbing',
    tagline: "London's Premier 24/7 Emergency & Residential Plumbing & Heating Engineers",
    phone: '020 7946 0992',
    displayPhone: '020 7946 PIPE',
    email: 'dispatch@apexplumbing.co.uk',
    licenseNumber: 'Gas Safe Registered #629148',
    insuranceAmount: '£5,000,000 Public Liability Insurance',
    city: 'London',
    state: 'UK',
    fullAddress: '48 Baker Street, Marylebone, London W1U 7BB',
    emergencyArrivalText: 'Average arrival time: Under 45 minutes',
  },
  services: [
    {
      id: 'leak-repair',
      title: 'Emergency Leak Detection & Pipe Repair',
      shortDesc: 'Rapid acoustic & thermal leak locating with immediate non-invasive pipe isolation and repair.',
      features: [
        'Acoustic & thermal imaging leak detection',
        'Copper, Hep2O, PEX & push-fit pipe repair',
        'Non-invasive subfloor leak diagnosis',
        'Full mains water shutoff & pressure testing',
      ],
      startingPrice: 129,
      image: '/images/service-leak.jpg',
      badge: '24/7 Fast Response',
      category: 'Emergency',
    },
    {
      id: 'drain-cleaning',
      title: 'Drain Unblocking & Hydro-Jetting',
      shortDesc: 'High-pressure electro-mechanical rotary snaking and hydro-jetting to clear stubborn blockages and root ingress.',
      features: [
        'High-pressure water jetting line clearance',
        'HD CCTV drain & sewer camera inspection',
        'Main stack, gulley & lateral drain unblocking',
        'Backed by our 90-day blockage-free guarantee',
      ],
      startingPrice: 89,
      image: '/images/service-drain.jpg',
      badge: 'Most Requested',
      category: 'Drain & Sewer',
    },
    {
      id: 'water-heater',
      title: 'Boiler & Hot Water Cylinder Servicing',
      shortDesc: 'Same-day emergency repairs and installations for combi boilers, system boilers, and unvented cylinders.',
      features: [
        'Combi, system & conventional boiler repair',
        'Same-day emergency boiler replacement',
        'Heat exchanger, pump & diverter valve servicing',
        'Energy-efficient A-rated boiler upgrades',
      ],
      startingPrice: 169,
      image: '/images/service-water-heater.jpg',
      badge: 'Same-Day Install',
      category: 'Boilers & Heating',
    },
    {
      id: 'fixture-pipe',
      title: 'Taps, Toilets & Waste Pipe Installation',
      shortDesc: 'Gas Safe & CIPHE-certified installation for mixer taps, showers, toilets, and complete domestic repiping.',
      features: [
        'Premium kitchen mixer taps & thermostatic showers',
        'Dual-flush toilet & concealed cistern repair',
        'Mains pressure regulator valve (PRV) tuning',
        'WRAS-compliant water supply testing',
      ],
      startingPrice: 99,
      image: '/images/service-fixtures.jpg',
      badge: 'Precision Fit',
      category: 'Taps & Fixtures',
    },
  ],
  coupons: [
    {
      id: 'coupon-first30',
      title: '£30 OFF Any Plumbing Repair',
      discountText: '£30 OFF',
      code: 'FIRST30',
      description: 'Valid for any residential repair service of £150 or more. Mention code when booking or show engineer on arrival.',
      expiresText: 'Valid this month',
      terms: 'Cannot be combined with other offers. One coupon per residential address. Valid for repairs exceeding £150.',
    },
    {
      id: 'coupon-boiler80',
      title: '£80 OFF Boiler Replacement',
      discountText: '£80 OFF',
      code: 'BOILER80',
      description: 'Instant savings applied directly to any combi boiler or unvented hot water cylinder installation.',
      expiresText: 'Valid this month',
      terms: 'Valid only on complete new boiler installations. Cannot be combined with other discounts.',
    },
    {
      id: 'coupon-camfree',
      title: 'FREE CCTV Drain Camera Inspection',
      discountText: 'FREE INSPECTION',
      code: 'CAMFREE',
      description: 'Comprehensive color CCTV video camera inspection of your drainage line free with any qualifying drain jetting service (£120 value).',
      expiresText: 'Valid this month',
      terms: 'Applicable with any main drain clearing or hydro-jetting service. Includes digital copy of inspection report.',
    },
  ],
  pricing: [
    {
      service: 'In-Home Diagnostic & Safety Inspection',
      standardRange: '£49 Standard Call-Out',
      diagnosticCost: '£0 (Waived with repair)',
      highlights: 'Diagnostic fee is 100% waived when you authorize any recommended repair on the same visit.',
    },
    {
      service: 'Drain Unblocking & Jetting',
      standardRange: '£89 – £169',
      diagnosticCost: 'Waived with service',
      highlights: 'Includes rotary mechanical clearance, stoppage removal, and CCTV visual check.',
    },
    {
      service: 'Emergency Leak Detection & Pipe Repair',
      standardRange: '£129 – £269',
      diagnosticCost: 'Waived with service',
      highlights: 'Acoustic locating, non-invasive floor/wall isolation, and permanent copper solder or press-fit repair.',
    },
    {
      service: 'Boiler Diagnostic & Heating Tune-Up',
      standardRange: '£169 – £389+',
      diagnosticCost: 'Waived with repair',
      highlights: 'Thermostat, PCB, thermocouple, heat exchanger servicing, or applied toward new replacement.',
    },
  ],
  beforeAfter: [
    {
      id: 'ba-faucet-replacement',
      title: 'Broken Kitchen Mixer Tap to Modern High-Arc Fixture',
      problem: 'Cracked internal ceramic cartridge and damaged pull-out spray head leaking water over the kitchen counter basin.',
      solution: 'Installed commercial-grade high-arc brushed nickel pull-down mixer tap with ceramic disc valve and flexible braided connectors.',
      beforeImage: '/images/ba-faucet-before.jpg',
      afterImage: '/images/ba-faucet-after.jpg',
      timeframe: 'Completed in 45 Minutes',
    },
    {
      id: 'ba-sink-ptrap',
      title: 'Leaking Under-Sink Trap to Clean Sealed Waste Assembly',
      problem: 'Severely leaking waste trap joint and deteriorating slip-gaskets causing standing wastewater pooling inside the cabinet.',
      solution: 'Rebuilt complete dual-sink PVC drainage waste assembly with watertight mechanical joints, anti-siphon trap, and isolating valves.',
      beforeImage: '/images/ba-sink-before.jpg',
      afterImage: '/images/ba-sink-after.jpg',
      timeframe: 'Completed in 90 Minutes',
    },
    {
      id: 'ba-toilet-installation',
      title: 'Toilet Soil Pipe Rough-In to Flawless Commode Install',
      problem: 'Cracked leaking pan removed, exposing unsealed floor collar and requiring pan connector replacement, leveling, and water hookup.',
      solution: 'Installed reinforced flexible pan connector seal, secured floor anchor bolts, leveled dual-flush toilet, and connected braided water line.',
      beforeImage: '/images/ba-toilet-before.jpg',
      afterImage: '/images/ba-toilet-after.jpg',
      timeframe: 'Completed in 1 Hour',
    },
  ],
  whyChooseUs: [
    {
      id: 'pillar-licensed',
      title: 'Gas Safe & CIPHE-Certified Engineers',
      description:
        'All engineers are vetted, background-checked, insured, and hold active Gas Safe Register and City & Guilds plumbing credentials.',
      iconName: 'BadgeCheck',
    },
    {
      id: 'pillar-inventory',
      title: 'Fully Stocked Mobile Workshop',
      description:
        'Service vans carrying 1,500+ OEM replacement boiler and plumbing parts for an exceptional 94% first-visit fix rate.',
      iconName: 'Truck',
    },
    {
      id: 'pillar-diagnostics',
      title: 'Cutting-Edge Diagnostic Gear',
      description:
        'HD drain cameras, acoustic listening sticks, and thermal imaging cameras isolate hidden leaks without unnecessary damage.',
      iconName: 'Video',
    },
    {
      id: 'pillar-clean',
      title: 'Clean Home Guarantee',
      description:
        'Protective overshoes, heavy floor runners, and spotless workspace cleanup guaranteed on every single residential dispatch.',
      iconName: 'Home',
    },
  ],
  pillars: [
    {
      id: 'pillar-licensed',
      title: 'Gas Safe & CIPHE-Certified Engineers',
      description:
        'All engineers are vetted, background-checked, insured, and hold active Gas Safe Register and City & Guilds plumbing credentials.',
      iconName: 'BadgeCheck',
    },
    {
      id: 'pillar-inventory',
      title: 'Fully Stocked Mobile Workshop',
      description:
        'Service vans carrying 1,500+ OEM replacement boiler and plumbing parts for an exceptional 94% first-visit fix rate.',
      iconName: 'Truck',
    },
    {
      id: 'pillar-diagnostics',
      title: 'Cutting-Edge Diagnostic Gear',
      description:
        'HD drain cameras, acoustic listening sticks, and thermal imaging cameras isolate hidden leaks without unnecessary damage.',
      iconName: 'Video',
    },
    {
      id: 'pillar-clean',
      title: 'Clean Home Guarantee',
      description:
        'Protective overshoes, heavy floor runners, and spotless workspace cleanup guaranteed on every single residential dispatch.',
      iconName: 'Home',
    },
  ],
  serviceArea: {
    centerCity: 'London',
    state: 'UK',
    neighborhoods: [
      'Central London (Westminster & Soho)',
      'Kensington & Chelsea',
      'Camden & Islington',
      'Richmond & Twickenham',
      'Clapham & Battersea',
      'Hampstead & Highgate',
      'Canary Wharf & Docklands',
      'Wimbledon & Merton',
      'Fulham & Hammersmith',
      'Greenwich & Blackheath',
      'Shoreditch & Hackney',
      'Dulwich & Southwark',
      'Chiswick & Brentford',
      'Ealing & Acton',
      'Kingston upon Thames',
      'Bromley & Beckenham',
      'Wandsworth & Putney',
    ],
    zipCodes: [
      'SW1A',
      'SW1',
      'SW3',
      'SW7',
      'SW11',
      'SW19',
      'W1',
      'W1D',
      'W1U',
      'W4',
      'W5',
      'W8',
      'NW1',
      'NW3',
      'EC1',
      'EC1A',
      'EC2',
      'E1',
      'E14',
      'SE1',
      'SE10',
      'TW9',
      'KT1',
      'CR0',
    ],
    mapEmbedUrl:
      'https://maps.google.com/maps?q=London%2C%20UK&t=&z=11&ie=UTF8&iwloc=&output=embed',
  },
  testimonials: [
    {
      id: 'test-1',
      author: 'Sarah M.',
      neighborhood: 'Kensington & Chelsea',
      rating: 5,
      date: '2 days ago',
      serviceRendered: 'Emergency Burst Pipe Repair',
      quote:
        "Burst pipe behind the bathroom wall at 10 PM on a Saturday. Apex arrived in 35 minutes, isolated the leak, soldered the joint, and didn't charge ridiculous out-of-hours fees. Lifesavers!",
      avatar: '/images/avatar-sarah.jpg',
    },
    {
      id: 'test-2',
      author: 'Marcus D.',
      neighborhood: 'Camden',
      rating: 5,
      date: '1 week ago',
      serviceRendered: 'Drain Unblocking & CCTV Survey',
      quote:
        'Our main sewer line backed up right before hosting family. They brought out the high-pressure jetter, cleared tree roots, and showed us camera footage of the clean pipe. True professionals.',
      avatar: '/images/avatar-marcus.jpg',
    },
    {
      id: 'test-3',
      author: 'Elena R.',
      neighborhood: 'Richmond',
      rating: 5,
      date: '2 weeks ago',
      serviceRendered: 'Emergency Combi Boiler Installation',
      quote:
        'Our boiler broke down and started leaking water into the utility room. Called Apex at 7 AM; by 1 PM we had a new high-efficiency Worcester Bosch combi boiler running. Fixed price, zero surprises.',
      avatar: '/images/avatar-elena.jpg',
    },
    {
      id: 'test-4',
      author: 'David H.',
      neighborhood: 'Westminster',
      rating: 5,
      date: '3 weeks ago',
      serviceRendered: 'Kitchen Mixer Tap Replacement',
      quote:
        'Fast and thorough service. The engineer arrived on time, replaced our leaking kitchen tap cleanly, and checked all isolating valves. High quality workmanship.',
      avatar: '/images/avatar-marcus.jpg',
    },
    {
      id: 'test-5',
      author: 'Claire T.',
      neighborhood: 'Wimbledon',
      rating: 5,
      date: '1 month ago',
      serviceRendered: 'Thermostatic Shower Valve Fitting',
      quote:
        'Had issues with water temperature fluctuations. Apex diagnosed the thermostatic cartridge problem quickly and fitted a new unit. Professional and courteous.',
      avatar: '/images/avatar-sarah.jpg',
    },
    {
      id: 'test-6',
      author: 'Robert K.',
      neighborhood: 'Islington',
      rating: 5,
      date: '1 month ago',
      serviceRendered: 'Radiator Valve & Heating Balance',
      quote:
        'Extremely knowledgeable heating engineer. Restored heat to three cold radiators and balanced the whole system in under an hour. Highly recommended.',
      avatar: '/images/avatar-elena.jpg',
    },
  ],
  faq: [
    {
      id: 'faq-arrival',
      question: 'How quickly can an emergency plumber arrive at my London property?',
      answer:
        'We dispatch immediately from multiple zoned hubs across Greater London. Our average emergency arrival time is under 45 minutes, 24 hours a day, 7 days a week. We provide live status updates while our engineer is in route.',
    },
    {
      id: 'faq-after-hours',
      question: 'Do you charge extra for nights, weekends, or bank holidays?',
      answer:
        'No. Plumbing emergencies do not wait for business hours. We maintain flat-rate upfront pricing with zero out-of-hours, bank holiday, or weekend surcharges.',
    },
    {
      id: 'faq-diagnostic',
      question: 'How does the free diagnostic call-out fee waiver work?',
      answer:
        'Our standard diagnostic fee is £49. If you approve and proceed with any recommended repair or installation, that call-out fee is 100% waived from your final invoice.',
    },
    {
      id: 'faq-licensing',
      question: 'Are your heating engineers Gas Safe registered in the UK?',
      answer:
        'Yes. All heating and gas works are completed by engineers on the official Gas Safe Register (#629148). We carry £5,000,000 in comprehensive public liability insurance for your peace of mind.',
    },
    {
      id: 'faq-warranty',
      question: 'What guarantee do you provide on repairs and installations?',
      answer:
        'All standard plumbing repairs include our 1-Year Workmanship Guarantee alongside manufacturer warranties on all installed parts. New boiler installations carry up to 10-year manufacturer warranties.',
    },
    {
      id: 'faq-payment',
      question: 'What payment methods do you accept, and do you offer payment plans?',
      answer:
        'We accept all major debit and credit cards (Visa, MasterCard, Amex), bank transfer, and cash. We also provide 0% APR financing options over 12 months on qualifying boiler replacements.',
    },
  ],
};
export default SITE_CONFIG;
