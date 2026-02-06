"use client";

import Navigationbar from "./Navigationbar";

export default function HeroContact() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden rounded-b-[80px]">
      
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 md:px-20 text-center pt-24">
        <h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-5xl">
          Contact With Us
        </h1>

        <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
          The platform helps investors to make easy to purchase and sell their tokens
        </p>
      </div>

      <Navigationbar />
    </section>
  );
}
