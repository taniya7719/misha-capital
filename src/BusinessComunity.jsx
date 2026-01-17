"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Dedicated Mate",
    desc: "1-on-1 support from experienced founders and mentors.",
    direction: "left",
  },
  {
    title: "Mentor & Domain Experts",
    desc: "Guidance from successful startup founders, CEOs, CFOs and CTOs.",
    direction: "top",
  },
  {
    title: "Networking & Team Building",
    desc: "Access to online & offline events with founders and investors.",
    direction: "right",
  },
];

const variants = {
  left: {
    hidden: { x: -120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  right: {
    hidden: { x: 120, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  top: {
    hidden: { y: -120, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};

export default function BusinessComunity() {
  return (
    <section className="bg-gradient-to-b from-[#021B3A] to-[#042C5C] py-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl md:text-5xl font-semibold text-[#f3dfcf]">
          Misha Capital Community
        </h2>

        {/* Cards */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={variants[card.direction]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                w-full max-w-[320px]
                rounded-2xl
                bg-[#051D40]
                border border-white/10 
                p-10
                hover:border-[#f3dfcf]/60
                transition
              "
            >
              <h3 className="mb-4 text-xl font-semibold text-[#f3dfcf]">
                {card.title}
              </h3>

              <p className=" mb-3 text-sm leading-relaxed text-[#cfc3b6]">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
    </div>
    </section>
  );
}
