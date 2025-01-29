"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

// Stats Data
const stats = [
  { value: "120+", label: "Partner with us" },
  { value: "705k", label: "Successful services" },
  { value: "1.2%", label: "Low interest rate" },
  { value: "₵1.3b+", label: "Cumulative trading" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} className="space-y-4" variants={fadeIn}>
            <motion.h2
              className="text-2xl md:text-5xl text-blu"
              whileInView={{ opacity: [0, 1], y: [10, 0] }}
              transition={{ duration: 0.8 }}
            >
              {stat.value}
            </motion.h2>
            <p className="text-gray-700">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
