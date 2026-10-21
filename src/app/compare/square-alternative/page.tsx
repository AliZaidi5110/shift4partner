"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Calculator, 
  CreditCard, 
  Percent, 
  Zap, 
  CheckCircle2, 
  FileText,
  HelpCircle,
  TrendingDown
} from "lucide-react";
import { MiniQuoteForm } from "@/components/MiniQuoteForm";
import { QuoteSection } from "@/components/QuoteSection";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

export default function SquareAlternativePage() {
  const [turnover, setTurnover] = useState(5000);

  // Fee calculation: Shift4 at 1.25%, Square at 1.75%
  const shift4Fee = turnover * 0.0125;
  const squareFee = turnover * 0.0175;
  const monthlySavings = squareFee - shift4Fee;
  const annualSavings = monthlySavings * 12;

  const comparisonRows = [
    { feature: "Upfront Hardware Cost", shift4: "£0 (FREE terminal offer*)", square: "£19 – £149 upfront", shift4Wins: true },
    { feature: "Monthly Terminal Rental", shift4: "£0 Monthly Rental*", square: "£0 Monthly Rental", shift4Wins: true },
    { feature: "Standard Transaction Fee", shift4: "1.25% blended rate", square: "1.75% flat rate", shift4Wins: true },
    { feature: "Dedicated 24/7 UK Phone Support", shift4: "Yes – 24/7 UK phone support", square: "No – Ticket & email only", shift4Wins: true },
    { feature: "Built-in Roaming 4G Multi-Network SIM", shift4: "Yes – Always connected", square: "No – Relies on paired phone/WiFi", shift4Wins: true },
    { feature: "Built-in Paper Receipt Roll Printer", shift4: "Yes – High-speed thermal", square: "No – Needs separate £200+ hardware", shift4Wins: true },
    { feature: "Custom Rates for £10k+ Turnover", shift4: "Yes – Tailored bespoke rates", square: "Limited – Fixed tier pricing", shift4Wins: true },
    { feature: "Hospitality & Tableside Splitting", shift4: "Yes – Bill split, tips & tabs", square: "Limited without extra software", shift4Wins: true },
    { feature: "Next Business Day Payouts", shift4: "Yes – Direct to any UK bank*", square: "Yes (or 1.75% fee for instant)", shift4Wins: true },
    { feature: "Rate Lock Guarantee", shift4: "18-month contract rate protection", square: "Rolling (subject to price changes)", shift4Wins: true },
  ];

  return (
    <div className="pt-24 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(30,107,255,0.25),rgba(255,255,255,0))] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-brand-blue/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-accent">
              <Sparkles className="h-3.5 w-3.5" />
              SQUARE ALTERNATIVE UK 2026
            </span>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              Save 0.50% on every card payment
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Looking for a <span className="bg-gradient-to-r from-brand-accent via-cyan-400 to-blue-400 bg-clip-text text-transparent">Square Alternative?</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Why pay Square’s 1.75% when you can process payments with <strong className="text-white">Shift4 One at 1.25%</strong>? Plus get a <strong className="text-emerald-400">FREE card machine</strong>, built-in roaming 4G, and dedicated 24/7 UK phone support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              onClick={() => trackCTAClick("Square Alternative Free Quote", "Hero")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_rgba(30,107,255,0.4)] hover:shadow-[0_15px_40px_rgba(30,107,255,0.6)] transition-all"
            >
              <span>Claim Your Free Card Machine</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={`tel:${siteConfig.phoneRaw}`}
              onClick={() => trackPhoneClick("Square Alternative Hero Phone")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 backdrop-blur-md px-6 py-4 text-base font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
            >
              <PhoneCall className="h-4 w-4 text-emerald-400" />
              <span>Call UK Team: {siteConfig.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 mt-5">
            *Terms and conditions apply. Subject to merchant qualification.
          </p>
        </div>
      </section>

      {/* Interactive Savings Calculator vs Square */}
      <section className="bg-[#050C1A] py-16 sm:py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-[#0A1A33] to-[#071326] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                LIVE SAVINGS CALCULATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                See How Much You Save by Switching from Square
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Shift4 One charges 1.25% vs Square's standard 1.75%. Move the slider to see your real annual cash savings.
              </p>
            </div>

            {/* Slider */}
            <div className="max-w-xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-slate-400">Monthly Card Takings:</span>
                <span className="text-2xl font-black text-brand-accent">£{turnover.toLocaleString()} / mo</span>
              </div>

              <input
                type="range"
                min={1000}
                max={25000}
                step={500}
                value={turnover}
                onChange={(e) => setTurnover(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 mt-4">
                {[1000, 2500, 5000, 7500, 10000, 15000, 20000].map((val) => (
                  <button
                    key={val}
                    onClick={() => setTurnover(val)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      turnover === val
                        ? "bg-brand-blue text-white shadow-md"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    £{(val / 1000).toFixed(val % 1000 === 0 ? 0 : 1)}k
                  </button>
                ))}
              </div>
            </div>

            {/* Calculation Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center mb-8">
              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4">
                <div className="text-xs font-semibold text-slate-400">Square Cost (1.75%)</div>
                <div className="text-xl sm:text-2xl font-extrabold text-red-400 mt-1">£{squareFee.toFixed(2)} / mo</div>
                <div className="text-[11px] text-slate-400 mt-0.5">£{(squareFee * 12).toFixed(0)} per year</div>
              </div>

              <div className="bg-slate-900/80 border border-blue-500/30 rounded-2xl p-4">
                <div className="text-xs font-semibold text-brand-accent">Shift4 Cost (1.25%)</div>
                <div className="text-xl sm:text-2xl font-extrabold text-white mt-1">£{shift4Fee.toFixed(2)} / mo</div>
                <div className="text-[11px] text-slate-400 mt-0.5">£{(shift4Fee * 12).toFixed(0)} per year</div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4">
                <div className="text-xs font-semibold text-emerald-400">Your Annual Savings</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">+£{annualSavings.toFixed(0)}</div>
                <div className="text-[11px] text-emerald-300 mt-0.5">+£{monthlySavings.toFixed(2)} extra profit / mo</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/get-quote"
                onClick={() => trackCTAClick("Save With Shift4 Calculator", "Square Alternative")}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Lock In 1.25% Rate with Free Terminal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Detailed Comparison Table */}
      <section className="bg-[#060E1C] py-20 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 px-3 py-1 rounded-full border border-brand-accent/20">
              FEATURE BY FEATURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
              Shift4 One vs Square Card Reader
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Detailed comparison between the commercial-grade Shift4 One smart terminal and Square’s entry-level reader.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0A1A33] border-b border-white/10 text-white font-bold">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Feature / Capability</th>
                  <th className="py-4 px-4 sm:px-6 bg-brand-blue/20 text-brand-accent border-x border-white/10">
                    Shift4 One (Eposify)
                  </th>
                  <th className="py-4 px-4 sm:px-6 text-slate-300">
                    Square
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-slate-900/60 text-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 bg-brand-blue/10 border-x border-white/10 font-bold text-white flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>{row.shift4}</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-400">
                      {row.square}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free Bill Analysis Hook */}
      <section className="bg-gradient-to-r from-blue-950 via-[#0A1A33] to-blue-950 py-16 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 w-12 rounded-2xl bg-brand-blue/30 border border-brand-accent/40 text-brand-accent flex items-center justify-center mx-auto mb-4">
            <FileText className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Already Using Square? Let Us Analyse Your Bill For FREE.
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Send us a photo or PDF of your latest Square statement. Our UK payment specialists will run a line-by-line fee audit showing exactly how many hundreds of pounds you will save with Shift4 One.
          </p>

          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2.5 rounded-xl bg-white hover:bg-slate-100 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-xl transition-all"
          >
            <span>Request Free Statement Analysis</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Fast Quote Capture Section */}
      <QuoteSection />

      {/* Square Alternative FAQ */}
      <section className="bg-[#050C18] py-16 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Frequently Asked Questions: Switching from Square</h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-5">
              <h4 className="font-bold text-white mb-2">Can I keep my existing UK business bank account?</h4>
              <p className="text-slate-300">Yes. Shift4 settles daily card payouts directly into your existing UK business bank account (Barclays, NatWest, Lloyds, HSBC, Monzo, Starling, Revolut, etc.) with no need to change banks.</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-5">
              <h4 className="font-bold text-white mb-2">How hard is it to switch from Square?</h4>
              <p className="text-slate-300">Switching is fast and hassle-free. Your dedicated Eposify onboarding consultant prepares your terminal before dispatch. When it arrives, plug it in, connect to the pre-installed 4G SIM, and start taking payments in minutes.</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-xl p-5">
              <h4 className="font-bold text-white mb-2">Does Shift4 One work if my shop WiFi goes down?</h4>
              <p className="text-slate-300">Yes! Unlike Square readers which stop working or drop connection when WiFi drops, Shift4 One comes with an integrated multi-network 4G SIM that automatically roams across EE, Vodafone, O2, and Three.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
