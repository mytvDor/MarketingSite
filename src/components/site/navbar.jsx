"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/branding", label: "Branding & Designing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={handleClose}
        >
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 text-sm font-bold text-neutral-900 shadow-md">
            V9
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-neutral-900">
              Vision9
            </span>
            <span className="text-xs text-neutral-500">Marketing Studio</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition-colors hover:text-neutral-900"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden border-neutral-200 text-xs font-medium text-neutral-800 hover:bg-neutral-100 sm:inline-flex"
          >
            Contact Us
          </Button>
          <Button
            size="sm"
            className="hidden bg-yellow-500 px-4 text-xs font-semibold text-neutral-900 shadow-sm hover:bg-yellow-400 md:inline-flex"
          >
            Book a Strategy Call
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center rounded-md border border-neutral-200 bg-white p-2 text-neutral-800 shadow-sm md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-250 ease-out ${
          open
            ? "max-h-80 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-neutral-200 bg-white px-4 pb-4 pt-3 sm:px-6 lg:px-8">
          <nav className="flex flex-col gap-2 text-sm font-medium text-neutral-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1.5 hover:bg-neutral-50"
                onClick={handleClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            {/* <Button
              variant="outline"
              size="sm"
              className="w-full border-neutral-200 text-xs font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="w-full bg-yellow-500 text-xs font-semibold text-neutral-900 hover:bg-yellow-400"
            >
              Book a Strategy Call
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
