"use client";

import Navigationbar from "@/Navigationbar";



export default function Heropartner() {
  return (
     <section className="relative h-[60vh] w-full overflow-hidden rounded-b-[80px]">
  
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/banner-partner.webp')] bg-cover bg-center bg-no-repeat" />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#050023]/60" />

  {/* Center Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
  <h1
    className="text-white font-bold
    text-3xl sm:text-4xl md:text-5xl
    leading-tight md:leading-[50px] mt-12"
  >
    Partner with Misha Capital
  </h1>

  <p
    className="mt-4 text-white/90
    text-sm sm:text-base md:text-lg
    max-w-2xl
    leading-relaxed"
  >
   Partner with a leading investment banking advisory firm to seamlessly execute structured 
debt and equity mandates and grow your business through trusted partnerships.
  </p>
</div>


      {/* Navbar */}
      <Navigationbar/>
    </section>
  );
}
