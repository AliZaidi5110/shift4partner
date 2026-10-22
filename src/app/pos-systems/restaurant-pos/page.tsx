import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Utensils, Sparkles, Clock, Layers } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBar } from "@/components/TrustBar";
import { CompleteEPOSBundle } from "@/components/CompleteEPOSBundle";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Restaurant POS Systems UK | Shift4 Hospitality EPOS",
  description: "Complete restaurant EPOS for UK bistros, pubs, and fine dining. Live floor plans, pay-at-table bill splitting, kitchen displays (KDS), and zero terminal rental*.",
  alternates: {
    canonical: `${siteConfig.domain}/pos-systems/restaurant-pos`,
  },
};

export default function RestaurantPOSPage() {
  const features = [
    "Interactive drag-and-drop floor plans & table status tracking",
    "Pay-at-table functionality with instant bill splitting by seat or amount",
    "Kitchen Display System (KDS) and direct thermal kitchen printer routing",
    "Discreet digital gratuity prompts (increases tip earnings by up to 20%)",
    "End-of-shift automated cashing-up and staff tip distribution summaries",
    "Online ordering & Deliveroo/UberEats integration ready",
  ];

  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            HOSPITALITY COMMERCE
          </span>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Restaurant & Pub EPOS <br />
            <span className="text-brand-accent">Engineered for Fast Service</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Eliminate server delays, kitchen errors, and payment bottlenecks. Seamlessly synchronize order taking, kitchen display systems, and handheld Shift4 One payment devices.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-7 py-3.5 min-h-[44px] text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto text-center"
            >
              <span>Get Restaurant POS Quote</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
            <Link
              href="/online-ordering"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 sm:px-6 py-3.5 min-h-[44px] text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-all w-full sm:w-auto text-center"
            >
              <span>0% Commission Online Ordering</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Everything Your Restaurant Needs to Run Smoothly
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              In a busy British restaurant or gastropub, Saturday evening dinner services demand total speed and accuracy. With Shift4 Restaurant EPOS, waiting staff take food and beverage orders directly at the table on handheld devices, instantly firing dockets to the kitchen or bar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete EPOS Bundle (SkyTab Hospitality Option) */}
      <section className="bg-[#071120] py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CompleteEPOSBundle />
        </div>
      </section>

      <QuoteSection />
      <FAQSection limit={6} />
    </div>
  );
}
