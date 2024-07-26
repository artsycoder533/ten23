import type { Metadata } from "next";
import { Inter as Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ten23.agency/'),
  openGraph: {
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'Ten-23 Agency',
    locale: 'en_US'
  },
  title: {
    default: 'Ten-23 Agency',
    template: 'Ten-23 Agency | %s',
  },
  description:
    "At Ten-23 Agency, we specialize in bespoke web development, leveraging code to craft unique and high-performing websites.  Our core mission is centered on solving real-world challenges by transforming your ideas into impactful digital experiences.  Elevate your online presence with the expertise of Ten-23 Agency, led by Natasha Johnson, a self-taught Software Engineer.",
    // "Ten-23 is more than a web development agency; it's a story of risk, passion, and self-discovery. We specialize in creating custom, hand-coded websites for small businesses, all at an affordable price."
  twitter: {
    title: "Ten-23 Agency LLC",
    site: "https://www.ten23.agency/",
    description: "At Ten-23 Agency, we specialize in bespoke web development, leveraging code to craft unique and high-performing websites.  Our core mission is centered on solving real-world challenges by transforming your ideas into impactful digital experiences.  Elevate your online presence with the expertise of Ten-23 Agency, led by Natasha Johnson, a self-taught Software Engineer.",
    card: "summary_large_image",
    creator: '@artsycoder533'
  },
  keywords: ['Natasha Johnson', '@ten23_agency', 'Software Engineer', 'Township', 'Next.js Developer', 'artsycoder533', '@artsycoder533', 'Self-taught developer', 'Freelance Web Developer', 'Front End Developer', 'Vue Developer', 'React Developer', "Ten-23 Agency", "Ten-23 Agency LLC", "Web Development", "Website Development"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
