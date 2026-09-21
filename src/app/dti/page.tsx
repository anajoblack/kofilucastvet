"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, CheckCircle2, Users, BookOpen, Laptop, Wrench } from "lucide-react";

export const metadata = {
  title: "Dambai Technical Institute (DTI) – Ghana TVETS Oti Region",
  description:
    "Official profile of Dambai Technical Institute in the regional capital Dambai, Krachi East Municipality, Oti Region.",
};

export default function DtiPage() {
  const departments = [
    "Computer Hardware & Networking Technology",
    "Electrical Engineering & Installation Technology",
    "Building Construction Technology",
    "Business Secretarial & Office Administration",
    "Business Accounting & Financial Literacy",
    "Wood Construction & Joinery",
  ];

  const management = [
    { name: "Emmanuel Kofi Addo", role: "Principal" },
    { name: "Julius Nyadee", role: "Vice Principal (Admin)" },
    { name: "Wise Nukpetsi", role: "Vice Principal (Academic)" },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Dambai Technical Institute (DTI)"
        highlightedWord="DTI"
        subtitle="Dambai, Krachi East Municipality — The premier technical institute in the Oti Regional Capital delivering cutting-edge digital and engineering trades."
        badge="Accredited Technical Institute"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers", href: "/providers" },
          { label: "DTI" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Principal Address Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <School className="w-3.5 h-3.5" />
                <span>Regional Capital Flagship</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                Message from the Principal — Emmanuel Kofi Addo
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Welcome to <strong className="text-neutral-900">Dambai Technical Institute (DTI)</strong>, strategically situated in the regional capital of Oti Region. Our institute has earned an enviable reputation for producing disciplined, technically proficient graduates equipped to solve real-world industrial and computational problems.
                </p>
                <p>
                  With expanding computer hardware labs, electrical installations bays, and masonry workshops, DTI offers an immersive hands-on curriculum that prepares students for immediate industrial employment, tertiary engineering progression, and entrepreneurial ventures.
                </p>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-neutral-900">
                Management Team
              </h3>
              <p className="text-sm text-neutral-600">
                Administrative and instructional leaders at DTI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {management.map((mgr, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200/80 text-center space-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-[#034e9f]/10 text-[#034e9f] flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    {mgr.name.split(" ")[0][0]}{mgr.name.split(" ").slice(-1)[0][0]}
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
                Accredited Programmes Offered
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
