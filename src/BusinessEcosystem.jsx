"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ value, prefix = "", suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const target = Number(value);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = target / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function BusinessEcosystem() {
  const stats = [
    { value: 100, suffix: "+", label: "Mentors and Advisors" },
    { value: 5, prefix: "$", suffix: " Billion", label: "Funds Raised" },
    { value: 2000, suffix: "+", label: "VC firms and angel investors" },
    { value: 150, suffix: "+", label: "Industries Served" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#021B3A] to-[#042C5C] py-24 overflow-hidden">
      
      {/* Heading */}
      <div className="mx-auto max-w-6xl text-center px-6 text-white">
        <h2 className="text-4xl md:text-5xl font-light">
          Misha Capital <span className="font-semibold">Ecosystem</span>
        </h2>
        {/* <p className="mt-6 text-white/75 max-w-3xl mx-auto">
          Behind every figure is a story of progress and meaningful financial impact.
        </p> */}
      </div>

      {/* Cards */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              group relative
              rounded-2xl
              bg-white
              p-8
              transition-all duration-500
              hover:-translate-y-3 hover:shadow-2xl
            "
          >
            {/* Bottom accent border */}
            <span className="absolute bottom-0 left-0 h-[4px] w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full rounded-b-2xl" />

            {/* Number */}
            <h3 className="text-5xl font-semibold text-[#021C3C] tracking-tight">
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
              />
            </h3>

            {/* Label */}
            <p className="mt-4 text-sm uppercase tracking-widest text-indigo-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
