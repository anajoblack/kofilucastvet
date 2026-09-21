"use strict";
import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  highlightedWord,
  subtitle,
  badge,
  breadcrumbs = [{ label: "Home", href: "/" }],
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-[#023368] via-[#034e9f] to-[#045bbd] text-white overflow-hidden">
      {/* Background Curved SVG Overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'url("/images/hero-bg.svg")',
          backgroundSize: "cover",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-white/80">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <li key={index} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-white/50 flex-shrink-0" />}
                  {index === 0 && <Home className="w-3.5 h-3.5 mr-1.5 text-white/70" />}
                  {isLast || !item.href ? (
                    <span className="font-semibold text-[#f7b500] truncate max-w-[240px] md:max-w-none">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Optional Badge */}
        {badge && (
          <div className="inline-block bg-[#f7b500]/20 border border-[#f7b500]/40 text-[#f7b500] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            {badge}
          </div>
        )}

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight max-w-4xl">
          {highlightedWord && title.includes(highlightedWord) ? (
            <>
              {title.split(highlightedWord)[0]}
              <span className="text-[#f7b500]">{highlightedWord}</span>
              {title.split(highlightedWord)[1]}
            </>
          ) : (
            title
          )}
        </h1>

        {/* Optional Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
