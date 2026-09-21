"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Building, Sparkles, Sun, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Projects – Ghana TVETS Oti Region",
  description:
    "Explore upcoming infrastructure development projects, architectural models, school farm factories, solar electrification, and lecture hall complexes across Oti Region.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "Proposed Office Building of OTI Regional TVET Service",
      category: "Administration",
      image: "/wp-content/uploads/2025/04/proposedbuilding-1-1024x577.jpeg",
      description:
        "A modern, multi-story administrative complex designed to serve as the regional headquarters for coordinating, monitoring, and managing all TVET institutions across the 9 districts of Oti.",
    },
    {
      title: "Proposed Standard Residence for Directors and TVET Principals",
      category: "Staff Housing",
      image: "/wp-content/uploads/2025/04/tvet-officers-1024x766.jpeg",
      description:
        "Dignified, secure, and modern executive residential housing units for regional directors, institutional principals, and visiting educational consultants.",
    },
    {
      title: "Proposed Standard Residence for Regional Staff and Facilitators",
      category: "Staff Housing",
      image: "/wp-content/uploads/2025/04/ChatGPT-Image-Apr-20-2025-04_26_40-AM.png",
      description:
        "Dedicated residential quarters ensuring technical instructors and administrative personnel have decent, proximate accommodation on campus.",
    },
    {
      title: "Proposed Students Training & Lecture Halls Complex",
      category: "Academic",
      image: "/wp-content/uploads/2025/04/f530dec2-59dc-4d0a-b7f8-d193ca252800.png",
      description:
        "State-of-the-art smart lecture theatres, CAD computer laboratories, and technical drafting suites configured for Competency-Based Training (CBT).",
    },
    {
      title: "Proposed TVET School Agribusiness Factory",
      category: "Agribusiness",
      image: "/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-30-at-1.53.49-AM-1024x683.jpeg",
      description:
        "Agro-processing facility designed to add value to regional produce including cassava processing into high-grade flour and starch, fruit canning, and grain drying.",
    },
    {
      title: "Proposed TVET School Agribusiness Factory (Interior)",
      category: "Agribusiness",
      image: "/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-30-at-1.53.49-AM1-1024x683.jpeg",
      description:
        "Interior mechanical layout featuring automated stainless-steel food-grade processing machinery, packaging lines, and quality-control testing bays.",
    },
    {
      title: "Proposed Regional Oti TVET School Farm and Factory Complex",
      category: "Agribusiness",
      image: "/wp-content/uploads/2025/04/ssa-1024x683.jpeg",
      description:
        "Integrated commercial farm complex combining greenhouse horticulture, mechanized crop cultivation, livestock rearing, and value-addition packaging.",
    },
    {
      title: "Proposed Shopping Mall Complex",
      category: "Commercial",
      image: "/wp-content/uploads/2025/04/shopp-1024x683.jpeg",
      description:
        "Commercial retail hub displaying and selling products manufactured by TVET students (garments, furniture, processed foods) to generate sustainable school revenues.",
    },
    {
      title: "Proposed Ultra-Modern Boarding Facility for Students",
      category: "Student Welfare",
      image: "/wp-content/uploads/2025/04/boarding.png",
      description:
        "Safe, well-ventilated hostel accommodations with modern sanitation, study rooms, and recreational lounges to expand boarding access for rural youth.",
    },
    {
      title: "Proposed Kitchen & Student Dining Hall Project",
      category: "Student Welfare",
      image: "/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-29-at-4.19.34-AM-1024x683.jpeg",
      description:
        "Hygienic, commercial-capacity kitchen and spacious dining hall designed to cater for large student populations while serving as a live training lab for hospitality students.",
    },
    {
      title: "Proposed Kitchen & Dining Hall (Interior)",
      category: "Student Welfare",
      image: "/wp-content/uploads/2025/04/WhatsApp-Image-2025-04-29-at-4.19.34-AM1-1024x683.jpeg",
      description:
        "Modern interior layout with industrial steam cooking boilers, ergonomic dining benches, and spotless ceramic sanitization corridors.",
    },
    {
      title: "Proposed Oti Region TVET School Assembly Hall (Auditorium)",
      category: "Campus Life",
      image: "/wp-content/uploads/2025/04/hhg.jpg",
      description:
        "Multi-purpose auditorium with acoustic treatment and stage lighting for matriculation ceremonies, regional exhibitions, cultural dramas, and technical symposiums.",
    },
    {
      title: "Proposed Oti Region TVET School Assembly Hall (Exterior)",
      category: "Campus Life",
      image: "/wp-content/uploads/2025/04/ass.jpg",
      description:
        "Iconic architectural facade designed to provide an inspiring landmark for institutional gatherings and public community forums.",
    },
    {
      title: "Solar Street Lights Across All Campuses",
      category: "Green Energy",
      image: "/wp-content/uploads/2025/06/hgh-1024x683.png",
      description:
        "High-efficiency solar photovoltaic street lighting to brighten campus walkways, dormitories, and security boundaries with clean, renewable energy.",
    },
    {
      title: "Campus Solar Lighting at Night",
      category: "Green Energy",
      image: "/wp-content/uploads/2025/06/hh-1024x683.png",
      description:
        "Reliable zero-grid night illumination ensuring student safety, enhanced campus security, and extended evening study hours.",
    },
    {
      title: "Solar Borehole Water Tank for Each Boarding House",
      category: "Utilities",
      image: "/wp-content/uploads/2025/06/news15.png",
      description:
        "Solar-powered mechanized boreholes equipped with high-capacity overhead poly-tanks providing continuous, potable water for boarding students and school farms.",
    },
    {
      title: "Proposed Healthcare, Nutrition & Lifestyle Centre",
      category: "Healthcare",
      image: "/wp-content/uploads/2025/04/jjkj-1024x683.jpeg",
      description:
        "Preventive healthcare infirmary, nutrition counselling unit, and first-aid response centre dedicated to the physical wellbeing of students and faculty.",
    },
    {
      title: "Proposed Oti Region TVET Church Building (School Chapel)",
      category: "Campus Life",
      image: "/wp-content/uploads/2025/04/out-2-1024x683.jpg",
      description:
        "Dedicated sanctuary fostering moral uprightness, spiritual growth, and community fellowship among students and campus residents.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Our Infrastructure & Strategic Projects"
        highlightedWord="Projects"
        subtitle="Transforming TVET campuses in Oti Region with 21st-century administrative complexes, agribusiness factories, green energy, and student amenities."
        badge="Capital Development"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Introduction */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Visionary Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Building the Future of Technical Education in Oti
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              The Oti Regional TVET Directorate is actively engaged in the planning, resource mobilization, and construction of standard-setting physical and technological infrastructure. These projects are designed to create a conducive environment for competency-based learning, staff retention, and commercial agro-enterprise.
            </p>
          </div>

          {/* Projects Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-52 bg-neutral-100 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#034e9f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#034e9f] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <div className="pt-4 flex items-center justify-between text-xs font-semibold text-[#034e9f]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#f7b500]" />
                      <span>Phase 2 Action Plan</span>
                    </span>
                    <Link
                      href="/support"
                      className="hover:text-black underline font-bold text-[11px]"
                    >
                      Support Project →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Callout */}
          <div className="bg-gradient-to-r from-[#023368] to-[#034e9f] text-white rounded-3xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Partner With Us on Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                We invite development partners, alumni, philanthropic foundations, and corporate donors to adopt or co-sponsor specific infrastructure components.
              </p>
            </div>
            <Link
              href="/support"
              className="bg-[#f7b500] hover:bg-[#e5a800] text-black font-bold text-sm px-8 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md whitespace-nowrap"
            >
              Support Infrastructure
            </Link>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
