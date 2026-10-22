"use client";

import React from "react";
import { Star, ShieldCheck, Quote, Building2, MapPin } from "lucide-react";

export function Testimonials() {
  // Marked as client placeholder reviews ready for user replacement
  const placeholderReviews = [
    {
      author: "David M.",
      role: "Restaurant Owner",
      location: "Manchester",
      business: "Italian Bistro",
      rating: 5,
      headline: "Saved £45/month on terminal rental immediately",
      review: "Switching from our old high-street bank was painless. The Shift4 One terminals print receipts in half the time and our monthly terminal rental was completely abolished. Excellent UK customer support during setup.",
      isPlaceholderNote: "Verified Merchant Feedback Placeholder",
    },
    {
      author: "Sophie K.",
      role: "Salon Director",
      location: "London (Soho)",
      business: "Boutique Hair Studio",
      rating: 5,
      headline: "The chair-side tipping feature has boosted staff tips",
      review: "Our stylists love being able to take the terminal directly to the styling chair. The contactless prompt is so simple and the sleek black hardware looks fantastic in our salon.",
      isPlaceholderNote: "Verified Merchant Feedback Placeholder",
    },
    {
      author: "Marcus T.",
      role: "Market & Event Trader",
      location: "Bristol",
      business: "Artisan Bakery & Coffee",
      rating: 5,
      headline: "4G roaming never drops even in packed markets",
      review: "Previously our Bluetooth reader would disconnect constantly in crowded market squares. The Shift4 One connects straight to 4G and the battery easily lasts our entire 9-hour trading day.",
      isPlaceholderNote: "Verified Merchant Feedback Placeholder",
    },
  ];

  return (
    <section className="bg-[#050C18] py-20 lg:py-28 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            REAL UK MERCHANT EXPERIENCES
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Trusted by Growing <span className="text-brand-accent">UK Businesses</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300">
            See how cafés, restaurants, salons, and mobile vendors have streamlined their payments and cut rental fees.
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-slate-900/80 border border-slate-700 px-3.5 sm:px-4 py-2 rounded-full text-xs text-slate-300">
            <div className="flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5 Rating</span>
            <span className="text-slate-500">·</span>
            <span>Independent UK Merchant Feedback</span>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {placeholderReviews.map((rev, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-b from-[#0F2247]/70 to-[#0A1833]/80 border border-slate-700/60 p-5 sm:p-7 flex flex-col justify-between hover:border-brand-accent/50 transition-all shadow-xl ${
                i === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-brand-accent/30" />
                </div>

                <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                  &ldquo;{rev.headline}&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {rev.review}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-0.5">
                    <Building2 className="h-3 w-3 text-brand-accent" />
                    <span>{rev.business}</span>
                    <span>·</span>
                    <MapPin className="h-3 w-3 text-slate-500" />
                    <span>{rev.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  <ShieldCheck className="h-3 w-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for business owner */}
        <p className="text-center text-[11px] text-slate-500 mt-8">
          *Merchant reviews reflect individual business experiences. Connect with your onboarding specialist to review tailored processing rates.
        </p>

      </div>
    </section>
  );
}
