"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, CheckCircle2, Users, BookOpen } from "lucide-react";

export const metadata = {
  title: "Kaakyi Technical Institute – Ghana TVETS Oti Region",
  description:
    "Official profile of Kaakyi Technical Institute in Kete-Krachi, Krachi West District, Oti Region.",
};

export default function KaakyiPage() {
  const departments = [
    "Agricultural Mechanization & Tractor Maintenance",
    "Building Construction Technology",
    "Electrical Engineering Technology",
    "Automotive Repair & Mechanical Maintenance",
    "Wood Construction & Joinery",
    "Fashion Design Technology",
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Kaakyi Technical Institute"
        highlightedWord="Kaakyi"
        subtitle="Kete-Krachi, Krachi West District — Delivering high-impact agricultural mechanics and industrial craft education on the Volta Lake basin."
        badge="Accredited Technical Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers", href: "/providers" },
          { label: "Kaakyi" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Principal Address */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Krachi West Technical Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Message from the Principal — Befulgma William
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to <strong className="text-neutral-900">Kaakyi Technical Institute</strong> in historic Kete-Krachi. Our institute plays a central role in training skilled technicians, mechanics, and builders who drive the local economy, maintain vital agro-machinery, and build commercial infrastructure across Krachi West and surrounding districts.
              </p>
              <p>
                We invite young scholars and apprentices who desire practical, life-transforming technical skills to enroll and take advantage of government-subsidized pre-tertiary TVET education.
              </p>
            </div>
          </div>

          {/* Programmes Offered */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Programmes & Trades Offered at Kaakyi
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
