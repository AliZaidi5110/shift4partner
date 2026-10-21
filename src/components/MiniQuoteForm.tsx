"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { trackLeadSubmission, trackCTAClick } from "@/lib/analytics";

interface MiniQuoteFormProps {
  source?: string;
  className?: string;
}

export function MiniQuoteForm({ source = "hero_mini_form", className = "" }: MiniQuoteFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    businessType: "",
    websiteUrlHoneypot: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      errs.fullName = "Please enter your name";
    }
    if (!formData.phone.trim() || !/^[0-9+\s()-]{9,16}$/.test(formData.phone)) {
      errs.phone = "Enter a valid UK phone number";
    }
    if (!formData.businessType) {
      errs.businessType = "Please select your business type";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.websiteUrlHoneypot) {
      // Spam honeypot triggered
      return;
    }
    if (!validate()) return;

    setLoading(true);
    trackCTAClick("submit_mini_quote", source);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          submittedAt: new Date().toISOString(),
        }),
      });

      trackLeadSubmission({
        leadType: "mini_quote_request",
        businessType: formData.businessType,
        source,
      });

      // Redirect to thank-you page with lead parameters
      router.push(`/thank-you?type=quote&name=${encodeURIComponent(formData.fullName)}`);
    } catch {
      // Fallback
      router.push(`/thank-you?type=quote&name=${encodeURIComponent(formData.fullName)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative rounded-2xl bg-gradient-to-b from-[#102347]/90 to-[#0A1833]/95 border border-blue-500/30 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl ${className}`}>
      {/* Badge Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent bg-brand-blue/20 px-2.5 py-1 rounded-full border border-brand-accent/20">
          <Sparkles className="h-3.5 w-3.5" /> 60-Second Fast Quote
        </span>
        <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Free & No Obligation
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-1">
        Request Your Free Shift4 One Quote
      </h3>
      <p className="text-xs text-slate-300 mb-4">
        Zero monthly terminal rental*. Discover your processing rate in minutes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Anti-spam honeypot */}
        <input
          type="text"
          name="websiteUrlHoneypot"
          value={formData.websiteUrlHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteUrlHoneypot: e.target.value })}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="mini-name">
            Your Name / Business Contact *
          </label>
          <input
            id="mini-name"
            type="text"
            required
            placeholder="e.g. Sarah Jenkins"
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: "" });
            }}
            className={`w-full rounded-xl bg-slate-900/80 border ${errors.fullName ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all`}
          />
          {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="mini-phone">
            UK Phone Number *
          </label>
          <input
            id="mini-phone"
            type="tel"
            required
            placeholder="e.g. 07123 456789 or 020 7946 0192"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: "" });
            }}
            className={`w-full rounded-xl bg-slate-900/80 border ${errors.phone ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all`}
          />
          {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1" htmlFor="mini-business">
            Business Type *
          </label>
          <select
            id="mini-business"
            required
            value={formData.businessType}
            onChange={(e) => {
              setFormData({ ...formData, businessType: e.target.value });
              if (errors.businessType) setErrors({ ...errors, businessType: "" });
            }}
            className={`w-full rounded-xl bg-slate-900/80 border ${errors.businessType ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/40 transition-all`}
          >
            <option value="" disabled className="text-slate-500">
              Select business category...
            </option>
            <option value="Café / Coffee Shop">Café / Coffee Shop</option>
            <option value="Restaurant / Pub / Bar">Restaurant / Pub / Bar</option>
            <option value="Takeaway / Fast Food">Takeaway / Fast Food</option>
            <option value="Salon / Barbershop">Salon / Barbershop</option>
            <option value="Retail Store / Boutique">Retail Store / Boutique</option>
            <option value="Market / Pop-Up Trader">Market / Pop-Up Trader</option>
            <option value="Mobile Business / Events">Mobile Business / Events</option>
            <option value="Food Truck / Van">Food Truck / Van</option>
            <option value="Taxi / Chauffeur">Taxi / Chauffeur</option>
            <option value="Other Commercial">Other Commercial Business</option>
          </select>
          {errors.businessType && <p className="text-red-400 text-[11px] mt-1">{errors.businessType}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue px-5 py-3 text-sm font-bold text-white shadow-[0_4px_20px_rgba(30,107,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Preparing your quote...
            </>
          ) : (
            <>
              <span>Get My Free Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      {/* Trust Micro-Points */}
      <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
          No pushy sales calls
        </span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
          Fast UK dispatch
        </span>
      </div>
    </div>
  );
}
