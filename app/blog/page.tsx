import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const BlogPage = () => {
  return (
    <section>
      <HeroSection
        title="Explore our blog and insights."
        description="Here are all our essential tips to empower you to embark on your entrepreneurial journey."
        leftIcon="/images/loan1.svg"
        rightIcon="/images/loan2.svg"
      />

      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8">
        {blogs?.map((blog, index) => (
          <div
            key={index}
            // variants={containerVariants}
            // initial="hidden"
            // animate="visible"
          >
            <BlogCard
              title={blog.title}
              image={blog.image}
              link={blog.link}
              category={blog.category}
              date={blog.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
