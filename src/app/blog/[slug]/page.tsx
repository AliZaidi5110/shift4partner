import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, ArrowRight, Share2, Check, Sparkles, MessageCircle, ChevronRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/content/blog";
import { QuoteSection } from "@/components/QuoteSection";
import { siteConfig } from "@/config/site";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog Article | Shift4 Partner UK" };
  }

  return {
    title: `${post.title} | Shift4 Partner UK`,
    description: post.metaDescription,
    alternates: {
      canonical: `${siteConfig.domain}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteConfig.domain}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  // Schema definitions
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}/images/shift4-partner-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const faqSchema = getFAQSchema(post.faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  return (
    <div className="pt-24 text-white">
      {/* Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-brand-accent truncate max-w-xs">{post.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="bg-brand-blue/20 text-brand-accent px-3 py-1 rounded-full font-bold border border-brand-accent/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              Updated: {new Date(post.updatedDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-accent flex items-center justify-center text-white font-bold text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{post.author.name}</p>
              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </header>

        {/* Quick Answer Executive Summary Box */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900/90 border border-brand-accent/40 p-6 shadow-xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-2">
            <Sparkles className="h-4 w-4" /> Quick Answer / Summary
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {post.quickAnswer}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-700/80 p-5 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
            Table of Contents
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            {post.toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-brand-accent hover:underline flex items-center gap-1.5">
                  <span className="text-slate-500">&rarr;</span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Body */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
            {post.content.introduction}
          </p>

          {post.content.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="space-y-4 pt-4">
              <h2 className="text-2xl font-extrabold text-white tracking-tight border-b border-white/10 pb-2">
                {sec.heading}
              </h2>

              <div className="space-y-3">
                {sec.body.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Optional embedded table */}
              {sec.table && (
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/80 shadow-md">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-800 text-white font-bold border-b border-slate-700">
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02]">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3.5 ${cIdx === 0 ? "font-bold text-white" : ""}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional callout box */}
              {sec.callout && (
                <div className="p-4 rounded-xl bg-blue-950/40 border-l-4 border-brand-accent text-xs sm:text-sm text-slate-200 my-4 space-y-1">
                  <p className="font-bold text-brand-accent">{sec.callout.title}</p>
                  <p>{sec.callout.text}</p>
                </div>
              )}
            </section>
          ))}

          {/* Embedded Mid-Article CTA Banner */}
          <div className="my-10 rounded-2xl bg-gradient-to-r from-brand-blue to-blue-600 p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                UK MERCHANT SPECIAL OFFER
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1">
                Ready for £0 Monthly Terminal Rental*?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-md">
                Get the Shift4 One smart terminal with roaming 4G, built-in printer, and dedicated UK setup.
              </p>
            </div>

            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-brand-navy hover:bg-blue-50 px-6 py-3.5 text-sm font-bold shadow-lg transition-all flex-shrink-0"
            >
              <span>Get Free Quote &rarr;</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-3">Conclusion</h3>
            <p>{post.content.conclusion}</p>
          </div>
        </div>

        {/* FAQs Accordion */}
        {post.faqs.length > 0 && (
          <div className="mt-14 pt-10 border-t border-white/10 space-y-4">
            <h3 className="text-2xl font-extrabold text-white">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {post.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/80">
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2">{faq.question}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Social Share Buttons with UTM tagging */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Share2 className="h-4 w-4" /> Share This Guide:
          </span>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}?utm_source=whatsapp_share`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/30 font-semibold transition-colors"
            >
              WhatsApp
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}?utm_source=linkedin_share`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 font-semibold transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}?utm_source=x_share`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 font-semibold transition-colors"
            >
              X / Twitter
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}?utm_source=facebook_share`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-700/20 text-blue-300 hover:bg-blue-700/30 border border-blue-600/30 font-semibold transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/90 border border-slate-700 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-brand-blue to-brand-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{post.author.name}</h4>
            <p className="text-xs text-brand-accent font-medium mb-1.5">{post.author.role}</p>
            <p className="text-xs text-slate-400 leading-relaxed">{post.author.bio}</p>
          </div>
        </div>

        {/* Related Articles Carousel / Grid */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Related Merchant Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-brand-accent transition-colors block group"
                >
                  <span className="text-[10px] font-bold text-brand-accent uppercase">{rel.category}</span>
                  <h4 className="text-sm font-bold text-white group-hover:text-brand-accent transition-colors mt-1 line-clamp-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <span>Read guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </p>
                </Link>
              ))}
          </div>
        </div>

      </article>

      {/* Quote Conversion Section */}
      <QuoteSection />
    </div>
  );
}
