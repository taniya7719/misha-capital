"use client";

import { motion } from "framer-motion";

/* container animation */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* text item animation */
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BusinessLeadership() {
  return (
    <section className="bg-gradient-to-b from-[#f9fafb] to-[#8D8D8E] py-28 px-18">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center text-4xl md:text-5xl font-semibold text-[#1e2b4f]"
        >
          Misha Capital Leadership Arena
        </motion.h2>

        {/* Content */}
        <div className="relative grid gap-20 md:grid-cols-2">

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#cfd6e3]" />

          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={item}
              className="mb-10 text-2xl font-semibold text-[#1f2a44]"
            >
              1-on-1 Engagement
            </motion.h3>

            <div className="space-y-4 text-[14.5px] leading-[1.7] text-[#4b5568]">

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Assigned Mate (Ex-Founder)
    </span>{" "}
    — Dedicated 1-on-1 guidance from experienced founders.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Defined Metrics
    </span>{" "}
    — Clear KPIs and milestones to track progress.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Execution Support
    </span>{" "}
    — End-to-end resources to ensure delivery.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Community Manager
    </span>{" "}
    — Continuous tracking, feedback and accountability.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Investment Readiness
    </span>{" "}
    — Structuring business for investor expectations.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Investor Pitch Prep
    </span>{" "}
    — Mock pitch sessions with real investors before fundraising.
  </motion.p>

</div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={item}
              className="mb-10 text-2xl font-semibold text-[#1f2a44]"
            >
              1-to-Many Engagement
            </motion.h3>

           <div className="space-y-4 text-[14.5px] leading-[1.7] text-[#4b5568]">

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Mentor Groups
    </span>{" "}
    — Curated access to industry leaders and experts.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Virtual Leadership Meets
    </span>{" "}
    — Regular online sessions for strategic collaboration.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Collaboration Opportunities
    </span>{" "}
    — Founder networking and partnership discovery.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Offline Meetups
    </span>{" "}
    — In-person leadership and founder interactions.
  </motion.p>

  <motion.p variants={item}>
    <span className="font-semibold text-[#1f2a44]">
      Growth Credits
    </span>{" "}
    — Redeemable credits for tools, services and resources.
  </motion.p>

</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
