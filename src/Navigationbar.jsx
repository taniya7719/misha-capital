"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigationbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 NAV LINK LOGIC
  const navLink = (href, label) => {
    const isHome = href === "/";
    const isActive = pathname === href;

  
    // ✅ Other pages → active border
    const showBorder =
      (!isHome && isActive) || (isHome && scrolled);

    return (
      <Link
        key={href}
        href={href}
        onClick={() => setOpen(false)}
        className={`relative text-sm font-medium tracking-wide
          after:absolute after:left-0 after:-bottom-1
          after:h-[1.5px] after:w-full
          after:bg-white/80
          after:origin-left
          after:transition-transform after:duration-300
          ${showBorder ? "after:scale-x-100" : "after:scale-x-0"}
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="absolute top-0 z-50 w-full">
      {/* MAIN NAV */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 text-white">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Mishacapital.png"
            alt="Misha Capital Logo"
            width={40}
            height={40}
            priority
          />

          <span className="h-6 w-px bg-white/30" />

          <span className="text-base sm:text-lg font-semibold tracking-wide">
            Misha Capital
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 lg:gap-10">
          {navLink("/", "HOME")}
          {navLink("/About", "ABOUT US")}
          {navLink("/OurServices", "OUR SERVICES")}
          {navLink("/Partner", "PARTNER WITH US")}
          {navLink("/Contact", "CONTACT US")}
        </nav>

        {/* DESKTOP CTA */}
        <Link href="/Contact">
          <button
            className="hidden lg:flex items-center justify-center
            h-[42px] px-7
            rounded-full bg-white
            text-sm font-semibold text-black
            transition hover:scale-105"
          >
            GET STARTED →
          </button>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`h-[2px] w-6 bg-white transition ${open && "rotate-45 translate-y-[6px]"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "opacity-0"}`} />
          <span className={`h-[2px] w-6 bg-white transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
        </button>
      </div>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-white/10" />

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-20 w-full bg-black/90 backdrop-blur-lg transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-white">
          {navLink("/", "Home")}
          {navLink("/About", "About")}
          {navLink("/OurServices", "Our Services")}
          {navLink("/Partner", "Partner With Us")}
          {navLink("/Contact", "Contact Us")}
        </div>
      </div>
    </header>
  );
}
