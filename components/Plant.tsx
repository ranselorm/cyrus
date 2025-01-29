import React from "react";

const Plant = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="w-full h-full mx-auto rounded-3xl overflow-hidden">
          <img
            src="/images/plant.avif"
            alt="plant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Plant;
