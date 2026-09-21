"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { TrendingUp, CheckCircle2, ShieldCheck, Target, Building2, Sun, Wrench, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Oti Region Improvement Plan – Ghana TVETS Oti Region",
  description:
    "Comprehensive strategic framework and improvement plan for transforming technical and vocational institutions across the Oti Region.",
};

export default function OtiRegionImprovementPlanPage() {
  const pillars = [
    {
      title: "Pillar 1: Infrastructure Modernization & Expansion",
      icon: Building2,
      points: [
        "Construction of the proposed Oti Regional TVET Directorate headquarters in Dambai.",
        "Equipping laboratories with modern CAD computers, 3D printers, and industrial sewing machinery.",
        "Installation of decentralized solar streetlights and mechanized solar water boreholes across all boarding schools.",
        "Development of modern student boarding hostels, dining halls, and multi-purpose auditoriums.",
      ],
    },
    {
      title: "Pillar 2: Commercial School Farms & Agribusiness Hubs",
      icon: Sun,
      points: [
        "Capitalizing on Fr. Dogli Memorial Technical Institute's National Best Farmer award to scale mechanized agriculture.",
        "Establishing value-addition agro-processing factories for cassava starch, fruit preservation, and grain storage.",
        "Direct linkage of school farm harvests to institutional kitchens to lower feeding expenditure.",
        "Greenhouse horticulture training for year-round vegetable cultivation and youth commercial enterprise.",
      ],
    },
    {
      title: "Pillar 3: Competency-Based Training (CBT) Quality Assurance",
      icon: Wrench,
      points: [
        "Capacity-building workshops for instructors, technical facilitators, and MasterCraft persons.",
        "Harmonization of continuous assessment protocols aligned with the National TVET Qualifications Framework.",
        "Institutional Workplace Experience Learning (WEL) and internship partnerships with national industries.",
        "Regular monitoring visits to examination centers and trade practical testing workshops.",
      ],
    },
    {
      title: "Pillar 4: Resource Mobilization & Strategic Partnerships",
      icon: Target,
      points: [
        "Consortium alliance with NARNGO and international non-governmental bodies for funds mobilization.",
        "Engagement with Ghanaian diaspora associations for equipment donations and technical mentorship.",
        "Corporate Social Responsibility (CSR) partnerships with energy, telecommunications, and construction firms.",
        "Transparent publishing of audited accounts and progress scorecards.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Oti Region TVET Improvement Plan"
        highlightedWord="Improvement Plan"
        subtitle="A multi-year strategic blueprint aimed at positioning the Oti Region as Ghana's premier hub for technical, vocational, and agricultural excellence."
        badge="Strategic & Business Plan"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Improvement Plan" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Executive Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Strategic Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Transforming Technical Training in the Oti Region
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              The <strong className="text-neutral-900">Oti Region TVET Improvement Plan</strong> is a targeted developmental framework designed by the Regional Directorate in partnership with the NARNGO Strategic Consortium. It responds to the urgent need for industrial skills, rural job creation, and modernized educational facilities across the nine administrative districts of the region.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              By aligning institutional priorities with local economic dynamics—particularly agriculture, construction, renewable energy, and creative crafts—the Improvement Plan creates a clear pathway from classroom instruction to sustainable employment.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Core Strategic Pillars
              </h3>
              <p className="text-sm text-neutral-600">
                Four foundational intervention areas driving sustainable transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200/80 space-y-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#034e9f]/10 text-[#034e9f] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900">
                      {pillar.title}
                    </h4>
                    <ul className="space-y-2.5">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#f7b500] flex-shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Callout */}
          <div className="bg-gradient-to-r from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Help Us Execute the Improvement Plan
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Whether through financial sponsorship, workshop tooling, or technical consultancy, your contribution makes this vision a reality.
              </p>
            </div>
            <Link
              href="/support"
              className="bg-[#f7b500] hover:bg-[#e5a800] text-black font-bold text-sm px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md whitespace-nowrap"
            >
              Support the Plan
            </Link>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
