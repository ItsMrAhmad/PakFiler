"use client";

import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Users,
  MapPin,
  Clock,
  MessageCircle,
  FileBadge,
} from "lucide-react";

export default function OfficeSection() {
  const trustPoints = [
    {
      title: "Real Corporate Presence & Physical Office",
      desc: "Unlike faceless websites that outsource sensitive records to anonymous third parties, we operate from a fully staffed executive office.",
    },
    {
      title: "Licensed Chartered Accountants & Tax Lawyers",
      desc: "Every return is supervised and reviewed by certified tax professionals before submission on FBR's IRIS portal.",
    },
    {
      title: "Bank-Grade Confidentiality & Privacy",
      desc: "Your CNIC details, salary slips, and bank statements are encrypted, handled strictly in-house, and never shared.",
    },
    {
      title: "Direct WhatsApp Line (0309 4192790)",
      desc: "Speak with a dedicated tax executive directly — no confusing ticketing systems or frustrating robotic menus.",
    },
  ];

  return (
    <section id="office" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" /> Real Physical Presence &amp; Real Accountability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Executive Office &amp; Certified Tax Advisory
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Trust your financial compliance to an established team. See our corporate workspace,
            meet our consultants, and enjoy seamless tax filing with complete peace of mind.
          </p>
        </div>

        {/* Office Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Office Image Visual (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl group">
              <div className="relative w-full h-[360px] sm:h-[460px]">
                <Image
                  src="/images/office.png"
                  alt="pakfiler.online Executive Office and Tax Advisory"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-400 font-bold block">
                    pakfiler.online Headquarters
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    Tax Return Filing • NTN Registration • Business Compliance
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-emerald-700/80 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>Verified Office</span>
                </div>
              </div>
            </div>

            {/* Quick stats under image */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-800 block">
                  10,000+
                </span>
                <span className="text-[11px] text-slate-600 font-medium">Returns Filed</span>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-800 block">
                  100%
                </span>
                <span className="text-[11px] text-slate-600 font-medium">CA Certified</span>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3">
                <span className="text-xl sm:text-2xl font-extrabold text-emerald-800 block">
                  Rs. 1,000
                </span>
                <span className="text-[11px] text-slate-600 font-medium">Savings / Order</span>
              </div>
            </div>
          </div>

          {/* Office Details & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {trustPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFCFA] border border-slate-200/90 hover:border-emerald-400 rounded-xl p-4 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {point.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Contact Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-900">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Office Hours: Monday – Saturday, 9:00 AM – 7:00 PM</span>
              </div>
              <p className="text-xs text-slate-600">
                Consult online from the comfort of your home via WhatsApp, or schedule an in-person meeting for complex corporate incorporation.
              </p>
              <a
                href={`https://wa.me/923094192790?text=${encodeURIComponent(
                  "Hello PakFiler.online, I want to talk to a tax consultant at your office regarding filing my taxes."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect With Office: 0309 4192790</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
