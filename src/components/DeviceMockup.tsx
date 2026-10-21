"use client";

import React, { useState } from "react";
import { Wifi, Signal, BatteryCharging, CheckCircle2, RefreshCw, CreditCard, ShieldCheck } from "lucide-react";

export function DeviceMockup() {
  const [screenState, setScreenState] = useState<"ready" | "processing" | "approved">("ready");
  const [amount, setAmount] = useState<string>("28.50");

  const handleSimulatePayment = () => {
    if (screenState === "approved") {
      setScreenState("ready");
      return;
    }
    setScreenState("processing");
    setTimeout(() => {
      setScreenState("approved");
    }, 1200);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none py-6">
      {/* Glow behind device */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/30 via-brand-accent/20 to-transparent blur-2xl rounded-full opacity-70 pointer-events-none" />

      {/* 3D Tilted Container */}
      <div 
        className="relative transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02]"
        style={{
          transform: "perspective(1200px) rotateY(-10deg) rotateX(7deg) rotateZ(1.5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Terminal Outer Body */}
        <div className="relative rounded-[36px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#0A0F1D] p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.12),inset_0_2px_4px_rgba(255,255,255,0.2)]">
          {/* Top Thermal Printer Slot */}
          <div className="mx-auto mb-3 h-2 w-36 rounded-full bg-[#050811] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border-b border-white/10" />

          {/* LED Contactless Indicator Row */}
          <div className="mb-2 flex justify-center items-center gap-3">
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${screenState === "approved" ? "bg-emerald-400 shadow-[0_0_8px_#34D399]" : "bg-emerald-500/80 shadow-[0_0_4px_#10B981]"}`} />
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${screenState === "approved" ? "bg-emerald-400 shadow-[0_0_8px_#34D399]" : "bg-emerald-500/80 shadow-[0_0_4px_#10B981]"}`} />
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${screenState === "approved" ? "bg-emerald-400 shadow-[0_0_8px_#34D399]" : "bg-emerald-500/80 shadow-[0_0_4px_#10B981]"}`} />
            <span className={`h-2 w-2 rounded-full transition-all duration-300 ${screenState === "approved" ? "bg-emerald-400 shadow-[0_0_8px_#34D399]" : "bg-emerald-500/80 shadow-[0_0_4px_#10B981]"}`} />
          </div>

          {/* Glass LCD Touchscreen */}
          <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#0B1528] via-[#08101E] to-[#040810] border border-blue-500/30 p-5 shadow-[inset_0_0_20px_rgba(0,0,0,0.7)] min-h-[300px] flex flex-col justify-between">
            {/* Screen Glare effect */}
            <div className="absolute -top-12 -right-12 h-44 w-44 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-xl pointer-events-none" />

            {/* Status Header */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2">
              <span className="font-semibold tracking-wider text-brand-accent">SHIFT4 ONE</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded font-mono">4G ROAMING</span>
                <Signal className="h-3 w-3 text-emerald-400" />
                <Wifi className="h-3 w-3 text-emerald-400" />
                <BatteryCharging className="h-3 w-3 text-emerald-400" />
              </div>
            </div>

            {/* Screen Dynamic Body */}
            {screenState === "ready" && (
              <div className="my-auto py-2 text-center animate-fade-in">
                <p className="text-xs uppercase font-medium tracking-widest text-slate-400">Total Amount</p>
                <div className="my-1 flex items-center justify-center font-bold tracking-tight text-white">
                  <span className="text-2xl mr-1 text-brand-accent">£</span>
                  <span className="text-5xl font-extrabold tracking-tight">{amount}</span>
                </div>

                {/* Contactless Animation Graphic */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="absolute h-16 w-16 rounded-full bg-brand-blue/20 animate-ping" />
                  <div className="relative h-14 w-14 rounded-full bg-gradient-to-tr from-brand-blue to-brand-accent flex items-center justify-center shadow-lg shadow-brand-blue/30 cursor-pointer" onClick={handleSimulatePayment} title="Tap to simulate payment">
                    <CreditCard className="h-7 w-7 text-white" />
                  </div>
                </div>

                <p className="text-xs font-semibold text-slate-200">Tap, insert or swipe</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Visa · Mastercard · Amex · Apple Pay</p>
              </div>
            )}

            {screenState === "processing" && (
              <div className="my-auto py-6 text-center">
                <RefreshCw className="h-10 w-10 text-brand-accent animate-spin mx-auto mb-3" />
                <p className="text-sm font-semibold text-white">Processing Payment...</p>
                <p className="text-xs text-slate-400 mt-1">Contacting acquiring network</p>
              </div>
            )}

            {screenState === "approved" && (
              <div className="my-auto py-3 text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-2 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Approved</p>
                <p className="text-2xl font-bold text-white mt-0.5">£{amount}</p>
                <div className="mt-4 flex gap-2 justify-center text-[11px]">
                  <span className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md text-white transition-colors cursor-pointer">Print Receipt</span>
                  <span className="bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md text-white transition-colors cursor-pointer">Email Receipt</span>
                </div>
              </div>
            )}

            {/* Screen Footer Interactive Switcher */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-emerald-400" /> PCI-PTS 6.x
              </span>
              <button
                type="button"
                onClick={handleSimulatePayment}
                className="text-[10px] font-semibold text-brand-accent hover:text-white transition-colors bg-brand-blue/20 px-2 py-0.5 rounded border border-brand-accent/30"
              >
                {screenState === "approved" ? "Reset Demo" : "Simulate Tap →"}
              </button>
            </div>
          </div>

          {/* Keypad Section (Physical tactile buttons) */}
          <div className="mt-4 px-2 pb-1">
            <div className="grid grid-cols-3 gap-2 text-center">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setAmount((prev) => (prev.length < 5 ? prev + num : prev))}
                  className="h-9 rounded-xl bg-[#162032] hover:bg-[#1E2D47] text-slate-200 font-semibold text-sm shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] active:translate-y-0.5 transition-all"
                >
                  {num}
                </button>
              ))}

              {/* Red Cancel Button */}
              <button
                type="button"
                onClick={() => {
                  setAmount("0.00");
                  setScreenState("ready");
                }}
                className="h-9 rounded-xl bg-gradient-to-b from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] active:translate-y-0.5 transition-all flex items-center justify-center tracking-wider"
                title="Cancel / Clear"
              >
                ✕ CANCEL
              </button>

              {/* Zero */}
              <button
                type="button"
                onClick={() => setAmount((prev) => (prev !== "0.00" && prev.length < 5 ? prev + "0" : prev))}
                className="h-9 rounded-xl bg-[#162032] hover:bg-[#1E2D47] text-slate-200 font-semibold text-sm shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] active:translate-y-0.5 transition-all"
              >
                0
              </button>

              {/* Green OK/Enter Button */}
              <button
                type="button"
                onClick={handleSimulatePayment}
                className="h-9 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 text-white font-bold text-xs shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] active:translate-y-0.5 transition-all flex items-center justify-center tracking-wider"
                title="OK / Confirm"
              >
                ✓ ENTER
              </button>
            </div>
          </div>

          {/* Bottom Card Insertion Slot */}
          <div className="mx-auto mt-3 h-1.5 w-24 rounded-full bg-[#050811] shadow-[inset_0_1px_1px_rgba(0,0,0,0.9)] border-t border-white/5" />
        </div>

        {/* Floating Feature Tags */}
        <div className="absolute -bottom-4 -left-6 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-xl flex items-center gap-2 text-xs text-white">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Multi-Network 4G Roaming</span>
        </div>

        <div className="absolute -top-3 -right-4 bg-blue-600/90 backdrop-blur-md border border-white/20 rounded-xl px-3 py-1.5 shadow-xl text-xs text-white font-bold">
          £0 Monthly Rental*
        </div>
      </div>
    </div>
  );
}
