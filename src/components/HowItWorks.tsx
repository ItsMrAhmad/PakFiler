"use client";

import { MessageSquare, FileCheck2, Award, ArrowRight, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Connect on WhatsApp",
      desc: "Message us at 0309 4192790. Tell us which service you need (Tax Return, NTN, GST, or Company setup). Our tax advisor replies immediately.",
    },
    {
      step: "02",
      icon: FileCheck2,
      title: "Share Simple Documents",
      desc: "Snap a photo of your CNIC and share your salary slip or annual bank statement right on WhatsApp. No complex forms or manual portal inputs.",
    },
    {
      step: "03",
      icon: Award,
      title: "CA Files on FBR IRIS & Confirms ATL",
      desc: "Our Chartered Accountants reconcile your wealth, optimize legal deductions, submit to FBR Iris, and deliver your official CPR acknowledgment.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
            3 Easy Steps
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Filing Taxes Works on PakFiler.online
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We removed the headaches of navigating the confusing FBR IRIS portal.
            Everything happens effortlessly over WhatsApp.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFCFA] border border-slate-200 rounded-2xl p-8 relative flex flex-col justify-between hover:border-emerald-400 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-4xl font-black text-slate-200">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {st.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center text-xs font-semibold text-emerald-700">
                  <span>Fast &amp; 100% Confidential</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/923094192790?text=${encodeURIComponent(
              "Hello PakFiler.online, I'm ready to file my taxes in 3 easy steps. Please start my process."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Start Step 1 on WhatsApp: 0309 4192790</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
