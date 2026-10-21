"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Layers, 
  UtensilsCrossed, 
  Bike, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Check, 
  ChevronRight,
  Zap,
  Building2,
  Trophy
} from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

interface IntegrationItem {
  name: string;
  category: "delivery" | "fleet" | "accounting";
  tag: string;
  tagColor: string;
  headline: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  gradient: string;
}

const integrationsData: IntegrationItem[] = [
  {
    name: "Deliveroo",
    category: "delivery",
    tag: "Online Delivery",
    tagColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    headline: "Seamlessly manage Deliveroo orders directly from your Shift4 POS",
    metrics: [
      { label: "Faster Order Processing", value: "+30%" },
      { label: "Reduction in Order Errors", value: "95%" },
      { label: "Average Setup Time", value: "15 min" },
    ],
    bulletPoints: [
      "Orders appear directly on your Shift4 POS — no separate Deliveroo tablet needed",
      "Automatic menu sync keeps prices and item availability updated in real-time",
      "Kitchen Display System (KDS) shows Deliveroo orders alongside dine-in tickets",
    ],
    gradient: "from-[#00CDBC]/20 via-[#0A1A33] to-[#060E1C]",
  },
  {
    name: "Just Eat",
    category: "delivery",
    tag: "Online Delivery",
    tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    headline: "Connect Britain's favourite food delivery platform to your Shift4 POS",
    metrics: [
      { label: "Improvement in Order Accuracy", value: "40%" },
      { label: "Faster Delivery Times", value: "25%" },
      { label: "Average Restaurant Rating", value: "4.8★" },
    ],
    bulletPoints: [
      "Handle high Just Eat order volumes during peak rush without missing tickets",
      "Automatic order confirmation prevents delayed prep and delivery cancellations",
      "Menu updates and 86'd items sync in real-time across your entire store",
    ],
    gradient: "from-[#FF8000]/20 via-[#0A1A33] to-[#060E1C]",
  },
  {
    name: "Uber Eats",
    category: "delivery",
    tag: "Online Delivery",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    headline: "Streamline Uber Eats orders with direct two-way Shift4 synchronization",
    metrics: [
      { label: "Increase in Delivery Sales", value: "+20%" },
      { label: "Average Prep Time Saved", value: "8 min" },
      { label: "Order Accuracy Rate", value: "99%" },
    ],
    bulletPoints: [
      "Real-time driver arrival tracking visible right on your Shift4 terminal and KDS",
      "Smart prep timing based on courier GPS proximity to ensure hot food handover",
      "Unified sales reporting combines in-person, takeout, and Uber Eats revenues",
    ],
    gradient: "from-[#06C167]/20 via-[#0A1A33] to-[#060E1C]",
  },
  {
    name: "Stuart Delivery",
    category: "fleet",
    tag: "Fleet & Couriers",
    tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    headline: "Power your own delivery fleet on-demand with Stuart courier integration",
    metrics: [
      { label: "Commission on Food Orders", value: "£0" },
      { label: "Average Driver Arrival", value: "14 min" },
      { label: "Driver Performance Rating", value: "4.8★" },
    ],
    bulletPoints: [
      "Keep 100% of your food revenue — zero 30% marketplace commission fees",
      "Call verified delivery drivers on-demand directly from your Shift4 POS screen",
      "Live GPS tracking link sent automatically via SMS to your customer",
    ],
    gradient: "from-[#1E6BFF]/20 via-[#0A1A33] to-[#060E1C]",
  },
  {
    name: "Supy Aggregator",
    category: "fleet",
    tag: "Aggregation",
    tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    headline: "Multi-platform delivery aggregation engineered for busy restaurants",
    metrics: [
      { label: "Platforms Supported", value: "5+" },
      { label: "Admin Time Saved Weekly", value: "60%" },
      { label: "Unified Dashboard", value: "1 System" },
    ],
    bulletPoints: [
      "Single consolidated touch screen interface for Deliveroo, Uber Eats, and Just Eat",
      "Eliminate the clutter of 4 different ringing sound tablets on your service counter",
      "Global menu editing: update item pricing or mark out-of-stock in 1 click everywhere",
    ],
    gradient: "from-[#8B5CF6]/20 via-[#0A1A33] to-[#060E1C]",
  },
  {
    name: "Xero & QuickBooks",
    category: "accounting",
    tag: "Accounting & Tax",
    tagColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    headline: "Automated daily sales reconciliation and VAT reporting directly to your books",
    metrics: [
      { label: "Bookkeeping Time Saved", value: "5 hrs/wk" },
      { label: "Reconciliation Discrepancies", value: "0%" },
      { label: "Automated VAT Reports", value: "Daily" },
    ],
    bulletPoints: [
      "Daily end-of-day Z-reports and card payouts sync straight into Xero or QuickBooks",
      "Accurate split of 20%, 5%, and 0% VAT items without manual spreadsheet entry",
      "Transaction fees automatically booked to merchant processing expense accounts",
    ],
    gradient: "from-[#0284C7]/20 via-[#0A1A33] to-[#060E1C]",
  },
];

export function IntegrationsShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "delivery" | "fleet" | "accounting">("all");

  const filtered = activeTab === "all" 
    ? integrationsData 
    : integrationsData.filter(i => i.category === activeTab);

  return (
    <section className="bg-gradient-to-b from-[#08152B] via-[#0A1A33] to-[#060E1C] py-20 lg:py-28 text-white relative overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-blue/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Zap className="h-3.5 w-3.5 text-cyan-400" />
              POWERFUL UK INTEGRATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
            Connect Shift4 to <span className="bg-gradient-to-r from-cyan-400 via-brand-accent to-blue-500 bg-clip-text text-transparent">Every Platform</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Integrate with Deliveroo, Just Eat, Uber Eats, Stuart, and leading accounting software. Manage all your in-person orders and online deliveries from one unified screen without juggling multiple tablets.
          </p>
        </div>

        {/* 6 Key Operational Killer Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-14">
          {[
            "Eliminate multiple noisy tablets cluttering your counter",
            "Orders flow directly to your Kitchen Display System (KDS)",
            "Menu updates and 86'd items sync automatically across all channels",
            "Unified financial reporting for in-person and delivery revenues",
            "Reduce costly order errors and speed up kitchen prep times",
            "Zero extra integration fees from Shift4 — all included*",
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-sm">
              <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Integrations" },
            { id: "delivery", label: "Food Delivery Apps (Deliveroo, Just Eat, Uber)" },
            { id: "fleet", label: "Fleet & Aggregators (Stuart, Supy)" },
            { id: "accounting", label: "Accounting & Tax (Xero, QuickBooks)" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-brand-blue text-white shadow-[0_4px_15px_rgba(30,107,255,0.4)]"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-white/10 bg-gradient-to-b ${item.gradient} p-6 flex flex-col justify-between shadow-xl hover:border-brand-accent/50 transition-all group`}
            >
              <div>
                {/* Header: Name + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-200 font-medium mb-6 leading-snug">
                  {item.headline}
                </p>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2 bg-slate-900/80 border border-white/10 rounded-xl p-3 mb-6">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-sm sm:text-base font-black text-white">{metric.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                  {item.bulletPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/get-quote"
                  onClick={() => trackCTAClick(`Integration ${item.name}`, "Integrations Grid")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-white transition-colors group-hover:translate-x-1"
                >
                  <span>Connect {item.name} to Shift4</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process: How Integrations Work */}
        <div className="bg-[#050C1A] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              SIMPLE ONBOARDING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              How Shift4 Integrations Work in 4 Simple Steps
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Setup is fully guided by your dedicated Eposify onboarding specialist. Most UK venues are live in under 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Connect",
                desc: "Link your Deliveroo, Just Eat, and Uber Eats merchant accounts in 1 click through the Shift4 portal.",
              },
              {
                step: "2",
                title: "Sync",
                desc: "Your master food menu, categories, modifier groups, and prices sync automatically across all apps.",
              },
              {
                step: "3",
                title: "Receive",
                desc: "Orders inject directly into your Shift4 POS and kitchen display, printing food tickets instantly.",
              },
              {
                step: "4",
                title: "Manage",
                desc: "Monitor all live sales, 86 items in real time, and view combined financial accounting reports.",
              },
            ].map((st, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-blue to-cyan-400 text-white font-black text-base flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {st.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{st.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise-Grade Global Proof Bar */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-blue-950/60 border border-blue-500/20 rounded-3xl p-8 text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Trophy className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              BUILT ON WORLD-CLASS ENTERPRISE INFRASTRUCTURE
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8">
            Shift4 powers enterprise payments and integrations for world-renowned venues, championship sports stadiums, and Las Vegas mega-resorts.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">$200B+</div>
              <div className="text-xs text-slate-400 mt-1">Annual Processing Volume</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">250,000+</div>
              <div className="text-xs text-slate-400 mt-1">Venues Worldwide</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">40,000+</div>
              <div className="text-xs text-slate-400 mt-1">Vegas Hotel Rooms Powered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">99.99%</div>
              <div className="text-xs text-slate-400 mt-1">Global System Uptime</div>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-200">
              <Building2 className="h-4 w-4 text-brand-accent" /> Caesars Palace, Las Vegas
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Building2 className="h-4 w-4 text-brand-accent" /> The Venetian (7,000+ Rooms)
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Trophy className="h-4 w-4 text-amber-400" /> Pebble Beach US Open Host
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Trophy className="h-4 w-4 text-cyan-400" /> Official NFL Stadium Partner
            </span>
          </div>
        </div>

        {/* Direct 0% Commission Alternative Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-[#0A1A33] to-[#0F2247]/90 border border-emerald-500/30 p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Keep 100% of Your Profits
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Tired of paying 30% delivery commission?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Launch Shift4 Direct Online Ordering alongside Deliveroo & Just Eat. Take direct collection and delivery orders on your own website with 0% commission and auto-kitchen printing.
            </p>
          </div>
          <Link
            href="/online-ordering"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>Explore 0% Online Ordering</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <Link
            href="/get-quote"
            onClick={() => trackCTAClick("Integrations Showcase Bottom", "Integrations Section")}
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(30,107,255,0.45)] hover:shadow-[0_15px_40px_rgba(30,107,255,0.6)] hover:from-blue-600 hover:to-brand-blue transition-all"
          >
            <span>Get a Fast Integration Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-[11px] text-slate-400 mt-3">
            *Terms and conditions apply. Third-party platform provider fees (e.g. Deliveroo commission) apply separately.
          </p>
        </div>

      </div>
    </section>
  );
}
