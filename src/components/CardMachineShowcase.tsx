"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wifi, Battery, Printer, Smartphone, Cpu } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export function CardMachineShowcase() {
  const specs = [
    {
      icon: Smartphone,
      title: '5.5" HD Touch Display',
      desc: "Ultra-bright 1280x720 IPS touchscreen with anti-smudge and anti-glare finish.",
    },
    {
      icon: Printer,
      title: "Built-In High-Speed Printer",
      desc: "70mm/sec thermal receipt printing with instant paper roll drop-in loading.",
    },
    {
      icon: Wifi,
      title: "Dual Wi-Fi & Roaming 4G",
      desc: "Connects automatically to EE, Vodafone, O2, or Three for non-stop connectivity.",
    },
    {
      icon: Battery,
      title: "All-Day Heavy-Duty Battery",
      desc: "5,200mAh lithium-ion power providing 12+ hours of non-stop continuous trading.",
    },
    {
      icon: ShieldCheck,
      title: "PCI-PTS 6.x Certified",
      desc: "Highest global security standard with hardware tamper protection and end-to-end tokenization.",
    },
    {
      icon: Cpu,
      title: "High-Speed Processor",
      desc: "Sub-second transaction approval times ensure zero queue bottlenecking at peak hours.",
    },
  ];

  return (
    <section className="bg-[#060D1A] py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            FLAGSHIP HARDWARE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Meet the <span className="text-brand-accent">Shift4 One</span> Terminal
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A standalone smart payment terminal engineered for durability, speed, and sleek modern aesthetics. No bulky cords, no separate card dongles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Real Product Image Showcase with Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <Image
                src="/images/shift4-one-terminal.jpg"
                alt="Shift4 One smart card machine terminal on counter displaying Payment Approved £28.50"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Floating feature pills - Scaled to stay safely inside the frame on all screens */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-1 sm:py-1.5 shadow-lg flex items-center gap-1.5 sm:gap-2 max-w-[80%]">
                <span className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-white truncate">Live On-Screen Receipt Print</span>
              </div>

              <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 bg-brand-blue/95 backdrop-blur-md border border-brand-accent/30 rounded-lg sm:rounded-xl px-2.5 sm:px-4 py-1 sm:py-2 shadow-lg text-[10px] sm:text-xs font-bold text-white">
                Zero Monthly Rental*
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-3">
              Official Shift4 hardware authorized for UK merchant deployment.
            </p>
          </div>

          {/* Right: Technical Specifications & Conversion CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                Everything your business needs to take payments anywhere.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a reliable counter till or a lightweight portable unit to carry between dining tables and outdoor festival stalls, Shift4 One is ready out of the box.
              </p>
            </div>

            {/* Specs Grid: 1 col on mobile, 2 col on sm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {specs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="h-4 w-4 text-brand-accent flex-shrink-0" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Included in the Box list: 2x2 grid on mobile */}
            <div className="p-4 rounded-xl bg-brand-navySurface/50 border border-blue-500/20 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent">
                What&apos;s Included In Your Package:
              </h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Shift4 One Smart Terminal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Pre-fitted 4G Roaming SIM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Fast USB-C Charging Kit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Thermal Till Paper Rolls</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/get-quote"
                onClick={() => trackCTAClick("Get My Free Quote", "CardMachineShowcase")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/40 hover:from-blue-600 hover:to-brand-blue transition-all w-full sm:w-auto min-h-[44px]"
              >
                <span>Get My Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/card-machines/shift4-one"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors w-full sm:w-auto min-h-[44px]"
              >
                View Full Specifications
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
