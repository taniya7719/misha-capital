"use client";

import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-start">

          {/* LEFT BOX */}
          <div className="relative w-[180px] h-[170px] border-[6px] border-[#1f456e] flex flex-col items-center justify-center">

            {/* RIGHT SIDE CUT */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 h-[90px] w-[14px] bg-white" />

            <h2 className="text-[88px] font-bold text-red-500 leading-none">
              3
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#1f456e]" />
              <p className="text-sm tracking-[0.25em] text-[#1f456e] font-medium uppercase">
                 MishaCapital
              </p>
              <span className="h-[1px] w-8 bg-[#1f456e]" />
            </div>
          </div>

          {/* CENTER CONTENT (VERY SMALL GAP FROM BOX) */}
          <div className="ml-10 flex-1">
            <h2 className="text-[35px] leading-[40px] font-medium text-[#222] mt-7">
              Decade of Experience{" "}
              {/* <span className="inline-block w-12 h-[4px] bg-red-500 align-middle ml-2" /> */}
              <br />
              in Investment,
              <br />
              Banking Advisory
            </h2>
          </div>

          {/* RIGHT CONTENT (SLIGHTLY MORE GAP) */}
          <div className="ml-20 max-w-[420px] text-[#666] text-lg leading-[32px]">
            <p>
              Your trusted financial advisors, delivering unparalleled tailor-made capital solutions. We are a multi-disciplinary Investment Banking Advisory firm based in Delhi, India with more than 3 decades of experience. Our services are designed to be fast, convenient, and transparent.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
