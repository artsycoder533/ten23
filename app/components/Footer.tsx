import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  // FaPhone,
  // FaHeart,
} from "react-icons/fa";
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({weight: "400", subsets: ["latin"] });

const Footer = () => {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="flex flex-col sticky mt-auto pt-6 px-4 bg-black text-white">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <div className="flex flex-col lg:flex-row py-4 gap-8 lg:gap-0">
          <div className="w-full flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 flex-row">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Ten-23 Agency LLC logo"
                  width={75}
                  height={75}
                  style={{
                    objectFit: "contain",
                    width: "75px",
                    height: "75px",
                  }}
                  priority
                />
              </Link>

              <h1 className={`text-2xl font-semibold text-neutral hidden lg:block ${rockSalt.className}`}>
                Ten-23 Agency
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 w-full">
            <div className="w-full text-right">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Company
              </h3>
              <ul className="flex flex-col justify-between">
                <li className="py-2">
                  <Link href="/" scroll={true} className="hover:text-accent">
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/about-us"
                    scroll={true}
                    className="hover:text-accent"
                  >
                    About Us
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/#contact-us"
                    scroll={true}
                    className="hover:text-accent"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full text-right">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Our Work
              </h3>
              <ul>
                <li className="py-2">
                  <Link
                    href="/#services"
                    scroll={true}
                    className="hover:text-accent"
                  >
                    Services
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="/our-work"
                    scroll={true}
                    className="hover:text-accent"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full text-right">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Links
              </h3>
              <ul>
                <li className="py-2">
                  <Link
                    href="/#pricing"
                    scroll={true}
                    className="hover:text-accent"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/#faqs" scroll={true} className="hover:text-accent">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-3">
          <Link
            href="mailto:service@ten23.agency"
            className="hover:text-highlight flex flex-row gap-3 items-center mt-3 text-neutral"
          >
            <FaEnvelope />
            service@ten23.agency
          </Link>

          <div className="flex space-x-4 mt-6 lg:mt-auto">
            <Link
              href="https://www.instagram.com/ten23_agency"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-3xl text-accent hover:text-highlight" />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61556181440875" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-3xl text-accent hover:text-highlight" />
            </Link>
            <Link href="https://twitter.com/ten23_agency" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-3xl text-accent hover:text-highlight" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col py-4 border-t border-highlight w-full">
          <p className=" items-center justify-center text-center text-xs">
            Copyright &copy; {getDate()} Ten-23 Agency LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
