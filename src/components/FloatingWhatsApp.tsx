"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackWhatsAppClick } from "@/lib/analytics";

export function FloatingWhatsApp() {
  const [closed, setClosed] = useState(false);
  const whatsappClean = siteConfig.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappClean}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  if (closed) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2">
      {/* Tooltip bubble on desktop */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-slate-700/80 rounded-2xl py-2 px-3.5 shadow-2xl backdrop-blur-md text-xs text-white animate-fade-in">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-semibold">Questions? Chat with UK advisor</span>
        <button
          type="button"
          onClick={() => setClosed(true)}
          className="text-slate-400 hover:text-white ml-1"
          aria-label="Dismiss WhatsApp hint"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("Floating Widget")}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white shadow-[0_8px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.65)] hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat on WhatsApp with Shift4 specialist"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
