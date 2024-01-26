import React from "react";
import PricingCard from "./PricingCard";
import AlacartePricingCard from "./AlacartePricingCard";
import { priceList } from "../utils/data";

const PricingSection = () => {
  return (
    <section
      className=" py-32 bg-highlight w-full"
      id="pricing"
    >
      <div className="flex flex-col gap-16 max-w-[1400px] w-[90vw] mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center text-white">Pricing</h2>
        <p className="text-center text-light text-white">
          Quality services that dont break the bank!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceList.map((price) => (
          <PricingCard key={price.title} {...price} />
        ))}
        <AlacartePricingCard />
      </div>
      </div>
      
    </section>
  );
};

export default PricingSection;
