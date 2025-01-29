"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface FAQCardProps {
  question: string;
  answer: string;
  bgColor: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({
  question,
  answer,
  bgColor,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={`${bgColor} rounded-xl shadow-md overflow-hidden`}>
      <button
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-900"
        onClick={onToggle}
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon icon="mdi:chevron-down" className="text-2xl text-gray-600" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-4 text-gray-700">{answer}</div>
      </motion.div>
    </div>
  );
};

export default FAQCard;
