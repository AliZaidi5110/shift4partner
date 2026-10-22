import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Wifi, Battery, Printer, Smartphone, Cpu, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { DeviceMockup } from "@/components/DeviceMockup";
import { TrustBar } from "@/components/TrustBar";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";
import { getProductSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Shift4 One Card Machine | Zero Monthly Rental | Official Specs",
  description: "Shift4 One smart payment terminal: £0 monthly rental offer*, multi-network roaming 4G, built-in thermal printer, sub-second tap approvals, and 7-day UK support.",
  alternates: {
    canonical: `${siteConfig.domain}/card-machines/shift4-one`,
  },
};

export default function Shift4OnePage() {
  const productSchema = getProductSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Card Machines", url: "/card-machines/shift4-one" },
    { name: "Shift4 One", url: "/card-machines/shift4-one" },
  ]);

  const fullSpecs = [
    { label: "Display", value: '5.5" HD Touchscreen (1280x720 IPS), anti-smudge Gorilla Glass' },
    { label: "Connectivity", value: "Multi-Network 4G Roaming SIM (EE, O2, Vodafone) + Dual-Band Wi-Fi (2.4/5GHz)" },
    { label: "Thermal Printer", value: "Built-in 70mm/s high-speed auto-tear printer (standard 57x40mm paper rolls)" },
    { label: "Battery Life", value: "5,200mAh Li-ion battery (up to 12+ hours continuous active use)" },
    { label: "Payment Types", value: "Contactless (NFC), Chip & PIN (EMV L1/L2), Magstripe, Apple Pay, Google Pay, Samsung Pay" },
    { label: "Card Schemes", value: "Visa, Mastercard, Maestro, American Express, Diners Club, JCB, UnionPay" },
    { label: "Security & Encryption", value: "PCI-PTS 6.x Certified, SRED, point-to-point tokenization (P2PE ready)" },
    { label: "Processor & Memory", value: "Quad-Core ARM Cortex A53 1.4GHz, 2GB RAM + 16GB Flash" },
    { label: "Operating System", value: "Shift4 Secure PayOS (hardened Android enterprise build)" },
    { label: "Dimensions & Weight", value: "192mm x 82mm x 58mm | 415g (balanced handheld ergonomics)" },
    { label: "Charging", value: "High-speed USB Type-C port & optional counter drop-in docking cradle" },
  ];

  return (
    <div className="pt-24 text-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
                FLAGSHIP SMART TERMINAL
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase">
                ONE CARD MACHINE <br />
                <span className="text-brand-accent">ZERO MONTHLY RENTAL*</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
                The smart payment terminal built to give UK small and medium businesses complete freedom from expensive monthly terminal hire. Roaming 4G, built-in thermal receipts, and lightning-fast sub-second approvals.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 sm:px-7 py-3.5 sm:py-4 min-h-[44px] text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto text-center"
                >
                  <span>Request Free Terminal Quote</span>
                  <ArrowRight className="h-4 w-4 flex-shrink-0" />
                </Link>

                <a
                  href="#specs-table"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-5 sm:px-6 py-3.5 sm:py-4 min-h-[44px] text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors w-full sm:w-auto text-center"
                >
                  View Technical Specs
                </a>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Free terminal offer available*</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Next-day UK express dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>Multi-network 4G SIM pre-installed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>7-Day UK merchant phone support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full overflow-hidden">
              <DeviceMockup />
            </div>

          </div>
        </div>
      </section>

      <TrustBar />

      {/* Real Hardware Photography Section */}
      <section className="bg-[#060D1A] py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image
                src="/images/shift4-one-terminal.jpg"
                alt="Shift4 One Terminal in restaurant with Payment Approved display"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 px-3 py-1 rounded-full border border-brand-accent/20">
                BUILT FOR REAL TRADING
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                High-volume reliability for counters, tables, and events.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                The Shift4 One eliminates the fragile dependency on Bluetooth smartphones. It operates as a true standalone, heavy-duty commercial payment workhorse with an integrated paper receipt roll, high-capacity battery, and direct cloud sync.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Paper Receipts:</strong> Print itemised sales slips or card receipts without purchasing bulky external printers.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Automatic Network Switching:</strong> If your venue broadband suffers an outage, the terminal switches to 4G within milliseconds.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Tipping Prompts:</strong> Boost staff earnings with configurable gratuity percentage buttons (10%, 12.5%, 15%, or custom).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section id="specs-table" className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-3">
              Full Technical Specifications
            </h2>
            <p className="text-sm text-slate-300">
              Commercial-grade hardware built to exceed demanding UK retail and hospitality standards.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 overflow-hidden divide-y divide-white/5 shadow-xl">
            {fullSpecs.map((spec, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm">
                <span className="font-bold text-white mb-1 sm:mb-0">{spec.label}</span>
                <span className="sm:col-span-2 text-slate-300">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection />

      {/* FAQs */}
      <FAQSection limit={8} />
    </div>
  );
}
