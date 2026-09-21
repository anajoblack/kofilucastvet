"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Quote, CheckCircle2, Handshake, HeartHandshake, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Message From the Director – Ghana TVETS Oti Region",
  description:
    "Official welcome message and address by Engr. Robert K. Amontcho, Ag. Regional Director of Ghana TVET Service, Oti Region.",
};

export default function DirectorPage() {
  const missionPriorities = [
    { title: "Capacity Building", desc: "Equipping teaching staff and MasterCraft persons with cutting-edge pedagogical and technical skills." },
    { title: "Modernizing Facilities", desc: "Upgrading workshops, laboratories, and school farms to meet international industry standards." },
    { title: "Fostering Partnerships", desc: "Deepening ties with industry captains to assure immediate workplace relevance and employment pathways." },
    { title: "Attracting Investment", desc: "Attracting private and institutional capital to finance regional factories and youth enterprises." },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Message From the Regional Director"
        highlightedWord="Regional Director"
        subtitle="Strategic leadership, human capital development, and the future of TVET in the Oti Region."
        badge="Executive Leadership Address"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Director's Message" },
        ]}
      />

      {/* Main Address Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Director Portrait & Bio Card */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200/80 text-center">
                <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md bg-neutral-100">
                  <Image
                    src="/wp-content/uploads/2025/04/sss.jpeg"
                    alt="Engr. Robert K. Amontcho - Ag. Regional Director"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-6 space-y-1">
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    Engr. Robert K. Amontcho
                  </h3>
                  <p className="text-sm font-semibold text-[#034e9f]">
                    Ag. Regional Director
                  </p>
                  <p className="text-xs text-neutral-500">
                    Ghana TVET Service – Oti Region
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-100 flex justify-center gap-3">
                  <Link
                    href="/meet-the-team"
                    className="text-xs font-semibold text-[#034e9f] hover:underline"
                  >
                    View Regional Team →
                  </Link>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="bg-[#023368] text-white rounded-3xl p-6 shadow-sm space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#f7b500]">
                  Directorate Office
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Have an enquiry or partnership proposal for the Regional Directorate?
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors border border-white/10"
                >
                  Contact the Director's Office
                </Link>
              </div>
            </div>

            {/* Right Column: Full Official Speech Text */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-8">
              {/* Opening Quote */}
              <div className="relative pl-6 border-l-4 border-[#f7b500] space-y-2">
                <Quote className="w-8 h-8 text-[#f7b500]/40 absolute -top-3 -left-3" />
                <p className="text-lg sm:text-xl font-medium text-neutral-900 italic leading-relaxed">
                  “Our strategic vision is to transform technical and vocational education in our region by leveraging our natural resources, diverse cultures, and strong agricultural base.”
                </p>
              </div>

              <div className="space-y-6 text-neutral-700 text-base sm:text-lg leading-relaxed">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  Welcome to the Official Oti TVET Portal
                </h2>
                <p>
                  I am pleased to officially welcome you to the state-of-the-art website of the <strong className="text-neutral-900">Ghana TVET Service, Oti Region</strong>. As the Acting Regional Director, I am privileged to lead this transformative initiative at this defining moment in our nation's educational trajectory.
                </p>
                <p>
                  Our region is blessed with fertile agricultural lands, vibrant youth dynamism, and rich cultural traditions. We face unique challenges, but through unwavering commitment, innovative training methods, and strategic leadership, we are determined to harness our indigenous strengths to catalyze sustainable economic and industrial development.
                </p>

                {/* Mission Section */}
                <div className="pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#034e9f]" />
                    <span>Our Strategic Mission</span>
                  </h3>
                  <p className="text-base text-neutral-700">
                    To provide quality, relevant, and accessible technical education that equips the youth of Oti with the practical skills required to drive modern economic growth:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {missionPriorities.map((item, i) => (
                      <div key={i} className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                        <div className="flex items-center gap-2 text-[#034e9f] font-bold text-sm mb-1">
                          <CheckCircle2 className="w-4 h-4 text-[#034e9f] flex-shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Collaboration */}
                <div className="pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-[#034e9f]" />
                    <span>Strategic Collaboration</span>
                  </h3>
                  <p className="text-base text-neutral-700">
                    We have partnered with a Strategic Consortium comprising experts in funds mobilization, strategists, and operational tacticians to support our mission. Together, we are working tirelessly to systematically address infrastructure gaps, build state-of-the-art workshops, and bring our ambitious 2025 Action Plan to fruition.
                  </p>
                </div>

                {/* Call to Action */}
                <div className="pt-4 space-y-4">
                  <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-[#034e9f]" />
                    <span>Call to Action</span>
                  </h3>
                  <p className="text-base text-neutral-700">
                    I invite you to explore our website, discover our innovative programmes, and join hands with us in building a prosperous future through technical and vocational skills. Please share our official portal (<strong className="text-[#034e9f]">ghana.tvetsotiregion.com</strong>) with peers and stakeholders who share our passion for youth empowerment.
                  </p>
                </div>

                {/* Sign-off */}
                <div className="pt-8 border-t border-neutral-200">
                  <p className="font-semibold text-neutral-900">Thank you for visiting, and I wish you well.</p>
                  <div className="mt-4">
                    <p className="text-xl font-extrabold text-neutral-900">Engr. Robert K. Amontcho</p>
                    <p className="text-sm font-semibold text-[#034e9f]">
                      Ag. Regional Director, Ghana TVET Service – Oti Region
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
