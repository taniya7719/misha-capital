"use client";

import Navigationbar from "./Navigationbar";



export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        src="/frontbackgroundvideo (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay (for text visibility) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navbar on top */}
      <Navigationbar/>

      {/* Left Content Card (same like image) */}
      <div className="relative z-10 flex h-full items-center px-12">
        <div className="max-w-md rounded-3xl bg-white/30 p-8 text-white backdrop-blur-md">
          <h2 className="text-lg">Misha Capital</h2>
          <p className="mt-2 text-2xl font-light">
            Your Trusted Partner For
          </p>
          <p className="mt-1 text-3xl font-semibold text-blue-200">
            INVESTMENTS
          </p>

          <button className="mt-8 flex items-center gap-3 rounded-full border border-white px-6 py-3 text-sm hover:bg-white hover:text-black transition">
            Contact Us →
          </button>
        </div>
      </div>

    </section>
  );
}
