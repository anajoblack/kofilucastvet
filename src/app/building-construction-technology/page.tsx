"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Building Construction Technology – Ghana TVETS Oti Region",
  description:
    "Study Building Construction Technology in accredited TVET institutions across Oti Region, Ghana.",
};

export default function BuildingConstructionPage() {
  return (
    <TradeDetailView
      title="Building Construction Technology"
      category="Engineering & Built Environment"
      image="/wp-content/uploads/2025/05/carpenter-cutting-mdf-board-inside-workshop.jpg"
      tagline="Learn the science and art of modern civil engineering and structural building."
      overview="This programme trains students in modern construction techniques, structural design, architectural drafting, bricklaying, blocklaying, concrete technology, and project site management. Students gain hands-on experience in foundation laying, scaffolding safety, and finishing works."
      competencies={[
        "Architectural drafting, blueprint reading, and structural site surveying",
        "Masonry, bricklaying, blocklaying, and reinforced concrete construction",
        "Roof trusses assembly, tile fixing, and interior plastering finishes",
        "Construction site health, safety, and environmental standards",
        "Bill of quantities preparation and cost estimation for civil projects",
      ]}
      careers={[
        "Building Construction Contractor / Site Foreman",
        "Civil Engineering Technician",
        "Quantity Surveying Assistant",
        "Architectural Draftsperson",
        "Self-Employed General Construction Artisan",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "Dambai Technical Institute", slug: "/dti", town: "Dambai" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
      ]}
    />
  );
}
