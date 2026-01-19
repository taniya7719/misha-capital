"use client";

import Navigationbar from "./Navigationbar";
import Link from "next/link";

export default function Herovideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="/frontbackgroundvideo (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <Navigationbar />

      {/* Left Content Card */}
      <div className="relative z-10 flex min-h-screen items-start px-4 sm:px-8 lg:px-16 pt-35 pb-20 sm:pt-40 lg:pt-56">
        <div className="max-w-md rounded-3xl bg-white/20 p-6 sm:p-8 text-white backdrop-blur-xl shadow-2xl border border-white/20">
          <h2 className="text-sm uppercase tracking-widest text-white/80">
            Misha Capital
          </h2>

          <p className="mt-3 text-2xl sm:text-3xl font-light leading-tight">
            Together We
          </p>

          <p className="mt-1 text-3xl sm:text-4xl font-semibold text-blue-200">
            Build
          </p>

          {/* BUTTON LINK */}
          <Link href="/Join">
            <button
              className="
                mt-8
                inline-flex items-center gap-3
                rounded-full
                border border-white
                px-6 py-3
                text-sm
                transition-all duration-300
                hover:bg-gradient-to-r
                hover:from-[#8A9299]
                hover:to-[#8A9299]
                hover:text-white
              "
            >
              Contact Us →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
