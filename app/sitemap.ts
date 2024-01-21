import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/our-work`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#services`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/#pricing`,
    },
  ];
}
