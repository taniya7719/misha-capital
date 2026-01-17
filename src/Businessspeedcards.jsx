"use client";

import { motion } from "framer-motion";

/* DATA */
const topCards = [
  {
    title: "Investor Connect",
    desc: "Pitch calls with community investors and advisors to map fundraising documents.",
  },
  {
    title: "Onboarding Advisors",
    desc: "Advisor onboarding on cap table or strategic consultation from domain experts.",
  },
  {
    title: "Business Collaboration",
    desc: "Leveraging the ecosystem for strategic business collaborations.",
  },
];

const bottomCards = [
  {
    title: "Financials & Pitch Deck",
    desc: "Preparation of financials, pitch decks, debt and prerequisite documentation.",
  },
  {
    title: "Core Team Building",
    desc: "Building and placing strong core team members within portfolio startups.",
  },
  {
    title: "Fund Transactions",
    desc: "Ensuring smooth, structured and timely fund transaction closures.",
  },
];

/* ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const bottomAnim = [
  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
];

/* COMPONENT */
export default function Businessspeedcards() {
  return (
    <section className="bg-gradient-to-b from-[#021B3A] to-[#042C5C] py-32 px-6">
      <div className="mx-auto max-w-7xl space-y-28">

        {/* TOP HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          About Acceleration
        </motion.h2>

        {/* TOP CARDS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {topCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md
                         transition hover:-translate-y-2 hover:border-[#7fbf3f]/40"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-[#b9c0d4] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-semibold text-white"
        >
          Fast Pace Execution & Closure
        </motion.h2>

        {/* BOTTOM CARDS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {bottomCards.map((card, i) => (
            <motion.div
              key={i}
              initial={bottomAnim[i].hidden}
              whileInView={{
                ...bottomAnim[i].visible,
                transition: { duration: 0.7, ease: "easeOut" },
              }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md
                         transition hover:-translate-y-2 hover:border-[#7fbf3f]/40
                         hover:shadow-[0_0_35px_rgba(127,191,63,0.15)]"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-[#b9c0d4] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* APPLY BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <button className="
            group flex items-center gap-3
            rounded-full px-10 py-4
            bg-gradient-to-r from-[#7fbf3f] to-[#a8e063]
            text-[#021B3A] font-semibold
            transition hover:scale-105
          ">
            APPLY NOW
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
