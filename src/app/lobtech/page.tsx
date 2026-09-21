"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, CheckCircle2, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "Lolobi Technical Institute (LOBTECH) – Ghana TVETS Oti Region",
  description:
    "Official profile of Lolobi Technical Institute (LOBTECH) in Lolobi, Guan District (SALL Area), Oti Region.",
};

export default function LobtechPage() {
  const departments = [
    "Electrical Engineering & Renewable Energy Technology",
    "Computer Hardware Technology & Diagnostics",
    "Carpentry and Joinery Technology",
    "Business Accounting",
    "Building Construction Technology",
    "Fashion Design Technology",
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Lolobi Technical Institute (LOBTECH)"
        highlightedWord="LOBTECH"
        subtitle="Lolobi, Guan District (SALL Area) — Empowering youth with practical vocational and technical skills in the Guan traditional area."
        badge="Accredited Technical Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers", href: "/providers" },
          { label: "LOBTECH" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Institutional Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Guan District Center of Excellence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Welcome to Lolobi Technical Institute
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-neutral-900">Lolobi Technical Institute (LOBTECH)</strong> is dedicated to fostering hands-on craft competencies, technical ingenuity, and entrepreneurial drive among youth in the newly constituted Guan District and across the Oti Region.
              </p>
              <p>
                LOBTECH focuses on modern Competency-Based Training (CBT) across electrical installation, structural carpentry, ICT hardware, and commercial accounting, ensuring every trainee graduates job-ready and capable of starting their own micro-enterprises.
              </p>
            </div>
          </div>

          {/* Programmes Offered */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Programmes & Trades Offered at LOBTECH
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
