"use client";

const portfolioLogos = [
  { src: "/atriya.png", alt: "Atria Institute" },
  { src: "/suzlon.png", alt: "Suzlon" },
  { src: "/jupiter.png", alt: "Jupiter" },
  { src: "/webel.png", alt: "Webel Solar" },
];

export default function Businesscircle() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9fafb] to-[#8D8D8E] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <h2
          className="
            mb-16 text-center 
            text-3xl sm:text-4xl 
            font-light tracking-wide text-black
            animate-fade-up
          "
        >
          Our Portfolio
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
          {portfolioLogos.map((item, index) => (
            <div
              key={index}
              className="
                group relative
                flex h-56 w-56 sm:h-64 sm:w-64
                items-center justify-center
                rounded-full bg-white
                shadow-md
                transition-all duration-500
                hover:scale-105 hover:shadow-xl
                animate-fade-up
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow Ring */}
              <div className="
                absolute inset-0 rounded-full
                bg-white/40 blur-2xl opacity-0
                transition duration-500
                group-hover:opacity-100
              " />

              {/* Logo */}
              <img
                src={item.src}
                alt={item.alt}
                className="relative z-10 max-h-24 sm:max-h-28 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
