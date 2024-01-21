import React from "react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const priceList = [
    {
      title: "Basic",
      price: "499",
      pageLength: "1 page",
      hosting: "5/mo.",
      tag: "Budget Friendly",
      details: [
        "Hero section",
        "About section",
        "Services section",
        "Contact section w/form & Google Map",
        "FAQ Accordian",
      ],
      purpose: "Perfect for companies just starting out.",
    },
    {
      title: "Standard",
      price: "699",
      pageLength: "up to 5 pages",
      hosting: "5/mo.",
      details: [
        "Home page",
        "About page",
        "Services page",
        "Contact Page w/form & Google Map",
        "FAQ Accordian",
      ],
      purpose: "For companies with a little more content.",
    },
    {
      title: "Advanced",
      price: "899",
      pageLength: "6 to 10 pages",
      hosting: "5/mo.",
      details: [
        "Home page",
        "About page",
        "Individual Service pages",
        "Contact Page w/form & Google Map",
        "FAQ Accordian",
        "Content Management System"
      ],
      tag: "Most Popular",
      purpose: "For companies that require more detail.",
    },
    {
      title: "E-Commmerce",
      price: "1199+",
      pageLength: "5+ Pages",
      hosting: "15/mo.",
      details: [
        "Home page",
        "Products page",
        "Individual product pages",
        "Contact Page w/form & Google Map",
        "FAQ Accordian",
        "Content Management System",
        "Stripe Payment Integration"
      ],
      purpose: "For companies looking to expand their product outreach.",
    },
  ];

  const alacarte = [
    {
      name: 'Add-on Section (Single Page Sites)',
      price: '50'
    },
    {
      name: 'Add-on Page',
      price: '100'
    },
    {
      name: 'Blog',
      price: '200'
    },
    {
      name: 'Links Page w/ CMS Integration',
      price: '100'
    }
  ]

  return (
    <section
      className="flex flex-col gap-16 py-32 max-w-[1400px] w-[90vw]"
      id="pricing"
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl text-center">Pricing</h2>
        <p className="text-center text-light text-gray-500">
          Quality services that dont break the bank!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-6">
        {priceList.map((price) => (
          <PricingCard key={price.title} {...price} />
        ))}
      </div>

      <div>
        
      </div>
    </section>
  );
};

export default PricingSection;
