"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { homeFAQs, FAQItem } from "@/data/faqs";
import { getFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

export function FAQSection({ limit }: { limit?: number }) {
  const [openId, setOpenId] = useState<string | null>("rental-fee");
  const displayFaqs = limit ? homeFAQs.slice(0, limit) : homeFAQs;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const schema = getFAQSchema(displayFaqs);

  return (
    <section className="bg-gradient-to-b from-[#060D1A] via-[#0A1A33] to-[#08152B] py-20 lg:py-28 text-white relative">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            CLEAR & JARGON-FREE
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mt-4 mb-4">
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300">
            Everything you need to know about Shift4 One terminals, rental terms, transaction fees, and UK setup.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#0F2247]/95 border-brand-accent/50 shadow-xl shadow-brand-blue/10"
                    : "bg-[#0A1833]/80 border-slate-700/60 hover:border-slate-600"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full min-h-[48px] py-4 sm:py-5 px-4 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-brand-blue text-white rotate-180"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-slate-900/90 border border-slate-700 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-brand-blue/20 text-brand-accent flex items-center justify-center flex-shrink-0">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question about your business?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Our UK payment specialists are on hand to help.</p>
            </div>
          </div>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            onClick={() => trackPhoneClick("FAQ Section Help Call")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-bold text-white border border-white/10 transition-colors w-full sm:w-auto text-center flex-shrink-0"
          >
            <PhoneCall className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
            <span>Speak with an Advisor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
