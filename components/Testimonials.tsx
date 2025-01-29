"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Roberta",
    role: "Small Business Owner",
    message:
      "The process was smooth and transparent. I highly recommend Cyrus MicroCredit Services to anyone in need of financial assistance.",
    image: "/images/roberta.avif",
    bgColor: "bg-blue-200",
  },
  {
    name: "Person Name",
    role: "Small Business Owner",
    message:
      "I’m absolutely blown away by the new Qamarun template. You have to try it!",
    image: "/images/person.avif",
    bgColor: "bg-pink-100",
  },
  {
    name: "Mrs. Mia",
    role: "Small Business Owner",
    message:
      "Cyrus MicroCredit Services made it easy for me to secure a loan for my small business. Their team is incredibly supportive.",
    image: "/images/mia.avif",
    bgColor: "bg-blue-100",
  },
  {
    name: "Mrs. Mariam",
    role: "Small Business Owner",
    message:
      "Thanks to Cyrus MicroCredit Services, I was able to expand my business and improve my family’s financial situation.",
    image: "/images/mariam.avif",
    bgColor: "bg-pink-200",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blu">
          Success Stories
        </h2>
      </div>

      <div className="overflow-hidden container mx-auto px-4">
        <Marquee
          gradient={true}
          gradientColor={"#fce7f3"}
          gradientWidth={20}
          speed={50}
          direction="right"
          pauseOnHover={true}
          className="space-x-6"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-3">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
