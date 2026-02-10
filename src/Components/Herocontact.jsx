"use client";

import Navigationbar from "./Navigationbar";

export default function HeroContact() {
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

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full  text-center">
        <h1
          className="text-white font-bold
          text-3xl sm:text-4xl md:text-5xl
          leading-tight md:leading-[60px]"
        >
          Contact Us
        </h1>

        {/* <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
          The platform helps investors to make easy to purchase and sell their tokens
        </p> */}
      </div>

      <Navigationbar />
    </section>
  );
}
