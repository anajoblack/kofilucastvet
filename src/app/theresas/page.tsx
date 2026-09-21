"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, CheckCircle2, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "St. Theresa’s Technical Institute – Ghana TVETS Oti Region",
  description:
    "Official profile of St. Theresa’s Technical Institute in Chinderi, Krachi Nchumuru District, Oti Region.",
};

export default function TheresasPage() {
  const departments = [
    "Hospitality and Catering Management",
    "Fashion Design & Garment Technology",
    "Wood Construction Technology",
    "Building Construction Technology",
    "Business Accounting",
    "Electrical Installation Technology",
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="St. Theresa’s Technical Institute"
        highlightedWord="St. Theresa’s"
        subtitle="Chinderi, Krachi Nchumuru District — Excellence in hospitality, culinary arts, fashion design, and vocational enterprise."
        badge="Accredited Technical Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers", href: "/providers" },
          { label: "St. Theresa's" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Principal Address */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Krachi Nchumuru Flagship</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Message from the Principal — Mr. Christian Kwasi Amekudzi
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to <strong className="text-neutral-900">St. Theresa’s Technical Institute</strong> in Chinderi. Our institution is renowned for cultivating vocational discipline, moral integrity, and exceptional practical competence, especially in hospitality and culinary arts, fashion design, and building construction trades.
              </p>
              <p>
                We prepare our students to become sought-after professionals in Ghana's thriving tourism, culinary, and construction sectors, equipping them with both artisanal skill and business acumen.
              </p>
            </div>
          </div>

          {/* Programmes Offered */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Programmes & Trades Offered at St. Theresa's
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
