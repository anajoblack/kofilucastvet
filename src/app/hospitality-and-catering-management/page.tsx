"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Hospitality and Catering Management – Ghana TVETS Oti Region",
  description:
    "Study Hospitality and Catering Management in accredited TVET institutes across Oti Region, Ghana.",
};

export default function HospitalityCateringPage() {
  return (
    <TradeDetailView
      title="Hospitality and Catering Management"
      category="Hospitality & Culinary Arts"
      image="/wp-content/uploads/2025/05/2150722777.jpg"
      tagline="Serve with world-class excellence — commercial food production, hotel operations, and pastry arts."
      overview="Serve with excellence. Get equipped in culinary arts, commercial food and beverage production, professional bakery and pastry, hotel accommodation operations, event planning, and guest customer service. Trainees are immersed in commercial kitchens and hotel guest environments."
      competencies={[
        "Continental and traditional Ghanaian cuisine preparation and plating techniques",
        "Commercial baking, bread crafting, pastries, desserts, and confectionery arts",
        "Food safety management, HACCP hygiene protocols, and commercial sanitization",
        "Restaurant service, banqueting setup, table etiquette, and beverage mixology",
        "Hotel front office operations, room housekeeping, and hospitality inventory control",
      ]}
      careers={[
        "Professional Chef / Culinary Production Lead",
        "Pastry Chef / Commercial Baker",
        "Hotel & Guest House Operations Manager",
        "Events & Banqueting Coordinator",
        "Independent Catering Business Owner",
      ]}
      institutes={[
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
      ]}
    />
  );
}
