import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/Stats";
import Welcome from "@/components/Welcome";
import React from "react";

const AboutPage = () => {
  return (
    <section>
      <HeroSection
        title="We're a award winner business company."
        description="Navigating your business growth with experience & insightful solutions."
        leftIcon="/images/loan1.svg"
        rightIcon="/images/loan2.svg"
      />
      <Welcome />
      <StatsSection />
    </section>
  );
};

export default AboutPage;
