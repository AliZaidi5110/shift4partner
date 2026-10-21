"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    // Check session storage so we don't annoy users repeatedly
    const seen = sessionStorage.getItem("s4_exit_intent_seen");
    if (seen) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem("s4_exit_intent_seen", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#0F2247] via-[#0A1833] to-[#07101E] border border-brand-accent/50 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-900/60 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="h-3.5 w-3.5" /> Exclusive Free Terminal Offer*
          </span>

          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            Before You Leave: Stop Paying Monthly Terminal Rental
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Switch your business to Shift4 One today. Zero monthly rental*, free terminal offer*, and next-business-day express UK dispatch.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/80 mb-6 text-left space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>£0 monthly card machine rental fee*</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Multi-network 4G roaming included*</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>No-obligation free rate comparison</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/get-quote"
              onClick={() => {
                setIsOpen(false);
                trackCTAClick("Claim Free Quote Offer", "Exit Intent Modal");
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
            >
              <span>Claim Free Quote Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-auto px-4 py-3 text-xs font-semibold text-slate-400 hover:text-white"
            >
              No thanks, I will keep paying rent
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Authorised Shift4 UK Partner · No spam guaranteed</span>
          </div>
        </div>

      </div>
    </div>
  );
}
