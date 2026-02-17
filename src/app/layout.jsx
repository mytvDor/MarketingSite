import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/site/navbar";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = DM_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vision9 Marketing Studio",
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
          <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <p>
                © {new Date().getFullYear()} Vision9 Marketing Studio. All
                rights reserved.
              </p>
              <p className="flex gap-4">
                <span>Performance Marketing</span>
                <span>Branding and Design</span>
                <span>UGC and Content</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

