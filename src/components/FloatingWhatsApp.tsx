"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "03094192790";
  const whatsappLink = `https://wa.me/923094192790?text=${encodeURIComponent(
    "Hello PakFiler.online, I want to file my taxes and avail the Rs. 1,000 discount. Please assist me."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Help tooltip on desktop */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-3.5 py-2 rounded-full shadow-lg border border-emerald-200 hover:bg-emerald-50 transition-all hover:scale-105"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Online Tax Help (0309 4192790)</span>
      </a>

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PakFiler on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        {/* Pulsating Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping"></span>
        
        <MessageCircle className="w-7 h-7 text-white fill-white relative z-10" />

        {/* Small Notification Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
}
