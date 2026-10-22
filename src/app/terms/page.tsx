import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | Shift4 Partner UK",
  description: "Terms and conditions governing the use of our website, quotation requests, and independent Shift4 partnership services.",
  alternates: {
    canonical: `${siteConfig.domain}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 px-3 py-1 rounded-full">
            LEGAL NOTICE
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-400">Last updated: October 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Scope & Authorised Partner Disclosure</h2>
          <p>
            {siteConfig.disclaimers.partnerNotice}
          </p>
          <p>
            This website is provided to offer information, quote estimates, and onboarding advisory services to UK businesses seeking card payment terminals and EPOS systems.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Free Terminal & Zero Rental Offers</h2>
          <p>
            {siteConfig.disclaimers.termsFootnote}
          </p>
          <p>
            All offers, including &ldquo;Zero monthly terminal rental&rdquo; and &ldquo;Free terminal offers&rdquo;, are conditional upon meeting underwriting requirements and minimum monthly processing thresholds agreed during quotation. Merchants who fall below agreed minimum trading parameters may be subject to standard commercial hardware terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Merchant Underwriting & Agreement</h2>
          <p>
            Submitting an online quote request does not constitute a binding contract of merchant acquiring. Formal processing facilities are subject to identity verification, business risk assessment, and approval by Shift4 and its designated UK banking acquirers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
          <p>
            Shift4® and associated logos are registered trademarks of Shift4 Payments, LLC. All other scheme logos (Visa, Mastercard, Apple Pay, Google Pay) belong to their respective owners and are displayed strictly to indicate payment compatibility.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Governing Law</h2>
          <p>
            These website terms are governed by and construed in accordance with the laws of England and Wales.
          </p>
        </section>
      </div>
    </div>
  );
}
