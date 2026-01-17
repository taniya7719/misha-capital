// "use client";

// export default function IndustriesSection() {
//   const features = [
//     {
//       title: "Community",
//       color: "from-violet-400 to-indigo-500",
//       points: [
//         "Catalysing Entrepreneurial mindset",
//         "Analysing problem & solution",
//         "TCT evaluation",
//       ],
//     },
//     {
//       title: "Accelerator",
//       color: "from-sky-400 to-cyan-500",
//       points: [
//         "Strategy & Business Goals Alignment",
//         "Catalysing business function with strategic partnerships",
//         "Networking & Expert connect",
//       ],
//     },
//     {
//       title: "Funding",
//       color: "from-fuchsia-400 to-pink-500",
//       points: [
//         "Investor Decks & Valuation Analysis",
//         "Investor Discussions",
//       ],
//     },
//   ];

//   return (
//     <section className="relative bg-black py-28 overflow-hidden">
//       {/* background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />

//       <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-14">
//           {features.map((item, index) => (
//             <div key={index}>
//               {/* Feature Title */}
//               <h3
//                 className={`text-3xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
//               >
//                 {item.title}
//               </h3>

//               {/* Points */}
//               <ul className="mt-6 space-y-4">
//                 {item.points.map((point, i) => (
//                   <li
//                     key={i}
//                     className="group flex items-start gap-4 text-white/80 text-lg"
//                   >
//                     {/* accent line */}
//                     <span
//                       className={`mt-2 h-[2px] w-8 bg-gradient-to-r ${item.color} transition group-hover:w-12`}
//                     />
//                     <span className="font-light">{point}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT VIDEO */}
//         <div className="relative flex justify-center lg:justify-end">
//           <div className="relative h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px] rounded-full overflow-hidden shadow-2xl">
            
//             <video
//               src="/videos/hero.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="h-full w-full object-cover"
//             />

//             {/* dark overlay */}
//             <div className="absolute inset-0 bg-black/40" />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Users, Rocket, PiggyBank } from "lucide-react";

export default function BusinessSolutions() {
  const products = [
    {
      title: "Community",
      points: [
        "Catalysing entrepreneurial mindset",
        "Analysing problem & solution",
        "TCT evaluation",
      ],
      icon: Users,
    },
    {
      title: "Accelerator",
      points: [
        "Strategy & business goals alignment",
        "Strategic partnerships enablement",
        "Networking & expert connect",
      ],
      icon: Rocket,
    },
    {
      title: "Funding",
      points: [
        "Investor decks & valuation analysis",
        "Investor discussions & closures",
      ],
      icon: PiggyBank,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#f6f5fb] to-[#878787] py-28">
      
      {/* Heading */}
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2a44]">
          Your One-Stop Shop for Business Success
        </h2>
        <p className="mt-4 text-[#4a5678] max-w-3xl mx-auto">
          We support founders across ideation, acceleration, and capital—building
          sustainable businesses with clarity and confidence.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="mx-auto mt-20 max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {products.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="
                relative group overflow-hidden
                rounded-2xl
                bg-white/80 backdrop-blur-xl
                border border-white/60
                shadow-[0_25px_60px_rgba(31,42,68,0.12)]
                transition-all duration-500
              "
            >
              {/* Left Accent */}
              <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-[#2e3472] to-[#6a70c9] opacity-60 group-hover:opacity-100 transition" />

              <div className="p-10">
                {/* Icon */}
                <div className="mb-8 flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 3 }}
                    className="text-[#2e3472]"
                  >
                    <Icon size={34} strokeWidth={1.6} />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-[#1f2a44]">
                    {item.title}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-4 text-sm text-[#4a5678] leading-relaxed">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2e3472]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
