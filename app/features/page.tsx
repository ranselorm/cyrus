"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { faqs } from "@/data";
import FAQCard from "@/components/FAQCard";
import CTASection from "@/components/CTASection";
import Newsletter from "@/components/NewsLetter";
import Disbursement from "@/components/Disbursement";

const FeaturesPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <HeroSection
        title="FAQ"
        description="Business insights enable smart moves towards wealth & security."
      />
      <div className="container mx-auto px-4">
        <div className="bg-dark-blu w-full h-[300px] my-12 rounded-[40px]" />
        <div className="py-16 px-4">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold md:max-w-xl mx-auto text-blu">
              Got questions? We've got you covered.
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                bgColor={faq.bgColor}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Newsletter />
      <Disbursement />
    </section>
  );
};

export default FeaturesPage;
