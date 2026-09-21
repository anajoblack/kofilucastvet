"use strict";
import React from "react";
import Link from "next/link";
import { Heart, Handshake, BookOpen, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="support"
      className="relative bg-gradient-to-r from-[#034e9f] via-[#0b5ebd] to-[#034e9f] text-white py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#f7b500] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-black" />
            <span>Support Technical & Vocational Education</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Partner with OTI TVET to Empower the Next Generation of Skilled Leaders
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether through tool and workshop donations, mastercraft mentorship, scholarship funds, or corporate apprenticeship programs, your support transforms communities across the Oti Region.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#f7b500] hover:bg-[#ffd000] text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              <span>Donate or Sponsor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/30 transition-all hover:scale-105 active:scale-95"
            >
              <Handshake className="w-4 h-4" />
              <span>Become an Industry Partner</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
