// "use client";
// import Link from "next/link";

// export default function MajorTransactions() {
//   const transactions = [
//     { title: "Wind", amount: "$30.3 M" },
//     { title: "Wind", amount: "$26.8 M" },
//     { title: "Solar", amount: "$112.5 M" },
//     { title: "Manufacturing", amount: "$21.8 M" },
//     { title: "Wind", amount: "$62.5 M" },

//     { title: "Hydro", amount: "$14.6 M" },
//     { title: "Solar", amount: "$5 M" },
//     { title: "Electric Vehicle", amount: "$100 M" },
//     { title: "Hydro", amount: "$17.5 M" },
//     { title: "Solar", amount: "$14 M" },
//   ];

//   return (
//     <section className="bg-[#032A58] ">
//       <div className="max-w-7xl mx-auto">

//         {/* Title */}
        

//         {/* Blue Wrapper */}
//         <div className="bg-[#032A58] rounded-xl py-20 px-15">
//           <h2 className="text-4xl md:text-5xl text-center text-[White] mb-10">
//           Major <span className="font-semibold">Transactions</span>
//         </h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//             {transactions.map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   group
//                   rounded-2xl
//                   py-4
//                   text-center
//                   border border-white/20
//                   bg-[#052A57]
//                   transition-all duration-300 ease-in-out
//                    text-white
//                   hover:border-white
//                   hover:scale-[1.03]
//                 "
//               >
//                 <h4 className="text-lg font-semibold text-[#96adc9]  group-hover:text-white">
//                   {item.title}
//                 </h4>

//                 <p className="text-sm text-[#96adc9] group-hover:text-white mt-3 leading-5">
//                   Business<br />Expansion
//                 </p>

//                 <div className="flex justify-center my-2">
//   <div className="h-[1px] w-[24px] bg-[#0a77bf]" />
// </div>


//                 <p className="text-base font-semibold group-hover:text-white text-white/50">
//                   {item.amount}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* View More Button */}
//           <div className="mt-12 flex justify-center">
//             <Link href="/Join">
//               <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#021C3C] shadow-md transition hover:scale-105">
//                 View More
//               </button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export default function MajorTransactions() {
//   const transactions = [
//     { title: "Wind", amount: "$30.3 M" },
//     { title: "Wind", amount: "$26.8 M" },
//     { title: "Solar", amount: "$112.5 M" },
//     { title: "Manufacturing", amount: "$21.8 M" },
//     { title: "Wind", amount: "$62.5 M" },
//     { title: "Hydro", amount: "$14.6 M" },
//     { title: "Solar", amount: "$5 M" },
//     { title: "Electric Vehicle", amount: "$100 M" },
//     { title: "Hydro", amount: "$17.5 M" },
//     { title: "Solar", amount: "$14 M" },
//   ];

//   return (
//     <section className="relative py-28 overflow-hidden">
//       {/* Background */}
//       <Image
//         src="/Faq-img.webp"
//         alt="Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl md:text-5xl text-center text-white mb-16">
//           Major{" "}
//           <span className="font-semibold text-[#7EC9FF]">
//             Transactions
//           </span>
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
//           {transactions.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 animation: `float ${6 + index * 0.4}s ease-in-out infinite`,
//               }}
//               className="
//                 group
//                 rounded-2xl
//                 py-6
//                 text-center
//                 border border-white/05
//                 bg-white/6
//                 backdrop-blur-xl
//                 text-white
//                 shadow-[0_0_40px_rgba(0,0,0,0.35)]
//                 transition-all duration-500
//                 hover:-translate-y-4 hover:scale-[1.05]
//                 hover:border-[#7EC9FF]/60
//                 hover:shadow-[0_0_60px_rgba(126,201,255,0.35)]
//               "
//             >
//               <h4 className="text-lg font-semibold text-[#9BB3CF] group-hover:text-white transition">
//                 {item.title}
//               </h4>

//               <p className="text-sm text-[#9BB3CF] group-hover:text-white mt-3 leading-5 transition">
//                 Business <br /> Expansion
//               </p>

//               <div className="flex justify-center my-4">
//                 <div className="h-[2px] w-[28px] bg-gradient-to-r from-transparent via-[#7EC9FF] to-transparent" />
//               </div>

//               <p className="text-base font-semibold text-white/70 group-hover:text-white transition">
//                 {item.amount}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-20 flex justify-center">
//           <Link href="/Join">
//             <button className="
//               rounded-full
//               bg-gradient-to-r from-[#7EC9FF] to-[#4DA3FF]
//               px-12 py-4
//               text-sm font-semibold text-[#021C3C]
//               transition
//               hover:scale-110
//               hover:shadow-[0_0_40px_rgba(126,201,255,0.7)]
//             ">
//               View More
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* SAFE GLOBAL KEYFRAMES */}
//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-14px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>
//     </section>
//   );
// }

    // <section className="relative py-28 overflow-hidden px-10">
    //   {/* Background */}
    //   <Image
    //     src="/Faq-img.webp"
    //     alt="Background"
    //     fill
    //     priority
    //     className="object-cover"
    //   />

    //   {/* Overlay */}
    //   <div className="absolute inset-0 bg-black/50" />

    //   {/* Content */}
    //   <div className="relative z-10 max-w-7xl mx-auto px-8">

    //     {/* Title */}
    //     <h2 className="text-4xl md:text-5xl text-white mb-20 text-center">
    //       Major <span className="text-[#0a77bf] font-semibold">Transactions</span>
    //     </h2>

    //     {/* CARDS GRID */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    //       {transactions.map((item, index) => (
    //         <div
    //           key={index}
    //           className="
    //             group
    //             relative overflow-hidden
    //             rounded-[28px]
    //             p-8
    //             border border-white/10
    //             bg-white/5
    //             backdrop-blur-xl
    //             text-white
    //             transition-all duration-500
    //             hover:-translate-y-3 hover:scale-[1.04]
    //             hover:border-[#9CFFB6]/50
    //             hover:shadow-[0_0_40px_rgba(156,255,182,0.25)]
    //           "
    //         >
    //           {/* HOVER IMAGE */}
    //           {item.hoverImage && (
    //             <img
    //               src={item.hoverImage}
    //               alt=""
    //               className="
    //                 absolute inset-0
    //                 h-full w-full
    //                 object-cover
    //                 opacity-0
    //                 group-hover:opacity-30
    //                 transition duration-700
    //                 z-0
    //               "
    //             />
    //           )}

    //           {/* ICON */}
    //           <div className="relative z-10 mb-8 inline-flex rounded-2xl border border-white/40 p-1">
    //             <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94]">
    //               <img src={item.icon} className="h-7 w-7" />
    //             </div>
    //           </div>

    //           {/* TEXT */}
    //           <h4 className="relative z-10 text-xl font-semibold mb-3 transition group-hover:text-[#0a77bf]">
    //             {item.title}
    //           </h4>

    //           <p className="relative z-10 text-sm text-white/60 mb-6 leading-6">
    //             Business <br /> Expansion
    //           </p>

    //           <div className="relative z-10 h-[2px] w-10 bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94] mb-6" />

    //           <p className="relative z-10 text-lg font-semibold text-white/80">
    //             {item.amount}
    //           </p>
    //         </div>
    //       ))}
    //     </div>

    //     {/* CTA */}
    //     <div className="mt-20 flex justify-center">
    //       <Link href="/Join">
    //         <button
    //           className="
    //             rounded-full
    //             bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A]
    //             px-12 py-4
    //             text-sm font-semibold text-white
    //             transition
    //             hover:scale-110
    //             hover:shadow-[0_0_40px_rgba(156,255,182,0.7)]
    //           "
    //         >
    //           View More
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    "use client";

import Link from "next/link";

export default function MajorTransactions() {
  const transactions = [
    { title: "Wind", amount: "$30.3 M" },
    { title: "Wind", amount: "$26.8 M" },
    { title: "Solar", amount: "$112.5 M" },
    { title: "Manufacturing", amount: "$21.8 M" },
    { title: "Wind", amount: "$62.5 M" },
    { title: "Hydro", amount: "$14.6 M" },
    { title: "Solar", amount: "$5 M" },
    { title: "Electronic Vehicle", amount: "$100 M" },
    { title: "Hydro", amount: "$17.5 M" },
    { title: "Electronic Vehicle", amount: "$14 M" },
  ];

  return (
  //  <section className="relative overflow-hidden  bg-[url('/pattern.png')] bg-cover bg-center py-20">
<section
  className=" box
    relative
    overflow-hidden
    
    bg-[url('/pattern.png')]
    bg-cover
    bg-center
  "
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 z-0 bg-[url('/pattern.png')] bg-cover bg-center opacity-50" />


  {/* GRADIENT OVERLAY */}
   <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#032A58] to-[#043B73]" /> 


  {/* CONTENT */}
  <div className="relative z-10 ">

    {/* TOP LABEL */}
    <div className="text-center mb-8 ">
      <div className="flex items-center justify-center gap-2 text-[white]/50 text-medium">
        <span className="w-12 h-[1px] bg-[white]/50"></span>
        <span>debt & equity</span>
        <span className="w-12 h-[1px] bg-[white]/50"></span>
      </div>

      <h2 className="text-center text-4xl md:text-5xl mb-16">
      <span className="font-bold text-[white]">
        Major
      </span>{" "}
      <span className="font-bold text-[white]">
        Transactions
      </span>
    </h2>
    
    </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {transactions.map((item, index) => (
           <div
  key={index}
  className="
    relative
    rounded-xl
    bg-white/90
    p-6
    shadow-sm
    overflow-hidden
    transition
    hover:-translate-y-1 
  "
  style={{
    backgroundImage: "url('/fact counter.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundPosition: "center 20px"
    
    ,
  }}
>

              {/* AMOUNT */}
             <h4
  className="
    w-[208px]
    h-[36px]
    font-proxima
    font-bold
    font-lg
    text-[28px]
    leading-[36px]
    tracking-[-0.01em]
    text-[#00365A]
  "
>
  {item.amount}
</h4>


              {/* SUBTEXT */}
              <p className="  w-[208px]  h-[40px]  font-proxima  font-medium  text-[16px] leading-[20px] tracking-[-0.01em] text-[#212121] "
>
  Business <br /> Expansion
</p>


              {/* LINE */}
              <div className="mt-3 h-[4px] w-14 bg-gradient-to-r from-[#FF6A6A] to-[#1DA1F2]" />

              {/* TITLE */}
              <p className="mt-3 text-md font-semibold text-[#021C3C]">
  {item.title}
</p>

            </div>
          ))}
        </div>

        {/* CTA */}
<div className="mt-20 flex justify-center">
  <div
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-white/30
    p-[4px]
    transition
    duration-300
    ease-out
    hover:scale-105
  "
>
  <Link href="/Join">
    <button
      className="
        bg-[#008BF9]
        hover:bg-[#D9261E]
        text-white
        px-12
        py-4
        rounded-full
        text-sm
        font-semibold
      "
    >
      VIEW ALL
    </button>
  </Link>
</div>
</div>

      </div>
    </section>
  );
}
