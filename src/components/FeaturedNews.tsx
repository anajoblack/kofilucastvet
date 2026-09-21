"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ChevronRight, Newspaper, Calendar } from "lucide-react";

export default function FeaturedNews() {
  const newsItems = [
    {
      id: 1,
      title:
        "Fr. Dogli Memorial Technical Institute Emerges as the National Best Second Cycle School in Practical Agriculture at the 41st National Best Farmers’ Day Award-2025",
      category: "National Recognition",
      date: "National Farmers' Day",
      image: "/images/news-1.jpg",
      excerpt:
        "Historic achievement as Fr. Dogli Memorial Technical Institute in Oti Region clinches the highest national honor in second cycle agricultural excellence.",
      href: "/fr-dogli-memorial-technical-institute-emerges-as-the-national-best-second-cycle-school-in-practical-agriculture-at-the-41st-national-best-farmers-day-award-2025",
    },
    {
      id: 2,
      title: "Oti Regional Director and Principal of Fr. Dogli Memorial Technical Institute",
      category: "Leadership Spotlight",
      date: "Regional Feature",
      image: "/images/news-2.jpg",
      excerpt:
        "Celebrating strategic leadership and exemplary institutional stewardship in advancing modern technical agricultural education across the region.",
      href: "/oti-regional-director-and-principal-of-fr-dogli-memorial-technical-institute",
    },
    {
      id: 3,
      title:
        "Regional Director’s Remark on Best Second Cycle Institution in Practical Agriculture at the 41st National Farmers’ Day Award-2025, Winning Region-Oti",
      category: "Press Statement",
      date: "Official Address",
      image: "/images/news-3.jpg",
      excerpt:
        "Full text and executive remarks by Engr. Robert K. Amontcho commending facilitators, students, and stakeholders on winning this historic milestone.",
      href: "/regional-directors-remark-on-best-second-cycle-institution-in-practical-agriculture-at-the-41st-national-farmers-day-award-winning-region-oti",
    },
  ];

  return (
    <section id="featured-news" className="bg-[#ffd000] text-black py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-black/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-black/80 mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Regional Dispatches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Featured <span className="font-semibold text-[#034e9f]">News</span>
          </h2>
        </div>

        {/* 3-Column News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-black/5 hover:-translate-y-1 group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative w-full h-48 sm:h-52 bg-neutral-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-4">
                  {/* Meta Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#034e9f] bg-[#034e9f]/10 px-3 py-1 rounded-full">
                      <Award className="w-3.5 h-3.5 text-[#034e9f]" />
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-400 font-medium flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  {/* News Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#034e9f] transition-colors line-clamp-2">
                    <Link href={item.href}>{item.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 mt-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#034e9f] group-hover:text-black transition-colors"
                >
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
