import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-4 text-center text-white">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-black text-brand-accent tracking-tight font-mono">
          404
        </span>

        <h1 className="text-3xl font-extrabold text-white">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed">
          The payment solution, terminal page or resource you are looking for has moved or does not exist.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/get-quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <span>Request Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
