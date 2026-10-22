import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Calculator, 
  CreditCard, 
  Percent, 
  CheckCircle2, 
  AlertCircle
} from "lucide-react";
import { providersList } from "@/data/comparisons";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "dojo-alternative" },
    { slug: "zettle-alternative" },
    { slug: "sumup-alternative" },
    { slug: "worldpay-alternative" },
    { slug: "barclaycard-alternative" },
    { slug: "takepayments-alternative" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const providerKey = slug.replace("-alternative", "");
  const provider = providersList.find((p) => p.slug === providerKey);

  if (!provider) {
    return { title: "Compare Card Machines | Eposify" };
  }

  return {
    title: `Best ${provider.name} Alternative UK 2026 | Shift4 One vs ${provider.name}`,
    description: `Looking for a cheaper ${provider.name} alternative? Compare Shift4 One vs ${provider.name}. £0 monthly rental, 1.25% blended rate, free built-in printer & 24/7 UK support.`,
    alternates: {
      canonical: `${siteConfig.domain}/compare/${slug}`,
    },
  };
}

export default async function ProviderComparePage({ params }: PageProps) {
  const { slug } = await params;
  const providerKey = slug.replace("-alternative", "");
  const provider = providersList.find((p) => p.slug === providerKey);

  if (!provider) {
    notFound();
  }

  const shift4 = providersList[0];

  const comparisonRows = [
    { feature: "Upfront Hardware Cost", shift4: shift4.upfrontCost, comp: provider.upfrontCost, shift4Wins: true },
    { feature: "Monthly Terminal Rental", shift4: shift4.monthlyRental, comp: provider.monthlyRental, shift4Wins: true },
    { feature: "Transaction Rate", shift4: shift4.transactionRate, comp: provider.transactionRate, shift4Wins: true },
    { feature: "4G SIM Connectivity", shift4: shift4.sim4G, comp: provider.sim4G, shift4Wins: true },
    { feature: "Built-In Receipt Printer", shift4: shift4.printer, comp: provider.printer, shift4Wins: true },
    { feature: "Contract Term", shift4: shift4.contractLength, comp: provider.contractLength, shift4Wins: true },
    { feature: "Payout Speed", shift4: shift4.payoutSpeed, comp: provider.payoutSpeed, shift4Wins: true },
    { feature: "Customer Phone Support", shift4: shift4.support, comp: provider.support, shift4Wins: true },
  ];

  return (
    <div className="pt-24 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(30,107,255,0.25),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-brand-blue/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
              <Sparkles className="h-3.5 w-3.5" />
              {provider.name.toUpperCase()} ALTERNATIVE UK 2026
            </span>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Save on Fees
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Shift4 One vs {provider.name} <br />
            <span className="bg-gradient-to-r from-[#4DA3FF] via-[#1E6BFF] to-[#38BDF8] bg-clip-text text-transparent">
              Cheaper Rates &amp; £0 Monthly Rental
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {provider.verdict} Switch to Shift4 One to get free hardware, zero monthly rental fees, fast next-day payouts, and 24/7 dedicated UK merchant support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/get-quote"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
            >
              <span>Get Your Free Shift4 Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>Call 24/7 Support: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Side-by-Side Detailed Card Comparison */}
      <section className="bg-[#050C18] py-16 sm:py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
              Direct Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              Why UK Merchants Are Switching from {provider.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              {provider.shift4Advantage}
            </p>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl border border-slate-700 bg-[#071120] shadow-2xl overflow-hidden">
            {/* Mobile scroll hint */}
            <div className="sm:hidden px-4 py-2 bg-slate-800/80 border-b border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Scroll horizontally to view comparison</span>
              <span className="text-brand-accent font-semibold">Swipe →</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A1833]">
                  <th className="py-4 px-6 font-bold text-white uppercase text-xs">Feature</th>
                  <th className="py-4 px-6 font-black text-emerald-400 uppercase text-xs bg-brand-blue/15 border-x border-brand-accent/30">
                    Shift4 One (Recommended)
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-400 uppercase text-xs">
                    {provider.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-brand-blue/5 border-x border-brand-accent/20 font-bold text-emerald-300">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-400 stroke-[3] flex-shrink-0" />
                        <span>{row.shift4}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <span>{row.comp}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>

          {/* Rate comparison alert box */}
          <div className="mt-8 p-5 rounded-2xl bg-brand-blue/10 border border-brand-accent/25 flex items-start gap-3.5">
            <div className="h-6 w-6 rounded-full bg-brand-blue/30 text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Pricing Breakdown Note</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {provider.rateComparisonNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 8 Providers Table for context */}
      <ComparisonTable initialSelected={providerKey} />

      {/* Quote Section */}
      <QuoteSection />

      {/* FAQs */}
      <FAQSection limit={6} />
    </div>
  );
}
