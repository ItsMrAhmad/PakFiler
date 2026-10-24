import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DiscountBanner from "@/components/DiscountBanner";
import SalaryCalculator from "@/components/SalaryCalculator";
import ServicesPricing from "@/components/ServicesPricing";
import OfficeSection from "@/components/OfficeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import FilerBenefits from "@/components/FilerBenefits";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-emerald-500 selection:text-white">
      {/* Sticky Header with Navigation & Top Discount Bar */}
      <Navbar />

      {/* Hero with Value Proposition & Instant Price Check */}
      <Hero />

      {/* Special Rs. 1,000 Flat Savings Comparison Banner */}
      <DiscountBanner />

      {/* Pakistan FBR Salary Tax Calculator */}
      <SalaryCalculator />

      {/* Full Catalog of Services & Pricing (All Rs. 1,000 Less) */}
      <ServicesPricing />

      {/* Real Physical Office & Corporate Advisory Showcase */}
      <OfficeSection />

      {/* Why Choose Us & Trust Pillars */}
      <WhyChooseUs />

      {/* Effortless 3-Step WhatsApp Process */}
      <HowItWorks />

      {/* Active Taxpayer (ATL) Benefits vs Non-Filer Punitive Tax */}
      <FilerBenefits />

      {/* Customer Reviews & Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Contact & Direct WhatsApp Booking Form */}
      <ContactForm />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}
