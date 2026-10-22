import React from "react";
import type { Metadata } from "next";
import { Phone, Check, Sparkles } from "lucide-react";
import { MiniQuoteForm } from "@/components/MiniQuoteForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Restaurant EPOS Promotion UK | Shift4 Partner",
  description: "Special UK restaurant EPOS offer: handheld table billing, kitchen order routing, digital tipping, and zero terminal rental*.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RestaurantEPOSLandingPage() {
  return (
    <div className="min-h-screen bg-[#060E1C] text-white">
      <header className="py-4 px-4 sm:px-8 border-b border-white/10 bg-[#050C18]/90">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand-blue flex items-center justify-center font-black text-white text-lg">
              S4
            </div>
            <span className="font-extrabold text-white tracking-tight">Shift4 <span className="text-brand-accent font-semibold">Hospitality</span></span>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="min-h-[44px] flex items-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-2 text-xs font-bold text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call: {siteConfig.phone}</span>
          </a>
        </div>
      </header>

      <main className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-blue/20 border border-brand-accent/20 px-3 py-1 rounded-full">
                <Sparkles className="h-3.5 w-3.5" /> Restaurant EPOS Special Offer
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Turn Tables 25% Faster with <br />
                <span className="text-brand-accent">Shift4 Restaurant EPOS</span>
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                Table status tracking, instant split billing, kitchen display sync, and pay-at-table Shift4 One terminals. Zero monthly terminal rental offers available*.
              </p>

              <div className="space-y-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Pay-at-table bill splitting</strong> by seat or amount</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Kitchen Display System (KDS)</strong> sync with zero ticket loss</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span><strong>Integrated digital tipping</strong> boosting server earnings</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <MiniQuoteForm source="landing_page_restaurant_epos" className="p-7" />
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
