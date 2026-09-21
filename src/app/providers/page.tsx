"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { School, MapPin, Building, ChevronRight, CheckCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "TVET Providers in OTI Region – Ghana TVETS Oti Region",
  description:
    "Official directory of accredited Technical and Vocational Education and Training (TVET) institutions in the Oti Region of Ghana.",
};

export default function ProvidersPage() {
  const providers = [
    {
      name: "Fr. Dogli Memorial Technical Institute (DOTECH)",
      shortName: "DOTECH",
      location: "New Ayoma",
      district: "Jasikan Municipal",
      href: "/dotech",
      image: "/wp-content/uploads/2026/01/IMG-20251208-WA0014-150x150.jpg",
      highlight: "National Best Second Cycle School in Practical Agriculture (41st Farmers' Day 2025)",
      specialties: ["Practical Agriculture", "Building Construction", "Electrical Engineering", "Fashion Design"],
    },
    {
      name: "St. Theresa’s Technical Institute",
      shortName: "St. Theresa's",
      location: "Chinderi",
      district: "Krachi Nchumuru District",
      href: "/theresas",
      image: "/wp-content/uploads/2025/05/carpenter-cutting-mdf-board-inside-workshop.jpg",
      highlight: "Centre of excellence in vocational training and entrepreneurship development.",
      specialties: ["Wood Construction", "Hospitality & Catering", "Fashion Design", "Business Studies"],
    },
    {
      name: "Kaakyi Technical Institute",
      shortName: "Kaakyi Tech",
      location: "Kete-Krachi",
      district: "Krachi West District",
      href: "/kaakyi",
      image: "/wp-content/uploads/2025/05/2149894686.jpg",
      highlight: "Comprehensive technical training hub serving the Krachi West municipality.",
      specialties: ["Agricultural Mechanization", "Electricals", "Building Construction", "Automotive"],
    },
    {
      name: "Lolobi Technical Institute (LOBTECH)",
      shortName: "LOBTECH",
      location: "Lolobi",
      district: "Guan District (SALL Area)",
      href: "/lobtech",
      image: "/wp-content/uploads/2025/05/2150880924.jpg",
      highlight: "Modern competency-based vocational institute in the historic Guan district.",
      specialties: ["Computer Hardware", "Electrical Installation", "Carpentry & Joinery", "Accounting"],
    },
    {
      name: "Dambai Technical Institute (DTI)",
      shortName: "DTI",
      location: "Dambai",
      district: "Krachi East Municipality",
      href: "/dti",
      image: "/wp-content/uploads/2025/05/2150880997.jpg",
      highlight: "Flagship regional capital technical institute with expanding industrial workshops.",
      specialties: ["Computer Hardware", "Electrical Systems", "Business Secretarial", "Building Construction"],
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="OTI Region TVET Providers"
        highlightedWord="TVET Providers"
        subtitle="Explore accredited public technical and vocational training institutions empowering youth across the Oti Region."
        badge="Accredited Institutions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "TVET Providers" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview text */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <School className="w-3.5 h-3.5" />
              <span>Accredited Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Welcome to the Oti Region TVET Providers Portal
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              The Oti Region is home to a growing network of accredited TVET institutions dedicated to equipping students with practical skills, innovative technical knowledge, and industry-grade competencies for the workforce.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              These institutions focus on competency-based training (CBT) across diverse trades and disciplines aligned with modern Ghanaian and global industry demands. Explore each institute's curriculum, leadership, and campus life below:
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providers.map((inst, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#034e9f] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {inst.shortName}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#034e9f] transition-colors leading-snug">
                      <Link href={inst.href}>{inst.name}</Link>
                    </h3>

                    <div className="space-y-1.5 text-xs text-neutral-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#f7b500] flex-shrink-0" />
                        <span><strong>Town:</strong> {inst.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-3.5 h-3.5 text-[#034e9f] flex-shrink-0" />
                        <span><strong>District:</strong> {inst.district}</span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-600 italic bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                      “{inst.highlight}”
                    </p>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                        Featured Programmes
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {inst.specialties.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-neutral-100 text-neutral-700 text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-4">
                  <Link
                    href={inst.href}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#034e9f] group-hover:text-[#023368] pt-4"
                  >
                    <span>View Institute Profile</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Directory Table matching original table */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 flex items-center gap-2">
              <span>🏫</span>
              <span>List of Accredited TVET Institutions in Oti Region</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-700 border-collapse">
                <thead>
                  <tr className="bg-[#034e9f] text-white">
                    <th className="py-3 px-4 font-bold rounded-tl-xl">Institution Name</th>
                    <th className="py-3 px-4 font-bold">Location</th>
                    <th className="py-3 px-4 font-bold">District</th>
                    <th className="py-3 px-4 font-bold text-right rounded-tr-xl">Profile Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {providers.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-neutral-900">
                        {row.name}
                      </td>
                      <td className="py-3.5 px-4">{row.location}</td>
                      <td className="py-3.5 px-4">{row.district}</td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href={row.href}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#034e9f] hover:text-[#f7b500] transition-colors"
                        >
                          <span>Click Here</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
