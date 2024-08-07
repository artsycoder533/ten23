import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="h-[500px] flex justify-start  rounded-md text-primary mb-16"
      id="home"
    >
      <div className="max-w-[1400px] w-[90vw] flex flex-col items-center justify-center gap-12">
          <p className="text-5xl md:text-5xl lg:text-6xl font-bold  max-w-prose items-center">
            <span className="text-highlight italic underline">Hand-coded</span> websites that don&apos;t break the bank.
          </p>
        <div className="flex gap-4">
          <Link
            href="/our-work"
            className="bg-accent hover:bg-highlight p-4 text-white self-start rounded-md animate-bounce flex items-center gap-x-2 mt-8"
          >
            See Our Work <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;




