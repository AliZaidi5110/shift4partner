import { siteConfig } from "@/config/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/images/shift4-partner-logo.png`,
    description: "Authorised Shift4 partner and UK merchant payment solutions provider offering zero monthly terminal rental card machines and smart EPOS systems.",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.tiktok,
      siteConfig.socials.youtube,
      siteConfig.socials.googleBusiness,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en-GB",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    description: siteConfig.seo.description,
    publisher: {
      "@id": `${siteConfig.domain}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.domain}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-GB",
  };
}

export function getProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Shift4 One Card Machine",
    image: `${siteConfig.domain}/images/shift4-one-terminal.png`,
    description: "High-performance smart payment terminal with £0 monthly rental offer*, roaming 4G, high-speed thermal printer, and full Shift4 EPOS integration.",
    brand: {
      "@type": "Brand",
      name: "Shift4",
    },
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.domain}/card-machines/shift4-one`,
      priceValidUntil: "2026-12-31",
      description: "£0 monthly terminal rental offer subject to business eligibility and minimum card processing terms.",
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.domain}${item.url}`,
    })),
  };
}

export function getLocalBusinessSchema(city?: string) {
  const cityName = city || "London";
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${siteConfig.domain}/#localbusiness-${cityName.toLowerCase().replace(/\s+/g, "-")}`,
    name: `${siteConfig.name} - ${cityName}`,
    url: city ? `${siteConfig.domain}/locations/${cityName.toLowerCase().replace(/\s+/g, "-")}` : siteConfig.domain,
    telephone: siteConfig.phone,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: cityName,
      addressRegion: "UK",
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5136",
      longitude: "-0.1260",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}
