"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, TrendingUp, Sparkles, AlertCircle } from "lucide-react";
import { formatGBP } from "@/lib/utils";
import { trackCTAClick } from "@/lib/analytics";

export function SavingsCalculator() {
  const [turnover, setTurnover] = useState<number>(15000);
  const [providerType, setProviderType] = useState<"traditional" | "flatRate">("traditional");

  // Calculations
  // Traditional bank: ~1.65% transaction fees + £35 monthly terminal hire + £10 compliance/misc = (turnover * 0.0165) + 45
  // Flat-rate reader (SumUp/Zettle): 1.75% flat rate = turnover * 0.0175
  // Shift4 One: Zero terminal rental (£0) + competitive processing (~0.85%) = turnover * 0.0085

  const currentCost =
    providerType === "traditional"
      ? turnover * 0.0165 + 45
      : turnover * 0.0175;

  const shift4Cost = turnover * 0.0085;
  const monthlySavings = Math.max(0, currentCost - shift4Cost);
  const annualSavings = monthlySavings * 12;

  return (
    <section className="bg-[#050C18] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            INTERACTIVE CALCULATOR
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            See How Much You Could Save with <span className="text-brand-accent">Shift4 One</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300">
            Eliminating monthly terminal rental and switching to competitive processing rates could save your business hundreds or thousands of pounds every year.
          </p>
        </div>

        {/* Calculator Widget Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#0F2247]/90 to-[#0A1833]/95 border border-blue-500/30 p-5 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Turnover Slider */}
              <div>
                <div className="flex flex-wrap justify-between items-center gap-1 mb-2">
                  <label htmlFor="turnover-slider" className="text-sm font-semibold text-slate-200">
                    Monthly Card Turnover
                  </label>
                  <span className="text-base sm:text-lg font-black text-brand-accent">
                    {formatGBP(turnover).replace(".00", "")} / month
                  </span>
                </div>
                <input
                  id="turnover-slider"
                  type="range"
                  min="2000"
                  max="80000"
                  step="1000"
                  value={turnover}
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
                  <span>£2k/mo</span>
                  <span className="hidden xs:inline">£25k/mo</span>
                  <span className="hidden sm:inline">£50k/mo</span>
                  <span>£80k/mo</span>
                </div>
              </div>

              {/* Current Provider Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Who is your current card machine setup?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setProviderType("traditional")}
                    className={`p-3.5 rounded-xl border text-left text-xs min-h-[44px] transition-all ${
                      providerType === "traditional"
                        ? "border-brand-accent bg-brand-blue/20 text-white font-bold"
                        : "border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white"
                    }`}
                  >
                    <p className="font-semibold text-sm">Traditional Bank Terminal</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Paying £25–£45/mo terminal hire</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProviderType("flatRate")}
                    className={`p-3.5 rounded-xl border text-left text-xs min-h-[44px] transition-all ${
                      providerType === "flatRate"
                        ? "border-brand-accent bg-brand-blue/20 text-white font-bold"
                        : "border-slate-700 bg-slate-900/60 text-slate-400 hover:text-white"
                    }`}
                  >
                    <p className="font-semibold text-sm">Flat-Rate Card Reader</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Paying 1.69%–1.75% flat rate</p>
                  </button>
                </div>
              </div>

              {/* Estimate disclaimer */}
              <div className="flex items-start gap-2 text-[11px] text-slate-400 pt-2 border-t border-white/5">
                <AlertCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  *Estimated calculation for illustrative purposes based on typical market benchmark rates. Exact fees and savings depend on card mix (debit/credit/commercial) and underwriting terms.
                </span>
              </div>
            </div>

            {/* Results Callout Column */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#132C5B] to-[#0A1833] border border-brand-accent/40 p-5 sm:p-7 shadow-xl text-center">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full mb-3">
                <Sparkles className="h-3.5 w-3.5 flex-shrink-0" />
                <span>Estimated Saving</span>
              </span>

              <p className="text-xs text-slate-300">Potential Annual Saving</p>
              <div className="text-3xl xs:text-4xl sm:text-5xl font-black text-white tracking-tight my-2">
                {formatGBP(annualSavings).replace(".00", "")}
                <span className="text-xs font-normal text-slate-400 block mt-1">
                  or ~{formatGBP(monthlySavings).replace(".00", "")} / month
                </span>
              </div>

              <div className="my-5 p-3.5 rounded-xl bg-slate-900/80 border border-white/10 space-y-1.5 text-xs text-left">
                <div className="flex justify-between text-slate-400">
                  <span>Current est. cost:</span>
                  <span className="font-medium text-slate-200">{formatGBP(currentCost)} / mo</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shift4 One est. cost:</span>
                  <span className="font-bold text-emerald-400">{formatGBP(shift4Cost)} / mo</span>
                </div>
                <div className="flex justify-between text-slate-400 border-t border-white/10 pt-1">
                  <span>Monthly terminal rental:</span>
                  <span className="font-bold text-emerald-400">£0.00*</span>
                </div>
              </div>

              <Link
                href="/get-quote"
                onClick={() => trackCTAClick("Lock In My Saving", "Savings Calculator")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 py-3.5 px-4 min-h-[44px] text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all cursor-pointer text-center"
              >
                <span>Lock In My Saving →</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
