# Shift4 Partner UK - Next.js Production Website

A complete, production-ready, high-converting lead generation web application built for an **Authorised Shift4 Partner** in the United Kingdom selling **Shift4 One card machines** and **Shift4 EPOS systems**.

---

## Tech Stack & Architecture
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS + PostCSS + custom fintech dark theme (`#0A1A33` &rarr; `#1E6BFF` gradient)
- **Typography:** `next/font/google` (Inter)
- **Icons:** `lucide-react`
- **Validation:** Zod + React Hook Form
- **Structured Data:** Full JSON-LD schemas (`Organization`, `LocalBusiness`, `WebSite`, `Product`, `FAQPage`, `BlogPosting`, `BreadcrumbList`)
- **SEO & Performance:** Programmatic SSG for all UK cities and merchant industries, automated `sitemap.ts`, `robots.ts`, dynamic `opengraph-image.tsx`
- **Conversion Tracking:** GA4 events (`generate_lead`, `click_to_call`, `click_to_whatsapp`), Meta Pixel events (`Lead`), and UTM attribution capture

---

## Quick Start & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Replacing Placeholders

All business identity placeholders are centralized in a single configuration file:
👉 **[`src/config/site.ts`](file:///c:/Users/LENOVO/OneDrive/Desktop/Shift4Partner/src/config/site.ts)**

Edit the following fields with your registered business information:
- `name`: `[BUSINESS NAME]` (e.g. your trading name)
- `legalName`: Registered company entity name and company number
- `phone` / `phoneRaw`: `[PHONE]` (UK freephone or geographic phone number)
- `whatsapp`: `[WHATSAPP]` (WhatsApp Business contact number)
- `email`: `[EMAIL]` (Primary quote and merchant enquiry inbox)
- `domain`: `[DOMAIN]` (e.g. `https://www.shift4partner.co.uk`)
- `address`: `[ADDRESS]` (Registered trading or head office address)

---

## Project Structure

```
├── docs/
│   ├── smo-calendar.md          # 30-Day Omnichannel Social Media Content Calendar
│   └── ad-copy.md               # 10 High-Converting Google & Meta Ads Variations
├── public/
│   └── images/
│       └── shift4-one-terminal.jpg # High-res official terminal render ("Payment Approved £28.50")
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── api/lead/route.ts    # Lead capture API handler with honeypot spam protection
│   │   ├── blog/                # 10 full 1,200+ word guides with TOC, tables, and FAQ schemas
│   │   ├── card-machines/       # Flagship Shift4 One specifications & overview
│   │   ├── pos-systems/         # Hospitality, Retail, and Mobile EPOS solutions
│   │   ├── industries/[slug]/   # 9 Programmatic Industry Solutions (Cafes, Restaurants, etc.)
│   │   ├── locations/[city]/    # Programmatic UK City Pages (London, Manchester, etc.)
│   │   ├── lp/                  # Focused Paid-Ads Landing Pages (noindex, single CTA)
│   │   ├── pricing/             # Transparent rates & interactive fee calculator
│   │   ├── compare/             # Shift4 One vs Traditional Bank Leases vs SumUp/Zettle
│   │   ├── get-quote/           # Dedicated 60-second quote conversion page
│   │   ├── thank-you/           # Lead conversion tracking page (GA4 + Meta events)
│   │   ├── opengraph-image.tsx  # Dynamic branded OG share cards
│   │   ├── sitemap.ts           # Comprehensive XML sitemap
│   │   ├── robots.ts            # Robots.txt configuration
│   │   ├── layout.tsx           # Global RootLayout with structured data schemas
│   │   └── page.tsx             # Pixel-matched Home Page
│   ├── components/              # Modular UI components (Hero, DeviceMockup, Calculator, etc.)
│   ├── config/                  # Centralized site and compliance configuration
│   ├── content/                 # Blog post datasets & editorial articles
│   ├── data/                    # UK Cities, Industries, and FAQ datasets
│   └── lib/                     # Schema generators, analytics tracking, and Zod validators
```

---

## Vercel Deployment Guide

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and leave the framework preset as **Next.js**.
4. In the **Environment Variables** panel, copy keys from `.env.example`.
5. Click **Deploy**. Vercel will automatically build the static pages and deploy edge functions.

---

## Post-Launch SEO & Marketing Checklist

- [ ] **Domain & Canonical Setup:** Verify your custom domain and ensure SSL/TLS is active.
- [ ] **Google Search Console & Bing Webmaster Tools:** Verify domain ownership via DNS record and submit `https://www.shift4partner.co.uk/sitemap.xml`.
- [ ] **Google Business Profile:** Register a profile under category *Payment processing service* or *Credit card processing service*, ensuring NAP (Name, Address, Phone) strictly matches `src/config/site.ts`.
- [ ] **GA4 & Meta Conversion Events:** Verify that `/thank-you` fires the `generate_lead` event in Google Analytics DebugView and the `Lead` event in Meta Events Manager.
- [ ] **Google Ads & Meta Campaigns:** Deploy campaigns using the ad copy in [`docs/ad-copy.md`](file:///c:/Users/LENOVO/OneDrive/Desktop/Shift4Partner/docs/ad-copy.md) pointing to the dedicated landing pages (`/lp/zero-rental-card-machine`, `/lp/epos-for-restaurants`, `/lp/mobile-card-machine`).
- [ ] **30-Day Social Content:** Schedule daily posts from [`docs/smo-calendar.md`](file:///c:/Users/LENOVO/OneDrive/Desktop/Shift4Partner/docs/smo-calendar.md) across Facebook, Instagram, LinkedIn, and TikTok.
- [ ] **Local Citations:** Claim consistent business listings on Yell, Thomson Local, Scoot, and FreeIndex.
- [ ] **Customer Reviews:** Add your verified Trustpilot or Google review link into [`src/components/Testimonials.tsx`](file:///c:/Users/LENOVO/OneDrive/Desktop/Shift4Partner/src/components/Testimonials.tsx).
