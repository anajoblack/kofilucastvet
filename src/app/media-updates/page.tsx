"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Newspaper, Calendar, Award, ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Media Updates & Press Dispatches – Ghana TVETS Oti Region",
  description:
    "Official news, press statements, agricultural awards, and developmental milestones from the Ghana TVET Service Oti Regional Directorate.",
};

export const allNewsArticles = [
  {
    title: "Fr. Dogli Memorial Technical Institute Emerges as the National Best Second Cycle School in Practical Agriculture at the 41st National Best Farmers’ Day Award-2025",
    category: "National Award",
    date: "December 2025",
    image: "/images/news-1.jpg",
    slug: "/fr-dogli-memorial-technical-institute-emerges-as-the-national-best-second-cycle-school-in-practical-agriculture-at-the-41st-national-best-farmers-day-award-2025",
    excerpt: "Historic national glory as Fr. Dogli Memorial Technical Institute (DOTECH) in New Ayoma, Jasikan District, is awarded the prestigious National Best Second Cycle School in Practical Agriculture.",
  },
  {
    title: "Oti Regional Director and Principal of Fr. Dogli Memorial Technical Institute",
    category: "Leadership Feature",
    date: "December 2025",
    image: "/images/news-2.jpg",
    slug: "/oti-regional-director-and-principal-of-fr-dogli-memorial-technical-institute",
    excerpt: "Celebrating executive leadership and institutional synergy between Regional Director Engr. Robert K. Amontcho and DOTECH Principal Mrs. Brigitte Afi Dzakah.",
  },
  {
    title: "Regional Director’s Remark on Best Second Cycle Institution in Practical Agriculture at the 41st National Farmers’ Day Award-2025, Winning Region-Oti",
    category: "Official Statement",
    date: "December 2025",
    image: "/images/news-3.jpg",
    slug: "/regional-directors-remark-on-best-second-cycle-institution-in-practical-agriculture-at-the-41st-national-farmers-day-award-winning-region-oti",
    excerpt: "Full official text and congratulatory address by Ag. Regional Director Engr. Robert K. Amontcho applauding the facilitators, students, and chiefs of Oti Region.",
  },
  {
    title: "Regional Director Tours Exams Centers",
    category: "Monitoring & Supervision",
    date: "July 2025",
    image: "/wp-content/uploads/2025/05/2150880924.jpg",
    slug: "/regional-director-tours-exams-centers",
    excerpt: "The Oti Regional Director has toured several examination and practical testing centres across the region to monitor ongoing national technical assessments.",
  },
  {
    title: "Oti TVET Regional Directorate Pays Courtesy Call on Ghana TVET Service DG to Discuss Strategic Partnerships and Innovative Resource Mobilization",
    category: "Strategic Partnerships",
    date: "May 2025",
    image: "/wp-content/uploads/2025/04/pp01.jpg",
    slug: "/oti-tvet-regional-directorate-pays-courtesy-call-on-ghana-tvet-service-dg-to-discuss-strategic-partnerships-and-innovative-resource-mobilization",
    excerpt: "High-level delegation led by Engr. Robert K. Amontcho and NARNGO National President Mr. Kofi Lucas calls on Director General Engr. Dr. Eric Kofi Adzroe in Accra.",
  },
  {
    title: "Ghana TVETS News – Oti Region TVET Service to launch Website soon",
    category: "Digital Transformation",
    date: "April 2025",
    image: "/wp-content/uploads/2025/04/LOGO-2jj-04.png",
    slug: "/ghana-tvets-news-oti-region-tvet-service-launches-website",
    excerpt: "The Technical and Vocational Education and Training Service in Ghana's Oti Region gears up to go digital with the launch of its official state-of-the-art portal.",
  },
  {
    title: "Inadequate funding, others hinder TVET delivery — Report",
    category: "Policy & Sector Analysis",
    date: "2025",
    image: "/wp-content/uploads/2025/05/carpenter-cutting-mdf-board-inside-workshop.jpg",
    slug: "/ghana-tvets-news-oti-region-tvet-service-launches-website-2",
    excerpt: "National report examines systemic funding bottlenecks and digital infrastructure gaps facing pre-tertiary vocational delivery in the Fourth Industrial Revolution.",
  },
  {
    title: "Mobilise resources to elevate TVET as first-choice pathway for youth – Education Minister to TVET week planning committee",
    category: "National News",
    date: "2025",
    image: "/wp-content/uploads/2025/05/13693.jpg",
    slug: "/mobilise-resources-to-elevate-tvet-as-first-choice-pathway-for-youth-education-minister-to-tvet-week-planning-committee",
    excerpt: "Ministry of Education inaugurates National TVET Week committee, urging aggressive resource mobilization to reposition technical trades as first-choice careers.",
  },
  {
    title: "Strengthening TVET for national development: Role of tertiary institutions",
    category: "Higher Education",
    date: "2025",
    image: "/wp-content/uploads/2025/05/2150880997.jpg",
    slug: "/strengthening-tvet-for-national-development-role-of-tertiary-institutions",
    excerpt: "Explores critical linkages between secondary technical institutes and technical universities to ensure continuous lifelong learning and advanced engineering research.",
  },
];

export default function MediaUpdatesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Media Updates & News Portal"
        highlightedWord="Media Updates"
        subtitle="Official press releases, award announcements, regional dispatches, and policy updates from the Ghana TVET Service Oti Region."
        badge="Press Room & Archives"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media Updates" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Top Featured 3 Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allNewsArticles.slice(0, 3).map((article, idx) => (
              <article
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-52 bg-neutral-100 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#034e9f] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs text-neutral-400 font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#034e9f] transition-colors line-clamp-2">
                      <Link href={article.slug}>{article.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-2">
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#034e9f] pt-4 group-hover:text-[#023368]"
                  >
                    <span>Read Full Article</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Remaining Articles List */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <h3 className="text-2xl font-extrabold text-neutral-900 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-[#034e9f]" />
              <span>More Dispatches & Regional Reports</span>
            </h3>

            <div className="divide-y divide-neutral-200">
              {allNewsArticles.slice(3).map((article, idx) => (
                <div key={idx} className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#034e9f] bg-[#034e9f]/10 px-2.5 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {article.date}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#034e9f] transition-colors">
                      <Link href={article.slug}>{article.title}</Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <Link
                    href={article.slug}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#034e9f] group-hover:text-[#023368] whitespace-nowrap self-start md:self-center"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
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
