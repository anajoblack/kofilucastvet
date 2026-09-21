"use strict";
import React from "react";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata = {
  title: "Regional Director's Remark on Best Second Cycle Institution – Ghana TVETS Oti Region",
  description:
    "Official remarks and congratulations by Ag. Regional Director Engr. Robert K. Amontcho to Father Dogli Memorial Technical Institute.",
};

export default function RegionalDirectorRemarkArticle() {
  return (
    <ArticleLayout
      title="Regional Director’s Remark on Best Second Cycle Institution in Practical Agriculture at the 41st National Farmers’ Day Award-2025, Winning Region-Oti"
      category="Official Address"
      date="December 2025"
      author="Engr. Robert K. Amontcho, Ag. Regional Director"
      featuredImage="/images/news-3.jpg"
    >
      <div className="p-6 rounded-2xl bg-[#034e9f]/5 border border-[#034e9f]/10 text-lg font-medium text-neutral-900 leading-relaxed italic">
        “The Ghana TVET Service, Oti Region, extends heartfelt congratulations to Father Dogli Memorial Technical Institute on being adjudged the National Best Senior High School in Practical Agriculture for 2025. This honour reflects the school’s sustained dedication to practical training, innovation, and quality skills development.”
      </div>

      <p>
        On behalf of the Management and Staff of the Ghana TVET Service, Oti Regional Directorate, I celebrate this momentous national accomplishment by the Principal, facilitators, agricultural instructors, and students of Father Dogli Memorial Technical Institute (DOTECH), New Ayoma.
      </p>

      <p>
        This victory vindicates our strategic emphasis on practical, Competency-Based Training (CBT). It proves beyond doubt that technical and vocational education is not a second-rate option, but the very engine of Ghana's agricultural self-sufficiency and industrial transformation.
      </p>

      <p>
        The Oti Region has proven its capacity to compete and lead at the very highest national pedestal. As we celebrate this feat, we reaffirm our commitment to providing our schools with modern tools, greenhouse facilities, mechanized tractors, and solar-powered irrigation to ensure that every district in our region becomes a hub of vocational productivity.
      </p>

      <p>
        Congratulations to DOTECH, congratulations to Jasikan District, and congratulations to the entire Oti Region!
      </p>

      <div className="pt-6 border-t border-neutral-200">
        <p className="font-extrabold text-neutral-900">Engr. Robert K. Amontcho</p>
        <p className="text-sm font-semibold text-[#034e9f]">
          Ag. Regional Director, Ghana TVET Service – Oti Region
        </p>
      </div>
    </ArticleLayout>
  );
}
