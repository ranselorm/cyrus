"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="flex flex-col items-start text-left space-y-5"
      variants={cardVariants}
    >
      <Icon icon={icon} className="text-second text-6xl" />
      <h3 className="text-xl font-semibold text-second">{title}</h3>
      <p className="text-white md:max-w-sm">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
