"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  image: string;
  link: string;
  category: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  link,
  category,
  date,
}) => {
  return (
    <motion.div
      className="group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={link}>
        <div className="h-[300px] md:h-[350px]">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-full object-cover"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-700 bg-pink-100 rounded-full">
              {category}
            </span>
            <span className="block text-sm text-gray-400 mt-1">{date}</span>
          </div>

          {/* Title */}
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-blu group-hover:text-blue-600 transition">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
