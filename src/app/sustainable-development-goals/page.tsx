"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Globe, Download, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sustainable Development Goals – Ghana TVETS Oti Region",
  description:
    "How the Ghana TVET Service in Oti Region contributes to the United Nations Sustainable Development Goals (SDGs) through practical education and agriculture.",
};

export default function SustainableDevelopmentGoalsPage() {
  const sdgAlignments = [
    {
      number: "1",
      title: "No Poverty",
      color: "bg-[#e5243b]",
      description: "Equipping underprivileged and rural youth with marketable vocational skills to secure self-employment, lift families out of intergenerational poverty, and generate rural wealth.",
    },
    {
      number: "2",
      title: "Zero Hunger",
      color: "bg-[#dda63a]",
      description: "Scaling practical school agriculture and mechanized farming at Fr. Dogli Memorial Tech and regional centres to feed schools, curb local food inflation, and boost nutrition.",
    },
    {
      number: "4",
      title: "Quality Education",
      color: "bg-[#c5192d]",
      description: "Providing free, high-quality, competency-based pre-tertiary technical education aligned with international occupational standards and the Pre-Tertiary Education Act 2020.",
    },
    {
      number: "5",
      title: "Gender Equality",
      color: "bg-[#ff3a21]",
      description: "Actively breaking gender stereotypes by enrolling and mentoring young women in traditionally male-dominated trades such as electrical engineering, welding, and building construction.",
    },
    {
      number: "8",
      title: "Decent Work & Economic Growth",
      color: "bg-[#a21942]",
      description: "Directly linking technical graduates with industrial internships, master-craft apprenticeships, and cooperative enterprise incubation for sustainable livelihoods.",
    },
    {
      number: "9",
      title: "Industry, Innovation & Infrastructure",
      color: "bg-[#fd6925]",
      description: "Constructing modern workshops, introducing computer hardware and renewable solar installations across all 9 municipal and district assemblies in the Oti Region.",
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      color: "bg-[#19486a]",
      description: "Forging multi-stakeholder civil society partnerships through the NARNGO Strategic Consortium to mobilize resources and complement national government investments.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="UN Sustainable Development Goals"
        highlightedWord="Sustainable Development"
        subtitle="Empowering communities, driving green industrialization, and eradicating poverty through technical education in the Oti Region."
        badge="United Nations Agenda 2030"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sustainable Dev’t Goals" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Executive Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Agenda 2030</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              TVET as an Engine for the UN Sustainable Development Goals
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Technical and Vocational Education and Training is widely recognized by the United Nations and the African Union as the primary catalyst for achieving the 17 Sustainable Development Goals (SDGs). In the Oti Region, our programmes and infrastructure projects directly advance these global targets by transforming raw agricultural potential into industrial capability.
            </p>
          </div>

          {/* SDG Alignment Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-neutral-900">
              Oti TVET Direct SDG Targets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdgAlignments.map((sdg, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-neutral-200/80 flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${sdg.color} text-white flex items-center justify-center font-black text-xl flex-shrink-0 shadow-sm`}
                  >
                    {sdg.number}
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                      Goal {sdg.number}: {sdg.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {sdg.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable PDF Advocacy Brochure Card */}
          <div className="bg-gradient-to-br from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-[#f7b500]/20 text-[#f7b500] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Advocacy Publication</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                UNCT Ghana SDGs Advocacy Messages Report
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                Download the official United Nations Country Team (UNCT) Ghana advocacy document detailing sustainable development priorities, indicators, and youth capacity building frameworks [2.70 MB].
              </p>
            </div>
            <a
              href="/wp-content/uploads/2025/04/UNCT-GH-SDGs-in-Ghana-Avocacy-Messages-2017.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f7b500] hover:bg-[#e5a800] text-black font-bold text-sm px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (2.7 MB)</span>
            </a>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
