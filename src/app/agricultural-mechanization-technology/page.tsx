"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Agricultural Mechanization Technology – Ghana TVETS Oti Region",
  description:
    "Study Agricultural Mechanization Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function AgriculturalMechanizationPage() {
  return (
    <TradeDetailView
      title="Agricultural Mechanization Technology"
      category="Agribusiness & Farm Machinery"
      image="/wp-content/uploads/2025/05/2149894686.jpg"
      tagline="Feeding the future — modern tractor operations, farm implement maintenance, and irrigation engineering."
      overview="Feeding the future through technology. Train in the operation, repair, servicing, and fabrication of modern agricultural machinery including tractors, combine harvesters, seeders, sprayers, motorized irrigation pumps, and agro-processing equipment to drastically improve regional farm yield."
      competencies={[
        "Tractor driving, hitching, and operation of plows, harrows, and ridgers",
        "Diesel engine diagnosis, fuel injection system maintenance, and hydraulic pump repairs",
        "Installation, operation, and troubleshooting of drip, sprinkler, and solar-powered irrigation rigs",
        "Post-harvest processing equipment maintenance (threshers, cassava graters, milling machines)",
        "Farm workshop health, safety, fabrication, welding, and metalwork techniques",
      ]}
      careers={[
        "Certified Agricultural Machinery Operator & Technician",
        "Farm Workshop Manager / Mechanization Officer",
        "Irrigation System Maintenance Specialist",
        "Agro-Processing Equipment Maintenance Lead",
        "Commercial Farm Mechanization Contractor",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute (National Best Farmer)", slug: "/dotech", town: "New Ayoma" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
      ]}
    />
  );
}
