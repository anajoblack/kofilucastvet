"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#034e9f] bg-[url('/images/hero-bg.svg')] bg-cover bg-no-repeat bg-bottom overflow-hidden pt-[140px] sm:pt-[160px] lg:pt-[175px] pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f7b500] inline-block shrink-0 shadow-sm" />
              <span className="text-[12px] sm:text-[13px] font-medium text-white uppercase tracking-[3px]">
                EMPOWERING SKILLS, TRANSFORMING LIVES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[43px] xl:text-[46px] font-semibold text-white leading-[1.22] tracking-tight max-w-[590px] mb-3">
              TVET programs tailored for local growth and global opportunities
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-[17px] text-white/95 font-light italic max-w-[540px] mb-8 leading-relaxed">
              Building the future of Oti Region through practical and inclusive TVET education.
            </p>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <Link
                href="#programmes"
                className="inline-block bg-white text-[#030000] hover:bg-[#f7b500] font-semibold text-[15px] px-8 py-3 rounded-full transition-all shadow-md hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore
              </Link>

              <Link
                href="#support"
                className="inline-flex items-center gap-2 text-white hover:text-[#f7b500] font-semibold text-[15px] transition-colors group"
              >
                <span>Support TVET</span>
                <span className="text-base leading-none transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Student Media with 42px rounded corners and white border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[510px] aspect-[4/3] rounded-[42px] overflow-hidden border-[5px] border-white shadow-2xl bg-[#034e9f] group">
              <Image
                src="/images/hero-student.jpeg"
                alt="Empowering skills in Oti Region"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 510px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
