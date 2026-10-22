import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Complete Card Machine Comparison UK 2026 | 8 Providers Side-by-Side",
  description: "Compare Shift4 One, SumUp, Zettle, Square, Dojo, Worldpay, Barclaycard & Takepayments. Find the cheapest card machine for small business with our comprehensive 2026 comparison.",
  alternates: {
    canonical: `${siteConfig.domain}/compare`,
  },
};

export default function ComparePage() {
  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            UK CARD MACHINE COMPARISON 2026
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Complete Card Machine Comparison UK <br />
            <span className="text-brand-accent">8 Providers Side-by-Side</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto">
            Compare Shift4 One, Square, Dojo, Zettle, SumUp, Worldpay, Barclaycard &amp; Takepayments. Find the cheapest card machine for your UK business with our transparent 2026 fee analysis.
          </p>
        </div>
      </section>

      {/* Main Comparison Component */}
      <ComparisonTable />

      {/* Narrative breakdown */}
      <section className="bg-[#050C18] py-16 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">1. Traditional Bank Terminals (e.g. Worldpay, Barclaycard, Clover)</h2>
            <p>
              Traditional high-street merchant banks provide solid hardware, but their commercial model was built for the 1990s. They lock merchants into 36 or 48-month leasing contracts, charging £25 to £45+ every month per terminal simply for hire. In addition, many charge monthly PCI-DSS compliance penalties, authorisation fees on every transaction, and hefty cancellation fees if you ever wish to exit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">2. Flat-Rate Mobile Readers (e.g. SumUp, Zettle, Square)</h2>
            <p>
              Mobile dongles are fantastic for hobbyists, micro-startups, or occasional weekend vendors taking under £1,500/month. However, once your monthly card takings exceed £2,000–£3,000, paying a flat rate of 1.69% to 1.75% becomes exorbitantly expensive. Furthermore, they require an active Bluetooth smartphone connection, have no built-in paper receipt printer, and offer minimal telephone customer support when issues arise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">3. The Shift4 One Advantage</h2>
            <p>
              Shift4 One bridges this gap. You receive commercial-grade hardware with a built-in thermal receipt printer, multi-network roaming 4G, and dedicated UK support, while paying £0 monthly terminal rental* and benefiting from low, tailored processing rates.
            </p>
          </div>
        </div>
      </section>

      <QuoteSection />
      <FAQSection limit={6} />
    </div>
  );
}
