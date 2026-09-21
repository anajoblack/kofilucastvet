"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b0f19] text-white border-t border-neutral-800">
      {/* Upper Footer info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="relative h-12 w-52">
              <Image
                src="/images/logo.png"
                alt="Ghana TVETS Oti Region Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Ghana TVET Service – Oti Regional Directorate. Transforming technical and vocational education through modern facilities, strategic partnerships, and inclusive community empowerment.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f7b500]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#director-welcome" className="hover:text-white transition-colors">
                  Message from the Regional Director
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Proposed Office Building
                </Link>
              </li>
              <li>
                <Link href="#featured-news" className="hover:text-white transition-colors">
                  Featured News & Awards
                </Link>
              </li>
              <li>
                <Link href="#programmes" className="hover:text-white transition-colors">
                  Programmes & Trades
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f7b500]">
              Strategic Portals
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Strategic Collaborator & Partner (NARNGO)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Workplace Experience Learning (WEL)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sustainable Development Goals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Sports, Recreation & Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f7b500]">
              Regional Directorate
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f7b500] flex-shrink-0 mt-0.5" />
                <span>Oti Regional Coordinating Council, Oti Region, Ghana</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#f7b500] flex-shrink-0" />
                <Link
                  href="https://ghana.tvetsotiregion.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ghana.tvetsotiregion.com
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f7b500] flex-shrink-0" />
                <span>+233 (0) 30 000 0000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar - Exact copy from original HTML */}
      <div className="border-t border-neutral-800 bg-black/60 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>
            Copyright © 2026 Ghana TVETS Oti Region |{" "}
            <Link
              href="#"
              className="text-white hover:text-[#f7b500] font-semibold transition-colors"
            >
              NARNGO
            </Link>
          </p>
          <p>
            Powered by Ghana TVETS Oti Region |{" "}
            <Link
              href="#"
              className="text-white hover:text-[#f7b500] font-semibold transition-colors"
            >
              NARNGO
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
