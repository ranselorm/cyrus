import BlogSection from "@/components/Blog";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import OurTeam from "@/components/OurTeam";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import SettleLoan from "@/components/SettleLoan";
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
      {/* <OurTeam /> */}
      {/* <Gallery /> */}
      <Services />
      <SettleLoan />
      <Partners />
      <BlogSection />
    </section>
  );
};

export default AboutPage;
