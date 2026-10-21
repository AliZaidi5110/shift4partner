import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ShoppingBag } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Retail POS Systems UK | Shift4 Retail & Inventory EPOS",
  description: "Smart retail POS systems for UK boutiques, convenience stores, and retail shops. Barcode scanning, multi-site inventory, customer accounts, and low card processing fees.",
  alternates: {
    canonical: `${siteConfig.domain}/pos-systems/retail-pos`,
  },
};

export default function RetailPOSPage() {
  const features = [
    "High-speed barcode scanning & rapid product lookups",
    "Real-time matrix inventory tracking (sizes, colours, variations)",
    "Hassle-free customer returns, exchanges, and gift receipt printing",
    "Customer loyalty profiles, store credit, and purchase history",
    "Automated purchase order generation and low-stock reorder alerts",
    "Multi-store consolidated inventory tracking and inter-branch transfers",
  ];

  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            RETAIL COMMERCE
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Retail POS & Stock Management <br />
            <span className="text-brand-accent">Built for High-Street Retailers</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Gain complete visibility over sales, stock levels, margins, and customer loyalty across all your physical stores and online channels.
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
            >
              <span>Get Retail POS Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Control Stock & Accelerate Checkout Lines
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Never lose track of bestsellers or over-order slow-moving inventory. Shift4 Retail POS combines high-speed till scanning with real-time stock matrix management and instant payment settlement.
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

      <QuoteSection />
      <FAQSection limit={6} />
    </div>
  );
}
