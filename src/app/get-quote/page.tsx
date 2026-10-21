import React from "react";
import type { Metadata } from "next";
import { QuoteSection } from "@/components/QuoteSection";
import { TrustBar } from "@/components/TrustBar";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Get My Free Quote | Shift4 One Card Machine",
  description: "Request a custom, zero-obligation card processing quote for your UK business. £0 monthly terminal rental*, free terminal offer*, and next-day courier delivery.",
  alternates: {
    canonical: `${siteConfig.domain}/get-quote`,
  },
};

export default function GetQuotePage() {
  return (
    <div className="pt-20">
      <QuoteSection
        title="Get Your Free Shift4 One Quote"
        subtitle="Zero monthly terminal rental*, low transaction rates, and dedicated personal UK setup. Fill out the 60-second form below to receive your tailored proposal."
      />
      <TrustBar />
      <FAQSection limit={6} />
    </div>
  );
}
