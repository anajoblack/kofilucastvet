"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";

export default function AdministrativeStructure() {
  const districts = [
    { name: "Jasikan District", capital: "Jasikan" },
    { name: "Biakoye District", capital: "Nkonya Ahenkro" },
    { name: "Kadjebi District", capital: "Kadjebi" },
    { name: "Nkwanta South Municipality", capital: "Nkwanta" },
    { name: "Nkwanta North District", capital: "Kpassa" },
    { name: "Krachi East Municipality", capital: "Dambai" },
    { name: "Krachi West District", capital: "Kete Krachi" },
    { name: "Krachi Nchumuru District", capital: "Chinderi" },
    {
      name: "Guan District (SALL Area)",
      capital: "Likpe Mate",
      note: "(Yet to be inaugurated)",
    },
  ];

  return (
    <section className="bg-[#050926] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Constitutional Description & District List */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Administrative Structure of the Region
            </h2>

            <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed text-justify sm:text-left font-light">
              As specified in CI 112 of 2019, the Oti Region is made up of eight (8) existing administrative districts and the SALL Area consisting of the four Traditional Areas of Santrokofi, Akpafu, Lolobi, and Likpe which have just been constituted into a new District called Guan with its Capital at Likpe Mate. The Guan District is yet to be inaugurated. The Regional Coordinating Council: The Regional Coordinating Council was inaugurated in July 2019. The composition consists of the Regional Minister, the Municipal and District Chief Executives and Presiding Members of the 8 Municipal and District Assemblies, Two Representatives of the Regional House of Chiefs, and the Regional Heads of Departments who are ex-officio members.
            </p>

            {/* Structured Bulleted List of Districts */}
            <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 shadow-inner">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                {districts.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/90">
                    <MapPin className="w-4 h-4 text-[#f7b500] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">{d.name}</strong> – Capital:{" "}
                      <em className="text-[#ffd000]">{d.capital}</em>
                      {d.note && <span className="text-white/60 ml-1">{d.note}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Source Link */}
            <div className="pt-2">
              <Link
                href="https://orcc.gov.gh/about-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-[#f7b500] transition-colors"
              >
                <span>Source: https://orcc.gov.gh/about-us/</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Oti Region Map */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] flex items-center justify-center p-4">
              <Image
                src="/images/oti-map.png"
                alt="Administrative Map of Oti Region showing 9 districts and municipalities"
                fill
                className="object-contain drop-shadow-[0_10px_35px_rgba(21,121,230,0.35)]"
                sizes="(max-width: 768px) 300px, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
