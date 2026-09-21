"use strict";
import React from "react";
import Image from "next/image";

export default function MessagesSection() {
  return (
    <div className="w-full">
      {/* 1. Father's Day Message */}
      <section className="bg-[#670010] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-black/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-white">
            2025 GOOD WILL MESSAGE TO FATHERS IN OTI REGION, GHANA AND GLOBALLY.
          </h2>

          {/* Arch Portrait */}
          <div className="flex justify-center">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 stadium-arch-frame overflow-hidden border-[5px] border-white/90 shadow-2xl bg-black/20">
              <Image
                src="/images/director-fathers.jpg"
                alt="Engr. Robert K. Amontcho - Goodwill Message to Fathers"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
          </div>

          {/* Message Text */}
          <div className="max-w-2xl mx-auto space-y-3 text-white/95 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              Happy Father’s Day to all fathers in the OTI TVET Region, Ghana, and globally! As the Acting Regional Director, I salute you for your dedication, love, and sacrifices.
            </p>
            <p>Your role in shaping the next generation is invaluable.</p>
            <p>May this special day bring you joy, appreciation, and celebration.</p>
            <p>Thank you for being pillars of strength and inspiration.</p>
            <p>Wishing you continued good health, happiness, and fulfillment..</p>
          </div>

          {/* Signoff */}
          <div className="pt-2 text-white">
            <p className="font-bold text-base sm:text-lg">Engr. Robert K. Amontcho</p>
            <p className="text-white/80 text-xs sm:text-sm">Ag. Director, TVET, Oti</p>
          </div>
        </div>
      </section>

      {/* 2. Goodwill Message to Muslims */}
      <section className="bg-[#2a0106] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-black/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-white">
            2025 GOODWILL MESSAGE TO MUSLIMS IN OTI REGION, GHANA AND GLOBALLY.
          </h2>

          {/* Arch Portrait */}
          <div className="flex justify-center">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 stadium-arch-frame overflow-hidden border-[5px] border-white/90 shadow-2xl bg-black/40">
              <Image
                src="/images/director-muslims.jpeg"
                alt="Engr. Robert K. Amontcho - Goodwill Message to Muslims"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
          </div>

          {/* Message Text */}
          <div className="max-w-2xl mx-auto space-y-3 text-white/95 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              On behalf of OTI TVET, I extend warmest Eid Mubarak greetings to our Muslim students, staff, and partners in Ghana and globally. May this joyous occasion bring peace, happiness, and prosperity. We celebrate the values of compassion, forgiveness, and unity that Eid embodies. Wishing you a blessed Eid celebration!.
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-2 text-white">
            <p className="font-bold text-base sm:text-lg">Engr. Robert K. Amontcho</p>
            <p className="text-white/80 text-xs sm:text-sm">Ag. Director, TVET, Oti</p>
          </div>
        </div>
      </section>

      {/* 3. Workers Day Message */}
      <section className="bg-[#7e0d19] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-black/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-white">
            2025 SPECIAL WORKERS DAY MESSAGE
          </h2>

          {/* Arch Portrait */}
          <div className="flex justify-center">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 stadium-arch-frame overflow-hidden border-[5px] border-white/90 shadow-2xl bg-black/20">
              <Image
                src="/images/director-workers.jpeg"
                alt="Engr. Robert K. Amontcho - Workers Day Message"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
          </div>

          {/* Message Text */}
          <div className="max-w-2xl mx-auto space-y-3 text-white/95 text-sm sm:text-base leading-relaxed font-normal">
            <p className="font-semibold text-base sm:text-lg text-white">
              2025 Happy Labour Day to Our Amazing Team!
            </p>
            <p>
              To the Management and Staff of the OTI TVET Regional Directorate, Principals, Facilitators, Staff, and Workers of TVET schools in the OTI Region,
            </p>
            <p>
              Your dedication and hard work drive our organization’s success. Thank you for being integral to our journey. Let’s continue working together, committed to the OTI Region’s and Ghana’s growth.
            </p>
            <p>
              I pledge to provide exemplary leadership, serving the Regional Directorate, OTI TVET schools, and our people. I wish all workers in Ghana and globally a Happy Labour Day, good health, and continued hard work.
            </p>
            <p>May God bless us all.</p>
          </div>

          {/* Signoff */}
          <div className="pt-2 text-white">
            <p className="font-bold text-base sm:text-lg">Engr. Robert K. Amontcho</p>
            <p className="text-white/80 text-xs sm:text-sm">Ag. Director, TVET, Oti</p>
          </div>
        </div>
      </section>

      {/* 4. Easter Message */}
      <section className="bg-[#ffd000] text-[#4a000c] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide uppercase text-[#670010]">
            2025 SPECIAL EASTER MESSAGE
          </h2>

          {/* Arch Portrait */}
          <div className="flex justify-center">
            <div className="relative w-56 sm:w-64 h-72 sm:h-80 stadium-arch-frame overflow-hidden border-[5px] border-white shadow-2xl bg-amber-200">
              <Image
                src="/images/director-easter.jpeg"
                alt="Engr. Robert K. Amontcho - Easter Message"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 224px, 256px"
              />
            </div>
          </div>

          {/* Message Text */}
          <div className="max-w-2xl mx-auto space-y-3 text-neutral-900 text-sm sm:text-base leading-relaxed font-normal">
            <p className="font-medium">Dear Principals, Management, and Staff,</p>
            <p>
              As we celebrate Easter, a time of renewal and hope, I want to express my sincere wishes for a blessed and joyful holiday season.
            </p>
            <p>
              May this time bring you peace, joy, and moments of reflection.
              <br />
              I extend my heartfelt gratitude for your dedication and commitment to the advancement of TVET education within our OTI region.
            </p>
            <p>
              Your hard work and perseverance are truly appreciated.
              <br />
              May the spirit of Easter inspire us to continue striving for excellence in our work and to make a positive impact on the lives of our students and the community.
            </p>
            <p>
              Wishing you a safe and happy Easter break!
              <br />
              Sincerely,
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-2 text-neutral-900">
            <p className="font-bold text-base sm:text-lg">Engr. Robert K. Amontcho</p>
            <p className="text-neutral-800 text-xs sm:text-sm">Ag. Director, TVET, Oti</p>
          </div>
        </div>
      </section>
    </div>
  );
}
