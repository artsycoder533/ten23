"use client"
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png"
import Hamburger from './Hamburger';
import { useEffect } from "react";

const navItems = [
  { link: "Home", path: "/" },
  { link: "Services", path: "/#services" },
  { link: "About Us", path: "/about-us" },
  { link: "Our Work", path: "/our-work" },
  { link: "Pricing", path: "/#pricing" },
  { link: "Contact", path: "/contact" },
];

type Props = {}

const Navbar = (props: Props) => {
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
    <nav className="flex items-center justify-between max-w-[1400px] w-[90vw] flex-col md:flex-row md:w-full mx-auto">
      <div className="flex items-center justify-between w-full md:w-auto">
      <div className="flex items-center gap-2 flex-row">
            <Link href="/">
            <Image
            src={logo}
            alt="Ten-23 Agency LLC logo"
            width={75}
            height={75}
            priority
          />
            </Link>
          
          <h1 className="text-2xl font-semibold text-highlight hidden lg:block">
            Ten-23 Agency
          </h1>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
      <ul
        className={
          "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[80px] left-0 right-0 h-[calc(100vh-80px)] md:h-auto  transition-all ease-in-out duration-500 " +
          (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
        }
      >
        {navItems.map((navItem, index) => {
          const { link, path } = navItem;
          return (
            <li key={index}>
              <Link
                className="text-2xl md:text-base hover:underline py-2 hover:text-accent underline-offset-8"
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


    // <nav
    //   className="flex items-center justify-between max-w-[1400px] w-[90vw] flex-col md:flex-row  mx-auto"
    //   >
    //   <div className="flex items-center justify-between  md:w-auto">
    //     <div className="flex items-center gap-2 flex-row">
    //         <Link href="/">
    //         <Image
    //         src={logo}
    //         alt="Ten-23 Agency LLC logo"
    //         width={75}
    //         height={75}
    //         priority
    //       />
    //         </Link>
          
    //       <h1 className="text-2xl font-semibold text-highlight hidden lg:block">
    //         Ten-23 Agency
    //       </h1>
    //     </div>
    //     <Hamburger open={open} setOpen={setOpen} />
    //   </div>
    //   <ul
    //     className={
    //       "flex flex-col md:flex-row gap-12 md:gap-8 items-center w-full md:w-auto justify-center md:justify-end absolute md:static top-[78px] left-0 right-0 h-[calc(100vh-91px)] md:h-auto bg-white transition-all ease-in-out duration-500 " +
    //       (open ? "translate-x-0" : "translate-x-[100vh] md:translate-x-0")
    //     }>
    //     {navItems.map((navItem, index) => {
    //       const { link, path } = navItem;
    //       return (
    //         <li key={index}>
    //           <Link
    //             className="text-2xl md:text-base hover:underline hover:underline-offset-8 py-2 hover:text-highlight"
    //             href={path}
    //             scroll={true}
    //             onClick={() => setOpen(false)}>
    //             {link}
    //           </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
      
    // </nav>
  )
}

export default Navbar