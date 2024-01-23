import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import img from "../../public/assets/aboutImg2.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-16 py-32 max-w-[1400px] w-[90vw] mx-auto ">
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">About Us</h2>
        {/* <p className="text-center text-light text-gray-500">
          Owned and operated by a self-taught Software Engineer!
        </p> */}
      </div>
      <div className="mx-auto leading-8">
        <div className="max-w-prose flex flex-col gap-4">
          <p className="indent-10">
            Ten-23 isn&apos;t just a web development agency; it&apos;s a
            narrative of risk, passion, and self-discovery, founded by Natasha
            Johnson, a self-taught Software Engineer. The journey unfolded in
            2021 when I left a stable career as a Counselor in Corrections to
            pursue a <span className="italic">&apos;dream deferred&apos;</span>{" "}
            of becoming a Software Engineer. With a year-long timeline and armed
            with determination, I navigated the realm of coding using free
            online resources like YouTube tutorials and The Odin Project. To
            document the learning process, I embarked on the #100DaysOfCode
            challenge, sharing insights on Twitter. You can witness the
            inception of this journey in my Day 1 video below:
          </p>
          <div className="flex justify-center my-6">
            <iframe
              // width="560"
              width="auto"
              height="315"
              src="https://www.youtube.com/embed/zpqK4-rfHDA?si=iEjr3Q7XyPzs9Mnm"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="md:w-[800px]"
            ></iframe>
          </div>

          <p>
            In a mere six months, I translated newfound skills into action,
            crafting my first freelance website for{" "}
            <Link
              className="text-accent underline"
              href="https://visionsofhope-va.com/"
              rel="noopener noferrerrer"
              target="_blank"
            >
              Visions of Hope Psychological Services
            </Link>
            . The journey didn&apos;t stop there; continuous learning propelled
            me into my first role as a Software Engineer at Township.
          </p>
          <p className="indent-10">
            The name Ten-23 holds profound meaning – a tribute to my late
            grandmother, a steadfast pillar of support throughout my journey.
            Despite her passing just months before landing my first role, her
            spirit lives on in the agency&apos;s name, symbolizing her October
            23rd birthday.
          </p>
          <div className="flex justify-center">
            <Image
              src={img}
              alt="Granny and I standing facing each other acting silly on her birthday."
              width={350}
              height={350}
            />{" "}
          </div>
          <p>
            An art lover and hobbyist painter, this love for creativity
            seamlessly aligns with my role, fostering a fondness for front-end
            web development. In the quest for mastery, I continually explore new
            tools and techniques, dedicating my spare time to enhancing my craft
            that I can pass on to clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
