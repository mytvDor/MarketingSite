import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Vision9",
 icons: {
    icon: "/icon.png"
  },
  description:
    "Vision9 is a performance-driven marketing and branding agency delivering leads, sales, and scalable growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-neutral-50">{children}</main>
          <footer className="bg-yellow-500 text-black">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Copyright */}
                <div className="text-sm font-medium">
                  © {new Date().getFullYear()}{" "}
                  <span className="font-semibold">
                    Vision9 Marketing Studio
                  </span>
                  .
                  <br className="sm:hidden" /> All rights reserved.
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <span className="cursor-default hover:underline">
                    Performance Marketing
                  </span>
                  <span className="cursor-default hover:underline">
                    Branding & Design
                  </span>
                  <span className="cursor-default hover:underline">
                    UGC & Content
                  </span>
                </div>

                {/* Social + Contact Icons */}
                <div className="flex gap-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/thevision9.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full bg-black p-2 text-yellow-500 transition hover:scale-110"
                  >
                    <FaInstagram size={16} />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61576259486894"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="rounded-full bg-black p-2 text-yellow-500 transition hover:scale-110"
                  >
                    <FaFacebookF size={16} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/the-vision9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full bg-black p-2 text-yellow-500 transition hover:scale-110"
                  >
                    <FaLinkedinIn size={16} />
                  </a>

                  {/* WhatsApp – Direct Open */}
                  <a
                    href="https://wa.me/918147637913"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="rounded-full bg-black p-2 text-yellow-500 transition hover:scale-110"
                  >
                    <FaWhatsapp size={16} />
                  </a>

                  {/* Email – Direct Open */}
                  <a
                    href="mailto:business@vision9.com"
                    aria-label="Email"
                    className="rounded-full bg-black p-2 text-yellow-500 transition hover:scale-110"
                  >
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
