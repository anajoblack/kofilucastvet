"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { CheckCircle2, Briefcase, School, ArrowRight, BookOpen } from "lucide-react";

export interface TradeDetailProps {
  title: string;
  category: string;
  image: string;
  tagline: string;
  overview: string;
  competencies: string[];
  careers: string[];
  institutes: { name: string; slug: string; town: string }[];
}

export default function TradeDetailView({
  title,
  category,
  image,
  tagline,
  overview,
  competencies,
  careers,
  institutes,
}: TradeDetailProps) {
  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title={title}
        subtitle={tagline}
        badge={category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: title },
        ]}
      />

      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Media & Overview */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200/80">
            <div className="relative w-full h-72 sm:h-96 bg-neutral-100">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#034e9f]/10 text-[#034e9f] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Programme Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                {title}
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                {overview}
              </p>
            </div>
          </div>

          {/* Competencies & Careers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Core Competencies */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#034e9f]" />
                <span>Core Competencies Acquired</span>
              </h3>
              <ul className="space-y-3">
                {competencies.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#f7b500] flex-shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-neutral-200/80 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#034e9f]" />
                <span>Career & Employment Pathways</span>
              </h3>
              <ul className="space-y-3">
                {careers.map((career, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#034e9f] flex-shrink-0 mt-2" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accredited Institutions Offering This Trade */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <School className="w-6 h-6 text-[#034e9f]" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                Accredited Institutions Offering {title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600">
              Students can enroll in this trade at the following technical institutes in Oti Region:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {institutes.map((inst, idx) => (
                <Link
                  key={idx}
                  href={inst.slug}
                  className="p-4 rounded-2xl bg-neutral-50 hover:bg-[#034e9f]/5 border border-neutral-100 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-[#034e9f] transition-colors">
                      {inst.name}
                    </h4>
                    <p className="text-xs text-neutral-500">{inst.town}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#034e9f] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdministrativeStructure />
    </main>
  );
}
