"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Business Secretarial – Ghana TVETS Oti Region",
  description:
    "Study Business Secretarial & Office Administration in accredited TVET institutes across Oti Region, Ghana.",
};

export default function BusinessSecretarialPage() {
  return (
    <TradeDetailView
      title="Business Secretarial"
      category="Business & Office Administration"
      image="/wp-content/uploads/2025/05/3307.jpg"
      tagline="The engine behind every modern organization — executive administration and communication."
      overview="The engine behind every modern office. Acquire skills in executive office management, professional business communication, records keeping, digital clerical tools, rapid keyboarding, meeting minutes documentation, and public relations administration."
      competencies={[
        "Executive business correspondence, report writing, and professional email etiquette",
        "Document processing, rapid keyboarding speed, and office cloud software mastery",
        "Records management, filing systems, electronic archiving, and confidentiality protocols",
        "Meeting scheduling, agenda preparation, and accurate minute-taking",
        "Front-desk customer relations, switchboard operations, and office etiquette",
      ]}
      careers={[
        "Executive Administrative Secretary / Personal Assistant",
        "Office Manager / Administrative Assistant",
        "Customer Service & Front Desk Executive",
        "Records Management and Archival Officer",
        "Secretarial Services Business Owner",
      ]}
      institutes={[
        { name: "Dambai Technical Institute", slug: "/dti", town: "Dambai" },
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
      ]}
    />
  );
}
