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

// Props Interface
interface HeroSectionProps {
  title: string;
  description: string;
  leftIcon?: string;
  rightIcon?: string;
  bgColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  leftIcon,
  rightIcon,
  bgColor = "bg-[#d1f2fd]",
}) => {
  return (
    <section className={`${bgColor} py-16 h-[70vh]`}>
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="flex justify-between items-center container mx-auto mt-32">
          {/* Left Icon (Optional) */}
          {leftIcon ? (
            <motion.div variants={heroVariants}>
              <Image
                src={leftIcon}
                alt="Left Icon"
                width={120}
                height={120}
                className="hidden md:flex"
              />
            </motion.div>
          ) : (
            <div></div>
          )}

          {/* Hero Text */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blu"
              variants={heroVariants}
            >
              {title}
            </motion.h1>
            <motion.p
              className="mt-5 text-gray-700 text-xl"
              variants={heroVariants}
            >
              {description}
            </motion.p>
          </div>

          {/* Right Icon (Optional) */}
          {rightIcon ? (
            <motion.div variants={heroVariants}>
              <Image
                src={rightIcon}
                alt="Right Icon"
                width={120}
                height={120}
                className="hidden md:flex"
              />
            </motion.div>
          ) : (
            <div></div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
