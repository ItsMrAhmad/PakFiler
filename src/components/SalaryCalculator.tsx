"use client";

import { useState } from "react";
import { Calculator, ArrowRight, MessageCircle, Info, Sparkles, CheckCircle2 } from "lucide-react";

export default function SalaryCalculator() {
  const [monthlySalary, setMonthlySalary] = useState<number>(150000);

  // Pakistan Tax Year 2024-2025 / 2025-2026 Salaried Tax Slabs
  const calculateTax = (annual: number) => {
    let tax = 0;
    if (annual <= 600000) {
      tax = 0;
    } else if (annual <= 1200000) {
      tax = (annual - 600000) * 0.05;
    } else if (annual <= 2200000) {
      tax = 30000 + (annual - 1200000) * 0.15;
    } else if (annual <= 3200000) {
      tax = 180000 + (annual - 2200000) * 0.25;
    } else if (annual <= 4100000) {
      tax = 430000 + (annual - 3200000) * 0.30;
    } else {
      tax = 700000 + (annual - 4100000) * 0.35;
    }
    return tax;
  };

  const annualSalary = (monthlySalary || 0) * 12;
  const annualTax = calculateTax(annualSalary);
  const monthlyTax = annualTax / 12;
  const monthlyNet = (monthlySalary || 0) - monthlyTax;
  const effectiveRate = annualSalary > 0 ? (annualTax / annualSalary) * 100 : 0;

  const quickSalaries = [50000, 80000, 120000, 175000, 250000, 400000];

  const whatsappMessage = `Hello PakFiler.online, I used your salary tax calculator. My monthly salary is Rs. ${monthlySalary.toLocaleString()} and my estimated monthly tax is Rs. ${Math.round(
    monthlyTax
  ).toLocaleString()}. I would like to file my tax return for Rs. 1,999 (Rs. 1,000 OFF special). Please guide me.`;

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> 100% Free FBR Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pakistan Salary Tax Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Updated with current FBR Tax Slabs for salaried individuals.
            Calculate your monthly deduction, take-home salary, and let our CAs file your return for just{" "}
            <strong className="text-emerald-700">Rs. 1,999</strong> (Save Rs. 1,000!).
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-white border-2 border-emerald-500/20 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Input Side (7 cols) */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  Monthly Gross Salary (in PKR):
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">
                    Rs.
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="5000"
                    value={monthlySalary || ""}
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="w-full bg-white border-2 border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 rounded-xl pl-12 pr-4 py-3 text-lg font-bold text-slate-900 transition-all outline-hidden"
                    placeholder="e.g. 150000"
                  />
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div>
                <span className="text-xs font-semibold text-slate-500 block mb-2">
                  Quick Select Typical Salaries:
                </span>
                <div className="flex flex-wrap gap-2">
                  {quickSalaries.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setMonthlySalary(val)}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                        monthlySalary === val
                          ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50"
                      }`}
                    >
                      Rs. {(val / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider representation */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>Rs. 0</span>
                  <span>Rs. 500,000 / month</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="5000"
                  value={monthlySalary || 0}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Info Note */}
              <div className="bg-emerald-100/60 border border-emerald-200/80 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-emerald-900">
                <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>FBR Exemption:</strong> In Pakistan, annual income up to Rs. 600,000 (Rs. 50,000/mo) is 100% tax exempt. However, filing a tax return is required to remain on the Active Taxpayer List (ATL) and avoid heavy withholding taxes.
                </span>
              </div>
            </div>

            {/* Result Side (5 cols) */}
            <div className="md:col-span-5 p-6 sm:p-8 bg-emerald-900 text-white flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 block mb-1">
                  Calculation Summary
                </span>
                <h3 className="text-lg font-bold text-white mb-4">
                  Tax Breakdown
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between pb-2 border-b border-emerald-800">
                    <span className="text-emerald-200">Annual Gross:</span>
                    <span className="font-bold text-white">
                      Rs. {annualSalary.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pb-2 border-b border-emerald-800">
                    <span className="text-emerald-200">Monthly Tax Deduction:</span>
                    <span className="font-bold text-amber-300 text-base">
                      Rs. {Math.round(monthlyTax).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pb-2 border-b border-emerald-800">
                    <span className="text-emerald-200">Annual Tax Liability:</span>
                    <span className="font-bold text-amber-300">
                      Rs. {Math.round(annualTax).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pb-2 border-b border-emerald-800">
                    <span className="text-emerald-200">Monthly Net (In Hand):</span>
                    <span className="font-bold text-white text-base">
                      Rs. {Math.round(monthlyNet).toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between pt-1">
                    <span className="text-emerald-200">Effective Tax Rate:</span>
                    <span className="font-bold text-white">
                      {effectiveRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Filing CTA */}
              <div className="pt-4 border-t border-emerald-800/80 space-y-3">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-emerald-200">Our Filing Fee:</span>
                  <div className="text-right">
                    <span className="line-through text-slate-400 mr-2 text-xs">Rs. 2,999</span>
                    <span className="text-amber-300 font-extrabold text-lg">Rs. 1,999</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/923094192790?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>File Return for Rs. 1,999</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-[11px] text-emerald-300/80 text-center flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  Includes full CA review &amp; FBR CPR receipt.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
