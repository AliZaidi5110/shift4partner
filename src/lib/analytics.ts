// Analytics and Conversion Event Tracking (GA4 + Meta Pixel)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function trackLeadSubmission(data: {
  leadType: string;
  monthlyTurnover?: string;
  businessType?: string;
  source?: string;
}) {
  // GA4 Conversion Event
  trackEvent("generate_lead", {
    currency: "GBP",
    lead_type: data.leadType,
    monthly_turnover: data.monthlyTurnover || "unspecified",
    business_type: data.businessType || "unspecified",
    lead_source: data.source || "website_form",
  });

  // Meta Pixel Conversion Event
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: data.leadType,
      content_category: data.businessType,
      currency: "GBP",
    });
  }
}

export function trackPhoneClick(location: string) {
  trackEvent("click_to_call", {
    event_category: "Engagement",
    event_label: location,
  });
}

export function trackWhatsAppClick(location: string) {
  trackEvent("click_to_whatsapp", {
    event_category: "Engagement",
    event_label: location,
  });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("cta_click", {
    event_category: "Conversion Flow",
    event_label: `${ctaName} - ${location}`,
  });
}
