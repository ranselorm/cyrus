"use client";

import React from "react";

const images = [
  "/images/gallery1.avif",
  "/images/gallery2.avif",
  "/images/gallery3.avif",
  "/images/gallery4.avif",
  "/images/gallery5.avif",
  "/images/gallery6.avif",
  "/images/gallery7.avif",
  "/images/gallery8.avif",
  "/images/gallery9.avif",
  "/images/gallery10.avif",
  "/images/gallery11.avif",
  "/images/gallery12.avif",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl group">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[250px] md:h-[300px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
