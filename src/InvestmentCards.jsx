"use client";

import { Users, Rocket, IndianRupee } from "lucide-react";

const cards = [
  {
    title: "Community",
    points: [
      "Super Connection (Ex-Founder)",
      "Startup Basics for Founders",
      "Right Execution Structure",
      "Peer Co-Founder Connect",
    ],
    icon: Users,
  },
  {
    title: "Acceleration",
    points: [
      "Industry Connects",
      "Strategic Partnerships",
      "Pitch Deck & Financial Model",
      "Mentor / Advisor Connect",
    ],
    icon: Rocket,
  },
  {
    title: "Fund Raising",
    points: [
      "Strategic Investors",
      "Investor Pitch Support",
      "Debt Investment",
      "Funds Transaction Support",
    ],
    icon: IndianRupee,
  },
];

export default function InvestmentCards() {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-black">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#2a1f17,transparent_55%)] animate-bgMove" />

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-16 text-center text-4xl md:text-5xl font-semibold text-[#f3dfcf]">
          How We Build Ideas?
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="
                  group relative
                  w-full max-w-[300px]
                  rounded-2xl
                  border border-[#3a2f25]
                  bg-black/50
                  p-8
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-[#f3dfcf]
                  hover:shadow-[0_0_45px_rgba(243,223,207,0.25)]
                  animate-flicker
                "
              >
                <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition bg-gradient-to-br from-[#f3dfcf]/20 to-transparent" />

                <Icon className="mb-5 h-10 w-10 text-[#f3dfcf] transition group-hover:scale-110" />

                <h3 className="mb-3 text-xl font-semibold text-[#f3dfcf]">
                  {card.title}
                </h3>

                <ul className="space-y-1 text-sm text-[#d1c2b6]">
                  {card.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="
            flex items-center gap-3
            rounded-full
            bg-white
            hover:bg-gradient-to-r hover:from-[#7fbf3f] hover:to-[#c5e35a]
            px-10 py-4
            text-sm font-semibold uppercase
            text-black
            transition-all
            hover:scale-105
          ">
            Apply Now <span></span>
          </button>
        </div>

      </div>
    </section>
  );
}
