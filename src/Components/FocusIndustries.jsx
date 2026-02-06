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

export default function FocusIndustries() {
  const industries = [
    { name: "Renewable Energy", icon: "/renewable-energy.png" },
    { name: "Steel", icon: "/steel.png" },
    { name: "Cement", icon: "/cement.png" },
    { name: "FMCG", icon: "/FMG.png" },
    { name: "Hospitality", icon: "/hospitality.png" },
    { name: "Warehousing", icon: "/warehousing.png" },
    { name: "Trading", icon: "/Trading.png" },
    { name: "Real Estate", icon: "/Real-estate.png" },
    { name: "NBFC", icon: "/NBFC.png" },
    { name: "Highways", icon: "/Highways.png" },
    { name: "Electronics", icon: "/Electronics.png" },
    { name: "Manufacturing", icon: "/Manufacturing.png" },
    { name: "Thermal Power Plants", icon: "/thermal-power.png" },
    { name: "Infrastructure Projects", icon: "/infrastructure.png" },
    { name: "Technology", icon: "/Technology.png" },
    { name: "Electric Vehicles", icon: "/Electronic-vehicle.png" },
  ];

  const firstRow = industries.slice(0, 8);
  const secondRow = industries.slice(8);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-semibold text-[#021C3C] text-center mb-14">
          Focus <span className="font-light">Industries</span>
        </h2>

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-8">
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee-left 25s linear infinite" }}
          >
            {[...firstRow, ...firstRow].map((item, index) => (
              <IndustryCard key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee-right 25s linear infinite" }}
          >
            {[...secondRow, ...secondRow].map((item, index) => (
              <IndustryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item }) {
  return (
    <div className="flex items-center gap-4 px-6 py-4 min-h-[72px] rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap">
      <div className="w-9 h-9 flex items-center justify-center">
        <Image
          src={item.icon}
          alt={item.name}
          width={32}
          height={32}
          className="object-contain opacity-80"
        />
      </div>
      <span className="text-[15px] font-medium text-[#5B5B5B]">
        {item.name}
      </span>
    </div>
  );
}

