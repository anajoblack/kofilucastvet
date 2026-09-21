"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, Award, CheckCircle2, Users, BookOpen, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Fr. Dogli Memorial Technical Institute (DOTECH) – Ghana TVETS Oti Region",
  description:
    "Official profile of Fr. Dogli Memorial Technical Institute in New Ayoma, Jasikan District, National Best Second Cycle School in Practical Agriculture 2025.",
};

export default function DotechPage() {
  const departments = [
    "Practical Agriculture & Agribusiness (National Award Champion)",
    "Building Construction Technology",
    "Electrical Engineering Technology",
    "Fashion Design Technology",
    "Wood Construction & Joinery",
    "Business Studies & Accounting",
  ];

  const management = [
    { name: "Brigitte Afi Dzakah (Mrs)", role: "Principal", image: "/wp-content/uploads/2026/01/IMG-20251208-WA0014-150x150.jpg" },
    { name: "Irene Mavis Dede Tamatey", role: "Vice Principal (Admin)", image: "/wp-content/uploads/2026/01/IMG-20251208-WA0021-150x150.jpg" },
    { name: "Mantey Rose", role: "Vice Principal (Academic)", image: "/wp-content/uploads/2026/01/IMG-20251208-WA0007-150x150.jpg" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Fr. Dogli Memorial Technical Institute (DOTECH)"
        highlightedWord="DOTECH"
        subtitle="New Ayoma, Jasikan District — Celebrated National Best Second Cycle School in Practical Agriculture at the 41st National Best Farmers’ Day 2025."
        badge="Accredited Technical Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers", href: "/providers" },
          { label: "DOTECH" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Institutional Highlights Banner */}
          <div className="bg-[#fff9e6] border border-[#f7b500]/30 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#f7b500] text-black px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-black" />
                <span>National Agricultural Champion</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                National Best Second Cycle School in Practical Agriculture 2025
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Fr. Dogli Memorial Technical Institute made history by clinching the highest national honor at the 41st National Best Farmers’ Day Award-2025, demonstrating unmatched mastery in practical crop husbandry, mechanized farming, and sustainable agribusiness.
              </p>
            </div>
            <Link
              href="/fr-dogli-memorial-technical-institute-emerges-as-the-national-best-second-cycle-school-in-practical-agriculture-at-the-41st-national-best-farmers-day-award-2025"
              className="bg-[#034e9f] hover:bg-[#023368] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap shadow-md"
            >
              Read Award Story →
            </Link>
          </div>

          {/* Principal's Message & Profile */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 text-center space-y-4">
                <div className="relative w-48 h-56 mx-auto rounded-2xl overflow-hidden shadow-md bg-neutral-100">
                  <Image
                    src="/wp-content/uploads/2026/01/IMG-20251208-WA0014-150x150.jpg"
                    alt="Mrs. Brigitte Afi Dzakah - Principal DOTECH"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">Mrs. Brigitte Afi Dzakah</h3>
                  <p className="text-xs font-semibold text-[#034e9f]">Principal, DOTECH</p>
                  <p className="text-xs text-neutral-500">New Ayoma, Jasikan District</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <span className="text-xs font-bold uppercase tracking-wider text-[#034e9f] bg-[#034e9f]/10 px-3 py-1 rounded-full">
                  Principal's Address
                </span>
                <h3 className="text-2xl font-extrabold text-neutral-900 pt-2">
                  Welcome to Fr. Dogli Memorial Technical Institute
                </h3>
                <p>
                  At DOTECH, our mission is to provide an empowering, disciplined, and technologically rigorous environment where young men and women acquire hands-on competencies that transform them into self-reliant artisans, technicians, and entrepreneurs.
                </p>
                <p>
                  Our agricultural science farm, modern workshops, and dedicated tutorial staff have positioned DOTECH as a beacon of vocational excellence in Ghana. We welcome all prospective students, parents, and developmental partners to join our vibrant academic community.
                </p>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Institutional Management Team
              </h3>
              <p className="text-sm text-neutral-600">
                Guiding academic standards, student welfare, and administrative leadership at DOTECH.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {management.map((mgr, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200/80 text-center space-y-3">
                  <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
                    <Image
                      src={mgr.image}
                      alt={mgr.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">{mgr.name}</h4>
                  <p className="text-xs font-semibold text-[#034e9f]">{mgr.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Departments */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Accredited Departments & Trades Offered
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {departments.map((dept, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                  <CheckCircle2 className="w-5 h-5 text-[#f7b500] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-neutral-800">{dept}</span>
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
