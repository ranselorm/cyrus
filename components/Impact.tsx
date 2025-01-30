import React from "react";
import { Icon } from "@iconify/react";

interface ImpactItem {
  icon: string;
  value: string;
  description: string;
}

const impactData: ImpactItem[] = [
  {
    icon: "mdi-light:trophy",
    value: "30k+",
    description: "We've experienced more than 10+ years with success.",
  },
  {
    icon: "ph:certificate-thin",
    value: "95%+",
    description: "We achieve a lot for our work from top certified agencies.",
  },
  {
    icon: "bitcoin-icons:globe-outline",
    value: "100+",
    description: "We've made clients happy all over the world.",
  },
];

const Impact: React.FC = () => {
  return (
    <section className="bg-dark-blu text-white py-16 px-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between mb-12">
          <h2 className="text-4xl font-bold mb-4">Impact</h2>
          <p className="md:text-xl mb-12 md:max-w-lg w-full leading-loose">
            Join the community of businesses and individuals who trust us to
            meet their financial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impactData.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-y-5">
              <Icon
                icon={item.icon}
                className="text-green-200"
                width="60"
                height="60"
              />
              <div className="text-[10px] text-gray-300">
                -----------------------------------------------------
              </div>
              <h3 className="text-5xl font-bold mt-4">{item.value}</h3>
              <p className="text-center text-gray-300 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
