import React from "react";
import Image from "next/image";
import omni from "../../public/assets/omni.png";
import renewed from "../../public/assets/renewed.png";
import atlas from "../../public/assets/atlas.png";
import vohps from "../../public/assets/vohps.png";
import whatsNext from "../../public/assets/whats-nxt.png";
import Link from "next/link";
import PortfolioCard from "../components/PortfolioCard";
import renewedBefore from "../../public/assets/renewedBefore.jpeg"
import renewedAfter from "../../public/assets/renewedAfter.png"
import omniBefore from "../../public/assets/omniBefore3.png"
import omniAfter from "../../public/assets/omniAfter.png"
import vohpsBefore from "../../public/assets/vohpsBefore.png"
import vohpsAfter from "../../public/assets/vohpsAfter.png"
import { Metadata } from "next";

const portfolio = [
  {
    title: "Omni Addiction & Mental Health Services",
    description:
      "Previously advertising their newly formed private practice with just a flyer, we created a website that enhances their online presence, allowing visitors to learn about their private practice and conveniently book appointments using Calendly",
    img: omni.src,
    rebrandBefore: omniBefore.src,
    rebrandAfter: omniAfter.src,
    link: "https://omniamh.com/",
    tags: ["single-page"],
  },
  {
    title: "Atlas Behaviorial Health + Wellness",
    description:
      "As they launched their private practice, establishing an impactful online presence was vital. We designed a website that not only promotes their services but also grants clients easy access to their client portal. Additionally, we integrated a dedicated page to facilitate the application process for a part-time therapist position post-launch.",
    img: atlas.src,
    link: "https://atlasbhw.com/",
    tags: ["multi-page"],
  },
  {
    title: "ReNEWed Psychological and Consultation Services",
    description:
      "Frustrated with monthly Wix fees and the hassle of signing in to respond to client messages, we designed and built them a new website from scratch, giving it a facelift in the process. Now, potential clients can easily send messages through a contact form, conveniently delivered directly to their inbox!",
    img: renewed.src,
    link: "https://renewedpsychological.com/",
    rebrandBefore: renewedBefore.src,
    rebrandAfter: renewedAfter.src,
    tags: ["multi-page", "rebrand"],
  },
  {
    title: "Visions of Hope Psychological Services",
    description:
      "Guiding a mental health practice towards independence, we developed a bespoke website that uniquely represented their therapeutic approach. With a subsequent logo change, we seamlessly refreshed the site, aligning it with their evolving identity and maintaining a welcoming online space for those seeking mental health support.",
    img: vohps.src,
    link: "https://visionsofhope-va.com/",
    rebrandBefore: vohpsBefore.src,
    rebrandAfter: vohpsAfter.src,
    tags: ["multi-page", "rebrand"],
  },
  {
    title: "WHATS NXT",
    description:
      "In need of a way to sell their products online without the hassle and cost of platforms like Shopify, we built a custom e-commerce solution tailored with simplicity in mind. By integrating a content management system, they have the flexibility to conveniently add/update their products. Paired with Stripe integration, it ensures secure and seamless payments, enhancing their online store experience.",
    img: whatsNext.src,
    link: "https://www.whatsnxt.org/",
    rebrandLink: "",
    tags: ["multi-page", "e-commerce"],
  },
];

export const metadata: Metadata = {
  title: "Our Work",
};

const OurWork = () => {
  return (
    <section className="flex flex-col gap-y-16 py-32 max-w-[1400px] w-[90vw] mx-auto">
      {/* <div className=""> */}
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">Our Work</h2>
        <p className="text-center text-light text-gray-500">
          Discover the solutions we&apos;ve crafted for our clients through our
          website development projects.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 border">
        {portfolio.map((client) => {
          const { title } = client;
          return <PortfolioCard key={title} {...client} />;
        })}
      </div>
      {/* </div> */}
    </section>
  );
};

export default OurWork;
