"use client";


import Businesspage from "./Businesspage";

export default function Herobusiness() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      <Businesspage/>

      {/* Video */}
      <video
        src="/Businessbackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
     
    </section>
  );
}
