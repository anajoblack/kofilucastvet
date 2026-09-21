"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Fashion Design Technology – Ghana TVETS Oti Region",
  description:
    "Study Fashion Design Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function FashionDesignPage() {
  return (
    <TradeDetailView
      title="Fashion Design Technology"
      category="Creative Arts & Apparel"
      image="/wp-content/uploads/2025/05/13693.jpg"
      tagline="Creativity meets craftsmanship in contemporary garment construction and African fashion."
      overview="Creativity meets craftsmanship. Develop professional mastery in garment construction, fashion illustration, tailoring, pattern drafting, textile selection, embellishment, and contemporary African apparel design. Students learn both bespoke tailoring and industrial mass apparel production."
      competencies={[
        "Precision body measurement, pattern drafting, and computer-aided flat sketching",
        "Cutting and tailoring of ladies' and men's apparel, corporate wear, and uniforms",
        "Textile design, batik, tie-dye, and traditional Ghanaian smock and kente styling",
        "Operation of industrial computerized sewing machines, overlockers, and buttonhole units",
        "Fashion studio management, costing, branding, and collection marketing",
      ]}
      careers={[
        "Professional Fashion Designer & Couturier",
        "Commercial Garment Manufacturer & Tailor",
        "Pattern Drafter & Quality Control Inspector",
        "Wardrobe & Costume Stylist for Media",
        "Fashion Boutique Owner & Creative Entrepreneur",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
      ]}
    />
  );
}
