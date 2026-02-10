"use client";

import Navigationbar from "@/Navigationbar";



export default function Heropartner() {
  return (
     <section className="relative h-[60vh] w-full overflow-hidden rounded-b-[80px]">
      
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
     <div className="relative z-20 flex flex-col items-center justify-center h-full  text-center">
        <h1
          className="text-white font-bold
          text-3xl sm:text-4xl md:text-5xl
          leading-tight md:leading-[60px]"
        >
          Partner With Us
        </h1>
      
  {/* <p
    className="
      text-white/90
      text-base sm:text-lg
      leading-[28px]
      max-w-2xl
    "
  >
    Partner with Misha Capital to execute debt & capital mandates
  </p> */}
</div>

      {/* Navbar */}
      <Navigationbar/>
    </section>
  );
}
