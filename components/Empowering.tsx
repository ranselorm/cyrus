"use client";

import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Screening Process",
    description:
      "The screening process ensures that the applicants are micro borrowers. CYRUS caters for low-income clients, both the underemployed and the entrepreneurs with an often informal family business (e.g., petty traders, vegetable farmers, etc.).",
    bgColor: "bg-pink-200",
    icon: "🔄",
  },
  {
    title: "Registration of Applicants",
    description:
      "The applicants are then registered after they pass the screening stage. The details taken include names, gender, business location, residential address, occupation type, phone number, and name of spouse or next of kin.",
    bgColor: "bg-orange-200",
    icon: "📝",
  },
  {
    title: "Credit risk analysis",
    description:
      "Loan documentation is generated largely by the Loans and Operations managers through visits to the borrower’s business and home. Directions to the residences are also drawn up for verification.",
    bgColor: "bg-blue-200",
    icon: "📈",
  },
  {
    title: "Credit approval",
    description:
      "CYRUS has a highly decentralized process; hence credit approval by the field-level staff depends heavily on the skill and integrity of loan officers and managers for accurate and timely information.",
    bgColor: "bg-blue-200/20",
    icon: "✅",
  },
  {
    title: "Training",
    description:
      "Applicants whose loans have been approved are then trained in Basic Financial Management. They are trained to distinguish between working capital and profit, in basic customer service, and to inculcate in them the habit of savings.",
    bgColor: "bg-pink-200",
    icon: "📚",
  },
];

const Empowering: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center">
        <div className="flex-1">
          <h3 className="text-2xl md:text-4xl leading-loose text-blu font-bold">
            Empowering <span className="text-accent">Small</span>
            <br className="hidden md:flex" />
            Businesses
          </h3>
          <p className="md:text-xl leading-loose text-gray-600">
            As an MFI, CYRUS was formed with the purpose of providing social and
            financial solutions to the poor. To determine its vulnerability to
            credit risk, there is review of the policies and procedures at every
            stage in the lending process to determine whether they reduce
            delinquencies and loan losses to an acceptable level.
          </p>
          <p className="mt-6 md:text-xl leading-loose text-gray-600">
            These policies and procedures include the loan eligibility criteria,
            the application review process and authorization levels, collateral
            or security requirements, as well as the “carrots and sticks” used
            to motivate staff and compel borrowers to repay.
          </p>
        </div>
        <div className="flex flex-col gap-6 flex-1 items-end">
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empowering;
