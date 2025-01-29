"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  bgColor: string;
  icon: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Card: React.FC<CardProps> = ({ title, description, bgColor, icon }) => {
  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-md ${bgColor} max-w-lg`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-2xl font-bold text-gray-900 flex items-center">
        {title} <span className="ml-2">{icon}</span>
      </h3>
      <p className="mt-2 text-gray-800">{description}</p>
    </motion.div>
  );
};

export default Card;
