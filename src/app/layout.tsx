import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { CookieBanner } from "@/components/CookieBanner";
import { siteConfig } from "@/config/site";
import { getOrganizationSchema, getWebSiteSchema, getProductSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A1A33",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.seo.titleDefault,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,
  alternates: {
    canonical: siteConfig.domain,
    languages: {
      "en-GB": siteConfig.domain,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.domain,
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.domain}/images/shift4-one-terminal.jpg`,
        width: 1200,
        height: 630,
        alt: "Shift4 One Card Machine with Zero Monthly Rental Offer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.titleDefault,
    description: siteConfig.seo.description,
    images: [`${siteConfig.domain}/images/shift4-one-terminal.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebSiteSchema();
  const productSchema = getProductSchema();

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#060E1C] text-slate-100 antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Global Conversion & Compliance Overlays */}
        <FloatingWhatsApp />
        <StickyMobileBar />
        <ExitIntentModal />
        <CookieBanner />
      </body>
    </html>
  );
}
