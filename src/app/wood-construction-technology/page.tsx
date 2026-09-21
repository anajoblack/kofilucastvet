"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Wood Construction Technology – Ghana TVETS Oti Region",
  description:
    "Study Wood Construction Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function WoodConstructionPage() {
  return (
    <TradeDetailView
      title="Wood Construction Technology"
      category="Engineering & Built Environment"
      image="/wp-content/uploads/2025/05/2149451068.jpg"
      tagline="Precision woodwork, modern timber engineering, cabinetry, and structural joinery."
      overview="Crafting with precision. Learn furniture making, architectural joinery, wood finishing, computerized wood turning, structural timber testing, and safe operation of power woodworking machinery. Graduates master the creation of bespoke residential fittings and industrial timber structures."
      competencies={[
        "Timber selection, seasoning, preservation, and moisture content measurement",
        "Operation of circular saws, planers, spindle moulders, routers, and band saws",
        "Design and fabrication of executive office furniture, cabinets, and dining sets",
        "Wood jointing methods: mortise and tenon, dovetail, dowel, and biscuit joints",
        "Surface preparation, staining, spray lacquer, and polyurethane finishing",
      ]}
      careers={[
        "Master Woodworker & Commercial Cabinetmaker",
        "Timber Structural Engineering Technician",
        "Furniture Production Factory Supervisor",
        "Interior Woodwork Finishing Contractor",
        "Bespoke Woodcraft Workshop Owner",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
      ]}
    />
  );
}
