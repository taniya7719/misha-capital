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
  const industries = [
    { name: "Renewable Energy", icon: "/rene-1.png", hoverIcon: "/renew-1.png",
},
    { name: "Steel", icon: "/steel.png", hoverIcon: "/ste-2.png", },
    { name: "Cement", icon: "/ce-3.png", hoverIcon: "/cem-3.png", },
    { name: "FMCG", icon: "/FMG.png", hoverIcon: "/fmc-4.png", },
    { name: "Hospitality", icon: "/hos-5.png", hoverIcon: "/hosp-5.png", },
    { name: "Warehousing", icon: "/warehouse.png", hoverIcon: "/warehouse (1).png", },
    { name: "Trading", icon: "/Trading.png", hoverIcon: "/Tra-7.png", },
    { name: "Real Estate", icon: "/rea-8.png", hoverIcon: "/real-8.png", },
    { name: "NBFC", icon: "/nbf-9.png", hoverIcon: "/nbfc-9.png", },
    { name: "Highways", icon: "/Highways.png", hoverIcon: "/highw-10.png", },
    { name: "Electronics", icon: "/Electronics.png", hoverIcon: "/tech-11.png", },
    { name: "Manufacturing", icon: "/Manu-12.png", hoverIcon: "/manuf-12.png", },
    { name: "Thermal Power Plants", icon: "/thermal-power.png", hoverIcon: "/thermal-13.png", },
    { name: "Infrastructure Projects", icon: "/infrastructure (1).png", hoverIcon: "/infrastructure (2).png", },
    { name: " Information Technology", icon: "/in-15.png", hoverIcon: "/infor-15.png", },
    { name: "Electric Vehicles", icon: "/automation.png", hoverIcon: "/automation (1).png", },
    { name: "Health-Care", icon: "/health-insurance.png", hoverIcon: "/health-17.png", },
  ];
 return (
    <section className=" bg-white box">
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
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {industries.map((item, index) => {
    const row = Math.floor(index / 4);

    return (
      <IndustryCard
        key={index}
        item={item}
        direction={row % 2 === 0 ? "left" : "right"}
      />
    );
  })}
</div>




      </div>
    </section>
  );
}

function IndustryCard({ item, direction }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

 return (
  <div
    className={`
      group
      flex items-center h-[96px] gap-4 px-8 py-4
      rounded-xl
      border border-[#e0e0e0]
      transition-all duration-500 ease-out
      hover:border-[#1DA1F2]

      ${
        !animate
          ? direction === "left"
            ? "-translate-x-32 opacity-0"
            : "translate-x-32 opacity-0"
          : "translate-x-0 opacity-100"
      }
    `}
  >
    {/* ICON WRAPPER */}
    <div className="relative w-[26px] h-[26px]">

      {/* Default Icon */}
      <Image
        src={item.icon}
        alt={item.name}
        fill
        className={`
          object-cover
          opacity-60
          transition-all duration-300
          ${item.hoverIcon ? "group-hover:opacity-0" : "group-hover:opacity-100"}
        `}
      />

      {/* Hover Icon */}
      {item.hoverIcon && (
        <Image
          src={item.hoverIcon}
          alt={`${item.name} hover`}
          fill
          className="object-cover opacity-0 transition-all duration-300 group-hover:opacity-100"
        />
      )}
    </div>

    {/* TEXT */}
    <span className="text-[16px] font-medium text-[#9E9E9E] transition-all duration-400 group-hover:text-[#1DA1F2]">
      {item.name}
    </span>
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

