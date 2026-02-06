"use client";

import { useEffect, useRef, useState } from "react";

/* COUNT UP */
function CountUp({ value, prefix = "", suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startVal += increment;
      if (startVal >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  const stats = [
    { value: 550, suffix: "+", label: "Businesses Analysed" },
    { value: 7, prefix: "$", suffix: " Billion", label: "Fund Raised" },
    { value: 375, suffix: "+", label: "Deals Executed" },
    { value: 2000, suffix: "+", label: "VC Firms & Angel Investors" },
    { value: 950, suffix: "+", label: "Lender / Banks / NBFC's" },
  ];

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-100 py-20 px-10">
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-light text-[#042C5C]">
        Our Growth <span className="font-semibold">Power</span>
      </h2>

      {/* Circles */}
      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-center">
  {stats.map((item, index) => (

      <div
  key={index}
  className={`relative -ml-8 first:ml-0
    w-[240px] h-[240px] rounded-full bg-white
    flex flex-col items-center justify-center text-center
    shadow-[0_0_40px_rgba(0,0,0,0.08)]
    transition-all duration-500 ease-out
    hover:z-10
    hover:ring-4 hover:ring-[#9CFFB6]/40
    hover:border-gradient-to-b
    hover:from-[#8B0000]
    hover:via-[#D00914]
    hover:to-[#FF6A6A]
    ${
      animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`}
  style={{ transitionDelay: `${index * 120}ms` }}
>



            {/* Number */}
            <h3 className="text-[42px]  group hover:[#9CFFB6] font-bold text-black">
              <CountUp
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                start={animate}
              />
            </h3>

            {/* Label */}
            <p className="mt-3 text-[15px] leading-[20px] font-medium text-black px-6">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
