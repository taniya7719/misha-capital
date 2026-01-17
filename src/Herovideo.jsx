"use client";

import Navigationbar from "./Navigationbar";

export default function Herovideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        src="/frontbackgroundvideo (1).mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar */}
      <Navigationbar />

      {/* Content */}
      {/* <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8 lg:px-16">
        <div
          className="
            w-full max-w-sm
            sm:max-w-md
            lg:max-w-lg
            rounded-3xl
            bg-white/30
            p-6 sm:p-8 lg:p-10
            text-white
            backdrop-blur-md
          "
        >
          <h2 className="text-sm sm:text-base lg:text-lg">
            Misha Capital
          </h2>

          <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-light">
            Your Trusted Partner For
          </p>

          <p className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-200">
            INVESTMENTS
          </p>

          <button
            className="
              mt-6 sm:mt-8
              w-full sm:w-auto
              flex items-center justify-center gap-3
              rounded-full
              border border-white
              px-6 py-3
              text-sm
              transition
              hover:bg-white hover:text-black
            "
          >
            Contact Us →
          </button>
        </div>
      </div> */}

    </section>
  );
}
