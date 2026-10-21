import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(9, "Please enter a valid UK phone number")
    .regex(/^[0-9+\s()-]{9,20}$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(2, "Please enter your business name").optional().or(z.literal("")),
  businessType: z.string().min(1, "Please select your business type"),
  monthlyTurnover: z.string().min(1, "Please select your estimated monthly card volume"),
  currentProvider: z.string().optional(),
  message: z.string().max(500).optional(),
  // Anti-spam honeypot (must be empty)
  websiteUrlHoneypot: z.string().max(0, "Spam detected").optional(),
  // Attribution
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  gclid: z.string().optional(),
  fbclid: z.string().optional(),
  landingPage: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const miniQuoteSchema = z.object({
  fullName: z.string().min(2, "Name required"),
  phone: z
    .string()
    .min(9, "Valid UK phone required")
    .regex(/^[0-9+\s()-]{9,20}$/, "Invalid phone"),
  businessType: z.string().min(1, "Please select a business type"),
  websiteUrlHoneypot: z.string().max(0).optional(),
});

export type MiniQuoteData = z.infer<typeof miniQuoteSchema>;
