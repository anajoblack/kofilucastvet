"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Trophy, Activity, Users, Award, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sports & Recreation – Ghana TVETS Oti Region",
  description:
    "Athletic competitions, extracurricular physical education, and inter-institute sports events across TVET institutions in Oti Region.",
};

export default function SportsRecreationPage() {
  const newsItems = [
    {
      title: "Fr. Dogli Memorial Technical Institute Emerges as National Best in Practical Agriculture",
      image: "/images/news-1.jpg",
      date: "National Farmers' Day",
      slug: "/fr-dogli-memorial-technical-institute-emerges-as-the-national-best-second-cycle-school-in-practical-agriculture-at-the-41st-national-best-farmers-day-award-2025",
    },
    {
      title: "Oti Regional Director and Principal of Fr. Dogli Memorial Technical Institute",
      image: "/images/news-2.jpg",
      date: "Leadership Spotlight",
      slug: "/oti-regional-director-and-principal-of-fr-dogli-memorial-technical-institute",
    },
    {
      title: "Regional Director's Remark on Best Second Cycle Institution in Practical Agriculture",
      image: "/images/news-3.jpg",
      date: "Official Address",
      slug: "/regional-directors-remark-on-best-second-cycle-institution-in-practical-agriculture-at-the-41st-national-farmers-day-award-winning-region-oti",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Sports & Recreation in TVET"
        highlightedWord="Sports & Recreation"
        subtitle="Fostering physical discipline, teamwork, youth camaraderie, and healthy lifestyles across all technical campuses in Oti Region."
        badge="Athletics & Physical Wellbeing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sports & Recreation" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              <span>Extracurricular Vitality</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              Building Strong Minds and Sound Bodies
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              At Ghana TVET Service Oti Region, we believe that technical excellence is complemented by physical fitness, mental resilience, and fair play. Coordinated by our Regional Sports Directorate under <strong className="text-neutral-900">Paul Kwame Dashie</strong>, students across our five accredited institutes actively participate in football, volleyball, athletics, table tennis, and handball tournaments.
            </p>
          </div>

          {/* Related News & Announcements */}
          <div className="space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-extrabold text-neutral-900">
                News, Announcements & Events
              </h3>
              <p className="text-sm text-neutral-600">
                Latest regional achievements, institutional developments, and press releases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-bold text-[#034e9f] bg-[#034e9f]/10 px-3 py-1 rounded-full inline-block">
                        {item.date}
                      </span>
                      <h4 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-[#034e9f] transition-colors line-clamp-2">
                        <Link href={item.slug}>{item.title}</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                    <Link
                      href={item.slug}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#034e9f] pt-4"
                    >
                      <span>Read Story</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
