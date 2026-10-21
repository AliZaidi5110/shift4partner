import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { CardMachineShowcase } from "@/components/CardMachineShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Card Machines UK | Zero Monthly Rental* | Shift4 Partner",
  description: "Explore the Shift4 One smart card machine for UK businesses. £0 monthly terminal hire*, free terminal offer*, roaming 4G, and instant paper receipts.",
  alternates: {
    canonical: `${siteConfig.domain}/card-machines`,
  },
};

export default function CardMachinesOverviewPage() {
  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            UK PAYMENT TERMINALS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 mb-4">
            Smart Card Machines for Every UK Business
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Take payments at the counter, table-side, or on the road with Shift4 One. Zero monthly terminal rental* and personal UK setup.
          </p>

          <Link
            href="/card-machines/shift4-one"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
          >
            <span>Explore Flagship Shift4 One Terminal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CardMachineShowcase />
      <SavingsCalculator />
      <ComparisonTable />
      <QuoteSection />
      <FAQSection limit={8} />
    </div>
  );
}
