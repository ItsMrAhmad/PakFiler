"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, Menu, X, ShieldCheck, Tag } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "03094192790";
  const whatsappLink = `https://wa.me/923094192790?text=${encodeURIComponent(
    "Hello PakFiler.online, I want to inquire about tax filing and registration services."
  )}`;

  const navLinks = [
    { name: "Services & Pricing", href: "#services" },
    { name: "Tax Calculator", href: "#calculator" },
    { name: "NTN Registration", href: "#ntn" },
    { name: "Our Office", href: "#office" },
    { name: "Why Us", href: "#why-us" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Discount & Contact Bar */}
      <div className="bg-emerald-800 text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-10 transition-colors">
        <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              <Tag className="w-3 h-3" /> Special Offer
            </span>
            <span>
              Flat <strong>Rs. 1,000 OFF</strong> on all FBR Tax Returns & NTN Services!
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100 text-xs">
            <a
              href={`tel:${whatsappNumber}`}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>Call: 0309 4192790</span>
            </a>
            <span className="text-emerald-500">|</span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 font-semibold text-emerald-200 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: 0309 4192790</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between h-20 gap-4">
          {/* Logo on Left */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-emerald-500 shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-circular.jpg"
                alt="pakfiler.online logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                pakfiler<span className="text-emerald-600">.online</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                Tax &amp; Compliance Partner
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-emerald-700 text-sm font-semibold whitespace-nowrap transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons on Right */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${whatsappNumber}`}
              className="hidden md:flex items-center gap-2 text-slate-700 hover:text-emerald-700 px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>0309 4192790</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md whitespace-nowrap transition-all duration-200 group"
            >
              <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>WhatsApp Us</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${whatsappNumber}`}
              className="w-full flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call: 0309 4192790
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp: 0309 4192790
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
