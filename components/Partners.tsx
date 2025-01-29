"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const partners = [
  { src: "/images/partner1.avif", alt: "Cross Switch" },
  { src: "/images/partner2.avif", alt: "Micro Credit Association Ghana" },
  { src: "/images/partner3.avif", alt: "Logiciel" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto text-center">
        {/* <h2 className="text-3xl font-bold text-blu">Partners</h2> */}

        {/* Marquee Scrolling Partner Logos */}
        <div className="mt-10 overflow-hidden">
          <Marquee speed={40} gradient={false} pauseOnHover>
            <div className="flex items-center space-x-20 px-2">
              {partners.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={50}
                  className="h-12 object-contain"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Partners;
