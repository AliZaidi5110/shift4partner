"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Headphones, Zap, Clock, CheckCircle2 } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: null,
      customIcon: (
        <div className="bg-white rounded-xl p-1.5 flex items-center justify-center h-12 w-16 flex-shrink-0 shadow-md">
          <Image
            src="/images/shift4-partner-logo.png"
            alt="Authorised Shift4 Partner"
            width={55}
            height={32}
            className="h-9 w-auto object-contain"
          />
        </div>
      ),
      title: "Authorised Shift4 Partner",
      subtitle: "Official UK sales & onboarding",
    },
    {
      icon: Headphones,
      title: "UK-Based Support",
      subtitle: "7-day dedicated phone support",
    },
    {
      icon: Zap,
      title: "Next-Day Replacement",
      subtitle: "Express swap-out warranty",
    },
    {
      icon: Clock,
      title: "Fast Payouts",
      subtitle: "Next business day settlement*",
    },
  ];

  return (
    <section className="bg-[#050C18] border-y border-white/5 py-8 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Trust Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3.5 p-2">
                {item.customIcon ? (
                  item.customIcon
                ) : Icon ? (
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 border border-brand-accent/20 text-brand-accent flex-shrink-0 shadow-md">
                    <Icon className="h-5 w-5" />
                  </div>
                ) : null}
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accepted Payment Schemes & Logos */}
        <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Accept All Major Payment Methods:
          </span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-300">
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-blue-400 font-extrabold tracking-widest">VISA</span>
            </span>
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-red-500 font-bold">master</span><span className="text-amber-500 font-bold">card</span>
            </span>
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-blue-400 font-black">AMEX</span>
            </span>
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-white font-medium">Apple Pay</span>
            </span>
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-slate-200 font-medium">Google Pay</span>
            </span>
            <span className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 flex items-center gap-1.5 hover:border-slate-700 transition-colors">
              <span className="text-emerald-400 font-medium">Contactless · Chip & PIN</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
