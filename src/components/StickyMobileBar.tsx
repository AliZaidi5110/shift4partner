"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackPhoneClick, trackCTAClick } from "@/lib/analytics";

export function StickyMobileBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1833]/95 border-t border-blue-900/60 px-3 pt-2 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-lg shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          onClick={() => trackPhoneClick("Mobile Sticky Bottom Bar")}
          className="min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-700 px-2 py-2.5 text-xs font-bold text-slate-200 active:scale-95 transition-transform"
        >
          <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
          <span className="truncate">Call {siteConfig.phone}</span>
        </a>

        <Link
          href="/get-quote"
          onClick={() => trackCTAClick("Get Free Quote", "Mobile Sticky Bottom Bar")}
          className="min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-2 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/30 active:scale-95 transition-transform text-center"
        >
          <span>Get Free Quote</span>
          <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
}
