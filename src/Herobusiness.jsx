"use client";

import Navigationbar from "./Navigationbar";

export default function Herobusiness() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden rounded-b-[80px]">
  
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/banner-about.webp')] bg-cover bg-center bg-no-repeat" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#050023]/60" />

  {/* Center Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    <h1
      className="text-white font-bold
      text-3xl sm:text-4xl md:text-5xl
      leading-tight md:leading-[60px]"
    >
      About Us
    </h1>
  </div>






      {/* Navbar */}
      <Navigationbar />
    </section>
  );
}
