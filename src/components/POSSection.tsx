"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Utensils, ShoppingBag, Truck, Check, ArrowRight, Layers, BarChart3, Users2, Shield, WifiOff, Store } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";
import { CompleteEPOSBundle } from "./CompleteEPOSBundle";

export function POSSection() {
  const [activeTab, setActiveTab] = useState<"hospitality" | "retail" | "mobile">("hospitality");

  const tabData = {
    hospitality: {
      title: "Shift4 POS for Restaurants, Pubs & Cafés",
      subtitle: "Full-service table management, kitchen order routing, and rapid bill splitting.",
      description: "Designed specifically for UK hospitality operators. Connect your kitchen, bar, front of house, and mobile payment terminals into one unified system.",
      highlights: [
        "Floor plan & live table status tracking",
        "Open bar tabs with card pre-authorisation",
        "Kitchen Display System (KDS) & order routing",
        "Automated split billing by seat, item, or amount",
        "Discreet digital gratuity & tip reporting",
        "Online ordering & click-and-collect synchronization",
      ],
      metric: "Up to 25% faster table turnover",
      link: "/pos-systems/restaurant-pos",
    },
    retail: {
      title: "Shift4 POS for Retail Stores & Boutiques",
      subtitle: "Barcode scanning, live multi-location inventory, and smooth customer returns.",
      description: "Keep complete control over stock, supplier orders, and customer accounts whether you run a single high-street boutique or a multi-location retail chain.",
      highlights: [
        "Rapid barcode scanning & product variants (size/colour)",
        "Real-time stock alerts & reorder reminders",
        "Hassle-free customer returns, refunds & store credits",
        "Customer loyalty profiles & purchase history",
        "Staff permissions, clock-in/out & commission tracking",
        "Multi-site inventory transfers and consolidated reporting",
      ],
      metric: "Real-time stock across all locations",
      link: "/pos-systems/retail-pos",
    },
    mobile: {
      title: "Shift4 POS for Mobile, Events & Food Trucks",
      subtitle: "Uninterrupted offline processing, roaming 4G, and rugged battery endurance.",
      description: "Take the power of an enterprise EPOS anywhere across the UK. Perfect for festival traders, mobile catering, pop-ups, and outdoor markets.",
      highlights: [
        "Offline payment resilience (keeps trading if signal drops)",
        "Internal multi-network 4G roaming pre-configured",
        "Quick-key touch menus optimized for fast queues",
        "Integrated thermal receipt printing on the move",
        "End-of-day Z-report summaries generated in seconds",
        "USB-C vehicle and battery-pack charging compatible",
      ],
      metric: "100% trading uptime at outdoor events",
      link: "/pos-systems/mobile-pos",
    },
  };

  const sharedFeatures = [
    { icon: BarChart3, title: "Cloud Reporting", desc: "Access live sales, margin breakdowns, and hourly volume from any phone or browser." },
    { icon: Users2, title: "Staff Permissions", desc: "Granular manager overrides, till drawer audits, and cashier performance metrics." },
    { icon: WifiOff, title: "Offline Resilience", desc: "Continue processing card transactions securely even when local internet drops." },
    { icon: Store, title: "Multi-Site Ready", desc: "Manage menus, pricing, and centralized reporting across multiple branches seamlessly." },
  ];

  const current = tabData[activeTab];

  return (
    <section className="bg-gradient-to-b from-[#081222] via-[#0A1A33] to-[#060D1A] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            COMPLETE EPOS ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Go Beyond Payments with <span className="text-brand-accent">Shift4 POS</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            More than just card machines. Transform your operations with intelligent, industry-specific point-of-sale software designed for growth.
          </p>

          {/* Segment Tabs Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("hospitality")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "hospitality"
                  ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Utensils className="h-4 w-4" />
              <span>Hospitality</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("retail")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "retail"
                  ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Retail</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "mobile"
                  ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Truck className="h-4 w-4" />
              <span>Mobile & Events</span>
            </button>
          </div>
        </div>

        {/* Tab Detail Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0F2247]/90 to-[#0A1833]/95 border border-blue-500/30 p-8 sm:p-10 shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-block bg-blue-500/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full border border-blue-500/20">
                {current.metric}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              {/* Highlights Checkmark List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-quote"
                  onClick={() => trackCTAClick("Get Free POS Quote", `POSSection - ${activeTab}`)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
                >
                  <span>Get POS System Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={current.link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-white transition-colors"
                >
                  <span>Learn more about {activeTab} POS</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Interactive Feature Visual Preview */}
            <div className="lg:col-span-5 bg-[#070F1E] rounded-2xl border border-slate-700 p-6 shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Shift4 Cloud Back-Office
                </span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded">
                  Live Sync Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-900/90 rounded-xl p-3 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium">Today&apos;s Card Takings</p>
                    <p className="text-xl font-bold text-white">£2,845.50</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    +18.4% vs last week
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-900/60 rounded-lg p-2.5 border border-white/5">
                    <p className="text-slate-400 text-[10px]">Avg Transaction</p>
                    <p className="font-bold text-white mt-0.5">£24.80</p>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-2.5 border border-white/5">
                    <p className="text-slate-400 text-[10px]">Active Tables / Tills</p>
                    <p className="font-bold text-white mt-0.5">8 Terminals</p>
                  </div>
                </div>

                <div className="p-3 bg-brand-blue/10 border border-brand-accent/20 rounded-xl text-xs text-slate-300">
                  <p className="font-semibold text-brand-accent mb-0.5">Seamless Hardware Integration</p>
                  <p className="text-[11px] text-slate-400">
                    Connects directly with Shift4 One terminals, cash drawers, barcode scanners, and kitchen printers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Complete EPOS Bundle (SkyTab Option for Hospitality Businesses) */}
        <div className="mb-14">
          <CompleteEPOSBundle />
        </div>

        {/* 4 Shared Core Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sharedFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
