import HeroSection from "@/components/HeroSection";
import React from "react";

const FeaturesPage = () => {
  return (
    <section>
      <HeroSection
        title="FAQ"
        description="Business insights enable smart moves towards wealth & security."
      />
      <div className="mx-auto container bg-dark-blu w-full px-4 h-[300px] my-12 rounded-[40px]"></div>
    </section>
  );
};

export default FeaturesPage;
