"use client";

import {
  ShieldCheck,
  TrendingDown,
  Clock,
  Award,
  Lock,
  Headphones,
  CheckCircle2,
  FileCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: TrendingDown,
      title: "Rs. 1,000 Flat Savings",
      desc: "Every single service is priced Rs. 1,000 below market competitors like PakFiler.com without compromising on quality or legal verification.",
    },
    {
      icon: Award,
      title: "CA-Certified Accuracy",
      desc: "All calculations and declarations are prepared and reviewed by qualified Chartered Accountants (ICAP) ensuring 100% legal compliance.",
    },
    {
      icon: Clock,
      title: "Fast 24–48h Turnaround",
      desc: "We understand deadlines. Once your documents are received on WhatsApp, your return is submitted and CPR issued within 24 to 48 hours.",
    },
    {
      icon: Headphones,
      title: "Direct WhatsApp Line",
      desc: "No automated phone trees or robotic chatbot frustration. You chat directly with knowledgeable tax professionals at 0309 4192790.",
    },
    {
      icon: Lock,
      title: "Bank-Grade Confidentiality",
      desc: "Your CNIC, salary records, bank statements, and business ledgers are securely protected with enterprise privacy and strict in-house protocol.",
    },
    {
      icon: FileCheck,
      title: "Active Taxpayer List (ATL)",
      desc: "We guarantee your name updates on the FBR Active Taxpayer List so you instantly enjoy reduced withholding tax rates across Pakistan.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-[#FAFCFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> The PakFiler.online Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands of Pakistanis Choose Us
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We combined the speed and ease of modern messaging with the rigorous precision of certified Chartered Accountants.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
