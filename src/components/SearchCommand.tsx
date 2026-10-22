"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, ArrowRight, X, CreditCard, LayoutGrid, Calculator, MapPin, Percent } from "lucide-react";

export function SearchCommand() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const quickRoutes = [
    { label: "Zero Monthly Rental Card Machine", path: "/card-machines/shift4-one", type: "Product", icon: CreditCard },
    { label: "Commission-Free Online Ordering (0% Fee)", path: "/online-ordering", type: "Product", icon: Sparkles },
    { label: "Square Alternative (1.25% vs 1.75%)", path: "/compare/square-alternative", type: "Compare", icon: Percent },
    { label: "Deliveroo, Just Eat & Uber Eats Integrations", path: "/integrations", type: "Integrations", icon: Sparkles },
    { label: "Restaurant & Hospitality EPOS", path: "/pos-systems/restaurant-pos", type: "EPOS", icon: LayoutGrid },
    { label: "Retail POS & Stock Control", path: "/pos-systems/retail-pos", type: "EPOS", icon: LayoutGrid },
    { label: "Card Processing Fees & Rates", path: "/pricing", type: "Pricing", icon: Calculator },
    { label: "Compare Shift4 vs Worldpay / SumUp", path: "/compare", type: "Guide", icon: CreditCard },
    { label: "London Card Machines & Setup", path: "/locations/london", type: "Location", icon: MapPin },
    { label: "Manchester Card Machines", path: "/locations/manchester", type: "Location", icon: MapPin },
  ];

  const filtered = query.trim()
    ? quickRoutes.filter((r) => r.label.toLowerCase().includes(query.toLowerCase()) || r.type.toLowerCase().includes(query.toLowerCase()))
    : quickRoutes.slice(0, 5);

  const handleSelect = (path: string) => {
    setOpen(false);
    setQuery("");
    router.push(path);
  };

  return (
    <>
      {/* Floating AI-style search bar pill at bottom of hero / page */}
      <div className="relative mx-auto max-w-xl px-3 sm:px-4 -mt-6 sm:-mt-8 mb-12 z-20">
        <div
          onClick={() => setOpen(true)}
          className="group cursor-pointer rounded-2xl bg-[#0F2247]/95 border border-blue-500/40 p-2 sm:p-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl flex items-center justify-between gap-2 sm:gap-3 hover:border-brand-accent transition-all min-h-[44px]"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 pl-2 sm:pl-3 text-slate-300 min-w-0">
            <Search className="h-4 w-4 text-brand-accent group-hover:scale-110 transition-transform flex-shrink-0" />
            <span className="text-xs sm:text-sm text-slate-300 truncate">
              Explore solutions... <span className="hidden xs:inline text-brand-accent font-medium">e.g. &apos;EPOS for restaurants&apos;</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-accent bg-brand-blue/20 border border-brand-accent/20 px-2 py-0.5 rounded-md">
              <Sparkles className="h-3 w-3" /> Quick Search
            </span>
            <div className="h-8 w-8 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-md">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Command Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#091529] border border-blue-500/50 shadow-2xl overflow-hidden text-white">
            
            {/* Search Input */}
            <div className="flex items-center gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-white/10 min-h-[48px]">
              <Search className="h-5 w-5 text-brand-accent flex-shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a product, feature, sector or city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Close search modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(item.path)}
                    className="w-full text-left flex items-center justify-between p-3 rounded-xl hover:bg-brand-blue/20 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center text-brand-accent group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-accent transition-colors">
                          {item.label}
                        </p>
                        <span className="text-[10px] text-slate-400">{item.path}</span>
                      </div>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                      {item.type}
                    </span>
                  </button>
                );
              })}

              {filtered.length === 0 && (
                <div className="p-6 text-center text-xs text-slate-400">
                  No direct matching pages found. Try searching for &ldquo;terminal&rdquo;, &ldquo;EPOS&rdquo;, or &ldquo;pricing&rdquo;.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-slate-950/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Authorised Shift4 UK Resource Directory</span>
              <button
                type="button"
                onClick={() => handleSelect("/get-quote")}
                className="text-brand-accent font-semibold hover:underline"
              >
                Or request instant quote →
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
