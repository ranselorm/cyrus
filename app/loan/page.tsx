import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/Faq";

const LoansHero = () => {
  return (
    <section className="">
      <HeroSection
        title="Apply for free"
        description="Choose your ideal plan. No obligation, cancel anytime."
        leftIcon="/images/loan1.svg"
        rightIcon="/images/loan2.svg"
      />
      <CTASection />
      <FAQAccordion />
    </section>
  );
};

export default LoansHero;
