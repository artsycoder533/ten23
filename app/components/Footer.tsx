import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaHeart,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="flex flex-col sticky mt-auto pt-6 px-4 bg-primary text-white">
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
                  priority
                />
              </Link>

              <h1 className="text-2xl font-semibold text-neutral hidden lg:block">
                Ten-23 Agency
              </h1>
            </div>

            {/* <Link
              className="flex flex-row gap-3  items-center hover:text-[#26CCAF]"
              href="tel:850-739-2332"
            >
              <FaPhone />
              804-739-2332
            </Link> */}
            <Link
              href="mailto:service@ten23.agency"
              className="hover:text-highlight flex flex-row gap-3 items-center"
            >
              <FaEnvelope />
              service@ten23.agency
            </Link>
            <div className="flex space-x-4 mt-6 lg:mt-auto">
              <Link href="" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-highlight" />
              </Link>
              <Link href="" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-3xl hover:text-highlight" />
              </Link>
              <Link
                href=""
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-3xl hover:text-highlight" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 w-full">
            <div className="w-full">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Company
              </h3>
              <ul className="flex flex-col justify-between">
                <li className="py-2">
                  <Link href="#">Home</Link>
                </li>
                <li className="py-2">
                  <Link href="#">About Us</Link>
                </li>
                <li className="py-2">
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Our Work
              </h3>
              <ul>
                <li className="py-2">
                  <Link href="/#services">Services</Link>
                </li>
                <li className="py-2">
                  <Link href="#">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-lg mb-2 text-secondary">
                Links
              </h3>
              <ul>
                <li className="py-2">
                  <Link href="#">Pricing</Link>
                </li>
                <li className="py-2">
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
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
