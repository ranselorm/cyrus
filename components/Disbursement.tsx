import React from "react";
import DisbursementCard from "./DisbursementCard";

const features = [
  {
    highlight: "Use of collateral",
    description:
      "CYRUS borrowers lack collateral traditionally required by banks, and hence social collateral is used as leverage to induce payment. In this case, underwriting depends on a labour-intensive analysis of the household’s repayment capacity and the borrower’s character.",
    image: "/images/disburse1.jpg",
    reverse: false,
  },
  {
    highlight: "Progressively increasing lending",
    description:
      "CYRUS customers have limited access to other financing and are dependent upon ongoing access to CYRUS’ credit. CYRUS uses incentive schemes to reward good borrowers with preferential access to future, larger loans.",
    image: "/images/disburse2.jpg",
    reverse: true,
  },
  {
    highlight: "Controlling arrears",
    description:
      "Strict control of arrears is employed by CYRUS given the short-term nature of the loans, lack of collateral, and high frequency of payments (e.g., weekly or bi-weekly).",
    image: "/images/disburse3.avif",
    reverse: false,
  },
];

const Disbursement: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6">
      {features.map((feature, index) => (
        <DisbursementCard
          key={index}
          highlight={feature.highlight}
          description={feature.description}
          image={feature.image}
          reverse={feature.reverse}
        />
      ))}
    </section>
  );
};

export default Disbursement;
