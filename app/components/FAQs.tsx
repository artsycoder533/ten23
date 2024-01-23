import React from "react";
import { faqs } from "../utils/data";

const FAQs = () => {
  return (
    <section className="flex flex-col gap-16 py-32" id="faqs">
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">FAQs</h2>
        <p className="text-center text-light text-gray-500">
          Browse answers to common questions we&apos;ve been asked.
        </p>
      </div>

      <div className="max-w-[1400px] w-[90vw] mx-auto">
        {faqs.map((faq) => (
          <details key={faq.question} className=" py-5 border-b cursor-pointer">
            <summary>{faq.question}</summary>
            <p className="py-5 font-light ml-6">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
