"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Navigationbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (href, label) => (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`relative pb-2 text-sm font-medium ${
        pathname === href
          ? "after:scale-x-100"
          : "after:scale-x-0 hover:after:after:scale-x-100"
      }
      after:absolute after:left-0 after:bottom-0 after:h-[2px]
      after:w-full after:bg-white after:transition`}
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 text-white">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Mishacapital.png"
            alt="Misha Capital Logo"
            width={40}
            height={40}
            priority
          />
          <span className="text-base sm:text-lg font-semibold tracking-wide">
            Misha Capital
          </span>
        </Link>

        {/* Tablet + Desktop Nav */}
        <nav className="hidden sm:flex gap-8 lg:gap-12">
          {navLink("/", "Home")}
          {navLink("/Business", "Business")}
        </nav>

        {/* Desktop CTA only */}
        <Link href="/Join">
        <button className="hidden lg:block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:scale-105">
          GET STARTED →
        </button>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-20 w-full bg-black/90 backdrop-blur-lg transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-8 text-white">
          {navLink("/", "Home")}
          {navLink("/Business", "Business")}

          <button className="mt-4 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black">
            GET STARTED →
          </button>
        </div>
      </div>
    </header>
  );
}
