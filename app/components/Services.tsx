import React from "react";
import { services } from "../utils/data";

const Services = () => {

  return (
    <section
      className=" w-full flex flex-col  gap-16 py-32 bg-primary"
      id="services"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center text-white">Services</h2>
        <p className="text-white text-center">
          We understand everyones needs are different. Here&apos;s what we can
          do for you
        </p>
      </div>

      <div className="max-w-[1400px] w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center  p-8 gap-6 rounded-md shadow-md bg-neutral"
          >
            <div className="text-7xl text-accent">{<service.icon />}</div>
            <p className="font-semibold text-xl">{service.name}</p>
            <p className="text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
