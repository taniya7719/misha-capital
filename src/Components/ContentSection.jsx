"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContentSection() {
  return (
//     <section className=" box ">
//       <div className="mx-auto ">

//         <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0 ">


//           {/* LEFT BOX */}
//           {/* <div className="relative  mt-3 w-[140px] h-[130px] sm:w-[160px] sm:h-[150px] lg:w-[160px] lg:h-[150px] border-[6px] border-[#1f456e] flex flex-col items-center justify-center">

//   {/* RIGHT SIDE CUT */}
//   {/* <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 h-[90px] w-[14px] bg-white" />  */}

//   {/* LOGO */}
//   <div className="relative w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[140px] lg:h-[140px]">
//     <Image
//       src="/MISHA CAPITAL-1.png"  
//       alt="Misha Capital Logo"
//       fill
//       className="object-contain"
//     />
//   </div>


// </div>


//           {/* CENTER CONTENT (VERY SMALL GAP FROM BOX) */}
//          <div className="lg:ml-10 flex-1 mt-3">

//             <h2 className="text-2xl sm:text-3xl lg:text-[34px] leading-snug lg:leading-[40px]
//  font-medium text-[#222]  ">
//                3 Decade of <br />Experience in {" "}
//               {/* <span className="inline-block w-12 h-[4px] bg-red-500 align-middle ml-2" /> */}
//               <br />
//                Investment Banking
//               <br />
//               and Capital Advisory
//               <br /> 
//             </h2>
//           </div>

//           {/* RIGHT CONTENT (SLIGHTLY MORE GAP) */}
//           <div className="lg:ml-18 max-w-full lg:max-w-[380px] text-black text-base sm:text-[16px] leading-7 lg:leading-[25px]">
//   <p>
//     Misha Capital is a multi-disciplinary Investment Banking Advisory firm based in{" "}
//     <span className="font-semibold text-black">Delhi, India</span>, 
//     with <span className="font-semibold text-black"> over 3 decades of collective experience</span> across sectors.
//     <br />
//     We work closely with founders, promoters, and corporates to deliver <span className="font-semibold text-black"> fast, transparent, 
//     and result-driven advisory services— </span>from early-stage fundraising to large-scale project 
//     financing.
//   </p>
// </div>


//      </div> 
     
//     </section>
//   );
// }
<section className="box">
  <div className="mx-auto max-w-[1200px]">

    <div className="flex flex-col lg:flex-row items-start gap-10">

      {/* LOGO */}
      <div className="relative 
        w-[70px] h-[70px] 
        sm:w-[100px] sm:h-[100px] 
        lg:w-[160px] lg:h-[160px] 
        mt-5 flex-shrink-0">

        <Image
          src="/MISHA-CAPITAL.png"
          alt="Misha Capital Logo"
          fill
          className="object-contain"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="flex-1">

        <h2 className="text-2xl sm:text-3xl lg:text-[34px] leading-snug lg:leading-[40px] font-medium text-[#222] mt-5">
          3 Decades of <br />
          Experience in <br />
          Investment Banking <br />
          and Capital Advisory
        </h2>

      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:max-w-[380px] text-black text-base sm:text-[16px] leading-7 lg:leading-[25px]">
        <p>
          Misha Capital is a multi-disciplinary investment banking advisory firm based in 
          <span className="font-semibold"> Delhi, India,</span> with a presence across 
          <span className="font-semibold"> Mumbai, Kolkata, Bangalore, Chennai, Hyderabad, UAE and London. </span>
          <br />
          Backed by over three decades of deep industry experience, we work closely with founders,
          <span className="font-semibold"> promoters, and corporates to deliver transparent, execution-focused advisory-</span>
          from strategic capital raising and structured financing to debt restructuring and institutional transactions.
        </p>
      </div>

    </div>

  </div>
</section>
  );
}