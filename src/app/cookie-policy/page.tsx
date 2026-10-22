import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy | Shift4 Partner UK",
  description: "Information regarding the cookies and tracking technologies used on our website in accordance with the Privacy and Electronic Communications Regulations (PECR).",
  alternates: {
    canonical: `${siteConfig.domain}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-sm leading-relaxed">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 px-3 py-1 rounded-full">
            PECR COMPLIANCE
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white mt-4 mb-2">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-400">Last updated: October 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your computer or mobile device when you visit websites. They help the website recognise your device, remember preferences, and ensure online forms and interactive calculators function correctly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Categories of Cookies We Use</h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Strictly Necessary Cookies</h3>
              <p className="text-xs text-slate-400">
                Essential for core navigation, security, and quote form submissions. These cannot be disabled in our systems.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Performance & Analytics Cookies (Google Analytics 4)</h3>
              <p className="text-xs text-slate-400">
                Help us measure website traffic, understand which payment guides are most useful, and identify navigation friction. Loaded only with your consent.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-1">Marketing & Attribution Cookies (Meta Pixel / Google Ads)</h3>
              <p className="text-xs text-slate-400">
                Used to determine how merchants discover our site from search and social campaigns and to prevent repetitive advertising. Loaded only with your consent.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Managing Your Preferences</h2>
          <p>
            You can modify your cookie settings at any time by clearing your browser cache or clicking the cookie settings button in our cookie consent banner.
          </p>
        </section>
      </div>
    </div>
  );
}
