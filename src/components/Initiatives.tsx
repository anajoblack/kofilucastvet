"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Users } from "lucide-react";

export default function Initiatives() {
  return (
    <div id="projects" className="w-full">
      {/* 1. Proposed Office Building Section */}
      <section className="bg-[#1c1c1e] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#f7b500] font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Infrastructure Expansion</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Proposed Office Building of OTI Regional TVET Service.
              </h2>
              <div>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#f7b500] transition-all shadow-md hover:scale-105 active:scale-95"
                >
                  <span>See Upcoming Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Rendering */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden border-2 border-white/10 shadow-2xl bg-neutral-900 group">
                <Image
                  src="/images/proposed-building.jpeg"
                  alt="Proposed Office Building of OTI Regional TVET Service"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Courtesy Call on Ghana TVET Service Director General */}
      <section className="bg-[#034e9f] text-white py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#f7b500] font-semibold">
                <Users className="w-4 h-4" />
                <span>Executive Engagement</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                Oti TVET Regional Directorate Pays Courtesy Call on Ghana TVET Service Director General
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Strengthening national alignment, policy support, and regional empowerment to advance technical and vocational training across all districts in the Oti Region.
              </p>
            </div>

            {/* Right Delegation Photo */}
            <div className="lg:col-span-7">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[24px] overflow-hidden border-4 border-white/20 shadow-2xl bg-[#023368] group">
                <Image
                  src="/images/courtesy-call.jpeg"
                  alt="Oti TVET Regional Directorate delegation courtesy call"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
