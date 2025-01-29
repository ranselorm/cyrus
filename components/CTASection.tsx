"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const CTASection: React.FC = () => {
  return (
    <motion.section
      className="py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-center"
        variants={containerVariants}
      >
        {/* Illustration */}
        <motion.div
          className="flex justify-center mb-4"
          variants={containerVariants}
        >
          <Image
            src="/images/question-check.svg"
            alt="Question Icon"
            width={80}
            height={80}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
          variants={containerVariants}
        >
          Want a custom Loan for your business?
        </motion.h2>

        {/* CTA Button */}
        <motion.div variants={containerVariants}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-gray-700 rounded-lg text-gray-900 font-medium transition 
              hover:bg-gray-900 hover:text-white"
          >
            Let’s talk <span className="ml-2">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default CTASection;
