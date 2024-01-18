"use client";
// import { useForm } from "@formspree/react";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
//   const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);


//   useEffect(() => {
//     if (state.succeeded) {
//       setFormData({
//         name: "",
//         email: "",
//         message: "",
//       });

//       setSubmissionSuccess(true);

//       setTimeout(() => {
//         setSubmissionSuccess(false);
//       }, 5000); 
//     }
//   }, [state.succeeded]);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  return (
    <form
    name="ten23"
      className="space-y-8 max-w-[800px] w-[90vw] mx-auto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    //   onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col w-full">
        <input type="hidden" name="form-name" value="ten23" />
          <label htmlFor="name" className="mb-2 font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded-lg p-2 bg-neutral"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2 font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border rounded-lg p-2 bg-neutral"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 font-medium text-white">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          className="border rounded-lg p-2 bg-neutral"
        //   value={formData.message}
        //   onChange={handleChange}
          placeholder="Let us know how we can help!"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-accent hover:bg-highlight text-white px-4 py-3 rounded-lg"
      >
        Send Message
      </button>
      {/* {submissionSuccess && (
        <div className="bg-highlight p-3 rounded-md mb-4">
          Your message has been sent! We will get back to you soon!
        </div>
      )} */}
    </form>
  );
}

export default Form;