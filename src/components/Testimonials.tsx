"use client";

import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Muhammad Usman",
      role: "Software Engineer, Lahore",
      review:
        "I was previously paying higher rates on other tax websites. Found PakFiler.online and filed my salaried return for only Rs. 1,999! Sent my salary slips on WhatsApp at 11 AM, and by 4 PM my FBR CPR was issued and ATL active. Unbeatable rate and service.",
      rating: 5,
      service: "Salaried Return (Rs. 1,999)",
    },
    {
      name: "Fatima Tariq",
      role: "E-Commerce Business Owner, Karachi",
      review:
        "Registered my Sole Proprietor NTN and filed business tax returns. What impressed me most was that they have a real physical office with qualified CAs. The team answered all my questions on WhatsApp directly. Saved Rs. 2,000 on both services combined!",
      rating: 5,
      service: "Business NTN + Tax Return",
    },
    {
      name: "Ali Raza Khan",
      role: "Financial Analyst, Islamabad",
      review:
        "The salary tax calculator is spot on with current FBR slabs. Their Chartered Accountants did a thorough review of my multiple employer incomes and claimed withholding deductions from my vehicle token tax. Highly professional and 100% recommended.",
      rating: 5,
      service: "Personal Tax Filing (Multiple Sources)",
    },
    {
      name: "Zeeshan Ahmed",
      role: "Director, Tech Solutions SMC-Pvt, Rawalpindi",
      review:
        "Handled our SECP Single Member Company incorporation and Corporate NTN. They communicated every government fee clearly and saved us Rs. 1,000 on professional fees. Delivered our SECP certificate within 6 days.",
      rating: 5,
      service: "SECP SMC Incorporation",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Client Trust
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Taxpayers Across Pakistan
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            See what salaried professionals, freelancers, and growing businesses say about our speed, affordability, and CA expertise.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-[#FAFCFA] border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Stars and Service Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                    {r.service}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{r.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Filer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
