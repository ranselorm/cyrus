"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface DisbursementCardProps {
  highlight: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const DisbursementCard: React.FC<DisbursementCardProps> = ({
  highlight,
  description,
  image,
  reverse = false,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-16`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={image}
          alt={highlight}
          width={500}
          height={400}
          className="rounded-lg"
        />
      </div>

      <div className="md:w-1/2">
        <p className="text-2xl md:text-3xl font-semibold text-accent mt-2">
          {highlight}
        </p>
        <p className="text-gray-500 mt-3 leading-loose text-lg">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default DisbursementCard;
