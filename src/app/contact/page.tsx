import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { QuoteSection } from "@/components/QuoteSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Our UK Team | 24/7 Customer Support & WhatsApp | Eposify",
  description: "Get in touch with Eposify's UK payment specialists. 24/7 customer support: 07894 946374, instant WhatsApp support, and free card machine quotes.",
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            WE ARE HERE TO HELP
          </span>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Contact Our UK <span className="text-brand-accent">Payment Specialists</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you want to request a free card machine quote, review current statements, or enquire about EPOS integration, our UK-based team is ready.
          </p>
        </div>
      </section>

      {/* Contact Pillars */}
      <section className="bg-[#050C18] py-16 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-center flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Telephone Support</h3>
                <p className="text-xs text-slate-400 mb-3">Speak with an advisor directly</p>
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="min-h-[44px] flex items-center justify-center text-base font-bold text-emerald-400 hover:underline"
                >
                  {siteConfig.phone}
                </a>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-1">24/7 UK Customer Support & Emergency Assistance</span>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-center flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">WhatsApp Business</h3>
                <p className="text-xs text-slate-400 mb-3">Quick questions & quote checks</p>
              </div>
              <div>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] flex items-center justify-center text-sm sm:text-base font-bold text-emerald-400 hover:underline break-words"
                >
                  Start WhatsApp Chat ({siteConfig.whatsappFormatted})
                </a>
                <span className="text-[11px] text-emerald-400 font-semibold block mt-1">24/7 Direct WhatsApp Support</span>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-center flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Email Enquiries</h3>
                <p className="text-xs text-slate-400 mb-3">Rate reviews & quotations</p>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="min-h-[44px] flex items-center justify-center text-sm sm:text-base font-bold text-brand-accent hover:underline break-all"
                >
                  {siteConfig.email}
                </a>
                <span className="text-[11px] text-slate-500 block mt-1">Same business day response</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote & Consultation Form */}
      <QuoteSection
        title="Send Us a Message or Request a Quote"
        subtitle="Fill out the details below and an advisor will be in touch within 15 minutes during office hours."
      />
    </div>
  );
}
