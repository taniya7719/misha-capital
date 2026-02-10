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
    <section
  ref={sectionRef}
  className="bg-[url('/map-frame-2.png')] bg-no-repeat bg-cover pb-20 px-10"
>
      {/* Heading */}
    <div className="flex flex-col items-center text-center">
  {/* TOP STEP */}
  <div className="flex items-center gap-1 px-[39px] opacity-70 mb-2">
    <span className="h-px w-[62px] bg-[#000000]"></span>
    <span className="text w-[120px] h-[28px]  text-[#000000]">
      delivering impact
    </span>
    <span className="h-px w-[62px] bg-[#000000]"></span>
  </div>

  {/* MAIN HEADING */}
  <h2
  className={` text-center text-[48px] leading-[25px] tracking-[-0.01em] font-normaltext-[#042C5C]`}
>
  <span className={`  font-['Libre_Bodoni']  italic  text-[#0E78BE] mr-2 `} >
    Our
  </span>

  <span className="font-['Proxima'] text-[#00365A] font-semibold">
    Growth Power
  </span>
</h2>

</div>

      {/* Circles */}
      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-center">
  {stats.map((item, index) => (

      <div
   key={index}
  className={`group relative -ml-8 first:ml-0
    w-[240px] h-[240px] rounded-full bg-white
    flex flex-col items-center justify-center text-center
    shadow-[0_0_40px_rgba(0,0,0,0.08)]
    transition-all duration-500 ease-out
    hover:z-10
    hover:ring-4 hover:ring-[#D9261E80]
    
    ${
      animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`}
  style={{ transitionDelay: `${index * 120}ms` }}
>



            {/* Number */}
            <div className="group cursor-pointer">
           <h3 className="text-[42px] font-bold text-black group-hover:text-[#D9261E] transition-colors duration-300">
  <CountUp
    value={item.value}
    prefix={item.prefix}
    suffix={item.suffix}
    start={animate}
  />
</h3>
</div>


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
