"use client";

import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogs } from "@/data";

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
        <h2 className="text-2xl md:text-4xl font-bold md:max-w-xl mx-auto text-blu md:mb-24">
          Highlighted articles and perspectives
        </h2>
      </div>
      {/* <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8">
        {blogs.slice(0, 2).map((blog, index) => (
          <motion.div key={index} variants={containerVariants}>
            <BlogCard
              title={blog.title}
              image={blog.image}
              link={blog.link}
              category={blog.category}
              date={blog.date}
            />
          </motion.div>
        ))}
      </div> */}
    </motion.section>
  );
};

export default BlogSection;
