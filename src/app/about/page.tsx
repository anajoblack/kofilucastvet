"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { CheckCircle2, Compass, Target, Handshake, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Ghana TVET Service – Oti Region",
  description:
    "Learn about the Ghana TVET Service in Oti Region, established under Pre-Tertiary Education Act 2020 (Act 1049) to revolutionize technical and vocational training.",
};

export default function AboutPage() {
  const missionPoints = [
    "Building the capacity of staff and master craft persons to meet global standards",
    "Modernizing training facilities, workshops, and school farms to meet 21st-century industry standards",
    "Fostering strong partnerships with local and international industry players for workplace learning",
    "Attracting investors to create jobs, empower youth, and expand regional economic opportunities",
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="About Ghana TVET Service – Oti Region"
        highlightedWord="Ghana TVET Service"
        subtitle="Empowering the youth with industry-relevant skills, modern infrastructure, and transformative technical education."
        badge="Regional Mandate & Profile"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Welcome & Who We Are */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              A Unified Direction for Technical and Vocational Excellence
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Welcome to the official portal of the <strong className="text-neutral-900">Ghana TVET Service – Oti Region</strong>. We are proud to be part of a national transformation agenda that seeks to reimagine and reposition Technical and Vocational Education and Training (TVET) as a primary catalyst for industrialization, youth employment, and sustainable economic growth.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              The <strong className="text-neutral-900">Ghana TVET Service</strong> was established under the <strong className="text-neutral-900">Pre-Tertiary Education Act, 2020 (Act 1049)</strong> as a corporate body to manage, oversee, and implement national policies and programmes related to pre-tertiary TVET. It brought together TVET institutions previously fragmented across nine different ministries—including GES-TVED, NVTI, GRATIS, and others—under the Ministry of Education to ensure policy coherence, operational efficiency, and a unified direction for technical education across Ghana.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed">
              At the <strong className="text-neutral-900">regional level</strong>, the <strong className="text-[#034e9f]">Oti Regional TVET Service</strong> actively implements these national policies while customizing training programmes and infrastructure projects to leverage the unique agricultural strengths, natural resources, and industrial potential of the Oti Region.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#f7b500]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Our Vision</h3>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed font-light">
                  To be a beacon of innovation and excellence in technical and vocational education in Ghana, driven by the rich natural resources, cultural heritage, and vibrant agricultural economy of the Oti Region.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#034e9f]/10 flex items-center justify-center text-[#034e9f]">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">Our Mission</h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  To provide quality, relevant, and accessible technical and vocational education that equips the youth of Oti with practical, industry-driven skills to spearhead economic transformation through:
                </p>
                <ul className="space-y-2.5 pt-2">
                  {missionPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#034e9f] flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Strategic Collaboration */}
          <div className="bg-[#fff9e6] border border-[#f7b500]/30 rounded-3xl p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-3 text-[#b38300]">
              <Handshake className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Strategic Collaboration & Consortium
              </h3>
            </div>
            <p className="text-base text-neutral-800 leading-relaxed">
              To deliver on our mission, the Oti Regional Directorate has partnered with a <strong className="text-neutral-900">Strategic Consortium</strong> of experienced practitioners in funds mobilization, institutional strategy, and operational execution led by the National Association of Rural Non-Governmental Organisations (NARNGO). This partnership fortifies our capacity to upgrade school facilities, build modern hostels and assembly auditoriums, and establish regional agro-processing hubs.
            </p>
            <div>
              <Link
                href="/strategic-collaborator"
                className="inline-flex items-center gap-2 bg-[#034e9f] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#023368] transition-colors"
              >
                <span>Read About Strategic Collaborator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Join Our Mission & Regional Director Signoff */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-xl">
              <h3 className="text-2xl font-bold text-neutral-900">Join Our Mission</h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                We invite individuals, corporate bodies, diaspora communities, and developmental partners to explore our programmes, support our infrastructure projects, and invest in our youth.
              </p>
              <div className="pt-2 border-t border-neutral-100">
                <p className="text-base font-bold text-neutral-900">Engr. Robert K. Amontcho</p>
                <p className="text-xs sm:text-sm text-[#034e9f] font-medium">
                  Ag. Regional Director — Ghana TVET Service, Oti Region
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="/director"
                className="bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-sm px-6 py-3 rounded-full transition-colors text-center"
              >
                Director's Address
              </Link>
              <Link
                href="/support"
                className="bg-[#f7b500] hover:bg-[#e5a800] text-black font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm text-center"
              >
                Support TVETS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Administrative Structure */}
      <AdministrativeStructure />
    </main>
  );
}
