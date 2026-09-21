"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { BookOpen, ChevronRight, Wrench, Sparkles } from "lucide-react";

export const metadata = {
  title: "Our Programmes – Ghana TVETS Oti Region",
  description:
    "Explore accredited Competency-Based Training (CBT) vocational and technical programmes offered across Oti Region technical institutes.",
};

export default function ProgrammesPage() {
  const programmes = [
    {
      title: "Building Construction Technology",
      slug: "/building-construction-technology",
      image: "/wp-content/uploads/2025/05/carpenter-cutting-mdf-board-inside-workshop.jpg",
      description:
        "Learn the science and art of building. This programme trains students in modern construction techniques, structural design, masonry, concrete work, and project site management.",
      category: "Engineering & Built Environment",
    },
    {
      title: "Electrical Engineering Technology",
      slug: "/electrical-engineering-technology",
      image: "/wp-content/uploads/2025/05/2150880924.jpg",
      description:
        "Power up your future. Gain hands-on experience in domestic and industrial electrical systems, electrical installation, wiring, automation, maintenance, and renewable energy solutions.",
      category: "Electrical & Electronics",
    },
    {
      title: "Fashion Design Technology",
      slug: "/fashion-design-technology",
      image: "/wp-content/uploads/2025/05/13693.jpg",
      description:
        "Creativity meets craftsmanship. Develop skills in garment construction, fashion illustration, tailoring, pattern drafting, textile design, and contemporary African apparel.",
      category: "Creative Arts & Design",
    },
    {
      title: "Business Accounting",
      slug: "/business-accounting",
      image: "/wp-content/uploads/2025/05/9200.jpg",
      description:
        "Numbers that build nations. Learn the principles of financial reporting, bookkeeping, computerized accounting systems, auditing, budgeting, taxation, and business analytics.",
      category: "Business & Management",
    },
    {
      title: "Business Secretarial",
      slug: "/business-secretarial",
      image: "/wp-content/uploads/2025/05/3307.jpg",
      description:
        "The engine behind every modern office. Acquire mastery in executive office management, business communication, records keeping, digital administration tools, and typing speed.",
      category: "Business & Management",
    },
    {
      title: "Agricultural Mechanization Technology",
      slug: "/agricultural-mechanization-technology",
      image: "/wp-content/uploads/2025/05/2149894686.jpg",
      description:
        "Feeding the future through technology. Train in the operation, repair, fabrication, and maintenance of agricultural machinery, tractors, irrigation rigs, and agro-processing equipment.",
      category: "Agribusiness & Mechanics",
    },
    {
      title: "Wood Construction Technology",
      slug: "/wood-construction-technology",
      image: "/wp-content/uploads/2025/05/2149451068.jpg",
      description:
        "Crafting with structural precision. Master wooden structural frameworks, specialized cabinetry, industrial wood machining, finishing, and timber preservation techniques.",
      category: "Engineering & Built Environment",
    },
    {
      title: "Computer Hardware Technology",
      slug: "/computer-hardware-technology",
      image: "/wp-content/uploads/2025/05/2150880997.jpg",
      description:
        "Where tech begins. Dive deep into computer assembly, system diagnostics, electronics repair, PC troubleshooting, basic networking, and hardware maintenance.",
      category: "ICT & Digital Innovation",
    },
    {
      title: "Hospitality and Catering Management",
      slug: "/hospitality-and-catering-management",
      image: "/wp-content/uploads/2025/05/2150722777.jpg",
      description:
        "Serve with world-class excellence. Get equipped in culinary arts, commercial food production, bakery, hotel operations, event planning, hygiene, and guest hospitality.",
      category: "Hospitality & Tourism",
    },
    {
      title: "Carpentry and Joinery Technology",
      slug: "/carpentry-and-joinery-technology",
      image: "/wp-content/uploads/2025/05/2150104751.jpg",
      description:
        "From foundation to elegant styling. Focused training in house framing, truss roofing, acoustic ceilings, door and window joinery, and architectural wood installations.",
      category: "Engineering & Built Environment",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title="Our Technical & Vocational Programmes"
        highlightedWord="Programmes"
        subtitle="Practical, Competency-Based Training (CBT) curricula designed to launch rewarding careers and fuel industrial growth."
        badge="Curriculum & Trades"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes" },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Introduction */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Competency-Based Training</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Industry-Driven Education for the 21st Century
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              The TVET Service in the Oti Region offers practical, industry-driven programmes tailored to the economic needs of the region and Ghana at large. Our curriculum emphasizes hands-on workshop training, industrial attachments, and entrepreneurial incubation.
            </p>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#f7b500] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {prog.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#034e9f] transition-colors leading-snug">
                      <Link href={prog.slug}>{prog.title}</Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-4">
                  <Link
                    href={prog.slug}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-[#034e9f] group-hover:text-[#023368] pt-4"
                  >
                    <span>Learn more about {prog.title.split(" ")[0]}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
