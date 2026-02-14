"use client";

import Link from "next/link";

export default function ContentSection() {
  return (
    <section className=" box ">
      <div className="mx-auto ">

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0 ">


          {/* LEFT BOX */}
          <div className="relative w-[140px] h-[130px] sm:w-[160px] sm:h-[150px] lg:w-[180px] lg:h-[170px] border-[6px] border-[#1f456e] flex flex-col items-center justify-center box">


            {/* RIGHT SIDE CUT */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 h-[90px] w-[14px] bg-white" />

            <h2 className="text-5xl sm:text-6xl lg:text-[88px]
 font-bold text-red-500 leading-none">
              3
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#1f456e]" />
              <p className="text-sm tracking-[0.05em] text-[#1f456e] font-medium uppercase">
                 MishaCapital
              </p>
              <span className="h-[1px] w-8 bg-[#1f456e]" />
            </div>
          </div>

          {/* CENTER CONTENT (VERY SMALL GAP FROM BOX) */}
         <div className="lg:ml-10 flex-1">

            <h2 className="text-2xl sm:text-3xl lg:text-[35px] leading-snug lg:leading-[40px]
 font-medium text-[#222] mt-7">
              Decade of Experience{" "}
              {/* <span className="inline-block w-12 h-[4px] bg-red-500 align-middle ml-2" /> */}
              <br />
              in Investment,
              <br />
              Banking Advisory
            </h2>
          </div>

          {/* RIGHT CONTENT (SLIGHTLY MORE GAP) */}
          <div className="lg:ml-20 max-w-full lg:max-w-[420px] text-[#666] text-base sm:text-lg leading-7 lg:leading-[32px]">

            <p>
              Your trusted financial advisors, delivering unparalleled tailor-made capital solutions. We are a multi-disciplinary Investment Banking Advisory firm based in Delhi, India with more than 3 decades of experience. Our services are designed to be fast, convenient, and transparent.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
