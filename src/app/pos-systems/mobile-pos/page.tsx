import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Truck } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBar } from "@/components/TrustBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mobile POS Systems UK | Shift4 Event & Pop-Up EPOS",
  description: "Portable EPOS and card payment systems for UK mobile traders, festival food vendors, and pop-up events. Roaming 4G, offline transaction mode, and long battery life.",
  alternates: {
    canonical: `${siteConfig.domain}/pos-systems/mobile-pos`,
  },
};

export default function MobilePOSPage() {
  const features = [
    "Offline payment capability keeps taking orders if festival Wi-Fi fails",
    "Pre-installed UK roaming 4G SIM connecting across all major networks",
    "Built-in thermal printer produces crisp customer receipts on the go",
    "Lightweight, drop-resistant hardware with anti-glare sunlight display",
    "Quick-touch menu interface optimized for high-volume queue busting",
    "Compatible with 12V vehicle charging and standard USB-C power banks",
  ];

  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            PORTABLE COMMERCE
          </span>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Mobile & Event EPOS <br />
            <span className="text-brand-accent">Trade Anywhere with Complete Confidence</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered for festival caterers, food truck operators, and market traders who need enterprise EPOS reliability without wires, broadband cords, or monthly terminal rent*.
          </p>

          <div className="flex justify-center pt-2">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-7 py-3.5 min-h-[44px] text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto text-center"
            >
              <span>Get Mobile POS Quote</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Never Miss a Sale When Trading Outdoors
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              When trading outdoors or in crowded event marquees, conventional payment systems fail because of weak mobile signals or drained batteries. Shift4 Mobile POS resolves this with heavy-duty battery capacity and automatic multi-network network switching.
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
