import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaCloneSolid } from "react-icons/lia";

const Services = () => {
  const services = [
    {
      name: "Website Development",
      description: "Tired of losing out on clients due to not having a website? Whether its a landing page, multi-page website, e-commerce solution, etc.  Let us help you gain the online exposure you deserve.",
      icon: <FaLaptopCode />,
      id: 1,
    },
    {
      name: 'Website "Re-skin',
      description: "Already have an exisiting website, but in need of a face-lift? Made your website in a hurry and want something that better represents your brand? We can bring your ideas to life!",
      icon: <FaLaptopCode />,
      id: 2,
    },
    {
      name: "Website Maintenance",
      description: "Need additional support after your website launches? Will you be in need of content updates and don't have the time to keep up with them?  Let us know how can help!",
      icon: <GrVmMaintenance />,
      id: 3,
    },
  ];
  return (
    <section className=" w-full flex flex-col gap-16 p-20 bg-primary" id="services">
      <h2 className="text-4xl font-bold text-center text-white">Here&apos;s what we can do for you</h2>
      <div className="max-w-[1400px] w-[90vw] mx-auto flex justify-between gap-12 ">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center w-96  p-8 gap-6 rounded-md shadow-md bg-neutral">
            <div className="text-7xl text-highlight">{service.icon}</div>
            <p className="font-semibold text-xl">{service.name}</p>
            <p className="text-center">{service.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
