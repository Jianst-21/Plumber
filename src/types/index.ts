export interface BusinessConfig {
  name: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  email: string;
  licenseNumber: string;
  insuranceAmount: string;
  city: string;
  state: string;
  fullAddress: string;
  emergencyArrivalText: string;
}

export interface PlumbingService {
  id: string;
  title: string;
  shortDesc: string;
  features: string[];
  startingPrice: number;
  image: string;
  badge?: string;
  category: string;
}

export interface CouponOffer {
  id: string;
  title: string;
  discountText: string;
  code: string;
  description: string;
  expiresText: string;
  terms: string;
}

export interface PricingItem {
  service: string;
  standardRange: string;
  diagnosticCost: string;
  highlights: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  problem: string;
  solution: string;
  beforeImage: string;
  afterImage: string;
  timeframe: string;
}

export interface WhyChooseUsPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceAreaConfig {
  centerCity: string;
  state: string;
  neighborhoods: string[];
  zipCodes: string[];
  mapEmbedUrl?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  neighborhood: string;
  rating: number;
  date: string;
  serviceRendered: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteWizardState {
  step: number;
  serviceId: string;
  urgency: 'emergency' | 'today' | 'scheduled';
  zipCode: string;
  name: string;
  phone: string;
  notes: string;
  couponCode?: string;
  estimatedMin?: number;
  estimatedMax?: number;
  ticketId?: string;
}

export interface SiteConfig {
  business: BusinessConfig;
  services: PlumbingService[];
  coupons: CouponOffer[];
  pricing: PricingItem[];
  beforeAfter: BeforeAfterItem[];
  whyChooseUs: WhyChooseUsPillar[];
  pillars?: WhyChooseUsPillar[];
  serviceArea: ServiceAreaConfig;
  testimonials: Testimonial[];
  faq: FaqItem[];
}
