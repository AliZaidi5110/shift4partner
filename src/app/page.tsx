import React from "react";
import { Hero } from "@/components/Hero";
import { SearchCommand } from "@/components/SearchCommand";
import { TrustBar } from "@/components/TrustBar";
import { WhyShift4 } from "@/components/WhyShift4";
import { CardMachineShowcase } from "@/components/CardMachineShowcase";
import { POSSection } from "@/components/POSSection";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Testimonials } from "@/components/Testimonials";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQSection } from "@/components/FAQSection";
import { QuoteSection } from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 3D Device Mockup & Inline Mini Quote Form */}
      <Hero />

      {/* 2. Floating AI-Style Search & Route Spotlight */}
      <SearchCommand />

      {/* 3. Trust Bar with Official Partner Badge & Accepted Payment Schemes */}
      <TrustBar />

      {/* 4. Why Choose Shift4 One (6 Core Benefit Cards) */}
      <WhyShift4 />

      {/* 5. Card Machine Showcase with Hardware Specs & Physical Terminal Photo */}
      <CardMachineShowcase />

      {/* 6. POS / EPOS Section with Interactive Tabs for Hospitality, Retail & Mobile */}
      <POSSection />

      {/* 7. Deliveroo, Just Eat & Uber Eats Platform Integrations Showcase */}
      <IntegrationsShowcase />

      {/* 8. How It Works (4-Step Frictionless Onboarding Process) */}
      <HowItWorks />

      {/* 8. Industries We Serve (9 Sector-Specific Cards) */}
      <IndustriesGrid />

      {/* 9. Interactive Card Machine Fee Savings Calculator */}
      <SavingsCalculator />

      {/* 10. Verified Merchant Testimonials & Case Study Placeholders */}
      <Testimonials />

      {/* 11. Comprehensive Comparison Table (Shift4 vs Rented vs SumUp/Zettle) */}
      <ComparisonTable />

      {/* 12. FAQ Accordion with FAQPage Structured Data Schema */}
      <FAQSection />

      {/* 13. Final Conversion CTA Band with Full Interactive Quote Form */}
      <QuoteSection />
    </>
  );
}
