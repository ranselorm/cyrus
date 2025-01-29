"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Divider from "./Divider";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const PromiseSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          className="px-4 max-w-xl text-left"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-blu leading-loose"
            variants={textVariants}
          >
            We <span className="text-accent">Promise</span> Sustainable <br />
            Future For You..
          </motion.h2>

          <motion.div
            className="mt-6 text-gray-700 space-y-6"
            variants={containerVariants}
          >
            <motion.p variants={textVariants}>
              Loans are very small, short-term, and unsecured, with more
              frequent repayments.
            </motion.p>
            <motion.p variants={textVariants}>
              The screening process ensures that the applicants are micro
              borrowers.
            </motion.p>
            <motion.p variants={textVariants}>
              The applicants are then registered after they pass the screening
              stage.
            </motion.p>
            <motion.p variants={textVariants}>
              Loan documentation is generated largely by the Loans and
              Operations managers through visits to the borrower’s business and
              home.
            </motion.p>
          </motion.div>

          {/* Button */}
          <motion.div className="mt-8" variants={textVariants}>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-gray-800 rounded-lg text-gray-900 font-medium transition 
              hover:bg-gray-900 hover:text-white"
            >
              More about us <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Divider />
    </section>
  );
};

export default PromiseSection;
