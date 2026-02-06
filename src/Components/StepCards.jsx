// export default function StepCards() {
//   const steps = [
//     { step: "1", title: "Partner Registration", desc: "Fill out our partner form to initiate." },
//     { step: "2", title: "Deal Origination", desc: "Introduce qualified business lending mandates." },
//     { step: "3", title: "Evaluation & Structuring", desc: "We structure the deal & align lenders." },
//     { step: "4", title: "Execution & Payout", desc: "We execute the mandate & process payouts." },
//   ];

//   return (
//     <section className="w-full bg-black py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-8">

//         {/* HEADING */}
//         <h2 className="text-center text-white text-[38px] font-bold mb-24">
//           How It Works
//         </h2>

//         <div className="relative">

//           {/* 🔵 ANIMATED DOTTED LINE */}
//           <svg
//             className="absolute top-1/2 left-0 w-full h-24"
//             viewBox="0 0 1000 100"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M 20 50 H 980"
//               fill="none"
//               stroke="#3B82F6"
//               strokeWidth="2"
//               strokeDasharray="6 10"
//               className="timeline-path"
//             />
//           </svg>

//           {/* GRID */}
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-36 gap-x-48">
//             <StepCard position="top" data={steps[0]} />
//             <StepCard position="top" data={steps[1]} />
//             <StepCard position="bottom" data={steps[2]} />
//             <StepCard position="bottom" data={steps[3]} />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// function StepCard({ data, position }) {
//   return (
//     <div
//       className={`relative flex flex-col items-center ${
//         position === "top" ? "mb-12" : "mt-12"
//       }`}
//     >
//       {/* DOT */}
//       <div className="absolute -top-12 w-11 h-11 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold z-10 shadow-lg">
//         {data.step}
//       </div>

//       {/* CARD */}
//       <div className="bg-[#1C1B3A] rounded-2xl px-8 py-6 text-center w-[290px] shadow-xl">
//         <h3 className="text-white text-lg font-semibold mb-2">
//           {data.title}
//         </h3>
//         <p className="text-sm text-[#CBD5F5] leading-[24px]">
//           {data.desc}
//         </p>
//       </div>
//     </div>
//   );
// }
// export default function StepCards() {
//   const steps = [
//     { step: "1", title: "Partner Registration", desc: "Fill out our partner form to initiate." },
//     { step: "2", title: "Deal Origination", desc: "Introduce qualified business lending mandates." },
//     { step: "3", title: "Evaluation & Structuring", desc: "We structure the deal & align lenders." },
//     { step: "4", title: "Execution & Payout", desc: "We execute the mandate & process payouts." },
//   ];

//   return (
//     <section className="w-full bg-black py-24 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-8">
//         <h2 className="text-center text-white text-[38px] font-bold">
//           How It Works
//         </h2>

//         <div className="relative">

//           {/* 🔵 Z SHAPE TIMELINE */}
//           {/* <svg
//   className="absolute left-0  w-full h-[1000px] pointer-events-none"
//   viewBox="4 0 1000 720"
//   preserveAspectRatio="none"
// >
//   <path
//     d="
//       M 150 60
//       H 850
//       V 260
//       H 150
//     "
//     fill="none"
//     stroke="#3B82F6"
//     strokeWidth="2"
//     strokeDasharray="6 10"
//     className="timeline-path"
//   />
// </svg> */}

// <div className="relative">
//   <svg
//     className="absolute left-0 w-full h-[900px] pointer-events-none"
//     viewBox="4 0 1000 800"
//     preserveAspectRatio="none"
//   >
//     <path
//       d="
//         M 150 60
//         H 850
//         V 600
//         H 150
//       "
//       fill="none"
//       stroke="#3B82F6"
//       strokeWidth="2"
//       strokeDasharray="6 10"
//       className="timeline-path"
//     />
//   </svg>
// </div>


//           {/* GRID */}
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-48 gap-x-56">
//             <StepCard position="top" data={steps[0]} />
//             <StepCard position="top" data={steps[1]} />
//             <StepCard position="bottom" data={steps[2]} />
//             <StepCard position="bottom" data={steps[3]} />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
// function StepCard({ data, position }) {
//   return (
//     <div
//       className={`relative flex flex-col items-center mt-28 ${
//         position === "top" ? "mb-16" : "mt-16"
//       }`}
//     >
//       {/* DOT */}
//       <div className="absolute -top-[38px] w-11 h-11 rounded-full bg-[#2563EB]
// flex items-center justify-center text-white font-bold z-10 shadow-lg">
//   {data.step}
// </div>

//       {/* CARD */}
//       <div className="bg-[#1C1B3A] rounded-2xl px-8 py-6 text-center w-[300px] shadow-xl">
//         <h3 className="text-white text-lg font-semibold mb-2">
//           {data.title}
//         </h3>
//         <p className="text-sm text-[#CBD5F5] leading-[24px]">
//           {data.desc}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function StepCards() {
//   return (
//     <section className="w-full bg-white py-28 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

//         {/* LEFT CONTENT — SAME */}
//         <div>
//           <h2 className="text-[48px] leading-[56px] font-bold text-black mb-6">
//             Boosting Your <br /> Company
//           </h2>

//           <p className="text-gray-600 text-[18px] leading-[30px] mb-12 max-w-xl">
//             Velit aliquam imperdiet mollis nullam volutpat vulputate ornare
//             sagittis porttitor ullamcorper.
//           </p>

//           <div className="flex items-start gap-6 mb-10">
//             <div className="w-16 h-16 rounded-2xl bg-[#9CFFB6] flex items-center justify-center">
//               <img src="/finance-icon.svg" className="w-8 h-8" />
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold text-black mb-2">
//                 Finance Support Online
//               </h4>
//               <p className="text-gray-600 leading-[26px] max-w-md">
//                 Commodo augue arcu dignissim velit aliquam imperdiet mollis mattis.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-start gap-6">
//             <div className="w-16 h-16 rounded-2xl bg-[#9CFFB6] flex items-center justify-center">
//               <img src="/goal-icon.svg" className="w-8 h-8" />
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold text-black mb-2">
//                 Strategic Goal Planning
//               </h4>
//               <p className="text-gray-600 leading-[26px] max-w-md">
//                 Rutrum gravida cras eleifend turpis fames primis vulputate purus.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE — FIXED CURVE DESIGN */}
//         <div className="relative h-[520px] flex items-center justify-center">

//           {/* GREEN SEMI CIRCLE */}
//           <div className="absolute left-30 w-[300px] h-[300px] bg-[#B8FFB0] rounded-full -translate-x-1/2" />

//           {/* LEFT CURVE IMAGE */}
//           <div className="relative w-[260px] h-[520px]">
//             <svg
//               viewBox="0 0 260 520"
//               className="absolute inset-0 w-full h-full"
//             >
//               <defs>
//                 <clipPath id="leftCurve">
//                   <path d="M260 0 C120 0 0 120 0 260 C0 400 120 520 260 520 Z" />
//                 </clipPath>
//               </defs>
//             </svg>

//             <img
//               src="/h2-filler-img.jpg"
//               alt=""
//               className="w-full h-full object-cover"
//               style={{ clipPath: "url(#leftCurve)" }}
//             />
//           </div>

//           {/* RIGHT CURVE IMAGE */}
//           <div className="relative w-[260px] h-[520px] -ml-[70px]">
//             <svg
//               viewBox="0 0 260 520"
//               className="absolute inset-0 w-full h-full"
//             >
//               <defs>
//                 <clipPath id="rightCurve">
//                   <path d="M0 0 C140 0 260 120 260 260 C260 400 140 520 0 520 Z" />
//                 </clipPath>
//               </defs>
//             </svg>

//             <img
//               src="/h2-filler-img.jpg"
//               alt=""
//               className="w-full h-full object-cover object-right"
//               style={{ clipPath: "url(#rightCurve)" }}
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

export default function ExecutionSteps() {
  const steps = [
    {
      step: "01",
      title: " Partner Registration",
      desc: "Fill out our Partner form to initiate",
      icon: "/red1.png",
      image: "/H1.jpg",
    },
    {
      step: "02",
      title: "Deal organisation",
      desc: "Introduce qualified business leading mandates.",
      icon: "/red2.png",
      image: "/H2.jpg",
    },
    {
      step: "03",
      title: "Evalution & structuring",
      desc: "We structure the deal & aligh lenders.",
      icon: "/red3.png",
      image: "/H3.jpg",
    },
    {
      step: "04",
      title: "Execution & Payout",
      desc: "We execute the mandate & process payouts.",
      icon: "/red4.png",
      image: "/H4.jpg",
    },
  ];

  return (
    <>
    <section className="relative bg-white pb-12 overflow-hidden">
  <div className="max-w-7xl mx-auto px-8">

    {/* HEADER */}
    <div className="flex justify-center mb-12">
      <h2 className="text-[52px] leading-[30px] font-bold text-black">
        How It Works
      </h2>
    </div>

    {/* TIMELINE */}
    <div className="relative grid grid-cols-4 gap-14">

      {/* DOTTED LINE */}
      <div className="absolute top-[70px] left-0 right-0 border-t border-dashed border-[#9CFFB6]" />

      {steps.map((item, i) => (
        <div
          key={i}
          className="relative text-center group transition-all duration-500 hover:-translate-y-2"
        >

          {/* ICON / IMAGE BOX */}
          <div className="relative mx-auto w-[130px] h-[130px] rounded-2xl bg-[#F6FFF8] flex items-center justify-center shadow-sm ">

            {/* IMAGE + OVERLAY (ONLY ON HOVER) */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500"
              />

              <div
                className="absolute inset-0 bg-[#D00914]/40
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500"
              />
            </div>

            {/* ICON — ALWAYS VISIBLE */}
            <img
              src={item.icon}
              className="relative z-20 w-12 h-12"
            />

            {/* STEP NUMBER (BORDER KE BEECH) */}
            <span
              className="
                absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
               bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94]
                text-black text-sm font-semibold
                w-10 h-10 flex items-center justify-center
                rounded-full shadow-md z-30
              "
            >
              {item.step}
            </span>
          </div>

          {/* CONTENT */}
          <h4 className="mt-12 text-xl font-semibold text-black">
            {item.title}
          </h4>

          <p className="mt-4 text-gray-500 max-w-xs mx-auto">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

<section className="relative min-h-screen w-full overflow-hidden ">
  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/istock.jpg')" }}
  />

  {/* DARK OVERLAY (OPTIONAL – adjust opacity) */}
  <div className="absolute inset-0 bg-black/30 " />

  <div className="relative z-10 max-w-7xl mx-auto px-10 py-20 flex items-center justify-end ">
    
    {/* GLASS FORM CARD */}
    <div
      className="
        w-full max-w-xl
        rounded-3xl
        bg-white/60
        backdrop-blur-xl
        shadow-2xl
        border border-white/40
        p-10
      "
    >
      {/* TOP TAG */}
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[2px] w-8 bg-black/60" />
        <p className="text-sm font-medium text-black/70">Let’s Talk</p>
        <span className="h-[2px] w-8 bg-black/60" />
      </div>

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-black mb-4">
        Partner Registration
      </h2>

      {/* SUBTEXT */}
      <p className="text-black/60 text-sm mb-8 leading-relaxed">
        Fill out the form below to join Misha Capital's<br></br> partner network. Fields marked with * are mandatery.
        {/* <u>info@example.com</u>. We’ll contact you within 12 hours or sooner. */}
      </p>

      {/* FORM */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none focus:ring-2 focus:ring-black/20"
        />
        <input
          type="tel"
          placeholder="Contact Number*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />
        <input
          type="email"
          placeholder="Email Address*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />
       <select
          className="rounded-xl px-4 py-3 bg-white/80 outline-none md:col-span-1"
        >
          <option>Location</option>
          <option>Gurugram</option>
          <option>Delhi</option>
          <option>Noida</option>
        </select>
        <input
          type="text"
          placeholder="Company*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none md:col-span-1"
        />
        {/* <input
          type="text"
          placeholder="First Name*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none focus:ring-2 focus:ring-black/20"
        /> */}
        <input
          type="text"
          placeholder="Type of partnership*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />
        <input
          type="text"
          placeholder="Type of partnership*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />
        {/* <select
          className="rounded-xl px-4 py-3 bg-white/80 outline-none md:col-span-1"
        >
          <option>Choose Service</option>
          <option>Advisory</option>
          <option>Funding</option>
          <option>Consulting</option>
        </select> */}
         <input
          type="text"
          placeholder="Average Deal Size"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />
         <input
          type="text"
          placeholder="Areas of Expertise*"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none"
        />

        <textarea
          rows="4"
          placeholder="Additional Message"
          className="rounded-xl px-4 py-3 bg-white/80 outline-none md:col-span-2"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="
            mt-4
            w-fit
            px-8 py-3
            rounded-full
            bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A]
            font-medium
            text-white
            flex items-center gap-2
            hover:scale-105
            transition
          "
        >
          Submit →
        </button>
      </form>
    </div>
  </div>
</section>
</>

  );
}
