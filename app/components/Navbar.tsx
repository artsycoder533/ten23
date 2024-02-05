"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Hamburger from "./Hamburger";
import { useEffect } from "react";
import { navItems } from "../utils/data";
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [open]);

  return (
    <nav className="flex items-center justify-between max-w-[1400px] w-[90vw] flex-col lg:flex-row mx-auto">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-2 flex-row">
          <Link href="/">
            <Image
              src={logo}
              alt="Ten-23 Agency LLC logo"
              width={75}
              height={75}
              style={{ objectFit: "contain", width: "75px", height: "75px" }}
              priority
            />
          </Link>

          <h1 className={`text-xl md:text-2xl font-semibold  lg:block text-highlight ${rockSalt.className}`}>
            Ten-23 Agency
          </h1>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "bg-white flex flex-col lg:flex-row gap-12 lg:gap-6 items-center w-full lg:w-auto justify-center lg:justify-end absolute lg:static top-[80px] left-0 right-0 h-[calc(100vh-80px)] lg:h-auto  transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] lg:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl lg:text-base hover:underline py-2 hover:text-accent underline-offset-8"
                href={path}
                scroll={true}
                onClick={() => setOpen(false)}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
