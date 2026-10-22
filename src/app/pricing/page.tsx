import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, HelpCircle, BadgePercent, Sparkles } from "lucide-react";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { CompleteEPOSBundle } from "@/components/CompleteEPOSBundle";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Card Machine Pricing & Rates UK | Zero Monthly Rental* | Shift4 Partner",
  description: "Transparent card machine pricing for UK merchants. £0 monthly terminal rental*, clear transaction rates, no hidden compliance penalties, and personalised quote reviews.",
  alternates: {
    canonical: `${siteConfig.domain}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <div className="pt-24 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            HONEST & TRANSPARENT
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Simple, Transparent Card Machine <span className="text-brand-accent">Pricing</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            No surprise monthly hire invoices, no hidden authorisation premiums, and no rigid multi-year bank leasing lock-ins.
          </p>

          {/* Pricing Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left max-w-4xl mx-auto">
            
            {/* Card 1: Terminal Rental */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0F2247] to-[#0A1833] border border-blue-500/40 shadow-xl relative">
              <div className="text-xs font-bold uppercase text-brand-accent mb-2">Hardware Rental</div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                £0.00<span className="text-xs font-normal text-slate-400"> / month*</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Qualifying UK merchants pay zero monthly hire fees for the Shift4 One smart terminal.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Free terminal offer*</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Multi-network 4G SIM included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Next-day express delivery</span>
                </div>
              </div>
            </div>

            {/* Card 2: Transaction Fees */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#132C5B] to-[#0A1833] border border-brand-accent shadow-2xl relative">
              <div className="absolute -top-3 right-4 bg-brand-blue text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full text-white">
                Custom Tailored
              </div>
              <div className="text-xs font-bold uppercase text-brand-accent mb-2">Transaction Rates</div>
              <div className="text-xl sm:text-2xl font-black text-white mb-1">
                Custom Quote
                <span className="text-xs font-normal text-slate-400 block mt-0.5">interchange-plus / blended</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                Rates calibrated directly to your turnover volume so you receive the lowest fees possible.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>UK Debit & Credit cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Apple Pay & Google Pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Free statement rate review</span>
                </div>
              </div>
            </div>

            {/* Card 3: Support & Software */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0F2247] to-[#0A1833] border border-blue-500/40 shadow-xl relative">
              <div className="text-xs font-bold uppercase text-brand-accent mb-2">Setup & Support</div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                Included<span className="text-xs font-normal text-slate-400"> free</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4">
                1-to-1 dedicated UK onboarding specialist guidance to help you pair Wi-Fi and train staff.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>7-Day UK phone support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Express swap-out warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Real-time portal reporting</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[44px] text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto text-center"
            >
              <span>Get Your Personalised Rate Quote</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Complete EPOS Bundle Spotlight for Hospitality Businesses */}
      <section className="py-16 sm:py-20 bg-[#060D1A] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              HOSPITALITY VENUE BUNDLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Need a Full Till System for Your Venue?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Upgrade to the SkyTab Complete EPOS Bundle. Get full touchscreen hardware, integrated card terminal, printer, cash drawer, and cloud reporting for just £39/month with zero upfront cost.
            </p>
          </div>

          <CompleteEPOSBundle />
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <SavingsCalculator />

      {/* Quote Form */}
      <QuoteSection />

      {/* Pricing FAQs */}
      <FAQSection limit={8} />
    </div>
  );
}
