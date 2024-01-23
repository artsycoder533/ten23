import Link from "next/link";
import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="h-screen md:h-[550px] flex justify-start  rounded-md text-primary mb-16"
      id="home"
    >
      <div className="max-w-[1400px] w-[90vw] flex flex-col items-center justify-center gap-8">
        <div>
          <p className="text-6xl lg:text-7xl font-semibold md:text-center max-w-prose items-center">
            No drag and drop builders here, just hand-coded websites made with <span className="inline-block">
            <FaHeart className="text-red-500" />
          </span>
          </p>
          
        </div>

        <p className="text-lg">
          Quality websites at a fraction of the price. Secure your digital
          presense on the web today!{" "}
        </p>
        {/* <p className="text-lg flex items-center gap-2 my-3">
          Made With <FaHeart className="text-red-500" />. 
        </p> */}
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
