"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Mobilise Resources to Elevate TVET – Ghana TVETS Oti Region",
  description:
    "Education Minister urges National TVET Week Planning Committee to aggressively mobilize resources to make TVET the first-choice pathway for youth.",
};

export default function MobiliseResourcesArticle() {
  return (
    <ArticleLayout
      title="Mobilise resources to elevate TVET as first-choice pathway for youth – Education Minister to TVET week planning committee"
      category="National Policy"
      date="2025"
      featuredImage="/wp-content/uploads/2025/05/13693.jpg"
    >
      <p>
        As part of ongoing national efforts to rebrand Technical and Vocational Education and Training (TVET) in Ghana, the Ghana TVET Service (GTVETS), under the Ministry of Education, has officially inaugurated a planning committee for the upcoming National TVET Week.
      </p>
      <p>
        The 14-member committee was commissioned by the Minister of Education with a mandate extending far beyond event organization: to act as roving ambassadors for changing public perceptions around vocational careers.
      </p>
      <p className="italic bg-neutral-50 p-4 rounded-2xl border border-neutral-100 text-neutral-800">
        “I urge you to see yourselves as ambassadors for rebranding TVET, tasked with mobilizing private sector resources, forging international corporate partnerships, and elevating TVET into the premier, first-choice academic pathway for Ghana's ambitious youth,” the Minister remarked.
      </p>
      <p>
        The Oti Regional Directorate has welcomed this directive, noting that its own multi-million-cedi capital development plan and NARNGO partnership directly support the Minister's vision of modernizing technical trades across all 16 regions.
      </p>
    </ArticleLayout>
  );
}
