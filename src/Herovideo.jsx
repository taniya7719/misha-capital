"use client";

import Navigationbar from "./Navigationbar";
import Link from "next/link";

export default function Herovideo() {
  return (
   <section className="relative min-h-screen w-full box overflow-hidden">
  {/* Background Video */}
  <video
    src="/hero.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#050023]/60" />

  {/* CONTENT */}
  <div className="relative z-10 pt-20 ">

    
    {/* HEADING */}
    <h1
  className=" font-extrabold
    text-white
    font-bold
    text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
leading-tight md:leading-snug lg:leading-[62px]

    tracking-[-0.01em]
  "
>
      Your Investment <br />

      <span
  className="
    block
    font-inter
    text-6xl
    font-medium
    text-transparent
    [-webkit-text-stroke:1.5px_white]
    tracking-tight
  "
>
      
        banking Partner
      </span>

      from Seed to <br />
      Success
    </h1>

    {/* LEFT PARAGRAPH */}
    {/* <p
      className="
        mt-6
        max-w-[420px]
        text-[16px]
        leading-[26px]
        text-white/80
      "
    >
      The platform helps investors to make easy to purchase and sell their tokens
    </p> */}

    {/* BUTTON */}
    <Link href="/Contact">
      <div
  className="
    mt-20 md:mt-16 lg:mt-20

    inline-flex
    items-center
    justify-center
    rounded-full
    border border-white/30
    p-[4px]
    transition
    hover:scale-105
    active:scale-100
  "
>
  <button
    className="
      h-[42px]
      px-10
      rounded-full
      bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A]
      text-sm font-semibold text-white
      shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
    "
  >
    GET STARTED
  </button>
</div>


    </Link>
  </div>

  {/* RIGHT FLOATING TEXT */}
  <div className="absolute right-6 md:right-16 bottom-10 md:bottom-20 z-20 hidden lg:block">

    <div className="flex items-start gap-3">
      {/* ICON */}
      <div className="flex flex-col items-start gap-3">
  {/* ICON */}
 <div className=" flex h-20 w-12 items-center ">
  <img src="/Frame 57.svg" alt="" className="h-14 w-14" />
</div>


  {/* TEXT */}
  <p className="font-ProximaSansRegular text-white leading-2">

    Your One-Stop Shop for Business Success
  </p>

  </div>
</div>
</div>




      {/* Navbar */}
     
      
    </section>
  );
}
