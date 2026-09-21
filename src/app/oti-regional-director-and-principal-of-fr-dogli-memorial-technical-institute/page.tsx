"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Oti Regional Director and Principal of Fr. Dogli Memorial Tech – Ghana TVETS Oti Region",
  description:
    "Spotlight on the strategic leadership and institutional synergy between Regional Director Engr. Robert K. Amontcho and DOTECH Principal Mrs. Brigitte Afi Dzakah.",
};

export default function RegionalDirectorAndPrincipalArticle() {
  return (
    <ArticleLayout
      title="Oti Regional Director and Principal of Fr. Dogli Memorial Technical Institute"
      category="Leadership Spotlight"
      date="December 2025"
      featuredImage="/images/news-2.jpg"
    >
      <p>
        The historic success of Father Dogli Memorial Technical Institute (DOTECH) at the 41st National Best Farmers’ Day is a testament to the power of aligned, visionary educational leadership.
      </p>
      <p>
        The synergy between the <strong className="text-neutral-900">Ag. Regional Director of Ghana TVET Service Oti Region, Engr. Robert K. Amontcho</strong>, and the <strong className="text-neutral-900">Principal of DOTECH, Mrs. Brigitte Afi Dzakah</strong>, has transformed vocational instruction into a powerhouse of practical productivity.
      </p>
      <p>
        Through close institutional coordination, regular supervisory inspections, and prioritized allocation of mechanical implements and seeds, the Regional Directorate ensured that DOTECH’s school farm expanded into a full-scale commercial training facility.
      </p>
      <p>
        Mrs. Brigitte Afi Dzakah expressed profound gratitude to the Regional Director and the entire TVET Directorate team for their steadfast technical and moral support, pledging that DOTECH will continue to lead the nation in modern agro-vocational technology.
      </p>
    </ArticleLayout>
  );
}
