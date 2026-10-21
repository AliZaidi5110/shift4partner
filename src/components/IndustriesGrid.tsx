"use client";

import React from "react";
import Link from "next/link";
import { Coffee, UtensilsCrossed, Pizza, Scissors, ShoppingBag, Store, Compass, Truck, Car, ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { trackCTAClick } from "@/lib/analytics";

const iconMap: Record<string, React.ElementType> = {
  Coffee,
  UtensilsCrossed,
  Pizza,
  Scissors,
  ShoppingBag,
  Store,
  Compass,
  Truck,
  Car,
};

export function IndustriesGrid() {
  return (
    <section className="bg-[#050C18] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Industries We <span className="text-brand-accent">Empower</span> Across the UK
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Every business has distinct payment needs. Explore how the Shift4 ecosystem is customized for your sector.
          </p>
        </div>

        {/* 9 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.iconName] || Store;
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                onClick={() => trackCTAClick(ind.name, "IndustriesGrid")}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0F2247]/70 to-[#0A1833]/80 border border-slate-700/60 p-6 hover:border-brand-accent/60 hover:shadow-[0_10px_25px_rgba(30,107,255,0.2)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/20 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-105 transition-all shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors flex items-center justify-between">
                    <span>{ind.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-brand-accent" />
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ind.primaryBenefit}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-brand-accent">Explore industry setup</span>
                  <span>{ind.turnoverFit.split(" ")[0]}</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
