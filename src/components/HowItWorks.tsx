"use client";

import React from "react";
import Link from "next/link";
import { FileText, PhoneCall, Truck, CreditCard, ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Request a Free Quote",
      description: "Fill out our quick 60-second online form or give our UK team a ring. Tell us about your business and monthly card turnover.",
    },
    {
      num: "02",
      icon: PhoneCall,
      title: "Quick 5-Minute Rate Review",
      description: "We review your requirements, confirm eligibility for the £0 monthly terminal rental offer*, and present a straightforward rate proposal.",
    },
    {
      num: "03",
      icon: Truck,
      title: "Terminal Configured & Delivered",
      description: "Your Shift4 One terminal is pre-configured by our technicians and dispatched via tracked express courier straight to your door.",
    },
    {
      num: "04",
      icon: CreditCard,
      title: "Start Taking Payments",
      description: "Turn on the terminal, connect to Wi-Fi or internal 4G, and start processing customer card payments immediately with next-day payouts.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#060D1A] via-[#0A1A33] to-[#08152B] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            EFFORTLESS ONBOARDING
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            How It Works in <span className="text-brand-accent">4 Simple Steps</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300">
            No endless paperwork or high-street bank delays. Get your smart card machine delivered and active in days.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative rounded-2xl bg-gradient-to-b from-[#0F2247]/70 to-[#0A1833]/80 border border-slate-700/60 p-5 sm:p-6 flex flex-col justify-between group hover:border-brand-accent/50 transition-all">
                {/* Step Number watermarked */}
                <span className="text-3xl sm:text-4xl font-black text-slate-700/40 font-mono mb-3 sm:mb-4 group-hover:text-brand-accent/40 transition-colors">
                  {step.num}
                </span>

                <div className="h-12 w-12 rounded-xl bg-brand-blue/20 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all shadow-md flex-shrink-0">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-2 flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/get-quote"
            onClick={() => trackCTAClick("Get Started Now", "HowItWorks Section")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[44px] text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto text-center"
          >
            <span>Start Step 1: Request Your Quote</span>
            <ArrowRight className="h-4 w-4 flex-shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
