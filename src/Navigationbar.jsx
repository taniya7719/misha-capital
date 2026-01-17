"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigationbar() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-20 w-full">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 text-white">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/Mishacapital.png"
    alt="Misha Capital Logo"
    width={42}
    height={42}
    priority
  />
  <span className="text-lg font-semibold tracking-wide">
    Misha Capital
  </span>
</Link>


        {/* Nav Links */}
        <nav className="flex gap-12 text-sm font-medium">
          <Link
            href="/"
            className={`relative pb-2 ${
              pathname === "/"
                ? "after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }
            after:absolute after:left-0 after:bottom-0 after:h-[2px]
            after:w-full after:bg-white after:transition`}
          >
            Home
          </Link>

          <Link
            href="/Business"
            className={`relative pb-2 ${
              pathname === "/Business"
                ? "after:scale-x-100"
                : "after:scale-x-0 hover:after:scale-x-100"
            }
            after:absolute after:left-0 after:bottom-0 after:h-[2px]
            after:w-full after:bg-white after:transition`}
          >
            Business
          </Link>
        </nav>

        {/* CTA */}
        <button className="rounded-full bg-white px-6 py-3 text-sm text-black font-semibold shadow-md transition hover:scale-105">
          GET STARTED →
        </button>
      </div>
    </header>
  );
}
