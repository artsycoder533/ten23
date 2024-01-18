import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section id="contact-us" className="flex justify-center w-full bg-primary">
      <div className="flex flex-col gap-16 py-32 max-w-[1400px] w-[90vw]">
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl text-center text-white">Contact Us.</h2>
          <p className="text-center text-light text-gray-500 max-w-[700px] mx-auto">
            Ready to secure your digital footprint on the web? We&apos;d love to
            work with you! Send us a message and we will get back to you!
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default Contact;
