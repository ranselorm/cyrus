"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SettleLoan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-10">
      <div className="container mx-auto">
        <motion.div
          className="md:max-w-5xl bg-yellow-400 mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="/images/settle.avif" className="w-full" alt="Settle Loan" />
        </motion.div>
      </div>
    </section>
  );
};

export default SettleLoan;
