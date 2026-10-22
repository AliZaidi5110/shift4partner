import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | UK GDPR & Data Protection | Shift4 Partner",
  description: "Our privacy policy explains how we collect, store, and process personal and merchant information in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: {
    canonical: `${siteConfig.domain}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 px-3 py-1 rounded-full">
            UK GDPR COMPLIANCE
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">Last updated: October 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Introduction</h2>
          <p>
            This Privacy Policy explains how <strong>{siteConfig.legalName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) collects, uses, protects, and handles personal and commercial data when you visit our website (<strong>{siteConfig.domain}</strong>), request a card processing quotation, or interact with our merchant consulting services.
          </p>
          <p>
            We are committed to respecting your privacy and adhering to the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. What Information We Collect</h2>
          <p>When you complete an online quote request, telephone our office, or submit an enquiry, we may collect:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Contact details: Name, telephone number, business email address, trading address</li>
            <li>Commercial details: Business name, business category (e.g. restaurant, retail, café), estimated monthly card turnover, current payment provider</li>
            <li>Technical data: IP address, device type, browser information, UTM referral parameters, and cookie analytics (subject to your consent)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. How We Use Your Data</h2>
          <p>We process your data for the following lawful business purposes:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>To prepare and provide your requested card machine rate quotation and savings analysis</li>
            <li>To facilitate merchant underwriting and account onboarding with Shift4 Payments and its regulated acquiring banking partners</li>
            <li>To arrange hardware delivery and provide customer technical onboarding</li>
            <li>To comply with legal obligations including anti-money laundering (AML) and know-your-customer (KYC) requirements</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Data Sharing & Third Parties</h2>
          <p>
            We do not sell, rent, or trade your personal information to third-party marketing companies. Your data is only shared with authorized partners essential to delivering your payment processing facility:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Shift4 Payments, LLC and designated UK merchant acquiring bank partners for underwriting and processing services</li>
            <li>Secure logistics couriers (e.g. DPD / Royal Mail) for terminal dispatch</li>
            <li>Regulated regulatory or law enforcement bodies where mandated by UK law</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Your Data Protection Rights</h2>
          <p>Under UK GDPR, you have the right to request access to your data, request rectification of inaccurate records, request erasure (&ldquo;right to be forgotten&rdquo;), or restrict processing. To exercise these rights, please contact our Data Protection Officer at: <strong>{siteConfig.email}</strong>.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Contact Information</h2>
          <p>
            <strong>{siteConfig.legalName}</strong><br />
            {siteConfig.address.formatted}<br />
            Email: {siteConfig.email}<br />
            Telephone: {siteConfig.phone}
          </p>
        </section>
      </div>
    </div>
  );
}
