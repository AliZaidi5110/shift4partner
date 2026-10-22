import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Smartphone, 
  Printer, 
  TrendingUp, 
  Clock, 
  Coins, 
  Percent, 
  Users, 
  QrCode, 
  Truck, 
  PhoneCall,
  Store,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { TrustBar } from "@/components/TrustBar";
import { CompleteEPOSBundle } from "@/components/CompleteEPOSBundle";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Commission-Free Online Ordering System | UK Restaurant EPOS | Shift4 Partner",
  description: "Stop paying 30% commission to Deliveroo and Just Eat. Shift4 direct online ordering for UK restaurants, takeaways, and pubs. 0% commission, direct kitchen sync & QR table ordering.",
  alternates: {
    canonical: `${siteConfig.domain}/online-ordering`,
  },
};

export default function OnlineOrderingPage() {
  const comparisonRows = [
    {
      feature: "Commission Fee per Order",
      shift4: "0% Commission (Keep 100%)",
      shift4Good: true,
      apps: "15% - 35% + VAT per order",
      appsGood: false,
    },
    {
      feature: "Customer Contact Data Ownership",
      shift4: "100% Yours (Emails, phone numbers, history)",
      shift4Good: true,
      apps: "Hidden / Masked by aggregator",
      appsGood: false,
    },
    {
      feature: "Direct Kitchen Printer / KDS Sync",
      shift4: "Instant automatic printing to kitchen & bar",
      shift4Good: true,
      apps: "Requires extra tablet & manual re-entry",
      appsGood: false,
    },
    {
      feature: "Menu & Price Management",
      shift4: "1-Click instant sync from Shift4 POS",
      shift4Good: true,
      apps: "Manual approval delays across multiple apps",
      appsGood: false,
    },
    {
      feature: "Custom Branded Storefront",
      shift4: "Your logo, colors & direct website domain",
      shift4Good: true,
      apps: "Listed alongside dozens of local competitors",
      appsGood: false,
    },
    {
      feature: "QR Code Table Ordering Included",
      shift4: "Yes — dine-in table ordering & pay included",
      shift4Good: true,
      apps: "No / Separate expensive third-party fee",
      appsGood: false,
    },
    {
      feature: "Payment Settlements",
      shift4: "Next-business-day direct into UK bank",
      shift4Good: true,
      apps: "Weekly or bi-weekly with withholding delays",
      appsGood: false,
    },
  ];

  const coreFeatures = [
    {
      icon: Percent,
      title: "0% Commission on Direct Orders",
      badge: "Save £1,000s/mo",
      desc: "Stop sacrificing 30% of every ticket to delivery apps. Sell directly to your loyal customers and keep every pound of your hard-earned food margin.",
    },
    {
      icon: Printer,
      title: "Automatic Kitchen & Bar Sync",
      badge: "Zero Manual Re-Keying",
      desc: "Orders flow straight from your website into your Shift4 EPOS. Thermal dockets auto-print in the kitchen with order notes, modifiers, and allergy flags.",
    },
    {
      icon: QrCode,
      title: "QR Code Table Order & Pay",
      badge: "Dine-In Boost",
      desc: "Place sleek QR codes on your dining tables. Guests scan, browse your digital menu, order rounds of drinks, and pay from their phones without waving down staff.",
    },
    {
      icon: Users,
      title: "Own 100% of Your Customer Data",
      badge: "Build Your Audience",
      desc: "Third-party apps hide customer contact details to market your competitors. With Shift4, you capture full email and phone lists for repeat marketing campaigns.",
    },
    {
      icon: Truck,
      title: "Custom Collection & Delivery Radiuses",
      badge: "Flexible Fulfillment",
      desc: "Define custom delivery postcodes, set minimum spend thresholds, manage delivery charges, and schedule prep time slots during peak dinner rushes.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Branded Storefront",
      badge: "Fast 2-Tap Checkout",
      desc: "A lightning-fast, branded web ordering experience that lives directly on your domain. Supports Apple Pay, Google Pay, and instant saved card checkout.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Guest Orders Online",
      desc: "Customer visits your website or scans a table QR code, selecting dishes, dietary options, and preferred time slot.",
    },
    {
      step: "02",
      title: "Instant Kitchen Print",
      desc: "The order transmits immediately to your Shift4 EPOS and auto-prints on the kitchen printer or appears on your KDS.",
    },
    {
      step: "03",
      title: "Real-Time Tracking",
      desc: "The customer receives automated SMS/email alerts confirming prep time, dispatch, or collection readiness.",
    },
    {
      step: "04",
      title: "100% Margin Settled",
      desc: "Payment is captured securely through Shift4 with sub-second approval and settled into your UK bank the next business day.",
    },
  ];

  return (
    <div className="pt-24 text-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,107,255,0.3),rgba(255,255,255,0))] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Messaging */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-brand-blue/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent shadow-[0_0_15px_rgba(77,163,255,0.25)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  COMMISSION-FREE ONLINE ORDERING
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <Utensils className="h-3 w-3" />
                  Direct EPOS & Kitchen Sync
                </span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                <span className="block text-white">Online Ordering for</span>
                <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#1E6BFF] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-sm">
                  0% Commission.
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Stop handing 30% of every takeaway and delivery order to delivery apps. Accept direct orders from your website, sync instantly with your Shift4 kitchen printer, and keep 100% of your food profits.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[44px] text-sm sm:text-base font-bold text-white shadow-[0_10px_30px_rgba(30,107,255,0.45)] hover:shadow-[0_15px_40px_rgba(30,107,255,0.6)] hover:from-blue-600 hover:to-brand-blue transition-all transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                >
                  <span>Launch 0% Online Ordering</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 backdrop-blur-md px-5 sm:px-6 py-3.5 sm:py-4 min-h-[44px] text-sm sm:text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white hover:border-slate-500 transition-all text-center w-full sm:w-auto"
                >
                  <PhoneCall className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>

              {/* 4 Quick Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl pt-4 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 border border-emerald-400/30">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">Keep 100% of order revenue</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 border border-emerald-400/30">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-white font-medium">Automatic kitchen docket printing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 border border-emerald-400/30">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">QR table order & pay included</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 border border-emerald-400/30">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300">Own all customer emails & data</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Savings Comparison Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#0F2247]/95 via-[#0A1A33]/98 to-[#060D1A] border border-blue-500/40 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                    Takeaway Margin Analysis
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    £10,000 Monthly Volume
                  </span>
                </div>

                <div className="space-y-4 my-6">
                  {/* Third party app cost */}
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/25">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-red-300">Aggregators (Deliveroo / Just Eat)</span>
                      <span className="text-xs font-bold text-red-400">30% Commission</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-red-400">
                      -£3,000 <span className="text-xs font-normal text-slate-400">lost every month</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      That is £36,000/year leaving your business simply to take orders from local customers.
                    </p>
                  </div>

                  {/* Shift4 Direct Cost */}
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-emerald-300">Shift4 Direct Online Ordering</span>
                      <span className="text-xs font-bold text-emerald-400">0% Commission</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400">
                      £0.00 <span className="text-xs font-normal text-slate-400">commission fees</span>
                    </div>
                    <p className="text-[11px] text-emerald-300/80 mt-1">
                      Pay standard card processing rates only. You keep £3,000 more profit every single month.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#060E1C] p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-bold block">Annual Extra Profit</span>
                    <span className="text-xl sm:text-2xl font-black text-white">+£36,000 / year</span>
                  </div>
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-white bg-brand-blue/30 border border-brand-accent/40 rounded-xl px-4 py-2.5 transition-all"
                  >
                    <span>Calculate Yours</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. 6 Core Feature Pillars */}
      <section className="bg-[#050C18] py-20 lg:py-28 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              DIRECT ORDERING ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-4 mb-4">
              Everything Needed to Run a <span className="text-brand-accent">Direct Online Store</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              A complete, commission-free digital ordering platform built natively into your Shift4 EPOS hardware and kitchen displays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={i} 
                  className="rounded-3xl bg-gradient-to-b from-[#0F2247]/70 to-[#0A1833]/80 border border-slate-700/80 p-7 hover:border-brand-accent/70 transition-all hover:shadow-[0_15px_30px_rgba(30,107,255,0.15)] flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-brand-blue/20 text-brand-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table: Shift4 Direct Online Ordering vs 3rd Party Apps */}
      <section className="bg-gradient-to-b from-[#060D1A] to-[#0A1A33] py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              DIRECT VS AGGREGATORS
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-4 mb-4">
              Compare Shift4 Direct with Delivery Apps
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300">
              Why leading UK restaurants and takeaways are moving orders away from high-commission marketplaces.
            </p>
          </div>

          <div className="md:hidden flex items-center justify-center gap-2 mb-3 p-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-xs text-slate-300 text-center">
            <span>👉 Swipe table horizontally to compare features</span>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-[#071120] shadow-2xl">
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-[#0A1833]">
                    <th className="py-4 px-4 sm:px-6 font-bold text-white uppercase text-xs sticky left-0 bg-[#0A1833] z-20 min-w-[140px] sm:min-w-[160px] shadow-sm">
                      Feature
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-emerald-400 uppercase text-xs bg-brand-blue/10 border-x border-brand-blue/20 min-w-[180px]">
                      Shift4 Direct Online Ordering
                    </th>
                    <th className="py-4 px-4 sm:px-6 font-bold text-slate-400 uppercase text-xs min-w-[170px]">
                      Deliveroo / Just Eat / Uber Eats
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 font-semibold text-slate-200 sticky left-0 bg-[#071120] z-10 border-r border-white/5 shadow-sm">
                        {row.feature}
                      </td>
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 bg-brand-blue/5 border-x border-brand-blue/15 font-semibold text-emerald-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                          <span>{row.shift4}</span>
                        </div>
                      </td>
                      <td className="py-3.5 sm:py-4 px-4 sm:px-6 text-slate-400">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-400/80 flex-shrink-0" />
                          <span>{row.apps}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-Step Order Workflow */}
      <section className="bg-[#050C18] py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              SEAMLESS FULFILLMENT
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-4 mb-4">
              How Direct Orders Flow into Your Kitchen
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Zero manual order entry. Zero missed tickets. One unified workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-black text-brand-accent/40 mb-3 font-mono">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Complete EPOS Bundle Spotlight (SkyTab) */}
      <section className="bg-[#071120] py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              ALL-IN-ONE HARDWARE & SOFTWARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-3">
              Power Your Online & On-Premise Orders with SkyTab
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Get the complete hardware setup to receive and print online orders seamlessly for £39/month with zero upfront cost.
            </p>
          </div>

          <CompleteEPOSBundle />
        </div>
      </section>

      {/* 7. Conversion Quote Form */}
      <QuoteSection />

      {/* 8. Online Ordering FAQs */}
      <FAQSection limit={6} />
    </div>
  );
}
