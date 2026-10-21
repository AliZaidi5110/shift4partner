import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { MiniQuoteForm } from "@/components/MiniQuoteForm";
import { DeviceMockup } from "@/components/DeviceMockup";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Zero Monthly Rental Card Machine Offer | Shift4 One UK",
  description: "Special promotion: £0 monthly terminal hire*, free terminal offer*, and next-day UK courier dispatch. Request your quote today.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ZeroRentalLandingPage() {
  return (
    <div className="min-h-screen bg-[#060E1C] text-white">
      {/* Minimalist Landing Page Header (No general links) */}
      <header className="py-4 px-4 sm:px-8 border-b border-white/10 bg-[#050C18]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand-blue flex items-center justify-center font-black text-white text-lg">
              S4
            </div>
            <span className="font-extrabold text-white tracking-tight">Shift4 <span className="text-brand-accent font-semibold">Partner</span></span>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>
      </header>

      {/* Hero & Dedicated Conversion Form */}
      <main className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-blue/20 border border-brand-accent/20 px-3 py-1 rounded-full">
                <Sparkles className="h-3.5 w-3.5" /> UK Merchant Exclusive Promotion
              </span>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                Stop Paying Monthly Card Machine Rental. <br />
                <span className="text-brand-accent">Get Shift4 One with £0 Monthly Hire*.</span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Switch to Britain&apos;s fastest growing card payment solution. No monthly rental fees*, multi-network roaming 4G, built-in thermal receipts, and next-day courier delivery.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Save £300–£500/year</strong> on terminal hire charges</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Roaming 4G SIM included</strong> with zero extra monthly SIM bills*</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Next business day settlement</strong> to your bank account</span>
                </div>
              </div>

              <div className="pt-2">
                <DeviceMockup />
              </div>
            </div>

            {/* Focused Conversion Form */}
            <div className="lg:col-span-5">
              <MiniQuoteForm source="landing_page_zero_rental" className="p-7" />
              <p className="text-[11px] text-slate-400 text-center mt-4">
                {siteConfig.disclaimers.termsFootnote}
              </p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
