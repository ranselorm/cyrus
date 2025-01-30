import React from "react";

const UltimateSolution = () => {
  return (
    <section className="w-[95%] mx-auto h-[500px] bg-white md:mt-16 mt-40 rounded-3xl overflow-hidden">
      <div className="container mx-auto h-full">
        <div className="flex md:flex-row flex-col-reverse w-full h-full">
          <div className="flex-1 md:w-1/2 flex justify-center flex-col px-8 gap-y-8 text-blu">
            <h3 className="text-4xl">
              Ultimate Solution Your SME <br />
              Needs
            </h3>
            <p className="text-lg max-w-md">
              Achieving poverty reduction through affordable microcredit
              services
            </p>
          </div>
          <div className="flex-1 md:w-1/2 h-full">
            <img src="/images/ultimate.avif" className="h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateSolution;
