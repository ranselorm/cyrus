"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface ContactCardProps {
  icon: string;
  title: string;
  details: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, details }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm"
    >
      <Icon icon={icon} className="text-2xl text-gray-700" />
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600">{details}</p>
      </div>
    </motion.div>
  );
};

export default ContactCard;
