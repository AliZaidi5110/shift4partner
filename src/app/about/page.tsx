import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Users, Award, Clock, ArrowRight, Building2, MapPin, Phone, Mail } from "lucide-react";
import { TrustBar } from "@/components/TrustBar";
import { QuoteSection } from "@/components/QuoteSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Our Authorised Shift4 Partnership | UK Payment Specialists",
  description: "Learn about our mission as an independent authorised Shift4 partner helping UK small businesses eliminate card machine rental fees and access smart payment tech.",
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            ABOUT OUR MISSION
          </span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Championing Fair, Modern Card Payments for <span className="text-brand-accent">UK Merchants</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are an independent authorised UK partner of Shift4 Payments. Our purpose is simple: help small and independent business owners break free from unfair card machine rental leases and overpriced transaction fees.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Narrative & Partner Transparency Section */}
      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Our Role as an Authorised Shift4 Partner
            </h2>
            <p className="mb-4">
              Shift4 is a global leader in payment processing technology, handling billions of dollars in volume annually for premier sports stadiums, hotel chains, and retail enterprises.
            </p>
            <p className="mb-4">
              As an authorised partner in the UK, we bring this institutional-grade payment infrastructure directly to British high streets, independent restaurateurs, food truck operators, and service professionals. We manage the entire local onboarding journey: conducting transparent fee audits, processing merchant applications, configuring terminals prior to dispatch, and providing dedicated telephone training.
            </p>
            <p>
              Unlike automated overseas call centres, our team is based right here in the UK. When you call us, you speak with a merchant payments specialist who understands the realities of operating a business on British high streets.
            </p>
          </div>

          {/* 3 Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">No Hidden Fees</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe in straightforward, transparent pricing with zero surprise charges or punitive compliance penalties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mb-3">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Zero Rental Advocacy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Small businesses shouldn&apos;t pay £300+ each year simply to rent a card terminal. We prioritize £0 monthly rental packages*.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Personal UK Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every merchant receives a direct point of contact for onboarding, technical troubleshooting, and account advice.
              </p>
            </div>
          </div>

          {/* Business Entity Transparency Box */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Building2 className="h-5 w-5 text-brand-accent" />
              <span>Corporate & Partnership Details</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              This website is owned and operated by <strong>{siteConfig.legalName}</strong>, an independent authorised sales and distribution partner of Shift4 Payments in the United Kingdom. Registered in England & Wales under Company Registration Number {siteConfig.companyNumber}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2 border-t border-white/5">
              <div>
                <span className="text-slate-400 block">Registered Office:</span>
                <span className="font-semibold text-white">{siteConfig.address.formatted}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Telephone Enquiries:</span>
                <span className="font-semibold text-white">{siteConfig.phone}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <QuoteSection />
    </div>
  );
}
