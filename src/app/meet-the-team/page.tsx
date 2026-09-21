"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Users, Mail, Phone, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Meet The TEAM – Ghana TVETS Oti Region",
  description:
    "Meet the leadership and regional management staff of the Ghana TVET Service in Oti Region driving educational innovation.",
};

export default function MeetTheTeamPage() {
  const leadership = [
    {
      name: "Engr. Robert K. Amontcho",
      role: "Regional Director, TVET, Oti",
      image: "/wp-content/uploads/2025/04/hfrt.jpg",
      bio: "Leading the regional transformation of technical education through modern infrastructure, industry linkages, and community-driven vocational excellence.",
    },
    {
      name: "Dr. Ishmael Anchomese Bonjah",
      role: "Dep. Regional Director, TVET, Oti",
      image: "/wp-content/uploads/2025/04/achomese.jpg",
      bio: "Overseeing institutional quality assurance, curriculum implementation, and day-to-day operational execution across the region's technical institutes.",
    },
  ];

  const staff = [
    {
      name: "Peter K. Woyome",
      role: "Admin - Guidance & Counselling",
      image: "/wp-content/uploads/2025/04/woyome.jpg",
      division: "Student Welfare & Administration",
    },
    {
      name: "Maxwell Amanyo",
      role: "Accountant",
      image: "/wp-content/uploads/2025/04/maxwell.jpg",
      division: "Financial Management",
    },
    {
      name: "Patrick Aforve",
      role: "Accountant",
      image: "/wp-content/uploads/2025/04/dashie-1.jpg",
      division: "Financial Operations & Auditing",
    },
    {
      name: "Paul Kwame Dashie",
      role: "Sports Coordinator",
      image: "/wp-content/uploads/2025/04/dashie.jpg",
      division: "Athletics & Physical Education",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Meet The Regional Team"
        highlightedWord="Regional Team"
        subtitle="Dedicated professionals, visionary leaders, and administrators driving technical excellence in Oti Region."
        badge="Executive Leadership & Staff"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Meet The Team" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Executive Leadership Section */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Directorate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                Regional Leadership
              </h2>
              <p className="text-sm sm:text-base text-neutral-600">
                Pioneering the strategic realignment of TVET institutions to deliver world-class skills for national development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200/80 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="relative w-44 h-48 sm:w-52 sm:h-56 rounded-2xl overflow-hidden shadow-md bg-neutral-100 mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#034e9f] mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Management Staff */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#f7b500]/20 text-neutral-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5 text-[#034e9f]" />
                <span>Regional Officers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
                Regional Management Staff
              </h2>
              <p className="text-sm sm:text-base text-neutral-600">
                Providing specialized administrative, financial, counseling, and athletic coordination across all TVET institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((officer, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-200/80 hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full aspect-square max-w-[200px] mx-auto rounded-2xl overflow-hidden shadow-sm bg-neutral-100 mb-4">
                      <Image
                        src={officer.image}
                        alt={officer.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-base font-bold text-neutral-900">
                      {officer.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#034e9f] mt-1">
                      {officer.role}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <span className="text-[11px] font-medium text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full inline-block">
                      {officer.division}
                    </span>
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
