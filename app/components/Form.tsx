"use client";
import { useState, ChangeEvent } from "react";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
    method="POST"
    action={process.env.NEXT_FORM_ACTION}
      className="space-y-8 max-w-[800px] w-[90vw] mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-2 font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border rounded-lg p-2 bg-neutral"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
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
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
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
          value={formData.message}
          onChange={handleChange}
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
    </form>
  );
}

export default Form;