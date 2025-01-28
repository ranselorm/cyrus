import React from "react";
import UltimateSolution from "./UltimateSolution";
import Partners from "./Partners";

const Hero = () => {
  return (
    <section
      className="hero-bg bg-cover bg-no-repeat h-auto bg-center"
      style={{ backgroundImage: `url('/images/hero-bg.png')` }}
    >
      <UltimateSolution />
      <Partners />
    </section>
  );
};

export default Hero;
