"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ukCities } from "@/data/cities";
import { industries } from "@/data/industries";
import { trackPhoneClick } from "@/lib/analytics";

export function Footer() {
  return (
    <footer className="bg-[#03070F] text-slate-400 border-t border-white/5 pt-16 pb-28 sm:pb-16 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Contact Info (2 spans) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group max-w-full">
              {/* Unified Co-Branded Capsule */}
              <div className="bg-white rounded-2xl px-3 py-2 sm:px-5 sm:py-2.5 shadow-md inline-flex items-center border border-white/30 group-hover:border-white/50 transition-all max-w-full">
                <Image
                  src="/images/eposify-logo.png"
                  alt="Eposify"
                  width={160}
                  height={45}
                  className="h-7 xs:h-8 sm:h-10 w-auto object-contain flex-shrink-0"
                />
                <div className="h-6 sm:h-7 w-px bg-slate-300 mx-2 sm:mx-3 flex-shrink-0" />
                <Image
                  src="/images/shift4-partner-logo.png"
                  alt="Shift4 Partner"
                  width={90}
                  height={45}
                  className="h-6 xs:h-7 sm:h-9 w-auto object-contain flex-shrink-0"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Eposify is an independent authorised Shift4 sales partner delivering smart payment terminals, low processing rates, and dedicated UK onboarding support.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick("Footer Call")}
                className="flex items-center gap-2.5 hover:text-brand-accent transition-colors min-h-[44px] flex-wrap"
              >
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-white">{siteConfig.phone}</span>
                <span className="text-emerald-400 text-[11px] font-medium whitespace-nowrap">(24/7 Support &amp; WhatsApp)</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 hover:text-brand-accent transition-colors min-h-[44px] break-all"
              >
                <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </a>

              <div className="flex items-start gap-2.5 py-1">
                <MapPin className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="break-words">{siteConfig.address.formatted}</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] text-slate-400">
                Company Registration No: {siteConfig.companyNumber} (England & Wales)
              </p>
            </div>
          </div>

          {/* Column 2: Card Machines & Pricing */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Card Machines & Comparison
            </h4>
            <ul className="space-y-1">
              <li>
                <Link href="/card-machines/shift4-one" className="hover:text-brand-accent transition-colors font-medium text-white inline-flex items-center min-h-[36px]">
                  Shift4 One Flagship Terminal
                </Link>
              </li>
              <li>
                <Link href="/compare/square-alternative" className="hover:text-brand-accent transition-colors text-emerald-400 font-medium inline-flex items-center gap-1.5 min-h-[36px]">
                  <span>Square Alternative (1.25%)</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">SAVE</span>
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-brand-accent transition-colors text-brand-accent font-medium inline-flex items-center min-h-[36px]">
                  Delivery & POS Integrations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Transparent Pricing & Rates
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Compare Card Machines
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Request Free Quote
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  UK Merchant FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  About Shift4 Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: EPOS Systems & Sectors */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              EPOS Systems
            </h4>
            <ul className="space-y-1">
              <li>
                <Link href="/pos-systems/restaurant-pos" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Restaurant & Bar EPOS
                </Link>
              </li>
              <li>
                <Link href="/online-ordering" className="hover:text-brand-accent transition-colors text-emerald-400 font-semibold inline-flex items-center gap-1.5 min-h-[36px]">
                  <span>0% Online Ordering</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1 py-0.2 rounded font-bold">0% FEE</span>
                </Link>
              </li>
              <li>
                <Link href="/pos-systems/retail-pos" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Retail & Inventory POS
                </Link>
              </li>
              <li>
                <Link href="/pos-systems/mobile-pos" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Mobile & Event Trader EPOS
                </Link>
              </li>
              <li>
                <Link href="/industries/cafes" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Cafés & Coffee Shops
                </Link>
              </li>
              <li>
                <Link href="/industries/takeaways" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Takeaways & Fast Food
                </Link>
              </li>
              <li>
                <Link href="/industries/salons" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Salons & Barbers
                </Link>
              </li>
              <li>
                <Link href="/industries/market-traders" className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[36px]">
                  Market & Pop-Up Traders
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Key UK Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              UK Regional Coverage
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
              {ukCities.slice(0, 10).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="hover:text-brand-accent transition-colors inline-flex items-center min-h-[32px] truncate max-w-full"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-400 pt-1">
              Next-day courier dispatch across the entire UK mainland.
            </p>
          </div>

        </div>

        {/* Regulatory & Partner Compliance Disclaimers */}
        <div className="py-8 border-b border-white/5 space-y-3 text-[11px] text-slate-400 leading-relaxed break-words">
          <p>
            <strong className="text-slate-300">Authorised Partner Notice: </strong>
            {siteConfig.disclaimers.partnerNotice}
          </p>

          <p>
            <strong className="text-slate-300">*Terms and Conditions Footnote: </strong>
            {siteConfig.disclaimers.termsFootnote}
          </p>

          <p>
            <strong className="text-slate-300">Regulatory Status: </strong>
            {siteConfig.disclaimers.fcaNotice}
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-center sm:text-left">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Shift4® is a registered trademark of Shift4 Payments, LLC.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
              Terms & Conditions
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
              Cookie Policy
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white transition-colors min-h-[44px] inline-flex items-center">
              Contact & Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
