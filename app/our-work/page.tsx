import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { Metadata } from "next";
import { portfolio } from "../utils/data";

export const metadata: Metadata = {
  title: "Our Work",
};

const OurWork = () => {
  return (
    <section className="flex flex-col gap-y-16 py-32 max-w-[1400px] w-[90vw] mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">Our Work</h2>
        <p className="text-center text-light text-gray-500">
          Discover the solutions we&apos;ve crafted for our clients through our
          website development projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {portfolio.map((client) => {
          const { title } = client;
          return <PortfolioCard key={title} {...client} />;
        })}
      </div>
    </section>
  );
};

export default OurWork;
