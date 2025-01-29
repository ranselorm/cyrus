"use client";

import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "mdi:dice-5-outline",
    title: "Transparent Operations",
    description:
      "We maintain full transparency in all our dealings to ensure you always know what to expect.",
  },
  {
    icon: "mdi:shield-lock-outline",
    title: "Secure Transactions",
    description:
      "Our advanced encryption technology keeps your financial information safe and secure.",
  },
  {
    icon: "mdi:infinity",
    title: "Proven Track Record",
    description:
      "With a decade of experience, our successful history speaks volumes about our reliability and commitment.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="text-white py-16 rounded-3xl">
      <div className="container mx-auto text-center bg-dark-blu py-16 px-4 rounded-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-bold my-10 max-w-3xl leading-loose mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Building a Brighter Financial Future & Good Support.
        </motion.h2>

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
