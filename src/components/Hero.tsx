"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  MessageCircle,
  Calculator,
  ArrowRight,
  Sparkles,
  Zap,
  Building2,
  FileCheck,
} from "lucide-react";

export default function Hero() {
  const whatsappNumber = "03094192790";
  
  // Quick service quote selector in hero
  const servicesList = [
    { id: "salary-1", name: "Salaried Return (1 Source)", market: 2999, our: 1999 },
    { id: "salary-multi", name: "Salaried Return (Multiple Sources)", market: 2999, our: 1999 },
    { id: "business-sole", name: "Sole Proprietor / Freelancer Return", market: 3499, our: 2499 },
    { id: "business-aop", name: "Partnership / AOP Tax Return", market: 5499, our: 4499 },
    { id: "business-pvt", name: "Private Limited Company Tax Return", market: 6999, our: 5999 },
    { id: "ntn-salaried", name: "Salaried Individual NTN", market: 1000, our: 0 },
    { id: "ntn-business", name: "Sole Proprietor Business NTN", market: 2000, our: 1000 },
    { id: "gst", name: "GST / Sales Tax (STRN) Registration", market: 10000, our: 9000 },
    { id: "secp-pvt", name: "SECP Pvt Ltd Company Incorporation", market: 25000, our: 24000 },
  ];

  const [selectedService, setSelectedService] = useState(servicesList[0]);

  const heroWhatsAppLink = `https://wa.me/923094192790?text=${encodeURIComponent(
    `Hello PakFiler.online, I want to book '${selectedService.name}' at the special discounted rate of Rs. ${selectedService.our.toLocaleString()}. Please guide me.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-[#FAFCFA] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-emerald-100/60">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 -z-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>CA-Certified Tax Experts in Pakistan</span>
              <span className="bg-emerald-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                Rs. 1,000 Less
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              File Your Taxes Online.{" "}
              <span className="text-emerald-700 bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 to-teal-700">
                Fast, CA-Certified
              </span>{" "}
              &amp; Guaranteed Lowest Rates.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From salaried employees and freelancers to corporate businesses,{" "}
              <strong>PakFiler.online</strong> handles your FBR tax returns, NTN registration,
              GST, and SECP company incorporation. Keep every service{" "}
              <span className="font-semibold text-emerald-700 underline decoration-emerald-400 decoration-2">
                Rs. 1,000 less
              </span>{" "}
              than other portals with direct 1-on-1 WhatsApp support.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% CA Certified</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Active ATL Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1–2 Days Turnaround</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct WhatsApp Filing</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Established Real Office</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={`https://wa.me/923094192790?text=${encodeURIComponent(
                  "Hello PakFiler.online! I want to file my tax return or register for NTN today. Please assist me."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start on WhatsApp (0309 4192790)</span>
              </a>

              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-3.5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span>Salary Tax Calculator</span>
              </a>
            </div>

            {/* Quick Phone Banner */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500">
              <span>Prefer to talk? Call our tax team directly:</span>
              <a
                href="tel:03094192790"
                className="text-emerald-700 font-bold hover:underline"
              >
                0309 4192790
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual & Interactive Live Quote Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Rate & WhatsApp Box */}
            <div className="bg-white rounded-2xl border-2 border-emerald-500/30 shadow-xl p-6 relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Save Rs. 1,000 Here
              </div>

              {/* Header inside card with Circular Badge Logo */}
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-4">
                <div className="relative w-16 h-16 shrink-0 rounded-full border border-emerald-200 overflow-hidden shadow-xs">
                  <Image
                    src="/images/logo-circular.jpg"
                    alt="PakFiler.online Seal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight">
                    Instant Price Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Compare pakfiler.com prices vs our special rate
                  </p>
                </div>
              </div>

              {/* Service Select */}
              <div className="space-y-3">
                <label className="block text-xs font-semibold text-slate-700">
                  Select Your Required Service:
                </label>
                <select
                  value={selectedService.id}
                  onChange={(e) => {
                    const match = servicesList.find((s) => s.id === e.target.value);
                    if (match) setSelectedService(match);
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  {servicesList.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.name}
                    </option>
                  ))}
                </select>

                {/* Price Comparison Display */}
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Market Standard (PakFiler.com):</span>
                    <span className="line-through font-semibold text-slate-400">
                      Rs. {selectedService.market.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between border-t border-emerald-200/60 pt-2">
                    <div>
                      <span className="text-xs font-bold text-emerald-900 block">
                        Our Exclusive Rate:
                      </span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                        {selectedService.our === 0
                          ? "FREE"
                          : `Rs. ${selectedService.our.toLocaleString()}`}
                      </span>
                    </div>

                    <div className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs">
                      YOU SAVE RS. 1,000
                    </div>
                  </div>

                  <p className="text-[11px] text-emerald-800 pt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    All-inclusive professional fee with FBR CA sign-off.
                  </p>
                </div>

                {/* Direct Action */}
                <a
                  href={heroWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Service via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-[11px] text-slate-400">
                  Instant response on WhatsApp • No payment needed to consult
                </p>
              </div>
            </div>

            {/* Quick mini trust banner */}
            <div className="bg-white/80 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs text-slate-600 px-4">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Encrypted &amp; FBR Compliant
              </span>
              <span className="font-semibold text-emerald-700">
                WhatsApp: 0309 4192790
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
