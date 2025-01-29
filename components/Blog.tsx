"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Blog Data
const blogs = [
  {
    title: "How Microcredit is Transforming Small Businesses",
    image: "/images/blog1.jpg",
    link: "/blog",
  },
  {
    title: "The Future of Microcredit Services",
    image: "/images/blog2.avif",
    link: "/blog",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const BlogSection: React.FC = () => {
  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="md:max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold md:max-w-xl mx-auto text-blu">
          Highlighted articles and perspectives
        </h2>
      </div>
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="group"
            variants={containerVariants}
          >
            <Link href={blog.link}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-[400px]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-md w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-blu group-hover:text-blue-600 transition">
                {blog.title}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BlogSection;
