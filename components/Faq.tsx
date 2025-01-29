"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const faqs = [
  {
    question: "What is Cyrus MicroCredit Services?",
    answer:
      "CYRUS MICROCREDIT is a microfinance institution (MFI) dedicated to providing social and financial solutions to the poor, helping them access credit and improve their livelihoods.",
    bgColor: "bg-pink-50",
  },
  {
    question: "What is the loan application process at CYRUS?",
    answer:
      "The loan process at CYRUS involves submitting an application, undergoing a review of credit risk and financial stability, and receiving a loan decision. Detailed procedures are in place to ensure transparency and fairness.",
    bgColor: "bg-pink-50",
  },
  {
    question: "How do I repay my loan?",
    answer:
      "Visit our nearest office or dial 789732# for assistance with the loan repayment process.",
    bgColor: "bg-pink-50",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold md:max-w-xl mx-auto text-blu">
          Got questions? We've got you covered.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className={`${faq.bgColor}  overflow-hidden`}>
            <button
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}

              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  icon="mdi:chevron-down"
                  className="text-2xl text-gray-600"
                />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-700">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
