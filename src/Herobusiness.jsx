"use client";

import Navigationbar from "./Navigationbar";

export default function Herobusiness() {
  return (
   <section className="relative h-[70vh] sm:h-[65vh] md:h-[60vh] w-full overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[80px]">

  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/banner-about.webp')] bg-cover bg-center bg-no-repeat" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#050023]/60" />

  {/* Center Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-24 sm:pt-28 md:pt-0">

    <h1
      className="
      text-white font-bold
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl
      leading-tight md:leading-[60px]
      "
    >
      About Us
    </h1>

    <p
      className="
      mt-3 sm:mt-4
      text-white/90
      text-sm sm:text-base md:text-lg
      max-w-[90%] sm:max-w-xl md:max-w-2xl
      leading-relaxed
      "
    >
      Strategic Investment Banking Advisory for Growth-Focused Enterprises.
    </p>

  </div>

  {/* Navbar */}
  <Navigationbar />

</section>
  );
}
