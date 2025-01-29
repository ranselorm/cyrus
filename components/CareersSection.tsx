"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const jobs = [
  {
    category: "Finance",
    positions: [
      {
        title: "Financial Analyst",
        type: "Full-time",
        location: "San Francisco",
        bgColor: "bg-blue-100",
      },
      {
        title: "Credit Risk Manager",
        type: "Contract",
        location: "Canada",
        bgColor: "bg-blue-100",
      },
      {
        title: "Client Relationship Manager",
        type: "Full-time",
        location: "San Francisco",
        bgColor: "bg-blue-100",
      },
      {
        title: "Operations Manager",
        type: "Full-time",
        location: "San Francisco",
        bgColor: "bg-blue-100",
      },
    ],
  },
  {
    category: "Customer Service",
    positions: [
      {
        title: "Customer Service Representative",
        type: "Full-time",
        location: "United Kingdom",
        bgColor: "bg-pink-100",
      },
    ],
  },
  {
    category: "Loan Services",
    positions: [
      {
        title: "Loan Processor",
        type: "Full-time",
        location: "Canada",
        bgColor: "bg-yellow-100",
      },
      {
        title: "Field Officer",
        type: "Contract",
        location: "Remote",
        bgColor: "bg-yellow-100",
      },
    ],
  },
];

// Stagger Effect for Job Cards
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

// Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const CareersSection: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (id: any) => {
    router.push(`/careers/${id}`);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-loose text-blu">
          Explore our current openings and take the <br />
          next step in your career with us.
        </h2>

        <motion.div
          className="w-full mx-auto space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainerVariants}
        >
          {jobs.map((category, index) => (
            <div key={index} className="flex flex-col items-start">
              <h3 className="text-2xl font-semibold mb-4 text-blu">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.positions.map((job, jobIndex) => (
                  <motion.div
                    key={jobIndex}
                    className={`p-4 rounded-xl shadow-md w-[320px] cursor-pointer transition-all duration-300 flex flex-col items-start ${job.bgColor}`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleNavigate(2362)}
                    variants={cardVariants}
                  >
                    <h4 className="text-md font-semibold">{job.title}</h4>
                    <div className="mt-2 flex flex-wrap gap-2 text-sm">
                      <span className="px-2 py-1 border border-gray-700 rounded-md">
                        {job.type}
                      </span>
                      <span className="px-2 py-1 border border-gray-700 rounded-md">
                        {job.location}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
