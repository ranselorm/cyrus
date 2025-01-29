import React from "react";
import { Icon } from "@iconify/react";

interface ApproachItem {
  icon: string;
  title: string;
  description: string;
}

const approachData: ApproachItem[] = [
  {
    icon: "mdi:check-circle-outline",
    title: "Optimize template",
    description:
      "We offer tailored microcredit services to help you grow financially.",
  },
  {
    icon: "mdi:view-grid-outline",
    title: "Convenience",
    description:
      "Our experienced team provides actionable plans and insights to ensure your success.",
  },
  {
    icon: "mdi:layers-outline",
    title: "Services targeted for the poor",
    description: "Easy and efficient loan applications with no hidden fees.",
  },
];

const ClientCentric: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Our Client-<span className="text-accent">Centric</span> <br />
          Approach.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 mt-12 justify-center items-center">
        {approachData.map((item, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-md flex flex-col items-center justify-center gap-y-6 transition-all duration-300 hover:shadow-lg w-full md:w-[360px] h-[400px]
              ${index === 1 ? "bg-blue-100" : "bg-white"}`}
          >
            <div className="w-20 h-20 p-4 flex items-center justify-center rounded-full bg-gray-800">
              <Icon
                icon={item.icon}
                className="text-white"
                width="32"
                height="32"
              />
            </div>
            <h3 className="text-3xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
            <div className="mt-4">
              <Icon
                icon="mdi:arrow-right"
                className="text-gray-600 hover:text-black transition"
                width="24"
                height="24"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientCentric;
