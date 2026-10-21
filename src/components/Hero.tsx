"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import { MiniQuoteForm } from "./MiniQuoteForm";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

export function Hero() {
  const benefits = [
    { text: "Free terminal offer*", highlight: true },
    { text: "No monthly terminal rental*", highlight: true },
    { text: "Roaming 4G connectivity*", highlight: false },
    { text: "Personal setup guidance", highlight: false },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] pt-28 pb-16 lg:pt-36 lg:pb-24 text-white">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(30,107,255,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Messaging & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small uppercase blue eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/30 bg-brand-blue/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent shadow-[0_0_15px_rgba(77,163,255,0.25)]">
                <Sparkles className="h-3.5 w-3.5" />
                SMART CARD PAYMENTS FOR UK BUSINESSES
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 text-xs text-slate-300 font-semibold bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Eposify &bull; Authorised Shift4 Partner</span>
              </span>
            </div>

            {/* Huge bold H1 in two clean lines */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.08] mb-6">
              <span className="block text-white whitespace-nowrap">ONE CARD MACHINE</span>
              <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#1E6BFF] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-sm whitespace-nowrap">
                ZERO MONTHLY RENTAL
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Meet Shift4 One. A simple, flexible way to accept card payments whether you&apos;re at the counter, on the road or serving customers at an event.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                href="/get-quote"
                onClick={() => trackCTAClick("Get My Free Quote", "Hero Primary")}
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(30,107,255,0.45)] hover:shadow-[0_15px_40px_rgba(30,107,255,0.6)] hover:from-blue-600 hover:to-brand-blue transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Get My Free Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/card-machines/shift4-one"
                onClick={() => trackCTAClick("Explore Solutions", "Hero Secondary")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 backdrop-blur-md px-6 py-4 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white hover:border-slate-500 transition-all text-center"
              >
                Explore Solutions
              </Link>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick("Hero Direct Call")}
                className="sm:hidden inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-400"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            {/* Four tick-list benefits in a 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl pt-2 border-t border-white/10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 border border-emerald-400/30">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span className={`text-sm ${benefit.highlight ? "text-white font-medium" : "text-slate-300"}`}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 mt-4">
              *Terms and conditions apply. Subject to merchant qualification.
            </p>
          </div>

          {/* Right Column: Official Card Machine Image + Desktop Mini Lead Form */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Seamless Floating Card Machine Showcase */}
            <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center py-2 sm:py-4">
              {/* Soft blue radial depth glow centered behind terminal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle,rgba(30,107,255,0.4)_0%,rgba(56,189,248,0.15)_50%,transparent_70%)] blur-2xl pointer-events-none" />

              {/* Floating Container without harsh rectangular box */}
              <div className="relative w-full flex items-center justify-center">
                {/* Floating Status Badges */}
                <div className="absolute top-1 sm:top-3 left-1 sm:left-3 z-20 bg-[#080F23]/90 backdrop-blur-md border border-white/15 rounded-xl px-3 sm:px-3.5 py-1.5 shadow-2xl flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white whitespace-nowrap">Payment Approved &bull; £38.68</span>
                </div>

                <div className="absolute bottom-1 sm:bottom-3 right-1 sm:right-3 z-20 bg-[#080F23]/90 backdrop-blur-md border border-brand-accent/40 rounded-xl px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-2xl flex items-center gap-1.5">
                  <span className="text-xs font-bold text-brand-accent whitespace-nowrap">£0 Monthly Rental*</span>
                </div>

                {/* Angled Terminal Image with feathered mask & soft drop shadow */}
                <div className="relative w-[84%] sm:w-[88%] mx-auto transition-transform duration-500 hover:scale-[1.02] -rotate-[3deg]">
                  <Image
                    src="/images/shift4-terminal-seamless.png"
                    alt="Shift4 One Smart Card Machine"
                    width={1024}
                    height={651}
                    className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_95%)] pointer-events-none select-none"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Compact inline lead capture card embedded right under the device */}
            <div className="w-full mt-6">
              <MiniQuoteForm source="hero_column_form" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
