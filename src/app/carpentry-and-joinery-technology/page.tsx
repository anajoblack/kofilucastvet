"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Carpentry and Joinery Technology – Ghana TVETS Oti Region",
  description:
    "Study Carpentry and Joinery Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function CarpentryJoineryPage() {
  return (
    <TradeDetailView
      title="Carpentry and Joinery Technology"
      category="Engineering & Built Environment"
      image="/wp-content/uploads/2025/05/2150104751.jpg"
      tagline="From structural house framing to precision architectural finishings and roofing."
      overview="From structure to style. Focused training in residential and commercial house framing, timber roofing truss erection, acoustic ceiling installation, exterior and interior doors and windows, architectural molding, and formwork construction with professional-level finishing techniques."
      competencies={[
        "Formwork design, shoring, and timber shuttering for reinforced concrete casting",
        "Roof trusses calculation, fabrication, hoisting, and weather-resistant decking",
        "Fabrication and fitting of paneled timber doors, window frames, and architraves",
        "Ceiling framing, drywall partitions, acoustic paneling, and baseboard trims",
        "Safe use of portable power tools: circular saws, nail guns, routers, and mitre saws",
      ]}
      careers={[
        "Master Building Carpenter / Framing Specialist",
        "Roofing & Formwork Construction Contractor",
        "Architectural Joiner & Interior Fitout Specialist",
        "Site Carpentry Foreman for Civil Engineering Firms",
        "Independent Carpentry Workshop Proprietor",
      ]}
      institutes={[
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
      ]}
    />
  );
}
