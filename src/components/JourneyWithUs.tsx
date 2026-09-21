"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function JourneyWithUs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const galleryItems = [
    {
      title: "Electrical & Electronics",
      category: "Engineering Trades",
      image: "/images/gallery/pp01_XGUM.jpg",
      description: "Hands-on installation, solar photovoltaics, and circuitry training.",
    },
    {
      title: "Mechanical & Fabrication",
      category: "Industrial Skills",
      image: "/images/gallery/pp02_XGUM.jpg",
      description: "Precision welding, fabrication, and equipment maintenance.",
    },
    {
      title: "Carpentry & Joinery",
      category: "Construction Arts",
      image: "/images/gallery/pp03_XGUM.jpg",
      description: "Modern furniture design, structural woodcraft, and finishing.",
    },
    {
      title: "Fashion & Garment Making",
      category: "Creative Industries",
      image: "/images/gallery/pp04_XGUM.jpg",
      description: "Textile technology, bespoke tailoring, and apparel production.",
    },
    {
      title: "Automotive Technology",
      category: "Vehicle Systems",
      image: "/images/gallery/pp05_XGUM.jpg",
      description: "Diagnostics, engine overhaul, and modern automotive mechanics.",
    },
    {
      title: "ICT & Digital Skills",
      category: "Technology",
      image: "/images/gallery/pp06_XGUM.jpg",
      description: "Computer hardware, network systems, and software fundamentals.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Watermark "TVETS" (matches visual screenshot) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-30">
        <span className="text-[120px] sm:text-[180px] md:text-[240px] font-black text-neutral-200 tracking-wider">
          TVETS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#034e9f] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#f7b500]" />
            <span>Practical Vocational Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Journey <span className="font-serif italic font-normal text-[#034e9f]">with</span> Us
          </h2>
          <p className="mt-4 text-neutral-600 text-sm sm:text-base">
            Experience our dynamic vocational learning environments, industry mentorships, and state-of-the-art regional workshops.
          </p>
        </div>

        {/* Interactive Expanding Image Gallery Accordion */}
        <div className="flex flex-col lg:flex-row gap-4 h-[560px] sm:h-[600px] lg:h-[480px]">
          {galleryItems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                  isActive
                    ? "lg:flex-[3] flex-[3] shadow-2xl ring-2 ring-[#034e9f]"
                    : "lg:flex-[1] flex-[1] shadow-md opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-75"
                  }`}
                />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f7b500] mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>

                  {isActive && (
                    <div className="mt-2 text-xs sm:text-sm text-neutral-200 line-clamp-2 animate-in fade-in duration-300">
                      {item.description}
                    </div>
                  )}
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
