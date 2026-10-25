"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Salaried Return (Rs. 1,999)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waMsg = `Hello PakFiler.online!%0A*Name:* ${encodeURIComponent(
      formData.name || "Client"
    )}%0A*WhatsApp:* ${encodeURIComponent(
      formData.phone || "Not provided"
    )}%0A*Service Required:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message || "Please contact me.")}`;

    window.open(`https://wa.me/923094192790?text=${waMsg}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5" /> Instant Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Start Your Filing Today
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Have questions or ready to claim your Rs. 1,000 discount? Send a quick message and our tax experts will respond on WhatsApp immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-2xl p-8 space-y-8 shadow-xl">
            <div>
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                Direct Contact Line
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                pakfiler.online
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 mt-2 leading-relaxed">
                Your trusted partner for tax filing, NTN registration, and business compliance across Pakistan.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="https://wa.me/923094192790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs text-emerald-200 block font-medium">WhatsApp Support (Fastest)</span>
                  <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    0309 4192790
                  </span>
                </div>
              </a>

              <a
                href="tel:03094192790"
                className="flex items-start gap-4 p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-200 block font-medium">Direct Phone Call</span>
                  <span className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    0309 4192790
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3 rounded-xl bg-white/10">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-200 block font-medium">Executive Office &amp; Advisory</span>
                  <span className="text-sm font-semibold text-white">
                    Pakistan Corporate Advisory Office
                  </span>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    Monday to Saturday: 9:00 AM – 7:00 PM PKT
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-700/60 flex items-center gap-2 text-xs text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>100% Secure &amp; Confidential Data Encryption</span>
            </div>
          </div>

          {/* Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFCFA] border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send an Inquiry or Book on WhatsApp
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details below and hit &ldquo;Connect on WhatsApp&rdquo; to begin.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Muhammad Ali"
                  className="w-full bg-white border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your WhatsApp Number:
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0300 1234567"
                  className="w-full bg-white border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Required Service (All Rs. 1,000 Less):
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-white border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-xl px-3 py-2.5 text-sm text-slate-800 outline-hidden cursor-pointer"
                >
                  <option value="Salaried Return - 1 Source (Rs. 1,999)">
                    Salaried Tax Return (1 Source) — Rs. 1,999 (Save Rs. 1,000)
                  </option>
                  <option value="Salaried Return - Multiple Sources (Rs. 1,999)">
                    Salaried Return (Multiple Sources) — Rs. 1,999 (Save Rs. 1,000)
                  </option>
                  <option value="Sole Proprietor Tax Return (Rs. 2,499)">
                    Sole Proprietor / Freelancer Return — Rs. 2,499 (Save Rs. 1,000)
                  </option>
                  <option value="Salaried NTN Registration (FREE with Filing)">
                    Salaried Individual NTN — FREE with Filing (Save Rs. 1,000)
                  </option>
                  <option value="Sole Proprietor Business NTN (Rs. 1,000)">
                    Business NTN Registration — Rs. 1,000 (Save Rs. 1,000)
                  </option>
                  <option value="Business Tax Return AOP (Rs. 4,499)">
                    Partnership / AOP Return — Rs. 4,499 (Save Rs. 1,000)
                  </option>
                  <option value="Private Limited Tax Return (Rs. 5,999)">
                    Private Limited Company Return — Rs. 5,999 (Save Rs. 1,000)
                  </option>
                  <option value="GST Sales Tax Registration (Rs. 9,000)">
                    GST / STRN Registration — Rs. 9,000 (Save Rs. 1,000)
                  </option>
                  <option value="SECP Pvt Ltd Company Incorporation (Rs. 24,000)">
                    SECP Pvt Ltd Company Setup — Rs. 24,000 (Save Rs. 1,000)
                  </option>
                  <option value="Other Corporate Inquiry">
                    Other Tax / Legal Advisory Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Details or Message (Optional):
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your income, employers, or specific requirements..."
                  className="w-full bg-white border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 rounded-xl px-4 py-2.5 text-sm text-slate-900 outline-hidden transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Submit &amp; Connect on WhatsApp: 0309 4192790</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500 pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant response • Direct connection with qualified tax staff</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
