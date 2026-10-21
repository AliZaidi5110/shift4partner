"use client";

import React from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  CreditCard, 
  Printer, 
  BarChart3, 
  LayoutGrid, 
  Utensils, 
  PhoneCall,
  Coins
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

interface CompleteEPOSBundleProps {
  variant?: "full" | "compact";
  className?: string;
}

export function CompleteEPOSBundle({ variant = "full", className = "" }: CompleteEPOSBundleProps) {
  const bundleItems = [
    {
      title: "Shift4 POS terminal",
      desc: "Commercial-grade 15.6\" HD touchscreen terminal with spill-resistant casing",
      icon: LayoutGrid,
      badge: "SkyTab Station",
    },
    {
      title: "Integrated card terminal",
      desc: "Shift4 One smart device with £0 monthly rental, contactless & roaming 4G",
      icon: CreditCard,
      badge: "Shift4 One",
    },
    {
      title: "Thermal receipt printer",
      desc: "High-speed auto-tear thermal printer for guest receipts & kitchen dockets",
      icon: Printer,
      badge: "Fast Auto-Cutter",
    },
    {
      title: "Cash drawer included",
      desc: "Heavy-duty all-steel secure cash till drawer with auto-kick open",
      icon: Coins,
      badge: "Heavy-Duty Steel",
    },
    {
      title: "Real-time analytics & reporting",
      desc: "Lighthouse cloud back-office: live takings, table turns, margins & staff metrics",
      icon: BarChart3,
      badge: "Lighthouse Cloud",
    },
  ];

  const hospitalityFeatures = [
    "Interactive floor plan & live table management",
    "Tableside ordering & fast bill splitting by seat or amount",
    "Kitchen Display System (KDS) & bar order ticket routing",
    "Deliveroo, Just Eat & Uber Eats online ordering integration",
    "Discreet digital tipping (boosts staff tips by up to 20%)",
    "Staff clock-in/out, server permissions & till drawer audits",
  ];

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-brand-accent/40 bg-gradient-to-b from-[#0F244C]/90 via-[#0A1A33]/95 to-[#060D1A] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Band */}
      <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div className="space-y-3">
          <div className="inline-flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-brand-blue/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent shadow-[0_0_15px_rgba(77,163,255,0.25)]">
              <Sparkles className="h-3.5 w-3.5" />
              SKYTAB OPTION &bull; COMPLETE EPOS BUNDLE
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <Utensils className="h-3 w-3" />
              Particularly Designed for Hospitality Businesses
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Complete EPOS Bundle
          </h3>
          <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl">
            Full POS system for your venue — restaurants, pubs, bars, cafés and busy hospitality operators across the UK.
          </p>
        </div>

        {/* Pricing Box */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 bg-[#060E1C]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
          <div className="text-left sm:text-right">
            <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Bundle Subscription</div>
            <div className="text-4xl sm:text-5xl font-black text-white">
              £39<span className="text-base font-normal text-slate-300">/month</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 text-xs font-bold text-emerald-300">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
            <span>Zero Upfront Cost</span>
          </div>
        </div>
      </div>

      {/* 5 Core Hardware & Software Inclusions */}
      <div className="relative pt-8 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
            What&apos;s Included in Your £39/Month Bundle
          </h4>
          <span className="text-xs font-semibold text-brand-accent">
            5-in-1 Complete Solution
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {bundleItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="relative rounded-2xl bg-[#071326]/80 border border-slate-700/80 p-4 hover:border-brand-accent/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0 stroke-[3]" />
                    <span>{item.title}</span>
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hospitality Specific Capabilities (Full Variant) */}
      {variant === "full" && (
        <div className="relative pt-6 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                Hospitality-Grade Venue Intelligence
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {hospitalityFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <div className="h-4 w-4 rounded-full bg-blue-500/20 text-brand-accent flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Link
                href="/get-quote"
                onClick={() => trackCTAClick("Claim Complete EPOS Bundle", "SkyTab Bundle")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/40 hover:from-blue-600 hover:to-brand-blue transition-all"
              >
                <span>Get £39/mo EPOS Bundle Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick("SkyTab Bundle CTA")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
              >
                <PhoneCall className="h-4 w-4 text-emerald-400" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footnote */}
      <div className="relative mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400">
        <p>
          *SkyTab Complete EPOS Bundle requires qualifying merchant service agreement. Zero upfront hardware cost subject to underwriting.
        </p>
        <span className="text-slate-400 font-semibold">
          Eposify &bull; Authorised Shift4 Partner
        </span>
      </div>
    </div>
  );
}
