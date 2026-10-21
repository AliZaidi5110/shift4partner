import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, MapPin, Truck, PhoneCall, ChevronRight, Sparkles } from "lucide-react";
import { ukCities, UKCity } from "@/data/cities";
import { DeviceMockup } from "@/components/DeviceMockup";
import { TrustBar } from "@/components/TrustBar";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { siteConfig } from "@/config/site";
import { getLocalBusinessSchema, getBreadcrumbSchema } from "@/lib/schema";

interface CityPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return ukCities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = ukCities.find((c) => c.slug === citySlug);

  if (!city) {
    return { title: "UK Card Machines | Shift4 Partner" };
  }

  return {
    title: `Card Machines in ${city.name} | Zero Monthly Rental* | Shift4`,
    description: `Best card machine & EPOS system for ${city.name} businesses. £0 monthly terminal rental*, free terminal offer*, roaming 4G, and next-day courier delivery.`,
    alternates: {
      canonical: `${siteConfig.domain}/locations/${city.slug}`,
    },
    openGraph: {
      title: `Card Machines in ${city.name} | Shift4 Partner UK`,
      description: city.subheadline,
      url: `${siteConfig.domain}/locations/${city.slug}`,
    },
  };
}

export default async function CityLocationPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = ukCities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const localSchema = getLocalBusinessSchema(city.name);
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations/london" },
    { name: city.name, url: `/locations/${city.slug}` },
  ]);

  return (
    <div className="pt-24 text-white">
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
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
            <span>Locations</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand-accent font-semibold">{city.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                <MapPin className="h-3.5 w-3.5" />
                LOCAL CARD PAYMENTS &bull; {city.name.toUpperCase()}, {city.region.toUpperCase()}
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Card Machines in {city.name}. <br />
                <span className="text-brand-accent">Zero Monthly Terminal Rental*.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {city.subheadline}
              </p>

              {/* Delivery dispatch pill */}
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                <Truck className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span><strong>Express Dispatch: </strong>{city.deliveryTime}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-brand-blue transition-all"
                >
                  <span>Get {city.name} Merchant Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  View Processing Rates
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

      {/* 600+ word deep local business editorial */}
      <section className="bg-[#050C18] py-20 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Supporting Independent Merchants Across {city.name}
            </h2>
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-4">
              <p>{city.localIntro}</p>
              <p>{city.businessLandscape}</p>
              <p>{city.whyShift4Local}</p>
              <p>
                Whether you operate in central {city.name} or surrounding suburban districts, consumer behaviour has transitioned decisively to digital card and mobile wallet transactions. High-street merchant banks often impose complex statement charges, compliance non-validation fees, and multi-year terminal hire agreements. Through our authorized Shift4 partnership, {city.name} merchants gain access to state-of-the-art terminal hardware with zero monthly terminal rental*, combined with competitive interchange processing rates.
              </p>
            </div>
          </div>

          {/* Local Commercial Hubs & Key Sectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-accent" />
                <span>Key Commercial Hubs Served in {city.name}</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {city.majorHubs.map((hub, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-700/80">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-accent" />
                <span>Top Merchant Sectors in {city.name}</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {city.keySectors.map((sec, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other UK Cities linking block for SEO */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <span>Also delivering next-day to nearby cities:</span>
            <div className="flex flex-wrap gap-2">
              {ukCities
                .filter((c) => c.slug !== city.slug)
                .slice(0, 5)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={`/locations/${other.slug}`}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
                  >
                    {other.name}
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </section>

      {/* Quote Section */}
      <QuoteSection
        title={`Request Your Free ${city.name} Card Machine Quote`}
        subtitle={`Zero monthly terminal rental*, free terminal offer*, and rapid next-day courier delivery to all ${city.name} postcodes.`}
      />

      <FAQSection limit={6} />
    </div>
  );
}
