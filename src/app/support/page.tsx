"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Heart, ShieldCheck, CheckCircle2, DollarSign, Smartphone, Landmark, Calendar, Target, Users } from "lucide-react";

export default function SupportPage() {
  const [amount, setAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [currency, setCurrency] = useState("GHS");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const phase2Goals = [
    "Establish Cooperative Agribusiness and non-Agribusiness ventures to create sustainable youth jobs across Oti Region.",
    "Venture into modern Mechanised Farming, commercial Greenhouses, and Skill Incubation Centres in all 9 districts.",
    "Meet regional food consumption demand, curb local food inflation, and produce value-added agro products for export to earn foreign exchange.",
    "Help unskilled, out-of-school, and unemployed youth acquire certified technical trades and micro-enterprise mentorship.",
    "Alleviate the suffering of the jobless, vulnerable, and senior citizens through our structured 'Feeding Ghana' regional community initiative.",
    "Establish subsidized community canteens feeding the vulnerable, apprentices, trainees, and national service personnel with nutritious daily meals.",
    "Provide agricultural produce directly to regional educational institutions to alleviate government feeding grant burdens.",
    "Aggressively promote nutritious, healthy lifestyles under the national 'Eat What We Grow & Grow What We Eat' philosophy.",
  ];

  const actionPlanRows = [
    { activity: "Partnership Framework & MoU", objective: "Cement collaboration and ratify partnership MoU with Strategic Collaborator", target: "OTI TVET & Strategic Partner (NARNGO)", lead: "OTI TVET Directorate / NARNGO" },
    { activity: "State-of-the-Art Website", objective: "Deploy modern regional TVET web portal for public interaction, admissions & marketing", target: "Ghana & Global Diaspora", lead: "OTI TVET Directorate / NARNGO" },
    { activity: "Fundraising Campaign Launch", objective: "Mobilize essential funds to finance 2025 Action Plan and media sensitization", target: "Public Donors, Alumni, Corporate Partners", lead: "Regional Directorate" },
    { activity: "Strategic Improvement Plan Review", objective: "Update and fine-tune Oti Regional TVET Improvement Plan and staff welfare policy", target: "Regional Stakeholders & Principals", lead: "Technical Advisory Committee" },
    { activity: "National Courtesy Calls", objective: "Sensitize governmental leadership, religious councils, and diplomatic missions", target: "Ministries, Embassies, CSOs, Development Partners", lead: "OTI TVET Leadership / NARNGO" },
    { activity: "Regional Stakeholders Conference", objective: "Woo corporate and developmental partners to support institutional infrastructure", target: "Business Community, Municipal Assemblies", lead: "Directorate Secretariat" },
    { activity: "Phase 2 Action Plan Execution", objective: "Commence groundbreaking on school farm factories, solar installations & hostels", target: "All 5 Accredited Institutes & 9 Districts", lead: "Consortium Project Team" },
  ];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Support Oti Regional TVETS"
        highlightedWord="Support"
        subtitle="Join our mission to transform technical education, empower rural youth, and build sustainable agro-enterprises across the Oti Region."
        badge="Official Directorate Fundraising"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support TVETS" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Executive Appeal */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f7b500]/20 text-neutral-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#034e9f]" />
              <span>Official Appeal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Launching of Fundraising Platforms for Oti TVET Regional Directorate
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              We are excited to announce the official launch of our fundraising platforms, aimed at mobilizing essential philanthropic and developmental capital for the implementation of our <strong className="text-neutral-900">2025 ACTION PLAN</strong> programmes, infrastructure projects, and youth welfare initiatives.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed italic bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
              “Every contribution, no matter how small, can have a monumental impact. As the saying goes, ‘Little drops of water make a mighty ocean.’”
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#034e9f] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Transparency and Accountability</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    We will publicly disclose annual audited accounts on our portal, ensuring that all supporters are informed about how their contributions are utilized.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-[#034e9f] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">Complementing Government Efforts</h4>
                  <p className="text-xs text-neutral-600 mt-1">
                    Together with our Strategic Consortium (NARNGO), we bring innovative resource mobilization to directly accelerate UN SDGs 1, 2, 4, and 8.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Donation & Transfer Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Online Donation Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Make a Contribution
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Select your preferred amount and frequency to support student training, tools, and campus facilities.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-neutral-900">Contribution Intent Recorded</h4>
                  <p className="text-xs sm:text-sm text-neutral-700">
                    Thank you, <strong className="text-neutral-900">{donorName || "Supporter"}</strong>! Please proceed to transfer your donation via any of the approved Mobile Money / Bank accounts displayed on this page.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#034e9f] hover:underline pt-2 inline-block"
                  >
                    Make another pledge
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonate} className="space-y-5">
                  {/* Frequency Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                      Donation Frequency
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "one-time", label: "One-Time" },
                        { id: "monthly", label: "Monthly" },
                        { id: "yearly", label: "Yearly" },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFrequency(f.id)}
                          className={`py-2.5 text-xs font-bold rounded-xl border transition-all ${
                            frequency === f.id
                              ? "bg-[#034e9f] text-white border-[#034e9f]"
                              : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Currency & Preset Amounts */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                        Select Amount ({currency})
                      </label>
                      <div className="flex gap-2 text-xs">
                        {["GHS", "USD", "EUR", "GBP"].map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCurrency(c)}
                            className={`px-2 py-0.5 rounded font-bold ${
                              currency === c ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-black"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {["20", "50", "100", "500"].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => {
                            setAmount(val);
                            setCustomAmount("");
                          }}
                          className={`py-3 text-sm font-extrabold rounded-xl border transition-all ${
                            amount === val && !customAmount
                              ? "bg-[#f7b500] text-black border-[#f7b500] shadow-sm"
                              : "bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>

                    <input
                      type="number"
                      placeholder={`Or enter custom amount in ${currency}`}
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount(e.target.value);
                      }}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#034e9f]"
                    />
                  </div>

                  {/* Donor Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="e.g. Kwame Mensah"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#034e9f]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="e.g. +233 24 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#034e9f]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#034e9f] hover:bg-[#023368] text-white font-bold text-sm py-3.5 rounded-full transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4 text-[#f7b500]" />
                    <span>Proceed With {currency} {customAmount || amount} Donation</span>
                  </button>
                </form>
              )}
            </div>

            {/* Direct Mobile Money & Bank Accounts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#023368] text-white rounded-3xl p-8 shadow-lg space-y-6">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-6 h-6 text-[#f7b500]" />
                  <h3 className="text-xl font-bold text-white">Direct Transfer Channels</h3>
                </div>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Send donations to official TVET Directorate accounts via approved Money Transfer Apps in Ghana or internationally:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f7b500]">
                      MTN Mobile Money (MoMo)
                    </span>
                    <p className="text-sm font-mono font-bold text-white tracking-wide">
                      024 213 3352 / 024 699 5662
                    </p>
                    <p className="text-[11px] text-white/70">
                      Account Name: Ghana TVET Service Oti Region
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f7b500]">
                      Telecel Cash / AT Money
                    </span>
                    <p className="text-sm font-mono font-bold text-white tracking-wide">
                      Contact Regional Directorate
                    </p>
                    <p className="text-[11px] text-white/70">
                      Merchant ID available upon request
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#f7b500]">
                      Bank Wire & Corporate Grants
                    </span>
                    <p className="text-xs text-white/90">
                      Official commercial bank account routing numbers for foreign currency wires (USD, EUR, GBP) are provided by the Directorate upon request.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-white/70 leading-relaxed">
                  <strong>Contribution Rules:</strong> Contributions must be made from your own legitimate funds to support TVET education and infrastructure.
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 Action Plan Objectives */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
              What We Intend to Achieve in Phase 2 of the Action Plan
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Your donations directly finance the strategic implementation of our second-phase developmental roadmap:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {phase2Goals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <CheckCircle2 className="w-5 h-5 text-[#034e9f] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2025 Action / Work Plan Table */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                2025 Action / Work Plan Roadmap
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-neutral-700 border-collapse">
                <thead>
                  <tr className="bg-[#034e9f] text-white">
                    <th className="py-3 px-4 font-bold rounded-tl-xl">Activity</th>
                    <th className="py-3 px-4 font-bold">Strategic Objective</th>
                    <th className="py-3 px-4 font-bold">Target Stakeholders</th>
                    <th className="py-3 px-4 font-bold rounded-tr-xl">Responsible Body</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {actionPlanRows.map((row, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-neutral-900">{row.activity}</td>
                      <td className="py-3.5 px-4">{row.objective}</td>
                      <td className="py-3.5 px-4">{row.target}</td>
                      <td className="py-3.5 px-4 font-medium text-[#034e9f]">{row.lead}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
