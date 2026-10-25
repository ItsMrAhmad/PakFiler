"use client";

import { useState } from "react";
import {
  FileText,
  Building,
  UserCheck,
  Receipt,
  Layers,
  CheckCircle2,
  Clock,
  MessageCircle,
  Tag,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "personal" | "ntn" | "business" | "incorporation" | "gst";
  title: string;
  categoryLabel: string;
  pakfilerPrice: number;
  ourPrice: number;
  timeline: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export default function ServicesPricing() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const services: ServiceItem[] = [
    // Personal Tax Filing
    {
      id: "personal-single",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Salaried Return (1 Income Source)",
      pakfilerPrice: 2999,
      ourPrice: 1999,
      timeline: "1–2 Working Days",
      description: "For corporate employees, teachers, banking professionals, and researchers with salary from a single employer.",
      popular: true,
      features: [
        "Full FBR IRIS e-filing",
        "Verification of salary withholding taxes",
        "Wealth statement reconciliation",
        "Active Taxpayer List (ATL) status guaranteed",
        "Official FBR CPR & acknowledgment receipt",
      ],
    },
    {
      id: "personal-multi",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Salaried Return (Multiple Income Sources)",
      pakfilerPrice: 2999,
      ourPrice: 1999,
      timeline: "1–2 Working Days",
      description: "For individuals with salary from two or more employers, bonus payments, or part-time employment within the tax year.",
      features: [
        "Consolidation of multiple salary slips & tax certificates",
        "Comprehensive tax slab calculation",
        "Wealth statement adjustment",
        "CA review & error-free guarantee",
        "Active Taxpayer status",
      ],
    },
    {
      id: "sole-single",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Sole Proprietor / Freelancer Tax Filing",
      pakfilerPrice: 3499,
      ourPrice: 2499,
      timeline: "2–3 Working Days",
      description: "For individual business owners, freelancers, consultants, shopkeepers, and independent contractors.",
      features: [
        "Business profit & loss statement preparation",
        "Calculation of turnover tax & income tax",
        "Reconciliation of business bank inflows/outflows",
        "Maximization of legal expense deductions",
        "ATL Active status for banking transactions",
      ],
    },
    {
      id: "sole-multi",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Sole Proprietor + Other Income Sources",
      pakfilerPrice: 5499,
      ourPrice: 4499,
      timeline: "2–3 Working Days",
      description: "For business owners or freelancers who also receive salary, property rental income, capital gains, or foreign remittances.",
      features: [
        "Complete multi-stream income consolidation",
        "Foreign remittance tax exemption documentation",
        "Rental income deduction & tax calculation",
        "Senior CA audit & review",
        "Comprehensive wealth reconciliation",
      ],
    },
    {
      id: "managed-upload",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Fully Managed Document Upload (Personal)",
      pakfilerPrice: 5500,
      ourPrice: 4500,
      timeline: "1–2 Working Days",
      description: "Don't want to fill forms? Simply photograph or send your bank statements and CNIC on WhatsApp — our CAs handle everything.",
      features: [
        "Zero form filling required",
        "Dedicated Chartered Accountant assigned",
        "Full banking ledger extraction & calculation",
        "Priority expedited filing within 24 hours",
        "Direct phone consultation with your CA",
      ],
    },
    {
      id: "family-filing",
      category: "personal",
      categoryLabel: "Personal Tax",
      title: "Family Tax Filing Package",
      pakfilerPrice: 3998,
      ourPrice: 1998,
      timeline: "1–3 Working Days",
      description: "Bundle returns for spouse, parents, or siblings under one coordinated CA team with volume savings.",
      features: [
        "Starting at Rs. 1,999 per family member",
        "Family asset & gift transfer reconciliation",
        "Coordinated wealth statements across all members",
        "Active ATL status for all family members",
      ],
    },

    // NTN & IRIS
    {
      id: "ntn-salaried",
      category: "ntn",
      categoryLabel: "NTN & IRIS",
      title: "Salaried Individual NTN Registration",
      pakfilerPrice: 1000,
      ourPrice: 0,
      timeline: "1–2 Working Days",
      description: "E-enrolment on FBR IRIS for salaried professionals. Your CNIC becomes your recognized national tax number.",
      popular: true,
      features: [
        "100% FREE with any Tax Return filing",
        "FBR IRIS portal account creation",
        "Issuance of Iris login PIN and password",
        "Immediate NTN verification",
        "Eligible for Active Taxpayer List",
      ],
    },
    {
      id: "ntn-sole",
      category: "ntn",
      categoryLabel: "NTN & IRIS",
      title: "Sole Proprietor Business NTN",
      pakfilerPrice: 2000,
      ourPrice: 1000,
      timeline: "1–2 Working Days",
      description: "Register your business or trade name with FBR to open commercial bank accounts and conduct formal trade.",
      features: [
        "Trade name registration on FBR IRIS",
        "Business activity code assignment",
        "Official FBR 181 Modification Order certificate",
        "Bank account opening letter readiness",
        "Lifetime validity",
      ],
    },
    {
      id: "ntn-aop",
      category: "ntn",
      categoryLabel: "NTN & IRIS",
      title: "Partnership / AOP NTN Registration",
      pakfilerPrice: 4500,
      ourPrice: 3500,
      timeline: "2–3 Working Days",
      description: "Dedicated 7-digit NTN issuance from FBR for registered partnerships and associations of persons.",
      features: [
        "Drafting & submission of Form 181 on IRIS",
        "Registration of all partner CNICs as principals",
        "FBR NTN certificate for partnership",
        "Authorized representative setup",
      ],
    },
    {
      id: "ntn-company",
      category: "ntn",
      categoryLabel: "NTN & IRIS",
      title: "Private Limited / SMC NTN Registration",
      pakfilerPrice: 8500,
      ourPrice: 7500,
      timeline: "2–3 Working Days",
      description: "Corporate NTN registration for SECP-incorporated companies, SMCs, and corporate entities.",
      features: [
        "SECP incorporation integration with FBR",
        "Corporate NTN issuance",
        "Principal Officer & Director registration",
        "Full corporate compliance setup",
      ],
    },
    {
      id: "iris-business-update",
      category: "ntn",
      categoryLabel: "NTN & IRIS",
      title: "IRIS Profile Update (Business / Address)",
      pakfilerPrice: 1200,
      ourPrice: 200,
      timeline: "1–3 Working Days",
      description: "Update business address, add bank accounts, change trade names, or update utility consumer numbers on IRIS.",
      features: [
        "Form 181 revision & submission",
        "Add / remove business activities",
        "Update registered phone & email",
        "FBR approved modification certificate",
      ],
    },

    // Business Tax Return
    {
      id: "biz-aop",
      category: "business",
      categoryLabel: "Business Tax",
      title: "Partnership / AOP Tax Return Filing",
      pakfilerPrice: 5499,
      ourPrice: 4499,
      timeline: "2–5 Working Days",
      description: "Comprehensive FBR income tax return for registered partnerships, firms, and joint ventures.",
      features: [
        "Profit & Loss and Balance Sheet review",
        "Partners' profit distribution statement",
        "Adjustment of advance income tax deducted",
        "Senior CA audit & certification",
        "Active Taxpayer List ATL compliance",
      ],
    },
    {
      id: "biz-pvt",
      category: "business",
      categoryLabel: "Business Tax",
      title: "Private Limited Company Tax Return",
      pakfilerPrice: 6999,
      ourPrice: 5999,
      timeline: "3–5 Working Days",
      popular: true,
      description: "Statutory annual corporate income tax return filing for SECP registered Private Limited and SMC companies.",
      features: [
        "Corporate tax computation (Turnover tax / Alternate Corporate Tax)",
        "Depreciation schedule & asset ledger",
        "Withholding tax reconciliation with CPRs",
        "CA sign-off and Iris submission",
        "Avoid heavy Section 182 non-compliance penalties",
      ],
    },
    {
      id: "biz-npo",
      category: "business",
      categoryLabel: "Business Tax",
      title: "Non-Profit Organization (NPO) Tax Return",
      pakfilerPrice: 9999,
      ourPrice: 8999,
      timeline: "3–5 Working Days",
      description: "Specialized tax return filing for trusts, welfare societies, charities, and section 42 non-profits.",
      features: [
        "Tax credit computation under Section 100C",
        "Donation & grant statement documentation",
        "Balance sheet & receipt/expenditure accounts",
        "Full compliance with FBR NPO regulations",
      ],
    },
    {
      id: "biz-managed",
      category: "business",
      categoryLabel: "Business Tax",
      title: "Fully Managed Corporate Return (Document Upload)",
      pakfilerPrice: 10000,
      ourPrice: 9000,
      timeline: "2–4 Working Days",
      description: "Send trial balances or bank statements via WhatsApp — our senior corporate tax specialists construct complete financial statements.",
      features: [
        "Complete financial statements drafting",
        "Senior Corporate Tax Partner supervision",
        "Direct Zoom / Phone consultation",
        "Post-filing audit defense advisory",
      ],
    },

    // Company Incorporation
    {
      id: "inc-pvt",
      category: "incorporation",
      categoryLabel: "Company Setup",
      title: "SECP Private Limited Company Registration",
      pakfilerPrice: 25000,
      ourPrice: 24000,
      timeline: "3–10 Working Days",
      popular: true,
      description: "Full end-to-end registration of a Private Limited Company with the Securities and Exchange Commission of Pakistan (SECP).",
      features: [
        "Company name reservation approval",
        "Drafting Memorandum & Articles of Association (MOA/AOA)",
        "eServices account setup for all directors",
        "Certificate of Incorporation from SECP",
        "Post-registration corporate kit & guidance",
      ],
    },
    {
      id: "inc-smc",
      category: "incorporation",
      categoryLabel: "Company Setup",
      title: "Single Member Company (SMC-Pvt) Registration",
      pakfilerPrice: 25000,
      ourPrice: 24000,
      timeline: "3–10 Working Days",
      description: "Ideal for solo entrepreneurs looking for corporate status and limited liability protection with only 1 shareholder.",
      features: [
        "Full SECP SMC incorporation",
        "Single director documentation",
        "Nominee director appointment filing",
        "SECP Incorporation Certificate",
        "Corporate bank account assistance",
      ],
    },
    {
      id: "inc-llp",
      category: "incorporation",
      categoryLabel: "Company Setup",
      title: "Limited Liability Partnership (LLP) Registration",
      pakfilerPrice: 45000,
      ourPrice: 44000,
      timeline: "7–10 Working Days",
      description: "Combines partnership operational flexibility with the legal limited liability status of a registered company.",
      features: [
        "Drafting comprehensive LLP agreement",
        "SECP LLP registration & certificate",
        "Partners identification & verification",
        "Corporate seal & statutory forms",
      ],
    },
    {
      id: "inc-pseb-free",
      category: "incorporation",
      categoryLabel: "Company Setup",
      title: "PSEB Freelancer Registration",
      pakfilerPrice: 15000,
      ourPrice: 14000,
      timeline: "10 Working Days",
      description: "Registration with Pakistan Software Export Board for IT freelancers to enjoy subsidized banking and 0.25% export tax.",
      features: [
        "PSEB portal application & documentation",
        "Fast-track processing & verification",
        "Official PSEB Freelancer Certificate",
        "Foreign remittance account enablement",
      ],
    },
    {
      id: "inc-pseb-co",
      category: "incorporation",
      categoryLabel: "Company Setup",
      title: "PSEB IT Company Registration",
      pakfilerPrice: 25000,
      ourPrice: 24000,
      timeline: "15 Working Days",
      description: "Accreditation for software houses, BPO centers, and tech startups with the Pakistan Software Export Board.",
      features: [
        "Full PSEB corporate membership documentation",
        "Export tax exemption / reduced 0.25% tax compliance",
        "Specialized IT banking support",
        "Renewals & compliance advisory",
      ],
    },

    // GST & Sales Tax
    {
      id: "gst-fbr",
      category: "gst",
      categoryLabel: "GST & Compliance",
      title: "GST / Sales Tax (STRN) Registration",
      pakfilerPrice: 10000,
      ourPrice: 9000,
      timeline: "3–5 Working Days",
      popular: true,
      description: "Mandatory for manufacturers, importers, exporters, and taxable goods sellers to obtain Sales Tax Registration Number (STRN).",
      features: [
        "Biometric verification coordination",
        "Business premises verification guidance",
        "STRN certificate issuance from FBR",
        "FBR Sales Tax Iris portal configuration",
        "Sales tax invoice format guidance",
      ],
    },
    {
      id: "gst-monthly",
      category: "gst",
      categoryLabel: "GST & Compliance",
      title: "Monthly Sales Tax Return Filing (Single Month)",
      pakfilerPrice: 8000,
      ourPrice: 7000,
      timeline: "Monthly by 15th/18th",
      description: "Regular monthly FBR Annexure-C sales tax returns, input/output tax reconciliation, and challan generation.",
      features: [
        "Input tax credit claiming & verification",
        "Monthly Annex-C sales ledger upload",
        "Payment challan (PSID) generation",
        "Avoid FBR Section 33 penalties & STRN blacklisting",
      ],
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  const tabs = [
    { id: "all", label: "All Services" },
    { id: "personal", label: "Personal Tax" },
    { id: "ntn", label: "NTN & IRIS" },
    { id: "business", label: "Business Tax" },
    { id: "incorporation", label: "SECP Incorporation" },
    { id: "gst", label: "GST & Sales Tax" },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAFCFA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" /> Full Service Catalog &amp; Transparent Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Tax &amp; Business Compliance Services
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            We provide every service listed on leading portals like PakFiler.com —{" "}
            <strong className="text-emerald-700">always at Rs. 1,000 less</strong>.
            Zero hidden charges. No surprise fees.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-150 ${
                activeTab === tab.id
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const savings = service.pakfilerPrice - service.ourPrice;
            const waText = encodeURIComponent(
              `Hello PakFiler.online, I want to book '${service.title}' at the discounted price of Rs. ${service.ourPrice.toLocaleString()} (Rs. ${savings.toLocaleString()} OFF). Please guide me on next steps.`
            );

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between hover:shadow-xl relative overflow-hidden group ${
                  service.popular
                    ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/30"
                    : "border-slate-200/90 shadow-xs hover:border-emerald-300"
                }`}
              >
                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="bg-emerald-600 text-white text-[11px] font-black uppercase tracking-wider py-1 text-center font-sans">
                    ★ Most Requested Service
                  </div>
                )}

                <div className="p-6">
                  {/* Category Pill and Timeline */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="bg-slate-100 text-slate-700 font-semibold px-2.5 py-0.5 rounded-md">
                      {service.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-emerald-600" />
                      {service.timeline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[3rem]">
                    {service.description}
                  </p>

                  {/* Pricing Box */}
                  <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                      <span>Market Price (PakFiler):</span>
                      <span className="line-through text-slate-400 font-semibold">
                        Rs. {service.pakfilerPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs font-bold text-emerald-900 block">
                          Our Rate:
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                          {service.ourPrice === 0
                            ? "FREE"
                            : `Rs. ${service.ourPrice.toLocaleString()}`}
                        </span>
                      </div>

                      <div className="bg-emerald-600 text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs">
                        SAVE RS. {savings.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-5 space-y-2.5">
                    <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                      Included with Service:
                    </span>
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <a
                    href={`https://wa.me/923094192790?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs hover:shadow-md transition-all group-hover:bg-emerald-700"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner at bottom of services */}
        <div className="mt-14 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h4 className="text-xl font-bold">
              Need a Custom Business Tax, Audit or Trademark Service?
            </h4>
            <p className="mt-1 text-sm text-emerald-100 max-w-2xl">
              From corporate compliance to FBR show-cause notices and tax appeals, our qualified Chartered Accountants and legal advocates can resolve any challenge.
            </p>
          </div>
          <a
            href={`https://wa.me/923094192790?text=${encodeURIComponent(
              "Hello PakFiler.online, I need custom tax or corporate advisory. Please connect me with a Chartered Accountant."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Consult on WhatsApp: 0309 4192790</span>
          </a>
        </div>

      </div>
    </section>
  );
}
