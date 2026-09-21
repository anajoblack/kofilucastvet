"use strict";
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    }

    if (aboutDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutDropdownOpen]);

  const topUtilityLinks = [
    { label: "Strategic Collaborator", href: "/strategic-collaborator" },
    { label: "Strategic & Business Plan", href: "/oti-region-improvement-plan" },
    { label: "Project Proposals", href: "/projects" },
    { label: "Sustainable Dev’t Goals", href: "/sustainable-development-goals" },
    { label: "Workplace Experience Learning (WEL)", href: "/programmes" },
    { label: "Sports & Recreation", href: "/sports-recreation" },
    { label: "Arts & Culture", href: "/arts-culture" },
    { label: "Media Updates", href: "/media-updates" },
  ];

  const aboutSubmenu = [
    { label: "OTI Region TVET Service", href: "/about" },
    { label: "Message From the Director", href: "/director" },
    { label: "Meet The TEAM", href: "/meet-the-team" },
    { label: "TVETS At A Glance", href: "/ghana-tvet-service" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#034e9f]/95 backdrop-blur-md shadow-lg py-1"
          : "bg-transparent py-0"
      }`}
    >
      {/* Top Utility Bar - Hidden when scrolled or on small mobile */}
      <div
        className={`hidden md:block transition-all duration-300 border-b border-white/10 ${
          scrolled ? "opacity-0 h-0 overflow-hidden py-0" : "bg-black/15 py-1.5 px-4 lg:px-10"
        }`}
      >
        <div className="max-w-[1240px] mx-auto flex items-center justify-start overflow-x-auto whitespace-nowrap text-[12px] font-normal text-white">
          <ul className="flex items-center space-x-5 lg:space-x-7">
            {topUtilityLinks.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="hover:text-[#f7b500] transition-colors py-0.5 tracking-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-3.5">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 sm:h-14 w-48 sm:w-56">
              <Image
                src="/images/logo.png"
                alt="Ghana TVETS Oti Region"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            <Link
              href="/"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              Home
            </Link>

            {/* About Dropdown - Click to toggle, stay on, dismiss on outside click */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${
                  aboutDropdownOpen ? "text-[#f7b500]" : "text-white hover:text-[#f7b500]"
                }`}
                onClick={() => setAboutDropdownOpen((prev) => !prev)}
                aria-expanded={aboutDropdownOpen}
              >
                About
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 opacity-90 ${
                    aboutDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-[#023368] rounded-xl shadow-2xl py-2 border border-white/10 animate-in fade-in slide-in-from-top-1 duration-150">
                  {aboutSubmenu.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      onClick={() => setAboutDropdownOpen(false)}
                      className="block px-4 py-2.5 text-xs text-white/90 hover:bg-[#034e9f] hover:text-[#f7b500] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/providers"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              TVET Providers
            </Link>
            <Link
              href="/meet-the-team"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              Ambassadors
            </Link>
            <Link
              href="/programmes"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              Programmes
            </Link>
            <Link
              href="/projects"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-medium text-white hover:text-[#f7b500] transition-colors"
            >
              Contact
            </Link>

            {/* Support TVETS Button */}
            <div className="pl-2">
              <Link
                href="/support"
                className="inline-block bg-[#f7b500] hover:bg-[#e5a800] text-[#030000] font-semibold text-[15px] px-6 py-2.5 rounded-full transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-md"
              >
                Support TVETS
              </Link>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="#support"
              className="bg-[#f7b500] text-black text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm"
            >
              Support TVETS
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 bg-[#023368] rounded-2xl border border-white/10 p-5 space-y-4 shadow-2xl">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                Home
              </Link>
              <div className="px-3 py-2">
                <span className="text-xs uppercase tracking-wider text-[#f7b500] font-semibold">
                  About
                </span>
                <div className="mt-1 pl-2 space-y-1">
                  {aboutSubmenu.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-white/80 hover:text-white"
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/providers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                TVET Providers
              </Link>
              <Link
                href="/meet-the-team"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                Ambassadors
              </Link>
              <Link
                href="/programmes"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                Programmes
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md font-medium text-white hover:bg-[#034e9f]"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2 font-semibold">
                Quick Links
              </span>
              <div className="grid grid-cols-1 gap-1 text-xs text-white/70">
                {topUtilityLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-1 hover:text-[#f7b500]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
