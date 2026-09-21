"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Inadequate Funding Hinders TVET Delivery — Report – Ghana TVETS Oti Region",
  description:
    "National study highlights systemic funding and digital gaps facing pre-tertiary TVET in Ghana.",
};

export default function InadequateFundingArticle() {
  return (
    <ArticleLayout
      title="Inadequate funding, others hinder TVET delivery — Report"
      category="Sector Analysis"
      date="2025"
      featuredImage="/wp-content/uploads/2025/05/carpenter-cutting-mdf-board-inside-workshop.jpg"
    >
      <p>
        The country’s Technical, Vocational Education And Training (TVET) system cannot fully meet the demands of the Fourth Industrial Revolution (4IR) due to enduring structural challenges, including inadequate funding, poor digital infrastructure, and obsolete workshop tooling.
      </p>
      <p>
        There are also limited practical training and apprenticeship opportunities, especially in the informal sector, among other systemic bottlenecks.
      </p>
      <p>
        These findings are contained in the highlights of a comprehensive research study on <strong className="text-neutral-900">TVET for Economic Transformation in Ghana</strong> conducted by the African Economic Research Consortium (AERC). The objective of the research was to gauge the readiness of the country's workforce to remain globally competitive in an era of rapid technological disruption.
      </p>
      <p>
        In response to these findings, regional directorates such as the Oti TVET Service are adopting aggressive resource mobilization partnerships, such as their collaboration with the NARNGO Strategic Consortium, to raise non-governmental capital, upgrade rural workshops, and bridge the digital divide.
      </p>
    </ArticleLayout>
  );
}
