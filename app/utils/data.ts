import omni from "../../public/assets/omni.png";
import renewed from "../../public/assets/renewed.png";
import atlas from "../../public/assets/atlas.png";
import vohps from "../../public/assets/vohps.png";
import whatsNext from "../../public/assets/whats-nxt.png";
import renewedBefore from "../../public/assets/renewedBefore.jpeg"
import renewedAfter from "../../public/assets/renewedAfter.png"
import omniBefore from "../../public/assets/omniBefore3.png"
import omniAfter from "../../public/assets/omniAfter.png"
import vohpsBefore from "../../public/assets/vohpsBefore.png"
import vohpsAfter from "../../public/assets/vohpsAfter.png"
import { FaLaptopCode } from "react-icons/fa";
import { GrVmMaintenance } from "react-icons/gr";
import { LiaCloneSolid } from "react-icons/lia";

export const navItems = [
    { link: "Home", path: "/" },
    { link: "About Us", path: "/about-us" },
    { link: "Our Work", path: "/our-work" },
    { link: "Services", path: "/#services" },
    { link: "Pricing", path: "/#pricing" },
    { link: "Contact Us", path: "/#contact-us" },
  ];

export const alacarte = {
    details: {
      title: "A La Carte",
      price: "Varies",
      purpose: 
      "Need a little extra? Customize your package to suit your needs.",
      tag: "Top Picks"
    },
    priceItems: [
      {
        name: "Add a page section",
        price: "50",
      },
      {
        name: "Add a Page ",
        price: "100",
      },
      {
        name: "Basic Blog",
        price: "150+",
      },
      {
        name: "Stock Images",
        price: "25 for 3",
      },
      {
        name: "Content Management System",
        price: "300+"
      },
      {
        name: "Hosting w/ Blog add-on",
        price: "10/Mo."
      },
      {
        name: "Hosting w/ CMS add-on",
        price: "15/Mo."
      },
      {
        name: "Hosting w/CMS & Blog add-on",
        price: "20/Mo."
      }
    ],
  };

  export const priceList = [
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
        "Contact section w/form",
        "Google Map",
        "FAQ Accordian",
      ],
      purpose: "Perfect for companies just starting out that need to get online.",
    },
    {
      title: "Standard",
      price: "699",
      pageLength: "up to 5 pages",
      hosting: "5+/mo.",
      details: [
        "Home page",
        "About page",
        "Services page",
        "Contact Page w/form",
        "Google Map",
        "FAQ Accordian",
      ],
      purpose: "Perfect for companies that need a little more than just the basics.",
    },
    {
      title: "Advanced",
      price: "899",
      pageLength: "6 to 10 pages",
      hosting: "5+/mo.",
      details: [
        "Home page",
        "About page",
        "Individual Service pages",
        "Contact Page w/form",
        "Google Map",
        "FAQ Accordian",
      ],
      tag: "Most Popular",
      purpose: "Perfect for companies with multiple services that require more detail.",
    },
    {
      title: "E-Commmerce",
      price: "1199+",
      pageLength: "5+ Pages",
      hosting: "15+/mo.",
      details: [
        "Home page",
        "Products page",
        "Individual product pages",
        "Contact Page w/form",
        "Google Map",
        "FAQ Accordian",
        "Content Management System",
        "Stripe Payment Integration",
      ],
      purpose: "Perfect for companies looking to expand their product outreach with flexibility in mind.",
    },
  ];

  export const portfolio = [
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

  export const services = [
    {
      name: "Website Development",
      description:
        "Tired of losing out on clients due to not having a website? Whether its a landing page, multi-page website, e-commerce solution, etc.  Let us help you gain the online exposure you deserve.",
      icon: FaLaptopCode,
      id: 1,
    },
    {
      name: 'Website "Re-skin"',
      description:
        "Already have an exisiting website, but in need of a face-lift? Made your website in a hurry and want something that better represents your brand? We can bring your ideas to life!",
      icon: LiaCloneSolid,
      id: 2,
    },
    {
      name: "Website Maintenance",
      description:
        "Need additional support after your website launches? Will you be in need of content updates and don't have the time to keep up with them?  Let us know how we can help!",
      icon: GrVmMaintenance,
      id: 4,
    },
  ];

  export const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer Website Development, Website 'Re-skin', and Website Hosting."
    },
    {
        question: "Do you require a deposit?",
        answer: "Yes, we require a 50% deposit to start working.  The remaining balance is due once your website is complete."
    },
    {
        question: "Do you work with Wix Websites or any site made with a website builder?",
        answer: "No we do not.  We hand code our websites from scratch without the use of a website builder."
    },
    {
        question: "What is the typical turnaround time for a website?",
        answer: "This will vary by the package selected as well as the complexity of the project."
    },
    {
        question: "How do you handle revisions and feedback during the development process?",
        answer: "The client will be given a link to a live site throughout the development process where they can test it out on their desktop and mobile devices."
    },
    {
        question: "What is the development process?",
        answer: "First, we will schedule a consultation call to discuss your needs to determine which package we offer is most appropriate. Next, we will send an email requesting your company's logo, copy text, assets, and anything else you would like to be included in your website. Finally, we will organize your information in a way that makes sense and request feedback before we begin development. At this time, we will start the development process, sending the client previews for feedback along the way. Once the draft website is complete, we will request the client to review the entire site and submit feedback/corrections. Once the client is happy with their site, it is hosted on their domain."
    },
    {
        question: "Do you offer ongoing support and maintenance post launch?",
        answer: "Yes we do.  We offer a la carte pricing for any updates and/or new features depending on the complexity."
    },
  ]