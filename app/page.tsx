import ClientCentric from "@/components/ClientCentric";
import Divider from "@/components/Divider";
import Empowering from "@/components/Empowering";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import LoanRepayment from "@/components/LoanRepayment";
import Plant from "@/components/Plant";
import PromiseSection from "@/components/PromiseSection";
import SettleLoan from "@/components/SettleLoan";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <ClientCentric />
      <Plant />
      <PromiseSection />
      <SettleLoan />
      <LoanRepayment />
      <Empowering />
      <Features />
      <Testimonials />
    </>
  );
}
