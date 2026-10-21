import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

export const alt = "Shift4 One Card Machine - Authorised UK Partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          background: "radial-gradient(ellipse at 80% 20%, #1E6BFF 0%, #0A1A33 60%, #060F1E 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#1E6BFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 900,
              boxShadow: "0 8px 24px rgba(30,107,255,0.5)",
            }}
          >
            E
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.5px" }}>
              Eposify &bull; <span style={{ color: "#4DA3FF" }}>Shift4 Partner</span>
            </span>
            <span style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#94A3B8" }}>
              EPOS Made Easy &bull; Authorised UK Merchant Partner
            </span>
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(30,107,255,0.25)",
              border: "1px solid rgba(77,163,255,0.4)",
              borderRadius: "999px",
              padding: "6px 18px",
              fontSize: "14px",
              fontWeight: 800,
              color: "#4DA3FF",
              width: "fit-content",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            Smart Card Payments for UK Businesses
          </div>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              margin: "8px 0",
            }}
          >
            One Card Machine. <br />
            <span style={{ color: "#4DA3FF" }}>Zero Monthly Rental*.</span>
          </h1>
          <p style={{ fontSize: "22px", color: "#CBD5E1", lineHeight: 1.4 }}>
            Meet Shift4 One. Roaming 4G connectivity, high-speed thermal receipts, and 1-to-1 UK personal setup guidance.
          </p>
        </div>

        {/* Footer Pill Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#34D399", fontWeight: 700 }}>
            <span>✓</span> £0 Monthly Terminal Rental*
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#34D399", fontWeight: 700 }}>
            <span>✓</span> Free Terminal Offer*
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#34D399", fontWeight: 700 }}>
            <span>✓</span> Roaming 4G Included
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#34D399", fontWeight: 700 }}>
            <span>✓</span> Next-Day UK Delivery
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
