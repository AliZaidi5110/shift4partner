"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Check, X, Settings2 } from "lucide-react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const [marketingConsent, setMarketingConsent] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("s4_cookie_consent");
    if (!saved) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "s4_cookie_consent",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString(),
      })
    );
    setShow(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      "s4_cookie_consent",
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString(),
      })
    );
    setShow(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      "s4_cookie_consent",
      JSON.stringify({
        necessary: true,
        analytics: analyticsConsent,
        marketing: marketingConsent,
        timestamp: new Date().toISOString(),
      })
    );
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#060E1C]/98 border-t border-blue-900/60 shadow-[0_-10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl text-white">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        
        {/* Notice text */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-accent flex-shrink-0" />
            <h4 className="text-sm font-bold text-white tracking-tight">
              UK GDPR & Privacy Compliance
            </h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            We use essential cookies to operate our site and optional analytical cookies (Google Analytics & Meta Pixel) to evaluate page performance and quote conversions. Read our{" "}
            <Link href="/cookie-policy" className="text-brand-accent underline hover:text-white">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-brand-accent underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue text-xs font-bold text-white shadow-md shadow-blue-500/30 transition-all flex-grow sm:flex-grow-0"
          >
            Accept All Cookies
          </button>

          <button
            type="button"
            onClick={handleRejectNonEssential}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors flex-grow sm:flex-grow-0"
          >
            Reject Non-Essential
          </button>

          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            title="Customise preferences"
            aria-label="Customise preferences"
          >
            <Settings2 className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* Granular details dropdown */}
      {showDetails && (
        <div className="mx-auto max-w-7xl mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
            <div className="flex items-center justify-between font-bold mb-1">
              <span>Strictly Necessary</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">Always Active</span>
            </div>
            <p className="text-slate-400 text-[11px]">Required for website security, quote submissions, and core functionality.</p>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5">
            <div className="flex items-center justify-between font-bold mb-1">
              <span>Performance & Analytics</span>
              <input
                type="checkbox"
                checked={analyticsConsent}
                onChange={(e) => setAnalyticsConsent(e.target.checked)}
                className="rounded border-slate-700 text-brand-accent focus:ring-0 cursor-pointer"
              />
            </div>
            <p className="text-slate-400 text-[11px]">Helps us understand how merchants discover our rate calculator and pages.</p>
          </div>

          <div className="p-3 bg-slate-900/60 rounded-xl border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between font-bold mb-1">
                <span>Marketing & Ads</span>
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="rounded border-slate-700 text-brand-accent focus:ring-0 cursor-pointer"
                />
              </div>
              <p className="text-slate-400 text-[11px]">Measures Google and Meta ad efficiency and attribution.</p>
            </div>
            <button
              type="button"
              onClick={handleSaveCustom}
              className="mt-2 text-[11px] font-bold text-brand-accent hover:underline self-end"
            >
              Save Custom Choices →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
