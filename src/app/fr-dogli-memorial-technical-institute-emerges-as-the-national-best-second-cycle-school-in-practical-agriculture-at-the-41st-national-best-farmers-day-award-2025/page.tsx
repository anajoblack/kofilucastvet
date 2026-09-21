"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Fr. Dogli Memorial Technical Institute Emerges as National Best – Ghana TVETS Oti Region",
  description:
    "Fr. Dogli Memorial Technical Institute in New Ayoma, Oti Region wins National Best Second Cycle School in Practical Agriculture at 41st Farmers' Day 2025.",
};

export default function DogliAwardArticle() {
  const gallery = [
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0014-150x150.jpg" },
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0021-150x150.jpg" },
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0007-150x150.jpg" },
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0010-150x150.jpg" },
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0018-150x150.jpg" },
    { src: "/wp-content/uploads/2026/01/IMG-20251208-WA0016-150x150.jpg" },
  ];

  return (
    <ArticleLayout
      title="Fr. Dogli Memorial Technical Institute Emerges as the National Best Second Cycle School in Practical Agriculture at the 41st National Best Farmers’ Day Award-2025"
      category="National Agriculture Award"
      date="December 2025"
      featuredImage="/images/news-1.jpg"
      gallery={gallery}
    >
      <p>
        In a historic milestone for the Oti Region, <strong className="text-neutral-900">Father Dogli Memorial Technical Institute (DOTECH)</strong> in New Ayoma, Jasikan District, has emerged as the <strong>National Best Second Cycle School in Practical Agriculture</strong> at the celebrated 41st National Best Farmers’ Day Award ceremony.
      </p>
      <p>
        The prestigious national recognition highlights the institution’s sustained commitment to excellence in agricultural mechanization, animal husbandry, crop farming, and value-added agro-processing. Under the leadership of Principal Mrs. Brigitte Afi Dzakah and the continuous supervision of the Oti Regional TVET Directorate led by Engr. Robert K. Amontcho, DOTECH has set a national benchmark for vocational agriculture.
      </p>
      <p>
        The award reflects years of structured student training, where students are not merely taught theoretical biology and soil science, but are actively engaged in operating tractors, managing modern irrigation rigs, caring for livestock, and cultivating staple crops that feed both the school community and local markets.
      </p>
      <p>
        Speaking following the announcement, regional leadership commended the students, agricultural facilitators, and chiefs of New Ayoma for demonstrating that technical education is the true pillar of national food sovereignty and economic resilience.
      </p>
    </ArticleLayout>
  );
}
