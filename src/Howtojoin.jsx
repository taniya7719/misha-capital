"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  SearchCheck,
  PhoneCall,
  Users,
} from "lucide-react";

const steps = [
  {
    title: "Join Wishlist",
    desc: [
      'Click "Apply Now" and submit the form',
      "Every application is reviewed carefully",
    ],
    icon: ClipboardList,
  },
  {
    title: "Application Screening",
    desc: [
      "Shortlisted applications hear back from us",
      "Call invites are sent to selected founders",
    ],
    icon: SearchCheck,
  },
  {
    title: "Talk to Us",
    desc: [
      "Quick call to understand your startup & needs",
      "No pressure — just alignment",
    ],
    icon: PhoneCall,
  },
  {
    title: "Community Onboarding",
    desc: [
      "Accepted founders onboarded into community",
      "Access mentors, peers & opportunities",
    ],
    icon: Users,
  },
];

export default function SmartSteps() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f9fafb] to-[#8D8D8E] ">


      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent" />
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-indigo-100/40 blur-3xl" />
        <div className="absolute -top-20 -right-40 h-[380px] w-[380px] rounded-full bg-violet-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h3 className="text-4xl font-semibold text-slate-900">
            How to join 4 stages
          </h3>
          <p className="mt-3 text-slate-500">
            From application to community onboarding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – 4 CIRCLES IN ONE LINE */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === active;

              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActive(index)}
                  animate={{
                    scale: isActive ? 1.12 : 0.95,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{ type: "spring", stiffness: 240 }}
                  className="cursor-pointer relative"
                >
                  {/* Glow */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-indigo-400/30 blur-xl" />
                  )}

                  {/* Ring */}
                  <div
                    className={`relative p-[3px] rounded-full ${
                      isActive
                        ? "bg-gradient-to-br from-indigo-500 to-violet-500"
                        : "bg-slate-200"
                    }`}
                  >
                    {/* Inner */}
                    <div
                      className={`flex h-24 w-24 flex-col items-center justify-center
                        rounded-full bg-white text-center transition-all
                        ${
                          isActive
                            ? "text-indigo-700 shadow-md"
                            : "text-slate-500"
                        }
                      `}
                    >
                      <Icon size={26} />
                      <span className="mt-1.5 text-[11px] font-medium leading-tight px-2">
                        {step.title}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT – SMALLER CONTENT BOX */}
          <div className="relative min-h-[200px] flex justify-center lg:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="
                  max-w-sm
                  rounded-xl border border-slate-200 bg-white
                  px-7 py-6
                  shadow-sm
                "
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {steps[active].title}
                </h3>

                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {steps[active].desc.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#092349]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
