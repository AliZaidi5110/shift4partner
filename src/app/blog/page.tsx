import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "UK Merchant Guides & Payment Insights | Shift4 Partner Blog",
  description: "Expert advice on UK card machines, terminal costs, zero-rental offers, interchange fees, and hospitality EPOS systems.",
  alternates: {
    canonical: `${siteConfig.domain}/blog`,
  },
};

export default function BlogListingPage() {
  return (
    <div className="pt-24 text-white">
      <section className="bg-gradient-to-b from-[#060E1C] via-[#0A1A33] to-[#08152B] py-16 sm:py-20 border-b border-white/5 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-blue/20 border border-brand-accent/30 px-3 py-1 rounded-full">
            MERCHANT ADVICE & INDUSTRY INSIGHTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            The UK Card Payments & EPOS Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Practical, jargon-free guides to help UK business owners cut payment fees, choose the right till hardware, and scale sales.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-[#050C18] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl bg-gradient-to-b from-[#0F2247]/70 to-[#0A1833]/80 border border-slate-700/60 p-6 flex flex-col justify-between hover:border-brand-accent/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span className="font-bold text-brand-accent bg-brand-blue/20 px-2.5 py-0.5 rounded-full border border-brand-accent/20">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {post.metaDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    <p className="font-semibold text-slate-200">{post.author.name}</p>
                    <p>{new Date(post.updatedDate).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-accent group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
