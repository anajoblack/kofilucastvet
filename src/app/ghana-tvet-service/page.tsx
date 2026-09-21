"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Landmark, Building2, CheckCircle2, ShieldCheck, Scale, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Ghana TVET Service – Ghana TVETS Oti Region",
  description:
    "National overview of Ghana TVET Service established by Pre-Tertiary Education Act 2020 (Act 1049) under the Ministry of Education.",
};

export default function GhanaTvetServicePage() {
  const realignedBodies = [
    "GES-TVED (Ghana Education Service Technical & Vocational Division)",
    "NVTI (National Vocational Training Institute)",
    "GRATIS Foundation & Technology Solution Centres",
    "DICCES (Department of Integrated Community Centres for Employable Skills)",
    "OIC (Opportunities Industrialization Centres)",
    "Social Welfare Vocational Training Centres",
    "Youth Leadership and Skills Training Institutes (NYA)",
    "Ministry of Food & Agriculture Farm Institutes",
    "Ministry of Roads and Highways Training Centre",
    "Community Development Vocational Institutes",
  ];

  const objectives = [
    "Manage, oversee, and implement approved national policies and programmes relating to pre-tertiary TVET.",
    "Harmonize curriculum, standards, assessments, and certifications under the National TVET Qualifications Framework (NTVQF).",
    "Ensure equitable access to high-quality competency-based technical training for all Ghanaian youth.",
    "Bridge the gap between academia and industry through modernized apprenticeship and internship models.",
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="About Ghana TVET Service"
        highlightedWord="Ghana TVET Service"
        subtitle="The statutory corporate body managing pre-tertiary technical and vocational education under the Ministry of Education."
        badge="National Regulatory Framework"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Ghana TVET Service" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Statutory Background */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Landmark className="w-3.5 h-3.5" />
              <span>Statutory Establishment</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Pre-Tertiary Education Act 2020 (Act 1049)
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              The <strong className="text-neutral-900">Ghana Technical and Vocational Education and Training (TVET) Service</strong> was established by the Parliament of Ghana under the <strong className="text-neutral-900">Pre-Tertiary Education Act, 2020 (Act 1049)</strong> as an autonomous corporate body to manage, oversee, and implement approved national policies and programmes relating to pre-tertiary technical and vocational education and training.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              Prior to Act 1049, TVET institutions in Ghana operated in silos across nine distinct ministries without a centralized regulatory standard. The historic realignment under the <strong className="text-[#034e9f]">Ministry of Education</strong> consolidated all public technical training institutes under one umbrella to streamline governance, standardize certification, upgrade infrastructure, and drive Ghana's industrialization agenda.
            </p>
          </div>

          {/* Object of the Service */}
          <div className="bg-gradient-to-br from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#f7b500]/20 text-[#f7b500] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5" />
              <span>Mandate</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Object of the Service
            </h3>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              The primary object of the Ghana TVET Service is to manage, oversee, and implement approved national policies and programmes relating to pre-tertiary technical and vocational education and training.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {objectives.map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f7b500] flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Realigned Institutions Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Realigned TVET Providing Institutions
              </h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Under Act 1049, all TVET institutions formerly operating under 9 separate government ministries were harmonized under the Ghana TVET Service:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {realignedBodies.map((inst, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <ShieldCheck className="w-4 h-4 text-[#034e9f] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-neutral-800">{inst}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Oti Regional Directorate Callout */}
          <div className="bg-[#fff9e6] border border-[#f7b500]/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h4 className="text-xl font-bold text-neutral-900">
                Oti Regional Directorate
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Discover how the Oti Regional Directorate implements national TVET goals across its 5 public accredited technical institutes.
              </p>
            </div>
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 bg-[#034e9f] hover:bg-[#023368] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              <span>Explore TVET Providers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
