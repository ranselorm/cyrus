"use client";

import React from "react";
import { motion } from "framer-motion";

// Team Data
const teamMembers = [
  {
    name: "Jefferson Agbal",
    position: "Founder, CEO",
    image: "/images/team1.avif",
  },
  {
    name: "Lina Soy",
    position: "HR Manager",
    image: "/images/team2.avif",
  },
  {
    name: "Gold Berg",
    position: "Finance",
    image: "/images/team3.avif",
  },
  {
    name: "Maha Rehan",
    position: "Marketing",
    image: "/images/team4.avif",
  },
];

// Animation Variants
const hoverEffect = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const OurTeam: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-blu">
        Our talented team.
      </h2>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[350px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            <motion.div
              className="absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial="hidden"
              whileHover="visible"
              variants={hoverEffect}
            >
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm">{member.position}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
