import EmergencyTopbar from '@/components/layout/EmergencyTopbar';
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
      {/* 1. Top 24/7 emergency notification warning bar */}
      <EmergencyTopbar />

      {/* 2. Sticky header with brand, license & navigation */}
      <Navbar />

      {/* 3. Main Content Landmark */}
      <main id="main-content">
        {/* Hero Section with Fullscreen background, left text & CTA buttons */}
        <HeroSection />

        {/* Credibility Trust Strip */}
        <TrustStrip />

        {/* Core Services Grid with Real Work Photos */}
        <ServicesGrid />

        {/* Interactive 4-Step Instant Lead Quote Wizard */}
        <QuoteWizard />

        {/* Upfront Flat-Rate Transparent Pricing Table */}
        <PricingTable />

        {/* Real Work Before & After Comparisons */}
        <BeforeAfter />

        {/* 4 Pillars of Contractor Advantage */}
        <WhyChooseUs />

        {/* Service Area Metro Coverage Map & Live ZIP Checker */}
        <ServiceArea />

        {/* Verified Homeowner Reviews */}
        <ReviewsSection />

        {/* Expandable FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* 4. Emergency Callout Strip & Comprehensive Footer */}
      <Footer />

      {/* 5. Mobile Floating Action Bar */}
      <MobileFloatingBar />
    </div>
  );
}
