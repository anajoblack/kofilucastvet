"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Handshake, Award, CheckCircle2, Globe, Mail, BookOpen, Target, Sparkles } from "lucide-react";

export const metadata = {
  title: "Strategic Collaborator – Ghana TVETS Oti Region",
  description:
    "Profile and welcome address of Mr. Kofi Lucas, National President of NARNGO and Strategic Collaborator to Ghana TVET Service Oti Region.",
};

export default function StrategicCollaboratorPage() {
  const profileHighlights = [
    "NGO Consultant / Senior Development Adviser",
    "Expert in Programme Planning, Project Development & Implementation",
    "Skillful in Strategic Planning, Business Plan Development & Proposal Writing",
    "Poverty Alleviation, Wealth Creation & Pro-Poor Interventions Specialist",
    "Track record of driving positive community development in Ghana since 1997",
    "Founder of Critical Strategic Thinkers Network & Rotarian Philanthropist",
  ];

  const consortiumMembers = [
    "Network of Associations of Registered NGOs in Ghana (NARNGO)",
    "Association of Health NGOs in Ghana",
    "AFA Foundation International",
    "Critical Strategic Thinkers Network",
    "Anointed Consultancy Services Ltd",
  ];

  const galleryImages = [
    { src: "/wp-content/uploads/2025/04/pp01.jpg", caption: "Diplomatic & Stakeholder Engagement" },
    { src: "/wp-content/uploads/2025/04/pp02.jpg", caption: "Strategic Consortium Review Session" },
    { src: "/wp-content/uploads/2025/04/pp03.jpg", caption: "Resource Mobilization Summit" },
    { src: "/wp-content/uploads/2025/04/pp04.jpg", caption: "Regional Technical Consultations" },
    { src: "/wp-content/uploads/2025/04/pp05.jpg", caption: "Community Advocacy & Skills Forum" },
    { src: "/wp-content/uploads/2025/04/pp06.jpg", caption: "Field Inspection & Project Planning" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Strategic Collaborator & Partner"
        highlightedWord="Strategic Collaborator"
        subtitle="Meet Mr. Kofi Lucas, National President of NARNGO, leading strategic resource mobilization for Oti Region TVET."
        badge="Strategic Consortium Partnership"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Strategic Collaborator" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Executive Profile Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80">
            <div className="lg:col-span-5 text-center">
              <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg bg-neutral-100">
                <Image
                  src="/wp-content/uploads/2025/04/118248202_10218206155364903_5597138102701585309_n-768x1022.jpg"
                  alt="Mr. Kofi Lucas - Strategic Collaborator"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-6 space-y-1">
                <h2 className="text-2xl font-extrabold text-neutral-900">Mr. Kofi Lucas</h2>
                <p className="text-xs sm:text-sm font-semibold text-[#034e9f]">
                  National President of NARNGO & Strategic Collaborator
                </p>
                <p className="text-xs text-neutral-500">
                  Founder, Critical Strategic Thinkers Network
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#f7b500]/20 text-neutral-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#034e9f]" />
                <span>Brief Profile</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                A Seasoned Strategist & Social Innovator
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed">
                Mr. Kofi Lucas is an accomplished NGO Consultant, problem-solving strategist, and pro-poor development tactician with decades of experience structuring public-private civil partnerships, poverty alleviation programs, and community-based vocational initiatives across Ghana.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {profileHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                    <CheckCircle2 className="w-4 h-4 text-[#034e9f] flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-neutral-800">{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-6 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#034e9f]" />
                  <span><strong>Organization:</strong> NARNGO (Ghana)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#034e9f]" />
                  <span><strong>Email:</strong> ngosnetwork@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message to Oti Region TVETs */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Strategic Collaborator and Partner Welcome Message
            </h3>
            <div className="space-y-4 text-base text-neutral-700 leading-relaxed">
              <p>
                I wish to express my deepest appreciation and gratitude to <strong className="text-neutral-900">Engineer Robert Amontcho</strong>, the Acting Regional Director of the Oti TVET Region, for engaging me to bring my vast developmental experience to help the Oti TVET Directorate overcome its infrastructure, financing, and operational hurdles.
              </p>
              <p>
                With my <strong className="text-neutral-900">Rotary Club</strong> background, and as a seasoned social worker, team player, and someone with a passion for critical strategic thinking and SDG promotion, I am excited to offer my expertise and God-given talents to the Oti TVET Regional Directorate, principals, and facilitators.
              </p>
              <p>
                Through this strategic partnership, we are actively structuring multi-million-dollar funding pipelines, technical workshops, and cooperative agribusiness ventures. Together, we are committed to delivering tangible results and making a permanent, positive difference in the lives of the youth of the Oti Region.
              </p>
            </div>
          </div>

          {/* NARNGO Strategic Consortium */}
          <div className="bg-gradient-to-br from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-12 shadow-lg space-y-6">
            <div className="flex items-center gap-3">
              <Handshake className="w-6 h-6 text-[#f7b500]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                The NARNGO Strategic Consortium
              </h3>
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
              The Network of Associations of Registered NGOs (NARNGO) leads an alliance of proven non-profit, healthcare, and management consulting entities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {consortiumMembers.map((m, i) => (
                <div key={i} className="bg-white/10 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#f7b500] flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photographic Record / Gallery */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Track Record & Strategic Engagements
              </h3>
              <p className="text-sm text-neutral-600">
                Moments from regional stakeholder meetings, diplomatic consultations, and TVET resource mobilization sessions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200/80 group">
                  <div className="relative w-full aspect-square bg-neutral-100 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-2.5 text-center">
                    <p className="text-[11px] font-medium text-neutral-700 truncate">{img.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
