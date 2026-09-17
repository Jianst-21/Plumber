import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import TrustStrip from '@/components/trust/TrustStrip';
import ServicesGrid from '@/components/services/ServicesGrid';
import QuoteWizard from '@/components/wizard/QuoteWizard';
import PricingTable from '@/components/pricing/PricingTable';
import BeforeAfter from '@/components/showcase/BeforeAfter';
import WhyChooseUs from '@/components/trust/WhyChooseUs';
import ServiceArea from '@/components/coverage/ServiceArea';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FaqAccordion from '@/components/faq/FaqAccordion';
import Footer from '@/components/layout/Footer';
import MobileFloatingBar from '@/components/layout/MobileFloatingBar';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip pb-20 md:pb-0">
      {/* 1. Sticky header with brand, nav links & call CTA */}
      <Navbar />

      {/* 2. Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section with Dual CTAs and 45-Min Guarantee */}
        <HeroSection />

        {/* Credibility Trust Strip */}
        <TrustStrip />

        {/* Core Services Grid with Real Work Photos */}
        <ServicesGrid />

        {/* Interactive 4-Step Instant Lead Quote Wizard */}
        <QuoteWizard />

        {/* Feature 3: Upfront Flat-Rate Transparent Pricing Table */}
        <PricingTable />

        {/* Feature 2: High-Resolution Before & After Comparisons */}
        <BeforeAfter />

        {/* 4 Pillars of Contractor Advantage */}
        <WhyChooseUs />

        {/* Interactive Greater Austin Coverage Map & Real-time ZIP Checker */}
        <ServiceArea />

        {/* Verified Austin Homeowner Reviews & Social Proof */}
        <ReviewsSection />

        {/* Comprehensive Homeowner FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* 4. Complete Legal/Regulatory Footer with Emergency Callout Strip */}
      <Footer />

      {/* 5. Fixed Mobile Bottom Action Bar (<768px viewports) */}
      <MobileFloatingBar />
    </div>
  );
}
