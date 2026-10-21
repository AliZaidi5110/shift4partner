import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, PhoneCall, ShieldCheck, Zap, UtensilsCrossed, Monitor } from "lucide-react";
import { IntegrationsShowcase } from "@/components/IntegrationsShowcase";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shift4 Integrations UK | Deliveroo, Just Eat, Uber Eats & Accounting POS",
  description: "Connect your Shift4 POS and card machines directly to Deliveroo, Just Eat, Uber Eats, Stuart Delivery, and Xero. Eliminate multi-tablet clutter and speed up kitchen orders.",
  alternates: {
    canonical: `${siteConfig.domain}/integrations`,
  },
  openGraph: {
    title: "Shift4 Integrations UK | Deliveroo, Just Eat, Uber Eats & EPOS",
    description: "Manage online deliveries and in-store card payments from one unified Shift4 screen. Direct KDS kitchen printing, automatic menu sync, and zero extra Shift4 integration fees.",
    url: `${siteConfig.domain}/integrations`,
  },
};

export default function IntegrationsPage() {
  return (
    <div className="pt-24 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(0,205,188,0.2),rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              SEAMLESS PLATFORM ECOSYSTEM
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Zero Tablet Clutter</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Connect Shift4 to <span className="bg-gradient-to-r from-cyan-400 via-brand-accent to-blue-500 bg-clip-text text-transparent">Every Food Delivery</span> & Accounting Platform
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop juggling 4 noisy tablets on your counter. Integrate Deliveroo, Just Eat, Uber Eats, and Stuart directly into your Shift4 POS and Kitchen Display System for instant ticket printing and real-time menu synchronization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(30,107,255,0.4)] hover:shadow-[0_15px_40px_rgba(30,107,255,0.6)] transition-all"
            >
              <span>Connect Your Platforms</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 backdrop-blur-md px-6 py-4 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>Speak to an Integration Specialist</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 mt-5">
            *Terms and conditions apply. Third-party partner agreements apply separately.
          </p>
        </div>
      </section>

      {/* Main Interactive Showcase with All Insights */}
      <IntegrationsShowcase />

      {/* Operational Deep-Dive: Why Integrated Deliveries Save UK Hospitality Venues Thousands */}
      <section className="bg-[#050C18] py-20 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why Multi-Tablet Juggling Costs You Money
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              When kitchen staff must manually re-key Deliveroo and Just Eat tickets into an in-store till, errors surge and orders get delayed. Here is how Shift4 solves it:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-4">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">The Multi-Tablet Nightmare</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Staff missing orders due to tablet volume being muted, manual re-typing leading to incorrect allergy or modifier instructions, and messy counters crowded with charging cables.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct POS & KDS Ingestion</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Incoming online tickets bypass the counter and print directly to the chef's kitchen printer or Kitchen Display System. Preparation begins immediately with zero delay.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Live Real-Time Stock 86'ing</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ran out of salmon or oat milk? Mark it out of stock on your Shift4 till, and it instantly disappears from Deliveroo, Uber Eats, and Just Eat simultaneously. No angry customer cancellations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* FAQs */}
      <FAQSection limit={6} />
    </div>
  );
}
