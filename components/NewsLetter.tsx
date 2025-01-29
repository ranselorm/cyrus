"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const NewsLetter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <motion.section
      className=""
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="rounded-3xl container mx-auto text-center bg-pink-200 py-12">
        <h2 className="text-3xl font-bold text-blu">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-700 my-6 max-w-2xl mx-auto">
          Stay updated with the latest news, trends, and insights in the world
          of AI and technology by subscribing to our newsletter.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
          <input
            type="email"
            className="p-3 rounded-lg border border-gray-300 w-full max-w-md outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="ml-4 px-6 py-3 bg-blu text-white rounded-lg hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default NewsLetter;
