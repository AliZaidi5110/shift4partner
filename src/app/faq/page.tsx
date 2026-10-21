import React from "react";
import type { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { QuoteSection } from "@/components/QuoteSection";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Shift4 Partner UK",
  description: "Find clear, honest answers to UK card machine questions: £0 monthly rental terms, transaction fees, 4G roaming, delivery timescales, and contract flexibility.",
  alternates: {
    canonical: `${siteConfig.domain}/faq`,
  },
};

export default function FAQPage() {
  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            KNOWLEDGE BASE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 mb-4">
            Payment & Card Machine <span className="text-brand-accent">FAQs</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Everything UK merchants need to know before switching or taking card payments for the first time.
          </p>
        </div>
      </section>

      <FAQSection />
      <TrustBar />
      <QuoteSection />
    </div>
  );
}
