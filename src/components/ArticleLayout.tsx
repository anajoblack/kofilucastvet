"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import AdministrativeStructure from "@/components/AdministrativeStructure";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";

export interface ArticleLayoutProps {
  title: string;
  category: string;
  date: string;
  author?: string;
  featuredImage?: string;
  children: React.ReactNode;
  gallery?: { src: string; caption?: string }[];
}

export default function ArticleLayout({
  title,
  category,
  date,
  author = "Ghana TVET Service Oti Regional Directorate",
  featuredImage,
  children,
  gallery,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-neutral-50">
      <PageHeader
        title={title}
        badge={category}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Media Updates", href: "/media-updates" },
          { label: "Article" },
        ]}
      />

      <article className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Article Header & Meta */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-neutral-200/80 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100 text-xs sm:text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#034e9f]" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#034e9f]" />
                <span className="font-semibold text-neutral-800">{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#f7b500]" />
                <span className="text-[#034e9f] font-bold">{category}</span>
              </div>
            </div>

            {/* Featured Image */}
            {featuredImage && (
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-neutral-100 shadow-md">
                <Image
                  src={featuredImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Main Text Content */}
            <div className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed space-y-5 text-base sm:text-lg">
              {children}
            </div>

            {/* Optional Gallery */}
            {gallery && gallery.length > 0 && (
              <div className="pt-8 border-t border-neutral-100 space-y-4">
                <h4 className="text-xl font-bold text-neutral-900">Event Photo Gallery</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {gallery.map((img, i) => (
                    <div key={i} className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-sm group">
                      <Image
                        src={img.src}
                        alt={img.caption || `Gallery photo ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Back */}
            <div className="pt-8 border-t border-neutral-100 flex items-center justify-between">
              <Link
                href="/media-updates"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#034e9f] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Media Updates</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <AdministrativeStructure />
    </main>
  );
}
