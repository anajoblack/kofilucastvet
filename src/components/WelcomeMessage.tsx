"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function WelcomeMessage() {
  return (
    <section
      id="director-welcome"
      className="bg-[#050926] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#034e9f]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-white">
            WELCOME MESSAGE TO THIS WEBSITE
          </h2>
        </div>

        {/* Arch Portrait with Decorative Quotes on either side */}
        <div className="flex items-center justify-center gap-4 sm:gap-12 md:gap-20 mb-12">
          {/* Left Decorative Quote */}
          <div className="text-[#38bdf8]/80 hidden sm:block">
            <Quote className="w-16 h-16 md:w-20 md:h-20 -scale-x-100 fill-current opacity-70" />
          </div>

          {/* Director Arch Image */}
          <div className="relative w-60 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] stadium-arch-frame overflow-hidden border-[6px] border-white/95 shadow-[0_0_50px_rgba(3,78,159,0.5)] bg-[#021b3a]">
            <Image
              src="/images/director-welcome.jpeg"
              alt="Engr. Robert K. Amontcho - Ag. Director, TVET, Oti"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
            />
          </div>

          {/* Right Decorative Quote */}
          <div className="text-[#38bdf8]/80 hidden sm:block">
            <Quote className="w-16 h-16 md:w-20 md:h-20 fill-current opacity-70" />
          </div>
        </div>

        {/* Detailed Message Text Content */}
        <div className="max-w-3xl mx-auto space-y-7 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left font-light">
          <p className="text-white text-base sm:text-lg leading-relaxed">
            I am pleased to officially welcome you to the State-of-the-art-website of the Ghana TVET Service Oti Region. As the Acting Regional Director, I am privileged to lead this initiative.
          </p>

          <p>
            Our strategic vision is to transform technical and vocational education in our region by leveraging our natural resources, diverse cultures, and strong agricultural base. We face opportunities and challenges, but we are committed to harnessing our strengths to drive sustainable development.
          </p>

          {/* Mission Card */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 text-left space-y-4 shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#f7b500]">Our Mission</h3>
            <p className="text-white/90">
              To provide quality, relevant, and accessible technical education, empowering our youth with the skills needed to drive economic development. We aim to achieve this through:
            </p>
            <ul className="space-y-2.5 pl-4 text-white/85 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#f7b500] font-bold">–</span>
                <div>
                  <strong className="text-white">Capacity building</strong> for:
                  <div className="pl-4 pt-1 space-y-1 text-white/80">
                    <p>i. Staff</p>
                    <p>ii. MasterCraft Persons</p>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f7b500] font-bold">–</span>
                <span>Modernizing training facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f7b500] font-bold">–</span>
                <span>Fostering industry partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f7b500] font-bold">–</span>
                <span>Attracting investors to create jobs for our youth</span>
              </li>
            </ul>
          </div>

          {/* Strategic Collaboration */}
          <div className="text-left space-y-2">
            <h3 className="text-lg font-bold text-white">Strategic Collaboration</h3>
            <p className="text-white/85">
              We have partnered with a Strategic Consortium comprising experts in funds mobilization, strategists, and tacticians to support our mission. Together, we will work tirelessly to address our weaknesses and achieve our goals.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-left space-y-2 pt-2">
            <h3 className="text-lg font-bold text-white">Call to Action</h3>
            <p className="text-white/85">
              I invite you to explore our website, learn about our initiatives, and join us in building a prosperous future for humanity through technical and vocational education. Recommend our link{" "}
              <Link
                href="https://ghana.tvetsotiregion.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f7b500] hover:underline font-bold"
              >
                (ghana.tvetsotiregion.com)
              </Link>{" "}
              to your friends and support our cause.
            </p>
          </div>

          <p className="pt-2 text-white/90">Thank you for visiting, and I wish you well.</p>

          {/* Signoff */}
          <div className="pt-6 border-t border-white/10 text-center sm:text-left">
            <p className="text-xl font-bold text-white">Engr. Robert K. Amontcho</p>
            <p className="text-[#f7b500] text-sm font-medium">Ag. Director, TVET, Oti</p>
          </div>
        </div>
      </div>
    </section>
  );
}
