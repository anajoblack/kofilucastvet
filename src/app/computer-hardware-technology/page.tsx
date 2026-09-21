"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Computer Hardware Technology – Ghana TVETS Oti Region",
  description:
    "Study Computer Hardware Technology in accredited TVET institutes across Oti Region, Ghana.",
};

export default function ComputerHardwarePage() {
  return (
    <TradeDetailView
      title="Computer Hardware Technology"
      category="ICT & Digital Infrastructure"
      image="/wp-content/uploads/2025/05/2150880997.jpg"
      tagline="Where digital technology begins — computer assembly, diagnostics, electronics repair, and networking."
      overview="Where tech begins. Dive into computer assembly, repair, system diagnostics, electronics circuit testing, and networking — the backbone of Ghana's digital transformation. Students learn to build, service, configure, and secure computers and server workstations."
      competencies={[
        "Desktop, laptop, and server component assembly, dismantling, and upgrading",
        "Motherboard diagnosis, micro-soldering, capacitor replacement, and power supply testing",
        "Operating system installation, driver configuration, malware removal, and data recovery",
        "Local Area Network (LAN) cabling, crimping, switch/router setup, and IP configuration",
        "Computer peripheral servicing: printers, scanners, monitors, and UPS backup units",
      ]}
      careers={[
        "Computer Hardware Repair & Maintenance Technician",
        "IT Support / Helpdesk Specialist",
        "Network Cabling & Infrastructure Assistant",
        "Computer Systems Assembly Specialist",
        "Independent ICT Service Centre Entrepreneur",
      ]}
      institutes={[
        { name: "Dambai Technical Institute", slug: "/dti", town: "Dambai" },
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
      ]}
    />
  );
}
