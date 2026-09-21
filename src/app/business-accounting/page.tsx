"use strict";
import React from "react";
import TradeDetailView from "@/components/TradeDetailView";

export const metadata = {
  title: "Business Accounting – Ghana TVETS Oti Region",
  description:
    "Study Business Accounting in accredited TVET institutes across Oti Region, Ghana.",
};

export default function BusinessAccountingPage() {
  return (
    <TradeDetailView
      title="Business Accounting"
      category="Business & Financial Management"
      image="/wp-content/uploads/2025/05/9200.jpg"
      tagline="Numbers that build nations — professional bookkeeping, financial reporting, and analytics."
      overview="Numbers that build nations. Learn the principles of financial reporting, double-entry bookkeeping, budgeting, computerized accounting software, inventory tracking, taxation basics, and business analytics. This trade equips trainees with essential commercial stewardship skills."
      competencies={[
        "Double-entry bookkeeping, ledger reconciliation, and trial balance preparation",
        "Preparation of financial statements: Profit & Loss, Balance Sheet, Cash Flow",
        "Computerized accounting software (Tally, QuickBooks, Excel Spreadsheet analytics)",
        "Payroll processing, statutory tax computations (GRA, SSNIT, VAT)",
        "Internal auditing, petty cash control, and budget forecasting",
      ]}
      careers={[
        "Accounting Assistant / Bookkeeper",
        "Payroll and Revenue Officer",
        "Audit Assistant",
        "Inventory and Store Controller",
        "Small Business Financial Manager",
      ]}
      institutes={[
        { name: "Fr. Dogli Memorial Technical Institute", slug: "/dotech", town: "New Ayoma" },
        { name: "Dambai Technical Institute", slug: "/dti", town: "Dambai" },
        { name: "Lolobi Technical Institute", slug: "/lobtech", town: "Lolobi" },
        { name: "St. Theresa's Technical Institute", slug: "/theresas", town: "Chinderi" },
      ]}
    />
  );
}
