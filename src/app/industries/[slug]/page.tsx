import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Sparkles, Building, PhoneCall, ChevronRight } from "lucide-react";
import { industries, Industry } from "@/data/industries";
import { DeviceMockup } from "@/components/DeviceMockup";
import { TrustBar } from "@/components/TrustBar";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";
import { getBreadcrumbSchema } from "@/lib/schema";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return { title: "Industry Solution | Shift4 Partner UK" };
  }

  return {
    title: `Card Machines for ${industry.name} | Zero Monthly Rental*`,
    description: `Best card machine & EPOS system for UK ${industry.name}. Sub-second contactless approvals, zero monthly terminal rental*, roaming 4G, and instant receipts.`,
    alternates: {
      canonical: `${siteConfig.domain}/industries/${industry.slug}`,
    },
    openGraph: {
      title: `Card Machines for ${industry.name} | Shift4 Partner UK`,
      description: industry.subheadline,
      url: `${siteConfig.domain}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries/cafes" },
    { name: industry.name, url: `/industries/${industry.slug}` },
  ]);

  return (
    <div className="pt-24 text-white">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-24 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs visual */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span>Industries</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-accent font-semibold">{industry.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
                INDUSTRY PAYMENT SOLUTIONS
              </span>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {industry.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {industry.subheadline}
              </p>

              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-xs sm:text-sm text-slate-300 space-y-2">
                <p className="font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-accent" />
                  Recommended Package: {industry.recommendedSetup}
                </p>
                <p className="text-slate-400">
                  Tailored specifically for businesses turning {industry.turnoverFit}.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
                >
                  <span>Get Quote for {industry.shortTitle}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/card-machines/shift4-one"
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  Explore Shift4 One Specs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* In-depth 600+ word original editorial analysis */}
      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Why {industry.name} Need a Modern Payment Approach in 2026
            </h2>
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              <p>{industry.description}</p>
              <p>
                In the United Kingdom, over 85% of consumer transactions across {industry.name.toLowerCase()} are now executed digitally via contactless cards, smartphones (Apple Pay, Google Pay), and wearable devices. Merchants who rely on sluggish, legacy card terminals from traditional merchant banks frequently suffer from connection timeouts, high monthly terminal leasing fees, and long customer queues.
              </p>
              <p>
                By partnering with Shift4, independent business owners eliminate the ongoing monthly terminal hire charge* that eats into profit margins. Instead, you benefit from a high-spec smart payment terminal with dual Wi-Fi and automatic multi-network 4G roaming, keeping your till operational whether you trade from a permanent premises or pop-up event.
              </p>
            </div>
          </div>

          {/* Key Features Breakdown */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F2247]/80 to-[#0A1833]/90 border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-6">
              Tailored Advantages for {industry.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industry.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Explore other sectors:</span>
            <div className="flex flex-wrap gap-2">
              {industries
                .filter((i) => i.slug !== industry.slug)
                .slice(0, 4)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/industries/${other.slug}`}
                    className="min-h-[44px] inline-flex items-center bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-slate-800 transition-colors"
                  >
                    {other.shortTitle}
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection
        title={`Get a Personalised Quote for Your ${industry.shortTitle}`}
        subtitle={`Zero monthly terminal rental*, low transparent transaction rates, and dedicated UK onboarding setup.`}
      />

      <FAQSection limit={6} />
    </div>
  );
}
