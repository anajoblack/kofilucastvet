"use strict";
import React from "react";
import Link from "next/link";
import { Radio } from "lucide-react";

export default function NewsTicker() {
  const newsItems = [
    {
      title: "Fr. Dogli Memorial Technical Institute Emerges as the National Best Second Cycle School in Practical Agriculture at the 41st National Best Farmers' Day Award-2025",
      href: "#featured-news",
    },
    {
      title: "Oti Regional Director and Principal of Fr. Dogli Memorial Technical Institute",
      href: "#featured-news",
    },
    {
      title: "Regional Director's Remark on Best Second Cycle Institution in Practical Agriculture at the 41st National Farmers' Day Award-2025, Winning Region-Oti",
      href: "#featured-news",
    },
  ];

  return (
    <div
      id="news-updates"
      className="bg-white border-y border-neutral-200 py-2.5 px-4 overflow-hidden relative shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4">
        {/* News Updates Badge */}
        <div className="flex-shrink-0 flex items-center gap-2 bg-[#1b8755] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-sm">
          <Radio className="w-3.5 h-3.5 animate-pulse text-[#ffd000]" />
          <span className="whitespace-nowrap">News Updates</span>
        </div>

        {/* Marquee Ticker */}
        <div className="relative overflow-hidden w-full flex items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 py-0.5">
            {/* Double the list for seamless infinite loop */}
            {[...newsItems, ...newsItems, ...newsItems].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-12">
                <Link
                  href={item.href}
                  className="text-xs sm:text-sm font-medium text-neutral-800 hover:text-[#034e9f] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f7b500]" />
                  <span>{item.title}</span>
                </Link>
                <span className="text-neutral-300">|</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
