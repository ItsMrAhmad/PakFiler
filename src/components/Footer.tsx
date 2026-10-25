"use client";

import Image from "next/image";
import { MessageCircle, Phone, Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "03094192790";
  const whatsappLink = `https://wa.me/923094192790?text=${encodeURIComponent(
    "Hello PakFiler.online, I want to inquire about tax filing services."
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-md shrink-0">
                <Image
                  src="/images/logo-circular.jpg"
                  alt="PakFiler.online Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">
                  pakfiler<span className="text-emerald-400">.online</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">
                  Tax &amp; Compliance Partner
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Pakistan&apos;s trusted online tax filing and business compliance partner.
              Professional CA-certified FBR income tax returns, NTN registration, GST &amp; SECP company incorporation.
              Always guaranteed <strong>Rs. 1,000 less</strong> than market rates.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-emerald-400 font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 0309 4192790</span>
              </a>
              <a
                href={`tel:${whatsappNumber}`}
                className="inline-flex items-center gap-2 hover:text-emerald-400 font-semibold"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Direct Call: 0309 4192790</span>
              </a>
            </div>
          </div>

          {/* Col 3: Tax Filing Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Tax Filing Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Salaried Tax Return (Rs. 1,999)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Multi-Source Return (Rs. 1,999)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Sole Proprietor Return (Rs. 2,499)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Partnership / AOP Return (Rs. 4,499)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Pvt Ltd Corporate Return (Rs. 5,999)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Family Tax Filing (Rs. 1,999/mbr)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: NTN & Registration */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              NTN &amp; Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Salaried NTN (FREE with filing)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Business NTN (Rs. 1,000)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  AOP Partnership NTN (Rs. 3,500)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  GST Sales Tax / STRN (Rs. 9,000)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  SECP Pvt Ltd Company (Rs. 24,000)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  PSEB Freelancer / IT (Rs. 14,000)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Trust Seal & Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Verification &amp; Seal
            </h4>
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-md">
              <Image
                src="/images/logo-circular.jpg"
                alt="PakFiler.online Official Badge"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              CA-supervised online tax compliance platform for Pakistan.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Active Taxpayer (ATL) Verified</span>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 <strong>pakfiler.online</strong>. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <span>Registered with FBR</span>
            <span>•</span>
            <span>CA-Certified Quality</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Proudly Built for Pakistan 🇵🇰
            </span>
            <span>•</span>
            <span>
              Built by{" "}
              <a
                href="https://techsistlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-2 transition-colors"
              >
                Techsist Labs
              </a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
