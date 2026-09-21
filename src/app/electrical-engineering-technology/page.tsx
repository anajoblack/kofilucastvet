"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Electrical Engineering Technology – Ghana TVETS Oti Region",
  description:
    "Study Electrical Engineering Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function ElectricalEngineeringPage() {
  return (
    <TradeDetailView
      title="Electrical Engineering Technology"
      category="Electrical & Electronics"
      image="/wp-content/uploads/2025/05/2150880924.jpg"
      tagline="Power up your future with hands-on electrical installations, wiring, and green energy systems."
      overview="Power up your future. Gain hands-on experience in domestic and industrial electrical systems, electrical installation, wiring, electronic fault diagnosis, industrial motor controls, and renewable solar photovoltaic solutions."
      competencies={[
        "Domestic, commercial, and industrial conduit wiring and cable laying",
        "Installation, testing, and maintenance of solar PV and inverter power systems",
        "Electric motor rewinding, starter controls, and single/three-phase systems",
        "Electrical troubleshooting, circuit protection, and earthing installation",
        "Adherence to IEEE and Ghana Energy Commission electrical wiring codes",
      ]}
      careers={[
        "Certified Electrical Wiring Practitioner (Domestic / Commercial / Industrial)",
        "Solar Photovoltaic Installation Specialist",
        "Industrial Plant Maintenance Electrician",
        "Power Generation & Substation Technician",
        "Electrical Contracting Entrepreneur",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "Dambai Technical Institute", slug: "/dti", town: "Dambai" },
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
        { name: "Kaakyi Technical Institute", slug: "/kaakyi", town: "Kete-Krachi" },
      ]}
    />
  );
}
