"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <motion.div
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Left Side: Welcome Message */}
        <motion.div variants={fadeIn} className="space-y-6">
          <h1
            className="text-2xl md:text-4xl font-bold text-blu leading-loose"
            style={{ lineHeight: 1.5 }}
          >
            Welcome to Cyrus <br className="hidden md:flex" />
            MicroCredit Services <br className="hidden md:flex" />
            (CMCS)!
          </h1>
          <p className="text-gray-500 leading-loose text-xl">
            We are dedicated to empowering individuals and businesses by
            providing accessible and affordable microcredit solutions. Our goal
            is to drive financial inclusion, foster growth, and support
            sustainable development through innovative financial services and
            expert guidance.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="space-y-8">
          <motion.div className="space-y-3 pb-6" variants={fadeIn}>
            <div className="flex items-center space-x-3">
              <Icon
                icon="material-symbols-light:flag-outline"
                className="text-4xl text-blu"
              />
              <h2
                className="text-2xl md:text-3xl font-bold text-blu leading-loose"
                style={{ lineHeight: 1.5 }}
              >
                Our mission
              </h2>
            </div>
            <p className="text-gray-500 leading-loose text-xl">
              We aim to transform lives by delivering financial expertise,
              accelerating progress, and ensuring a secure future through
              trustworthy partnerships and innovative solutions.
            </p>
          </motion.div>

          {/* Divider */}
          {/* <div className="border-t-2 border-dashed border-gray-400"></div> */}

          <motion.div className="space-y-3" variants={fadeIn}>
            <div className="flex items-center space-x-3">
              <Icon
                icon="icon-park-outline:mountain"
                className="text-4xl text-blu"
              />
              <h2
                className="text-2xl md:text-3xl font-bold text-blu leading-loose"
                style={{ lineHeight: 1.5 }}
              >
                Our company vision
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed text-xl">
              We envision a financially stable future for all, offering creative
              strategies and professional advice to enhance wealth management.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
