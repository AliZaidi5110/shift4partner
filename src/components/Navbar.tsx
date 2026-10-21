"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Menu, X, ChevronDown, ShieldCheck, CreditCard, LayoutGrid, Calculator, Sparkles, Utensils } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar - Fixed 36px, same sans font, no monospace, no top clip */}
      <div className="bg-[#050B14] border-b border-white/5 h-[36px] leading-[36px] text-[13px] text-slate-300 overflow-hidden font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
            <span className="font-medium text-slate-300 truncate">Eposify &bull; Authorised Shift4 Partner (UK)</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <Link href="/online-ordering" className="hidden md:inline text-brand-accent hover:text-white transition-colors">
              0% Commission Online Ordering &rarr;
            </Link>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              onClick={() => trackPhoneClick("Top Micro-Bar")}
              className="flex items-center gap-1.5 font-semibold text-slate-200 hover:text-brand-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-brand-accent flex-shrink-0" />
              <span>{siteConfig.phone}</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 text-[12px] font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              24/7 UK Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Sticky, 72px height, flex container, glass pill logo */}
      <nav className="bg-[#080F23]/85 backdrop-blur-[12px] border-b border-white/[0.08] transition-all">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px] gap-3 xl:gap-6">
          
          {/* 1. Left Group: Subtle Glass Pill Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-3 xl:mr-6 group">
            <div className="flex items-center bg-[rgba(255,255,255,0.96)] rounded-[14px] px-3.5 xl:px-4 py-2 h-[44px] shadow-sm border border-white/40 group-hover:shadow-md transition-all">
              <Image
                src="/images/eposify-logo.png"
                alt="Eposify - EPOS Made Easy. Payments Made Simple."
                width={115}
                height={30}
                className="h-[22px] sm:h-[24px] w-auto object-contain"
                priority
              />

              {/* Subtle Vertical Divider */}
              <div className="h-[20px] w-px bg-slate-300 mx-2 xl:mx-2.5" />

              {/* Tightly cropped Shift4 Partner Logo */}
              <Image
                src="/images/shift4-partner-logo.png"
                alt="Authorised Shift4 Partner"
                width={65}
                height={30}
                className="h-[18px] sm:h-[20px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* 2. Centre Group: Nav Links */}
          <div className="hidden nav:flex items-center gap-2.5 xl:gap-4 flex-1 justify-center whitespace-nowrap">
            <Link
              href="/card-machines/shift4-one"
              className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              <CreditCard className="h-4 w-4 text-brand-accent flex-shrink-0" />
              <span>Shift4 One</span>
            </Link>

            <Link
              href="/pos-systems"
              className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              <LayoutGrid className="h-4 w-4 text-brand-accent flex-shrink-0" />
              <span>EPOS Systems</span>
            </Link>

            <Link
              href="/online-ordering"
              className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              <Utensils className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Online Ordering</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-1 py-0.2 rounded font-bold">0%</span>
            </Link>

            <Link
              href="/integrations"
              className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              <Sparkles className="h-4 w-4 text-brand-accent flex-shrink-0" />
              <span>Integrations</span>
            </Link>

            <Link
              href="/pricing"
              className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              <Calculator className="h-4 w-4 text-brand-accent flex-shrink-0" />
              <span>Pricing</span>
            </Link>

            {/* Compare Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen("compare")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(dropdownOpen === "compare" ? null : "compare")}
                className="text-[13.5px] xl:text-[14.5px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1 cursor-pointer py-1"
              >
                <span>Compare</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen === "compare" ? "rotate-180 text-brand-accent" : "text-slate-400"}`} />
              </button>

              {/* Dropdown Menu Panel */}
              {dropdownOpen === "compare" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl bg-[#09142A]/98 border border-white/15 p-3 shadow-2xl backdrop-blur-xl animate-fade-in z-50">
                  <div className="px-3 py-2 border-b border-white/10 mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-brand-accent">
                      UK Card Machine Comparisons 2026
                    </p>
                    <p className="text-[10px] text-slate-400">8 Leading Providers Evaluated</p>
                  </div>

                  <Link
                    href="/compare"
                    onClick={() => setDropdownOpen(null)}
                    className="flex items-center justify-between rounded-xl p-2.5 hover:bg-brand-blue/20 transition-colors group mb-1.5 bg-brand-blue/10 border border-brand-accent/20"
                  >
                    <div>
                      <span className="text-xs font-bold text-white group-hover:text-brand-accent transition-colors flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-brand-accent" />
                        Compare All 8 Providers
                      </span>
                      <p className="text-[10px] text-slate-400">Complete side-by-side fee &amp; rate matrix</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-accent" />
                  </Link>

                  <div className="grid grid-cols-2 gap-1 pt-1">
                    <Link
                      href="/compare/square-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs Square</span>
                      <span className="text-[10px] text-emerald-400 font-bold">1.25%</span>
                    </Link>
                    <Link
                      href="/compare/dojo-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs Dojo</span>
                      <span className="text-[10px] text-emerald-400 font-bold">£0 Rent</span>
                    </Link>
                    <Link
                      href="/compare/zettle-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs Zettle</span>
                      <span className="text-[10px] text-emerald-400 font-bold">+Printer</span>
                    </Link>
                    <Link
                      href="/compare/sumup-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs SumUp</span>
                      <span className="text-[10px] text-emerald-400 font-bold">4G SIM</span>
                    </Link>
                    <Link
                      href="/compare/worldpay-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs Worldpay</span>
                      <span className="text-[10px] text-emerald-400 font-bold">No Lease</span>
                    </Link>
                    <Link
                      href="/compare/barclaycard-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                    >
                      <span>vs Barclaycard</span>
                      <span className="text-[10px] text-emerald-400 font-bold">0 Extra</span>
                    </Link>
                    <Link
                      href="/compare/takepayments-alternative"
                      onClick={() => setDropdownOpen(null)}
                      className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-between col-span-2"
                    >
                      <span>vs Takepayments</span>
                      <span className="text-[10px] text-emerald-400 font-bold">No £30/mo Rental</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Single-line vs Square pill */}
            <Link
              href="/compare/square-alternative"
              className="inline-flex items-center text-[12.5px] xl:text-[13.5px] font-[500] text-brand-accent bg-brand-blue/20 border border-brand-accent/30 rounded-full px-2.5 xl:px-3 py-1 hover:bg-brand-blue/30 transition-colors whitespace-nowrap"
            >
              vs Square
            </Link>

            <Link
              href="/faq"
              className="text-[14px] xl:text-[15px] font-[500] leading-normal text-slate-200 hover:text-brand-accent transition-colors whitespace-nowrap"
            >
              FAQ
            </Link>
          </div>

          {/* 3. Right Group: Phone + CTA */}
          <div className="hidden nav:flex items-center gap-2.5 xl:gap-3 flex-shrink-0 whitespace-nowrap">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              onClick={() => trackPhoneClick("Navbar Direct Call")}
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 xl:px-4 py-2.5 text-[13px] xl:text-[14px] font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
            >
              <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              href="/get-quote"
              onClick={() => trackCTAClick("Get Free Quote", "Navbar")}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-4 xl:px-5 py-2.5 text-[13px] xl:text-[14px] font-bold text-white shadow-[0_4px_15px_rgba(30,107,255,0.4)] hover:shadow-[0_6px_25px_rgba(30,107,255,0.6)] hover:from-blue-600 hover:to-brand-blue transition-all whitespace-nowrap"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </Link>
          </div>

          {/* Mobile Right Controls (< 1100px) */}
          <div className="flex nav:hidden items-center gap-2">
            <Link
              href="/get-quote"
              onClick={() => trackCTAClick("Get Free Quote Mobile", "Navbar")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-blue to-blue-600 px-3.5 py-2 text-xs font-bold text-white shadow-md whitespace-nowrap"
            >
              <span>Get Quote</span>
              <ArrowRight className="h-3 w-3" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-slate-300 hover:bg-white/10 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Drawer (< 1100px) */}
        {mobileMenuOpen && (
          <div className="nav:hidden bg-[#080F23] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <div className="flex items-center bg-[rgba(255,255,255,0.96)] rounded-[12px] px-3 py-1.5 shadow-sm border border-white/30">
                <Image
                  src="/images/eposify-logo.png"
                  alt="Eposify"
                  width={110}
                  height={28}
                  className="h-[22px] w-auto object-contain"
                />
                <div className="h-[18px] w-px bg-slate-300 mx-2" />
                <Image
                  src="/images/shift4-partner-logo.png"
                  alt="Shift4 Partner"
                  width={60}
                  height={26}
                  className="h-[18px] w-auto object-contain"
                />
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                Authorised UK Partner
              </span>
            </div>

            <Link
              href="/card-machines/shift4-one"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10"
            >
              Shift4 One Card Machine
            </Link>

            <Link
              href="/pos-systems"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10"
            >
              EPOS Systems (Hospitality, Retail, Mobile)
            </Link>

            <Link
              href="/online-ordering"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-emerald-400 hover:bg-white/10 flex items-center justify-between"
            >
              <span>Commission-Free Online Ordering</span>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">0% Fee</span>
            </Link>

            <Link
              href="/integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-brand-accent hover:bg-white/10 flex items-center justify-between"
            >
              <span>Platform Integrations (Deliveroo, Just Eat)</span>
              <span className="text-xs bg-brand-blue/30 border border-brand-accent/30 text-brand-accent px-2 py-0.5 rounded-full">New</span>
            </Link>

            <div className="pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent px-3 block mb-1">
                Card Machine Comparisons 2026
              </span>
              <div className="grid grid-cols-2 gap-1 px-1">
                <Link
                  href="/compare"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs font-bold text-white bg-white/5 hover:bg-white/10 col-span-2 flex items-center justify-between"
                >
                  <span>Compare All 8 Providers</span>
                  <ArrowRight className="h-3.5 w-3.5 text-brand-accent" />
                </Link>
                <Link
                  href="/compare/square-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs Square</span>
                  <span className="text-[10px] text-emerald-400 font-bold">1.25%</span>
                </Link>
                <Link
                  href="/compare/dojo-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs Dojo</span>
                  <span className="text-[10px] text-emerald-400 font-bold">£0 Rent</span>
                </Link>
                <Link
                  href="/compare/zettle-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs Zettle</span>
                  <span className="text-[10px] text-emerald-400 font-bold">+Printer</span>
                </Link>
                <Link
                  href="/compare/sumup-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs SumUp</span>
                  <span className="text-[10px] text-emerald-400 font-bold">4G SIM</span>
                </Link>
                <Link
                  href="/compare/worldpay-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs Worldpay</span>
                  <span className="text-[10px] text-emerald-400 font-bold">No Lease</span>
                </Link>
                <Link
                  href="/compare/barclaycard-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>vs Barclaycard</span>
                  <span className="text-[10px] text-emerald-400 font-bold">0 Extra</span>
                </Link>
                <Link
                  href="/compare/takepayments-alternative"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-between col-span-2"
                >
                  <span>vs Takepayments</span>
                  <span className="text-[10px] text-emerald-400 font-bold">No £30/mo Rental</span>
                </Link>
              </div>
            </div>

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/10"
            >
              Frequently Asked Questions
            </Link>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
