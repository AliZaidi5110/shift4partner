"use client";

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackLeadSubmission, trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const type = searchParams.get("type") || "quote";

  useEffect(() => {
    // Fire conversion tracking on mount
    trackLeadSubmission({
      leadType: type,
      source: "thank_you_page_view",
    });
  }, [type]);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center text-white">
      {/* Success Badge */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
        <CheckCircle2 className="h-10 w-10" />
      </div>

      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-blue/20 border border-brand-accent/20 px-3 py-1 rounded-full mb-3">
        Quote Request Confirmed
      </span>

      <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
        Thank You, <span className="text-brand-accent">{name}</span>!
      </h1>

      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
        We have received your Shift4 One quote request. A UK payment specialist has been assigned to your business and will review your turnover and zero-rental eligibility.
      </p>

      {/* What Happens Next Card */}
      <div className="rounded-3xl bg-gradient-to-b from-[#0F2247]/90 to-[#0A1833]/95 border border-blue-500/30 p-6 sm:p-8 text-left shadow-2xl mb-10">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-brand-accent" />
          <span>What Happens Next:</span>
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-xs flex-shrink-0 mt-0.5">
              1
            </span>
            <div>
              <p className="font-semibold text-white">Quick Review Call (~15 Minutes)</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Our UK advisor will reach out to confirm your business sector and ensure you receive the lowest transaction processing rates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-xs flex-shrink-0 mt-0.5">
              2
            </span>
            <div>
              <p className="font-semibold text-white">Zero Terminal Rental Confirmation*</p>
              <p className="text-slate-400 text-xs mt-0.5">
                We will verify your £0 monthly terminal hire qualification and provide your written quotation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-xs flex-shrink-0 mt-0.5">
              3
            </span>
            <div>
              <p className="font-semibold text-white">Express Next-Day Courier Dispatch</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Your pre-configured Shift4 One terminal with pre-installed 4G roaming SIM is dispatched for next-business-day delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Immediate Contact Options */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-4">
        <p className="text-sm font-semibold text-white">
          Need to speak with us right away?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => trackPhoneClick("Thank You Page Call")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 px-5 py-3 text-xs font-bold text-white transition-colors"
          >
            <Phone className="h-4 w-4 text-emerald-400" />
            <span>Call {siteConfig.phone}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi, I just submitted a quote request on the website. Could we connect?")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Thank You Page WhatsApp")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-bold text-white transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="text-xs text-brand-accent hover:underline inline-flex items-center gap-1 font-semibold"
        >
          <span>Return to Homepage</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-white">Loading confirmation...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
