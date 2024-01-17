import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-[700px] flex justify-start bg-neutral rounded-md text-primary mb-16" id="home">
      <div className="max-w-[1400px] w-[90vw] flex flex-col items-center justify-center gap-8">
        <p className="text-7xl font-semibold w-[700px] text-center">No website builders here, just hand-coded websites.</p>
        <p className="text-xl flex items-center gap-2 my-3">
          Made With <FaHeart className="text-red-500" />. Get your digital footprint on the web today!  
        </p>
        <div className="flex gap-4">
        <Link href="/our-work" className="bg-accent px-4 py-3 text-white self-start rounded-md">See Our Work</Link>
        <Link href="/our-work" className="border border-accent px-4 py-3 text-accent self-start rounded-md">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;