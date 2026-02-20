"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className=" box ">
      <div className="mx-auto ">

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0 ">


          {/* LEFT BOX */}
          <div className="relative w-[140px] h-[130px] sm:w-[160px] sm:h-[150px] lg:w-[190px] lg:h-[180px] border-[6px] border-[#1f456e] flex flex-col items-center justify-center">

  {/* RIGHT SIDE CUT */}
  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 h-[90px] w-[14px] bg-white" />

  {/* LOGO */}
  <div className="relative w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[120px] lg:h-[110px]">
    <Image
      src="/Mishacapital.png"  
      alt="Misha Capital Logo"
      fill
      className="object-contain"
    />
  </div>

  <div className="mt-4 flex items-center gap-3">
    <span className="h-[2px] w-7 bg-[#032F60]" />
    <p className="text-sm tracking-[0.04em] text-[#032F60] font-medium uppercase">
      MishaCapital
    </p>
    <span className="h-[2px] w-7 bg-[#032F60]" />
  </div>

</div>


          {/* CENTER CONTENT (VERY SMALL GAP FROM BOX) */}
         <div className="lg:ml-10 flex-1">

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] leading-snug lg:leading-[40px]
 font-medium text-[#222] mt-3 ">
              Decade of Experience{" "}
              {/* <span className="inline-block w-12 h-[4px] bg-red-500 align-middle ml-2" /> */}
              <br />
              in Investment,
              <br />
              Banking  and Capital Advisory
            </h2>
          </div>

          {/* RIGHT CONTENT (SLIGHTLY MORE GAP) */}
          <div className="lg:ml-18 max-w-full lg:max-w-[380px] text-black text-base sm:text-[16px] leading-7 lg:leading-[25px]">
  <p>
    Misha Capital is a multi-disciplinary Investment Banking Advisory firm based in{" "}
    <span className="font-semibold text-black">Delhi, India</span>, 
    with <span className="font-semibold text-black"> over 3 decades of collective experience</span> across sectors.
    <br />
    We work closely with founders, promoters, and corporates to deliver <span className="font-semibold text-black"> fast, transparent, 
    and result-driven advisory services— </span>from early-stage fundraising to large-scale project 
    financing.
  </p>
</div>


        </div>
      </div>
    </section>
  );
}
