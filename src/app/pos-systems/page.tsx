import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Utensils, ShoppingBag, Truck, ArrowRight, Check, Sparkles } from "lucide-react";
import { POSSection } from "@/components/POSSection";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "EPOS Systems UK | Restaurant, Retail & Mobile POS | Shift4 Partner",
  description: "Shift4 EPOS solutions for UK restaurants, cafés, retail shops, and mobile traders. Table management, live stock control, offline processing, and cloud reporting.",
  alternates: {
    canonical: `${siteConfig.domain}/pos-systems`,
  },
};

export default function POSSystemsPage() {
  const categories = [
    {
      title: "Restaurant & Hospitality POS",
      desc: "Table layout management, split billing, kitchen display systems (KDS), and online order syncing.",
      link: "/pos-systems/restaurant-pos",
      icon: Utensils,
    },
    {
      title: "Retail & Inventory POS",
      desc: "Barcode scanning, matrix inventory (size/colour), multi-location stock sync, and customer returns.",
      link: "/pos-systems/retail-pos",
      icon: ShoppingBag,
    },
    {
      title: "Mobile & Event Trader POS",
      desc: "Offline transaction buffering, internal roaming 4G, all-day battery, and instant receipt printing.",
      link: "/pos-systems/mobile-pos",
      icon: Truck,
    },
  ];

  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            UNIFIED COMMERCE
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-4 mb-4">
            Cloud EPOS Systems for UK Businesses
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10">
            Combine card payments, stock control, staff permissions, and customer loyalty into one powerful, user-friendly platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={i}
                  href={cat.link}
                  className="group p-6 rounded-2xl bg-gradient-to-b from-[#0F2247]/80 to-[#0A1833]/90 border border-slate-700/70 hover:border-brand-accent transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-brand-accent">
                    <span>Explore System</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <POSSection />
      <QuoteSection />
      <FAQSection limit={6} />
    </div>
  );
}
