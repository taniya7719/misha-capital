"use client";

import { Users, Rocket, PiggyBank, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function CardsFlow() {
  const items = [
    {
      title: "Growth",
      desc: "Build your business through our business connects and strategic partnerships.",
      icon: TrendingUp,
    },
    {
      title: "Mentorship",
      desc: "Personalized mentorship and tailored guidance aligned to your startup goals.",
      icon: Users,
    },
    {
      title: "Community",
      desc: "Collaborate with fellow founders and build a support system beyond compare.",
      icon: Users,
    },
    {
      title: "Funding",
      desc: "Access angels, VCs, and capital support with investor-ready positioning.",
      icon: PiggyBank,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#061a38] via-[#061a38] to-[#0b2a55] py-32 text-white">
      
      {/* Glow */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* LEFT – Cards + Lines */}
        <div className="relative">
          
          {/* SVG CONNECTION LINES */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 600 600"
            fill="none"
          >
            {[
              "M150 150 C300 150 300 300 450 300",
              "M150 450 C300 450 300 300 450 300",
              "M150 300 C300 300 300 150 450 150",
            ].map((path, i) => (
              <motion.path
                key={i}
                d={path}
                stroke="rgba(147,197,253,0.35)"
                strokeWidth="1.2"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </svg>

          {/* Cards */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-10">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="
                    group relative rounded-2xl
                    bg-white/5 backdrop-blur-xl
                    p-8
                    border border-white/10
                    hover:border-white/30
                    transition-all duration-500
                  "
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/15 to-transparent" />

                  <div className="relative">
                    <Icon className="mb-6 text-blue-300" size={30} strokeWidth={1.4} />

                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT – Narrative */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl lg:text-5xl font-light leading-tight">
            Our <span className="font-semibold">Offering</span>
          </h2>

          <p className="mt-8 text-lg text-white/70 max-w-xl">
            Expert guidance at every step of your entrepreneurial journey —
            from idea validation to acceleration and capital.
          </p>
          <Link href="/Join">
          <button className="
            mt-12 inline-flex items-center gap-3
            w-fit rounded-full
            bg-white px-8 py-4
            text-sm font-semibold text-[#061a38]
            hover:scale-105 transition
          ">
            LEARN MORE →
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
