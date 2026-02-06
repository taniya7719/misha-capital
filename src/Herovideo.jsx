"use client";

import Navigationbar from "./Navigationbar";
import Link from "next/link";

export default function Herovideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* COLOR OVERLAY */}
      <div className="absolute inset-0 bg-[#050023]/60" />

      {/* CENTER CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-20 text-center pt-48">

  {/* HEADING */}
  <h1 className="text-white font-semibold
    text-3xl sm:text-4xl md:text-5xl
    leading-tight md:leading-[70px]
    max-w-5xl">
    Your Invesment banking Partner<br />
    from Seed to Success
  </h1>

  {/* PARAGRAPH */}
  <p className="mt-6 max-w-2xl
    text-sm sm:text-base md:text-lg
    text-white/80">
    The platform helps investors to make easy to purchase and sell their tokens
  </p>
  
            

<Link href="/Contact">
  <button
    className="hidden lg:flex items-center justify-center
    h-[42px] px-7 mt-7
    rounded-full bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A]
    text-sm font-semibold text-white
    transition hover:scale-105"
  >
    GET STARTED →
  </button>
</Link>


</div>


      {/* Navbar */}
      <Navigationbar />
      
    </section>
  );
}
