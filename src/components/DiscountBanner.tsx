"use client";

import { Tag, TrendingDown, Check, ArrowRight, MessageCircle } from "lucide-react";

export default function DiscountBanner() {
  const comparisons = [
    {
      service: "Salaried Return (1 Income Source)",
      pakfilerPrice: "Rs. 2,999",
      ourPrice: "Rs. 1,999",
      savings: "Save Rs. 1,000",
    },
    {
      service: "Business Tax Return (AOP)",
      pakfilerPrice: "Rs. 5,499",
      ourPrice: "Rs. 4,499",
      savings: "Save Rs. 1,000",
    },
    {
      service: "Sole Proprietor NTN Registration",
      pakfilerPrice: "Rs. 2,000",
      ourPrice: "Rs. 1,000",
      savings: "Save Rs. 1,000",
    },
    {
      service: "GST / Sales Tax Registration",
      pakfilerPrice: "Rs. 10,000",
      ourPrice: "Rs. 9,000",
      savings: "Save Rs. 1,000",
    },
    {
      service: "SECP Pvt Ltd Company Formation",
      pakfilerPrice: "Rs. 25,000",
      ourPrice: "Rs. 24,000",
      savings: "Save Rs. 1,000",
    },
  ];

  return (
    <section className="py-12 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <TrendingDown className="w-3.5 h-3.5" /> Direct Price Comparison
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Why Pay More? Get Every Service For{" "}
            <span className="text-amber-300">Rs. 1,000 Less</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100">
            Compare our rates directly against market competitors like PakFiler.com.
            You receive the exact same certified Chartered Accountant preparation, Iris submission,
            and Active Taxpayer List (ATL) guarantee — with a flat Rs. 1,000 discount in your pocket.
          </p>
        </div>

        {/* Pricing comparison table cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {comparisons.map((c, idx) => (
            <div
              key={idx}
              className="bg-emerald-950/60 border border-emerald-700/50 rounded-xl p-4 flex flex-col justify-between hover:border-amber-400 transition-colors"
            >
              <div>
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider block mb-1">
                  Service
                </span>
                <h4 className="text-sm font-bold text-white line-clamp-2 min-h-[2.5rem]">
                  {c.service}
                </h4>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-800/80 space-y-1">
                <div className="flex justify-between items-center text-xs text-emerald-300/80">
                  <span>PakFiler.com:</span>
                  <span className="line-through text-slate-400 font-medium">
                    {c.pakfilerPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white font-medium">PakFiler.online:</span>
                  <span className="text-lg font-black text-amber-300">
                    {c.ourPrice}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-2">
                <span className="w-full text-center block bg-emerald-800/90 text-emerald-200 text-xs font-bold py-1 px-2 rounded-md">
                  {c.savings}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Action bar */}
        <div className="mt-8 pt-6 border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-emerald-200 text-center sm:text-left">
            <Check className="w-5 h-5 text-amber-300 shrink-0 hidden sm:block" />
            <span>
              All prices include complete FBR Iris filing, CPR acknowledgment receipt &amp; CA review.
            </span>
          </div>

          <a
            href={`https://wa.me/923094192790?text=${encodeURIComponent(
              "Hello PakFiler.online, I want to avail the Rs. 1,000 discount on tax filing!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Claim Rs. 1,000 Discount on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
