"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  HelpCircle, 
  TrendingUp,
  Percent,
  CreditCard
} from "lucide-react";
import { providersList, ProviderComparison } from "@/data/comparisons";
import { trackCTAClick } from "@/lib/analytics";

interface ComparisonTableProps {
  initialSelected?: string;
}

export function ComparisonTable({ initialSelected = "all" }: ComparisonTableProps) {
  const [selectedProvider, setSelectedProvider] = useState<string>(initialSelected);

  const shift4 = providersList[0];
  const competitors = providersList.slice(1);

  const currentCompetitor = competitors.find((c) => c.slug === selectedProvider) || competitors[0];

  const criteria = [
    { label: "Upfront Cost", key: "upfrontCost" as const },
    { label: "Monthly Terminal Rental", key: "monthlyRental" as const },
    { label: "Transaction Rate", key: "transactionRate" as const },
    { label: "4G Roaming SIM", key: "sim4G" as const },
    { label: "Built-In Printer", key: "printer" as const },
    { label: "Contract Commitment", key: "contractLength" as const },
    { label: "Payout Speed", key: "payoutSpeed" as const },
    { label: "UK Phone Support", key: "support" as const },
  ];

  return (
    <section className="bg-gradient-to-b from-[#08152B] via-[#0A1A33] to-[#060D1A] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            COMPLETE UK BENCHMARK 2026
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Compare <span className="text-brand-accent">8 Card Machine Providers</span> Side-by-Side
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare Shift4 One, Square, Dojo, Zettle, SumUp, Worldpay, Barclaycard & Takepayments. See real rates, rental fees, and hardware specifications with complete transparency.
          </p>

          {/* Provider Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedProvider("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedProvider === "all"
                  ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30 border border-brand-accent/40"
                  : "bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700/80"
              }`}
            >
              All 8 Providers (Full Table)
            </button>

            {competitors.map((comp) => (
              <button
                key={comp.slug}
                type="button"
                onClick={() => setSelectedProvider(comp.slug)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedProvider === comp.slug
                    ? "bg-brand-blue text-white shadow-lg shadow-blue-500/30 border border-brand-accent/40"
                    : "bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                vs {comp.name}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Head-to-Head Spotlight View (When a specific competitor is selected) */}
        {selectedProvider !== "all" && (
          <div className="mb-14 rounded-3xl bg-gradient-to-b from-[#0F244C]/95 via-[#0A1A33]/98 to-[#060D1A] border border-blue-500/40 p-6 sm:p-10 shadow-2xl animate-fade-in">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
                  Head-to-Head Comparison
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Shift4 One vs {currentCompetitor.name}
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                  {currentCompetitor.verdict}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/get-quote"
                  onClick={() => trackCTAClick(`Compare vs ${currentCompetitor.name}`, "ComparisonTable")}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
                >
                  <span>Switch from {currentCompetitor.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Side by side cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Shift4 One Card */}
              <div className="rounded-2xl bg-gradient-to-b from-[#132C5B] to-[#0A1833] border border-brand-accent p-6 shadow-xl relative">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-brand-accent uppercase">Recommended</span>
                    <h4 className="text-xl font-black text-white">Shift4 One</h4>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    £0 Monthly Rental*
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Upfront Hardware:</span>
                    <span className="font-bold text-emerald-400">{shift4.upfrontCost}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Monthly Terminal Hire:</span>
                    <span className="font-bold text-emerald-400">{shift4.monthlyRental}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Transaction Fee:</span>
                    <span className="font-bold text-white">{shift4.transactionRate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Roaming 4G SIM:</span>
                    <span className="font-bold text-white">{shift4.sim4G}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Built-In Printer:</span>
                    <span className="font-bold text-white">{shift4.printer}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Payout Speed:</span>
                    <span className="font-bold text-white">{shift4.payoutSpeed}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Customer Support:</span>
                    <span className="font-bold text-white">{shift4.support}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-brand-blue/15 border border-brand-accent/20 rounded-xl text-xs text-slate-300">
                  <p className="font-bold text-brand-accent mb-0.5">Why Switch to Shift4:</p>
                  <p>{currentCompetitor.shift4Advantage}</p>
                </div>
              </div>

              {/* Competitor Card */}
              <div className="rounded-2xl bg-slate-900/70 border border-slate-700/80 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Alternative</span>
                    <h4 className="text-xl font-bold text-slate-200">{currentCompetitor.name}</h4>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                    {currentCompetitor.monthlyRental}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Upfront Hardware:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.upfrontCost}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Monthly Terminal Hire:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.monthlyRental}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Transaction Fee:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.transactionRate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Roaming 4G SIM:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.sim4G}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Built-In Printer:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.printer}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Payout Speed:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.payoutSpeed}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Customer Support:</span>
                    <span className="font-medium text-slate-300">{currentCompetitor.support}</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-slate-300">
                  <p className="font-bold text-red-400 mb-0.5">Hidden Cost Alert:</p>
                  <p>{currentCompetitor.rateComparisonNote}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Master Comparison Matrix Table (All 8 Providers Side-by-Side) */}
        <div className="relative rounded-3xl border border-slate-700/80 bg-[#071120] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#0A1833]">
                  <th className="py-4 px-4 sm:px-6 font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs sticky left-0 bg-[#0A1833] z-10 min-w-[160px]">
                    Criteria
                  </th>
                  
                  {/* Shift4 One Featured Column */}
                  <th className="py-4 px-4 sm:px-5 font-black text-white bg-brand-blue/20 border-x border-brand-accent/40 min-w-[190px] relative">
                    <div className="inline-flex items-center gap-1 bg-brand-blue text-[10px] font-bold uppercase px-2 py-0.5 rounded-full text-white mb-1">
                      <Sparkles className="h-3 w-3" /> BEST OVERALL
                    </div>
                    <div className="text-base font-black text-white">Shift4 One</div>
                    <div className="text-[11px] font-normal text-brand-accent">£0 Monthly Rental*</div>
                  </th>

                  {/* 7 Competitors */}
                  {competitors.map((comp) => (
                    <th key={comp.slug} className="py-4 px-4 font-bold text-slate-300 min-w-[150px]">
                      <div className="text-sm font-bold text-white">{comp.name}</div>
                      <div className="text-[10px] font-normal text-slate-400 truncate max-w-[140px]">{comp.tagline}</div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {criteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    {/* Criteria label */}
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-300 sticky left-0 bg-[#071120] z-10 border-r border-white/5">
                      {item.label}
                    </td>

                    {/* Shift4 Value */}
                    <td className="py-3.5 px-4 sm:px-5 bg-brand-blue/10 border-x border-brand-accent/30 font-bold text-emerald-300">
                      <div className="flex items-center gap-1.5">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 stroke-[3]" />
                        <span>{shift4[item.key]}</span>
                      </div>
                    </td>

                    {/* Competitor Values */}
                    {competitors.map((comp) => (
                      <td key={comp.slug} className="py-3.5 px-4 text-slate-300">
                        <span>{comp[item.key]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/get-quote"
            onClick={() => trackCTAClick("Comparison Bottom CTA", "Compare Page")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
          >
            <span>Claim Your Free Shift4 One Terminal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-[11px] text-slate-400 mt-3">
            *Terms and conditions apply. Comparison details based on publicly available UK competitor fee schedules published in 2026.
          </p>
        </div>

      </div>
    </section>
  );
}
