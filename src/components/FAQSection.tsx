"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is required to file an income tax return in Pakistan?",
      a: "Under Section 114 of the Income Tax Ordinance 2001, any individual whose annual taxable income exceeds Rs. 600,000 is legally required to file an annual tax return. In addition, anyone owning immovable property with a land area of 500 square yards or a flat, anyone owning a motor vehicle above 1000cc, holders of commercial electricity connections exceeding Rs. 500,000 annual bills, and all registered business entities (Sole Proprietors, AOPs, Companies) must file regardless of income.",
    },
    {
      q: "Why is your pricing Rs. 1,000 less than PakFiler.com and other portals?",
      a: "We believe professional tax compliance should be transparent, accessible, and affordable for every Pakistani. By streamlining our operations through direct WhatsApp onboarding and utilizing automated CA ledger reconciliation, we cut out wasteful administrative overhead and pass the full Rs. 1,000 savings directly to you.",
    },
    {
      q: "Are the returns filed by qualified Chartered Accountants?",
      a: "Yes, 100%. Every single return is prepared, audited, and submitted by qualified Chartered Accountants (ICAP) and registered FBR tax practitioners. You receive the exact same certified FBR submission, Iris verification, and official FBR Computerized Payment Receipt (CPR) as premium offline firms.",
    },
    {
      q: "What is an NTN and how is it different from a CNIC?",
      a: "For Pakistani individual citizens, your 13-digit CNIC acts as your National Tax Number (NTN) once registered on FBR's IRIS portal. For partnerships (AOPs), foreign nationals, and SECP-registered companies, FBR issues a dedicated 7-digit corporate NTN with a check digit. We handle both individual e-enrolment (Free with return filing) and corporate NTN registration.",
    },
    {
      q: "What documents do I need to send on WhatsApp for salaried tax filing?",
      a: "For a salaried return, all you need to share on WhatsApp (0309 4192790) is: 1) A clear photo of your CNIC (front and back), 2) Annual salary certificate or monthly pay slips from your employer, 3) Annual bank account statement (or closing balance), and 4) Any withholding tax certificates (such as mobile phone tax deduction, car token tax, or property transactions) to claim refunds.",
    },
    {
      q: "How long does it take for my name to appear on the Active Taxpayer List (ATL)?",
      a: "Once we submit your return on FBR Iris, FBR updates the Active Taxpayer List (ATL) every Monday, or instantly if paid with the standard surcharge for previous tax years. You will receive immediate FBR acknowledgment CPR proof on WhatsApp.",
    },
    {
      q: "Do I have to visit your office in person, or is the process 100% online?",
      a: "Our service is 100% digital and online via WhatsApp (0309 4192790) for maximum convenience anywhere in Pakistan or overseas. However, unlike faceless websites, we maintain a fully staffed physical corporate office where clients can also visit for in-person corporate consultations or SECP company setup meetings.",
    },
    {
      q: "Are there any hidden fees or extra government charges?",
      a: "None. All our quoted fees (e.g. Rs. 1,999 for salaried return) are all-inclusive of professional review and FBR submission. For services with mandatory government fees (such as SECP company incorporation or trademark registration), the official government fee is explicitly communicated upfront before you proceed.",
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#FAFCFA] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Everything you need to know about income tax filing, NTN registration, and saving Rs. 1,000 on compliance.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors focus:outline-hidden"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">
              Still have a specific question about your tax status?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Chat directly with our tax consultants on WhatsApp. We answer promptly.
            </p>
          </div>
          <a
            href={`https://wa.me/923094192790?text=${encodeURIComponent(
              "Hello PakFiler.online, I have a question about my tax filing and FBR status."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp: 0309 4192790</span>
          </a>
        </div>

      </div>
    </section>
  );
}
