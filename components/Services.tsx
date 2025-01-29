"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const services = [
  {
    title: "Business report",
    description:
      "Comprehensive analysis and insights to guide your business decisions",
    icon: "lsicon:report-outline",
    bgColor: "bg-white",
  },
  {
    title: "Modern Technology Solutions",
    description:
      "Cutting-edge financial technology to streamline your operations.",
    icon: "material-symbols-light:wifi-sharp",
    bgColor: "bg-pink-100",
  },
  {
    title: "Quality support",
    description:
      "Dedicated assistance to ensure your success and satisfaction.",
    icon: "hugeicons:headset",
    bgColor: "bg-white",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // Cards appear one after another
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Arrow Animation
const arrowVariants = {
  initial: { rotate: 0 },
  hover: { rotate: -20, transition: { duration: 0.3 } },
};

const Services: React.FC = () => {
  return (
    <motion.section
      className="bg-[#0f2a30] py-16 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row justify-between"
        variants={headingVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Provide quality <br className="hidden md:flex" />
          Services.
        </h2>
        <div>
          <p className="text-gray-300 mt-2 text-lg">
            CMCS has the full types of potential for your startup business.
          </p>
          <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
            See all services →
          </button>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={cardContainerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-2xl shadow-lg flex flex-col gap-y-24 my-auto transition-all duration-300 group ${
              index === 1 ? "h-[420px]" : "h-[350px]"
            } bg-white hover:bg-pink-100`}
            whileHover={{ scale: 1.03 }}
            variants={cardVariants}
          >
            <div className="space-y-8">
              <Icon icon={service.icon} className="text-6xl text-gray-700" />
              <h3 className="text-3xl font-semibold text-blu">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
