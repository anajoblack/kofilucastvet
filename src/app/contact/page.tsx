"use strict";
"use client";

import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Contact Oti Regional Directorate"
        highlightedWord="Contact"
        subtitle="Get in touch with the Ghana TVET Service Oti Regional Directorate for admissions, institutional partnerships, and enquiries."
        badge="Official Directorate Helpdesk"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/80 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#034e9f] bg-[#034e9f]/10 px-3 py-1 rounded-full">
                    Direct Lines
                  </span>
                  <h2 className="text-2xl font-extrabold text-neutral-900 mt-3">
                    Regional Directorate
                  </h2>
                </div>

                <div className="space-y-5 text-sm text-neutral-700">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#034e9f]/10 text-[#034e9f] flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">Postal & Digital Address</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                        P.O. BOX 1, Dambai, Oti Region, Ghana
                      </p>
                      <p className="text-xs font-semibold text-[#034e9f] mt-1">
                        GPS: OE-00738-3892
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#f7b500]/20 text-[#b38300] flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-[#034e9f]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">Phone Numbers</h4>
                      <div className="space-y-1 text-xs sm:text-sm text-neutral-600 mt-1">
                        <p>
                          <strong className="text-neutral-800">Ag. Regional Director:</strong>{" "}
                          <a href="tel:+233242133352" className="hover:text-[#034e9f]">
                            (+233) 024 213 3352
                          </a>
                        </p>
                        <p>
                          <strong className="text-neutral-800">Deputy Regional Director:</strong>{" "}
                          <a href="tel:+233246995662" className="hover:text-[#034e9f]">
                            (+233) 024 699 5662
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#034e9f]/10 text-[#034e9f] flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">Official Email</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                        <a
                          href="mailto:otiregiondirectorate@gtvets.gov.gh"
                          className="text-[#034e9f] hover:underline break-all"
                        >
                          otiregiondirectorate@gtvets.gov.gh
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-100 text-neutral-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">Working Hours</h4>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                        Monday – Friday: 8:00 AM – 5:00 PM GMT
                      </p>
                      <p className="text-xs text-neutral-500">Closed on weekends & statutory holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-neutral-600 mb-8">
                Fill out the form below and our secretariat will review and respond promptly.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900">
                    Thank You for Contacting Us!
                  </h4>
                  <p className="text-sm text-neutral-700 max-w-md mx-auto">
                    Your message has been received by the Oti TVET Regional Directorate. An officer will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#034e9f] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#034e9f] text-sm text-neutral-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. kwame@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#034e9f] text-sm text-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Admission Inquiry / Partnership Proposal"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#034e9f] text-sm text-neutral-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#034e9f] text-sm text-neutral-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#034e9f] hover:bg-[#023368] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors shadow-md"
                  >
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
