"use client";

import { Check, X, ShieldAlert, Sparkles, MessageCircle } from "lucide-react";

export default function FilerBenefits() {
  const comparisons = [
    {
      item: "Cash Withdrawals from Banks (> Rs. 50k)",
      filer: "0% Withholding Tax",
      nonFiler: "0.6% Deducted on every withdrawal",
      highlight: true,
    },
    {
      item: "Property / Plot Purchase (Sec 236K)",
      filer: "3% Standard Rate",
      nonFiler: "10.5% to 15% Punitive Tax",
      highlight: true,
    },
    {
      item: "Property / Plot Sale (Sec 236C)",
      filer: "3% Standard Rate",
      nonFiler: "6% to 10% Punitive Tax",
      highlight: false,
    },
    {
      item: "New Vehicle / Car Registration & Token",
      filer: "Standard Notified Rate",
      nonFiler: "100% to 200% Higher Punitive Tax",
      highlight: true,
    },
    {
      item: "Bank Profit / Savings Account Dividends",
      filer: "15% Withholding Tax",
      nonFiler: "30% Withholding Tax (Double)",
      highlight: false,
    },
    {
      item: "Prize Bonds & Lottery Winnings",
      filer: "15% Tax",
      nonFiler: "30% Tax",
      highlight: false,
    },
    {
      item: "Overseas Travel & Mobile Sim Status",
      filer: "Completely Unrestricted",
      nonFiler: "Risk of Sim Block & Travel Bar under FBR rules",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAFCFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-red-600" /> Save Millions on Taxes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Filer (Active Taxpayer) vs Non-Filer Rates
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Becoming an active tax filer saves you tens of thousands of rupees on every banking,
            vehicle, and real estate transaction. File today for only{" "}
            <strong className="text-emerald-700">Rs. 999</strong> and claim active ATL status.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Transaction / Service</th>
                  <th className="py-4 px-6 font-bold text-emerald-800 bg-emerald-50/70">
                    Active Filer (You)
                  </th>
                  <th className="py-4 px-6 font-bold text-red-700 bg-red-50/50">
                    Non-Filer Penalty
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50/70 transition-colors ${
                      row.highlight ? "bg-emerald-50/20" : ""
                    }`}
                  >
                    <td className="py-3.5 px-6 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="py-3.5 px-6 font-bold text-emerald-700 bg-emerald-50/40 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{row.filer}</span>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-red-600 bg-red-50/30">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.nonFiler}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="bg-gradient-to-r from-emerald-900 to-slate-900 text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-amber-300 font-bold text-sm block">
                Do not let Non-Filer taxes drain your hard-earned money!
              </span>
              <p className="text-xs text-emerald-100">
                Our CAs update your name on the Active Taxpayer List (ATL) within 24–48 hours.
              </p>
            </div>

            <a
              href={`https://wa.me/923094192790?text=${encodeURIComponent(
                "Hello PakFiler.online, I want to become an Active Tax Filer (ATL) to avoid non-filer tax deductions."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Become a Filer for Rs. 999</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
