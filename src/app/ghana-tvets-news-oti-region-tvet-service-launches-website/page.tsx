"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Oti Region TVET Service Launches Website – Ghana TVETS Oti Region",
  description:
    "The Technical and Vocational Education and Training Service in Ghana's Oti Region gears up to go digital with its official web portal.",
};

export default function LaunchWebsiteArticle() {
  return (
    <ArticleLayout
      title="Ghana TVETS News – Oti Region TVET Service to launch Website soon."
      category="Digital Transformation"
      date="April 2025"
      featuredImage="/wp-content/uploads/2025/04/LOGO-2jj-04.png"
    >
      <p>
        The Technical and Vocational Education and Training (TVET) Service in Ghana’s Oti Region is gearing up to go digital with the upcoming launch of its official website: <strong className="text-[#034e9f]">ghana.tvetsotiregion.com</strong>.
      </p>
      <p>
        According to regional officials, the new state-of-the-art web portal will serve as a one-stop information hub for updates on TVET activities, accredited institution profiles, curriculum pathways, admissions, capital projects, and direct donor support channels.
      </p>
      <p>
        This initiative directly aligns with Ghana’s broader agenda to modernize the TVET sector and improve digital inclusion across the educational landscape. By establishing an accessible online presence, the Directorate aims to engage students, guardians, educators, and developmental partners both locally and across the global diaspora.
      </p>
      <p>
        Stakeholders and the general public are warmly invited to bookmark the address and follow the portal for ongoing regional dispatches and youth empowerment programs.
      </p>
    </ArticleLayout>
  );
}
