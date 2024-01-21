"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

interface PortfolioCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
  rebrandBefore?: string;
  rebrandAfter?: string;
  tags: string[];
}

const PortfolioCard = ({
  title,
  description,
  img,
  link,
  rebrandBefore,
  rebrandAfter,
  tags,
}: PortfolioCardProps) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  
  return (
    <div className="relative group rounded-lg  border">
      <div className="relative rounded-md overflow-hidden bg-red-500">
        <Image
          src={img}
          alt="Omni"
          className="rounded-md cursor-pointer"
          style={{ objectFit: "cover" }}
          width={700}
          height={300}
        />

        {/* Modal Overlay */}
        {toggleModal && rebrandBefore && rebrandAfter && (
          <div className="fixed inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-95 z-50 py-12">
            <h3 className="text-white text-xl font-light">Before & After</h3>
            <div className=" max-w-[1400px] w-[90vw] flex flex-col lg:flex-row gap-12 overflow-y-auto">
              {/* Full-Length Image */}
              <Image
                src={rebrandBefore}
                alt="Omni"
                className="rounded-md"
                style={{ objectFit: "contain", maxHeight: "90vh" }}
                width={800}
                height={800}
              />
              <Image
                src={rebrandAfter}
                alt="Omni"
                className="rounded-md"
                style={{ objectFit: "contain", maxHeight: "90vh" }}
                width={800}
                height={800}
              />
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-lg"
                onClick={() => setToggleModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Name */}
      <p className="text-center my-6">{title}</p>

      {/* Button Section */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-90 rounded-md">
        <div className="flex flex-col gap-6 px-6 text-white text-center">
          <p>{title}</p>
          <p className="text-sm">{description}</p>
          <div className="flex gap-8 w-full">
            {rebrandBefore && rebrandAfter ? (
              <button
                className="py-2 px-4 bg-accent hover:bg-blue-900 text-white rounded-md cursor-pointer w-full"
                onClick={() => setToggleModal(true)}
              >
                See Before & After
              </button>
            ) : null}
            <Link
              href={link}
              rel="noopener noreferrer"
              className="py-2 px-4 border text-white rounded-md cursor-pointer flex gap-2 items-center justify-center w-full hover:bg-highlight"
            >
              View Live Site <RiExternalLinkLine />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;