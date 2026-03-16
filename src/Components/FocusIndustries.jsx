// "use client";

// import {
//   Leaf,
//   Factory,
//   Truck,
//   ShoppingCart,
//   Hotel,
//   Warehouse,
//   BarChart3,
//   Building2,
//   Landmark,
//   Route,
//   Cpu,
//   Cog,
//   Flame,
//   Building,
//   Laptop,
//   Car,
// } from "lucide-react";

// export default function FocusIndustries() {
//   const industries = [
//     { name: "Renewable Energy", icon: Leaf },
//     { name: "Steel", icon: Cog },
//     { name: "Cement", icon: Truck },
//     { name: "FMCG", icon: ShoppingCart },
//     { name: "Hospitality", icon: Hotel },
//     { name: "Warehousing", icon: Warehouse },
//     { name: "Trading", icon: BarChart3 },
//     { name: "Real Estate", icon: Building2 },
//     { name: "NBFC", icon: Landmark },
//     { name: "Highways", icon: Route },
//     { name: "Electronics", icon: Cpu },
//     { name: "Manufacturing", icon: Factory },
//     { name: "Thermal Power Plants", icon: Flame },
//     { name: "Infrastructure Projects", icon: Building },
//     { name: "Technology", icon: Laptop },
//     { name: "Electric Vehicles", icon: Car },
//   ];

//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Heading */}
//         <h2 className="text-5xl font-semibold text-[#021C3C] text-center mb-14">
//           Focus <span className="font-light">Industries</span>
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {industries.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="
//                   bg-[#E8EEF7]
//                   border border-[#9AA9C2]
//                   rounded-xl
//                   px-5 py-4
//                   flex items-start gap-3
//                   min-h-[72px]
//                   transition-all duration-200
//                   hover:bg-[#021C3C]
//                   hover:text-white
//                   hover:shadow-md
//                   cursor-pointer
//                 "
//               >
//                 {/* Icon */}
//                 <Icon className="w-5 h-5 mt-1 shrink-0" />

//                 {/* Text */}
//                 <span className="text-[15px] font-medium leading-snug">
//                   {item.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FocusIndustries() {
//   const industries = [
//     { name: "Renewable Energy", icon: "/renewable-energy.png", hoverIcon: "/renewable-new.png",
// },
//     { name: "Steel", icon: "/steel.png", hoverIcon: "/ste-2.png", },
//     { name: "Cement", icon: "/ce-3.png", hoverIcon: "/cem-3.png", },
//     { name: "FMCG", icon: "/FMG.png", hoverIcon: "/fmc-4.png", },
//     { name: "Hospitality", icon: "/hos-5.png", hoverIcon: "/hosp-5.png", },
//     { name: "Warehousing", icon: "/warehouse.png", hoverIcon: "/warehouse (1).png", },
//     { name: "Trading", icon: "/Trading.png", hoverIcon: "/Tra-7.png", },
//     { name: "Real Estate", icon: "/rea-8.png", hoverIcon: "/real-8.png", },
//     { name: "NBFC", icon: "/nbf-9.png", hoverIcon: "/nbfc-9.png", },
//     { name: "Highways", icon: "/Highways.png", hoverIcon: "/highw-10.png", },
//     { name: "Electronics", icon: "/Electronics.png", hoverIcon: "/tech-11.png", },
//     { name: "Manufacturing", icon: "/manu-12.png", hoverIcon: "/manuf-12.png", },
//     { name: "Thermal Power Plants", icon: "/thermal-power.png", hoverIcon: "/thermal-13.png", },
//     { name: "Infrastructure Projects", icon: "/infrastructure (1).png", hoverIcon: "/infrastructure (2).png", },
//     { name: " Information Technology", icon: "/in-15.png", hoverIcon: "/infor-15.png", },
//     { name: "Electric Vehicles", icon: "/automation.png", hoverIcon: "/automation (1).png", },
//     { name: "Health-Care", icon: "/health-insurance.png", hoverIcon: "/health-17.png", },
//   ];
//   
const industries = [
 { name: "Renewable Energy", icon: "/color-renewable.svg", bg: "/renewal-energy.avif" },
 {name: "Electric Vehicles", icon: "/color-ev.svg", bg: "/electric.avif" },
 { name: "Manufacturing", icon: "/color-manufacturing.svg", bg: "/manufacturing.avif" },
  { name: "Thermal Power Plants", icon: "/color-thermal.svg", bg: "/thermal.avif" },
   { name: "Infrastructure Projects", icon: "/color-infrastructure.svg", bg: "/infrastructure.avif" },
   { name: "Highways", icon: "/color-highways.svg", bg: "/highway.avif" },
   { name: "Information Technology", icon: "/color-it.svg", bg: "/information-tech.avif" },
  { name: "Electronics", icon: "/color-electronics.svg", bg: "/electronics.avif" },
   { name: "FMCG", icon: "/color-fmcg.svg", bg: "/fmcg.avif" },
   { name: "Real Estate", icon: "/color-real.svg", bg: "/real-estate.avif" },
 { name: "Steel", icon: "/color-steel.svg", bg: "/steel.avif" },
 { name: "Cement", icon: "/color-cement.svg", bg: "/cement.avif" },
  { name: "Trading", icon: "/color-trading.svg", bg: "/trading.avif" },
   { name: "NBFC", icon: "/color-nbfc.svg", bg: "/nbfc.avif" },

 { name: "Hospitality", icon: "/color-hospitality.svg", bg: "/hospitality.avif" },
 { name: "Warehousing", icon: "/color-warehousing.svg", bg: "/warehouse.avif" },
  { name: "Health-Care", icon: "/color-hc.svg", bg: "/healthcare.avif" },
];
 return (
   <section className="bg-white mb-40 mt-10 relative box">
    <div className=" mx-auto">

  {/* LEFT FADE */}
  {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-30"></div> */}

  {/* RIGHT FADE */}
  {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-30"></div> */}
      <div className=" mx-auto ">
        
       <div className="text-center mb-8 ">
      <div className="flex items-center justify-center gap-2 text-[#000000] text-medium">
        <span className="w-12 h-[1px] bg-[#000000]"></span>
        <span>Industry Associations</span>
        <span className="w-12 h-[1px] bg-[#000000]"></span>
      </div>

      <h2 className="text-center text-4xl md:text-4xl mb-16">
      <span className="font-bold text-[#032F60]">
        Focus
      </span>{" "}
      <span className="font-bold text-[#032F60]">
        Industries
      </span>
    </h2>
    
    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
  {industries.map((item, index) => (
    <IndustryCard key={index} item={item} />
  ))}
</div>
  {/* ROW 1 - LEFT */}
  {/* <div className="scroll-row">
    <div className="scroll-track-left gap-6">
      {[...industries.slice(0,6), ...industries.slice(0,6)].map((item,index)=>(
        <IndustryCard key={index} item={item} />
      ))}
    </div>
  </div> */}

  {/* ROW 2 - RIGHT */}
  {/* <div className="scroll-row">
    <div className="scroll-track-right gap-6">
      {[...industries.slice(6,12), ...industries.slice(6,12)].map((item,index)=>(
        <IndustryCard key={index} item={item} />
      ))}
    </div>
  </div> */}

  {/* ROW 3 - LEFT */}
  {/* <div className="scroll-row">
    <div className="scroll-track-left gap-6">
      {[...industries.slice(12,18), ...industries.slice(12,18)].map((item,index)=>(
        <IndustryCard key={index} item={item} />
      ))}
    </div>
  </div>

</div> */}

</div>

      </div>
    </section>
  );
}

function IndustryCard({ item }) {
  return (
    <div
      className="
        relative
        w-full
        sm:w-[210px]
        h-[96px]
        rounded-xl
        overflow-hidden
        group
        cursor-pointer
      "
    >
      <Image
        src={item.bg}
        alt={item.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60"></div>

      <div className="relative z-10 flex items-center gap-3 h-full px-5 text-white">
        <Image
          src={item.icon}
          alt={item.name}
          width={32}
          height={32}
        />

        <span className="text-[14px] font-medium">
          {item.name}
        </span>
      </div>
    </div>
  );
}
//   const firstRow = industries.slice(0, 8);
//   const secondRow = industries.slice(8);

//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-5xl font-semibold text-[#021C3C] text-center mb-14">
//           Focus <span className="font-light">Industries</span>
//         </h2>

//         {/* Row 1 */}
//         <div className="relative overflow-hidden mb-8">
//           <div
//             className="flex gap-6 w-max"
//             style={{ animation: "marquee-left 25s linear infinite" }}
//           >
//             {[...firstRow, ...firstRow].map((item, index) => (
//               <IndustryCard key={index} item={item} />
//             ))}
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex gap-6 w-max"
//             style={{ animation: "marquee-right 25s linear infinite" }}
//           >
//             {[...secondRow, ...secondRow].map((item, index) => (
//               <IndustryCard key={index} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function IndustryCard({ item }) {
//   return (
//     <div className="flex items-center gap-4 px-6 py-4 min-h-[72px] rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap">
//       <div className="w-9 h-9 flex items-center justify-center">
//         <Image
//           src={item.icon}
//           alt={item.name}
//           width={32}
//           height={32}
//           className="object-contain opacity-80"
//         />
//       </div>
//       <span className="text-[15px] font-medium text-[#5B5B5B]">
//         {item.name}
//       </span>
//     </div>
//   );
// }

