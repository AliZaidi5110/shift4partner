"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackLeadSubmission, trackPhoneClick, trackWhatsAppClick, trackCTAClick } from "@/lib/analytics";

export function QuoteSection({ title, subtitle, className = "" }: { title?: string; subtitle?: string; className?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    businessName: "",
    businessType: "",
    monthlyTurnover: "",
    currentProvider: "",
    message: "",
    websiteUrlHoneypot: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    gclid: "",
    fbclid: "",
    landingPage: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Capture UTM parameters from URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setFormData((prev) => ({
        ...prev,
        utmSource: params.get("utm_source") || "",
        utmMedium: params.get("utm_medium") || "",
        utmCampaign: params.get("utm_campaign") || "",
        gclid: params.get("gclid") || "",
        fbclid: params.get("fbclid") || "",
        landingPage: window.location.pathname,
      }));
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      errs.fullName = "Please enter your full name";
    }
    if (!formData.phone.trim() || !/^[0-9+\s()-]{9,16}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid UK phone number";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid business email";
    }
    if (!formData.businessType) {
      errs.businessType = "Please select your business type";
    }
    if (!formData.monthlyTurnover) {
      errs.monthlyTurnover = "Please select estimated monthly card turnover";
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
    trackCTAClick("Submit Full Quote", "QuoteSection");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      trackLeadSubmission({
        leadType: "full_quote_request",
        monthlyTurnover: formData.monthlyTurnover,
        businessType: formData.businessType,
        source: formData.utmSource || "website_quote_form",
      });

      router.push(`/thank-you?type=quote&name=${encodeURIComponent(formData.fullName)}`);
    } catch {
      router.push(`/thank-you?type=quote&name=${encodeURIComponent(formData.fullName)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-form-section" className={`bg-[#050C18] py-20 lg:py-28 text-white relative ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(30,107,255,0.15),transparent)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Multi-Channel CTAs & Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
              START YOUR 15-MINUTE QUOTE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {title || (
                <>
                  Get Your <span className="text-brand-accent">Shift4 One</span> Quote Today
                </>
              )}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {subtitle || "No obligations, no pressure, and no hidden charges. Find out in minutes how much you can save by cutting out monthly terminal hire fees*."}
            </p>

            {/* Alternative Multi-channel Contact Options */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={() => trackPhoneClick("QuoteSection Phone Card")}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/50 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Prefer speaking to someone right now?</p>
                    <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Call {siteConfig.phone}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("QuoteSection WhatsApp Card")}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/50 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Need instant answers on the go?</p>
                    <p className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-2 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Next-business-day UK terminal courier delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Zero monthly terminal rental offer available*</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Dedicated UK onboarding specialist handles setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full Quote Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#0F2247]/95 to-[#0A1833]/98 border border-blue-500/40 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Request Your Custom Rate Review</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Takes under 60 seconds · 100% confidential</p>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> No Spam Guarantee
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bots */}
                <input
                  type="text"
                  name="websiteUrlHoneypot"
                  value={formData.websiteUrlHoneypot}
                  onChange={(e) => setFormData({ ...formData, websiteUrlHoneypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="full-name">
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      placeholder="e.g. Liam Gallagher"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: "" });
                      }}
                      className={`w-full rounded-xl bg-slate-900/90 border ${errors.fullName ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    />
                    {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="phone-number">
                      UK Phone Number *
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={`w-full rounded-xl bg-slate-900/90 border ${errors.phone ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    />
                    {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="email-address">
                      Business Email *
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      placeholder="e.g. name@yourbusiness.co.uk"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      className={`w-full rounded-xl bg-slate-900/90 border ${errors.email ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    />
                    {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="business-name">
                      Business / Trading Name
                    </label>
                    <input
                      id="business-name"
                      type="text"
                      placeholder="e.g. The Old Mill Café"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-accent px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="business-type">
                      Business Type *
                    </label>
                    <select
                      id="business-type"
                      required
                      value={formData.businessType}
                      onChange={(e) => {
                        setFormData({ ...formData, businessType: e.target.value });
                        if (errors.businessType) setErrors({ ...errors, businessType: "" });
                      }}
                      className={`w-full rounded-xl bg-slate-900/90 border ${errors.businessType ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    >
                      <option value="" disabled className="text-slate-500">
                        Select business sector...
                      </option>
                      <option value="Café / Coffee Shop">Café / Coffee Shop</option>
                      <option value="Restaurant / Gastro Pub">Restaurant / Gastro Pub</option>
                      <option value="Takeaway / Fast Food">Takeaway / Fast Food</option>
                      <option value="Salon / Barbershop / Spa">Salon / Barbershop / Spa</option>
                      <option value="Retail Store / Boutique">Retail Store / Boutique</option>
                      <option value="Market Stall / Pop-Up Trader">Market Stall / Pop-Up Trader</option>
                      <option value="Mobile Business / Events">Mobile Business / Events</option>
                      <option value="Food Truck / Street Catering">Food Truck / Street Catering</option>
                      <option value="Taxi / Chauffeur / Private Hire">Taxi / Chauffeur / Private Hire</option>
                      <option value="Other Commercial Merchant">Other Commercial Merchant</option>
                    </select>
                    {errors.businessType && <p className="text-red-400 text-[11px] mt-1">{errors.businessType}</p>}
                  </div>

                  {/* Monthly Turnover */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="monthly-volume">
                      Estimated Monthly Card Turnover *
                    </label>
                    <select
                      id="monthly-volume"
                      required
                      value={formData.monthlyTurnover}
                      onChange={(e) => {
                        setFormData({ ...formData, monthlyTurnover: e.target.value });
                        if (errors.monthlyTurnover) setErrors({ ...errors, monthlyTurnover: "" });
                      }}
                      className={`w-full rounded-xl bg-slate-900/90 border ${errors.monthlyTurnover ? "border-red-500" : "border-slate-700 focus:border-brand-accent"} px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all`}
                    >
                      <option value="" disabled className="text-slate-500">
                        Select monthly volume...
                      </option>
                      <option value="Under £2,000 / month">Under £2,000 / month (New / Startup)</option>
                      <option value="£2,000 - £5,000 / month">£2,000 - £5,000 / month</option>
                      <option value="£5,000 - £15,000 / month">£5,000 - £15,000 / month</option>
                      <option value="£15,000 - £50,000 / month">£15,000 - £50,000 / month</option>
                      <option value="£50,000+ / month">£50,000+ / month (Enterprise)</option>
                    </select>
                    {errors.monthlyTurnover && <p className="text-red-400 text-[11px] mt-1">{errors.monthlyTurnover}</p>}
                  </div>
                </div>

                {/* Optional current provider */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1" htmlFor="current-provider">
                    Current Card Machine Provider (Optional)
                  </label>
                  <input
                    id="current-provider"
                    type="text"
                    placeholder="e.g. Worldpay, Barclaycard, Clover, Zettle, Dojo, or None"
                    value={formData.currentProvider}
                    onChange={(e) => setFormData({ ...formData, currentProvider: e.target.value })}
                    className="w-full rounded-xl bg-slate-900/90 border border-slate-700 focus:border-brand-accent px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 transition-all"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-3 group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-brand-blue px-6 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(30,107,255,0.4)] hover:shadow-[0_15px_35px_rgba(30,107,255,0.6)] transition-all cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Submitting your request...</span>
                    </>
                  ) : (
                    <>
                      <span>Get My Free Quote →</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  By submitting, you agree to our{" "}
                  <a href="/privacy-policy" className="text-brand-accent hover:underline">
                    Privacy Policy
                  </a>
                  . We will only contact you regarding your quote request.
                </p>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
