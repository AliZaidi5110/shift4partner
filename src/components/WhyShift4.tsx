"use client";

import React from "react";
import { BadgePoundSterling, Wifi, CreditCard, Printer, Zap, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

export function WhyShift4() {
  const benefits = [
    {
      icon: BadgePoundSterling,
      title: "Zero Monthly Terminal Rental*",
      description: "Stop paying £25–£45 every single month per terminal to legacy banks. With Shift4 One, you pay no monthly terminal rental fee*, drastically cutting your fixed trading overheads.",
      badge: "Save £300+ / Year",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Wifi,
      title: "Roaming Multi-Network 4G*",
      description: "Equipped with an intelligent multi-network SIM that automatically locks onto EE, Vodafone, O2, or Three. Seamlessly switches from Wi-Fi to 4G so you never drop a transaction.",
      badge: "Uninterrupted Uptime",
      badgeColor: "text-brand-accent bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: CreditCard,
      title: "Tap, Insert, Swipe & Wallets",
      description: "Full compatibility for Contactless, Chip & PIN, Apple Pay, Google Pay, and American Express. High-speed sub-second authorization keeps customer queues moving rapidly.",
      badge: "Sub-Second Authorisation",
      badgeColor: "text-brand-accent bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Printer,
      title: "Instant Print & Digital Receipts",
      description: "Features a built-in high-speed thermal printer that cuts crisp receipts in seconds, alongside instant SMS and email receipt dispatch for modern paperless customer options.",
      badge: "Built-In Thermal Roll",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Zap,
      title: "Fast Next-Day Payouts*",
      description: "Keep your cash flow healthy and predictable with next-business-day settlements deposited directly into any designated UK business bank account, Monday through Friday.",
      badge: "Predictable Cash Flow",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Users,
      title: "Personal 1-to-1 UK Setup",
      description: "Never wrestle with automated phone menus. You receive dedicated UK onboarding guidance, pre-configured terminal dispatch, and direct telephone walkthroughs.",
      badge: "Dedicated Onboarding",
      badgeColor: "text-brand-accent bg-blue-500/10 border-blue-500/20",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#08152B] via-[#0A1A33] to-[#081222] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            BUILT FOR UK MERCHANTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-5">
            Why UK Businesses Choose <span className="text-brand-accent">Shift4 One</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Engineered to replace expensive legacy bank rentals and fragile phone dongles with a reliable, all-in-one payment powerhouse.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0F2247]/80 to-[#0A1833]/90 border border-slate-700/60 p-6 sm:p-7 shadow-xl hover:border-brand-accent/60 hover:shadow-[0_10px_30px_rgba(30,107,255,0.25)] transition-all transform hover:-translate-y-1 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Top row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-brand-blue/20 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-12 sm:mt-14 rounded-2xl bg-gradient-to-r from-blue-900/40 via-brand-navy/60 to-blue-900/40 border border-blue-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">
              Ready to eliminate monthly terminal rental from your overheads?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Join thousands of UK businesses saving money with Shift4 One card machines.
            </p>
          </div>

          <Link
            href="/get-quote"
            onClick={() => trackCTAClick("Get My Free Quote", "WhyShift4 Callout")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto min-h-[44px]"
          >
            <span>Get My Free Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
