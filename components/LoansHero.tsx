"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { div } from "framer-motion/client";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#d1f2fd] py-16 h-[70vh]">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container mx-auto px-4 md:mt-44 mt-24">
          {/* Header Text */}
        </div>

        {/* Decorative Images */}
        <div className="flex justify-between items-center max-w-6xl mx-auto mt-8">
          <motion.div variants={heroVariants}>
            <Image
              src="/images/loan1.svg"
              alt="Credit Card"
              width={120}
              height={120}
              className="hidden md:flex"
            />
          </motion.div>
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900"
              variants={heroVariants}
            >
              Apply for free
            </motion.h1>
            <motion.p
              className="mt-4 text-gray-700 text-lg"
              variants={heroVariants}
            >
              Choose your ideal plan. No obligation, cancel anytime.
            </motion.p>
          </div>
          <motion.div variants={heroVariants}>
            <Image
              src="/images/loan2.svg"
              alt="Money Hole"
              width={120}
              height={120}
              className="hidden md:flex"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
