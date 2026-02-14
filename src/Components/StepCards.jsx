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
      step: " STEP 01",
      title: " Partner Registration",
      desc: "Fill out our Partner form to initiate",
      icon: "/red1.png",
      image: "/H1.jpg",
    },
    {
      step: "STEP 02",
      title: "Deal organisation",
      desc: "Introduce qualified business leading mandates.",
      icon: "/red2.png",
      image: "/H2.jpg",
    },
    {
      step: "STEP 03",
      title: "Evalution & structuring",
      desc: "We structure the deal & aligh lenders.",
      icon: "/red3.png",
      image: "/H3.jpg",
    },
    {
      step: "STEP 04",
      title: "Execution & Payout",
      desc: "We execute the mandate & process payouts.",
      icon: "/red4.png",
      image: "/H4.jpg",
    },
  ];

  return (
    <>
    <section className="relative box ">
  <div className="mx-auto">

    {/* HEADER */}
    <div className="flex items-center justify-center gap-8 mb-1">
      <div className="w-12 lg:w-16 h-[1px] bg-[#000000]"></div>
      <p className="text-[#000000] lowercase text-sm lg:text-base">
        how it work
      </p>
      <div className="w-12 lg:w-16 h-[1px] bg-[#000000]"></div>
    </div>

    <h2 className="text-center text-3xl sm:text-4xl lg:text-[48px] ">
      <span className="font-bold text-[#00365A]">
        Step by Step Guide
      </span>
    </h2>

    {/* STEPS */}
    <div className="relative ">

      {/* Desktop dashed line only */}
      <div className="hidden lg:block absolute top-[52px] left-0 right-0 border-t-2 border-dashed border-[#1E88E5] z-0"></div>

      <div className="flex flex-col lg:flex-row items-center justify-center relative z-10 gap-4 ">

        {steps.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center relative w-full max-w-[270px]"
          >
            <div className="bg-[#008BF9]/10 text-[#008BF9] text-[12px] font-semibold px-4 py-2 rounded-lg">
              {item.step}
            </div>

            <div className="h-3 border-l-2 border-dashed border-[#1E88E5]"></div>
            <div className="w-4 h-4 rounded-full border-2 border-[#1E88E5] bg-white"></div>
            <div className="h-7 border-l-2 border-dashed border-[#1E88E5]"></div>

           <div className="
  bg-[#00365A]
  rounded-2xl
  px-6 lg:px-8
  py-6
  h-auto lg:h-[150px]
  w-full lg:w-[260.75px]
  mt-1
  border-b-0
  hover:border-b-8
  hover:border-b-[#008BF9]
  transition-all
  duration-300
">
  <h4 className="text-[16px] lg:text-[18px] font-semibold text-white">
    {item.title}
  </h4>



              <p className="text-sm text-white/80 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

<div className="relative overflow-hidden w-full h-[100px] sm:h-[130px] lg:h-[160px] bg-white">

  <div className="flex whitespace-nowrap animate-moveLeft gap-5">

    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-[-0.01em]">
      <span className="misha-outline">Misha</span>{" "}
      <span className="text-[#0E78BE]/10 ">Capital</span>
    </h1>

    <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-[-0.01em]">
      <span className="misha-outline">Misha</span>{" "}
      <span className="text-[#0E78BE]/10">Capital</span>
    </h1>

  </div>
</div>





<section className="mx-auto bg-[#E9F4F7] mt-10 mb-50 box">
  <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start">

    {/* LEFT IMAGE */}
    <div className="w-full flex justify-center lg:justify-start">
      <div className="w-full max-w-[450px]">
        <img
          src="/registration-image.png"
          alt="Partner Registration"
          className="w-full h-auto object-cover rounded-3xl shadow-xl"
        />
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full max-w-[850px]">

      <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#00365A] mb-2">
        Partner Registration
      </h2>

      <p className="text-[15px] lg:text-[16px] text-[#4A4A4A] mb-4">
        Fill out the form below to join Misha Capital's partner network.
        Fields marked with * are mandatory.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

        <input type="text" placeholder="First Name*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />
        <input type="tel" placeholder="Contact Number*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />
        <input type="email" placeholder="Email Address*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />

        <select className="border rounded-xl px-4 py-3 bg-white outline-none w-full">
          <option>Location</option>
          <option>Gurugram</option>
          <option>Delhi</option>
          <option>Noida</option>
        </select>

        <input type="text" placeholder="Company*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />
        <input type="text" placeholder="Type of Partnership*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />

        <input type="text" placeholder="Average Deal Size" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />
        <input type="text" placeholder="Areas of Expertise*" className="border rounded-xl px-4 py-3 bg-white outline-none w-full" />

        {/* TEXTAREA FULL WIDTH */}
        <div className="xl:col-span-3">
          <textarea
            rows="4"
            placeholder="Additional Message"
            className="border rounded-xl px-5 py-4 bg-white outline-none w-full"
          />
        </div>

        {/* BUTTON FULL WIDTH */}
        <div className="xl:col-span-3">
          <button
            type="submit"
            className="bg-[#008BF9] hover:bg-[#D9261E] transition text-white font-bold w-full py-4 px-4 rounded-xl"
          >
            Submit Application
          </button>
        </div>

      </form>
    </div>

  </div>
</section>



  {/* <div className="  grid md:grid-cols-2 gap-16 items-center"> */}

    {/* LEFT IMAGE */}
    {/* <div className="relative">
      <img
        src="/registration-image.png"
        alt="Partner"
        className="rounded-xl shadow-xl w-[569px] h-[540px] object-cover"
      />
    </div> */}

    {/* RIGHT CONTENT */}
    {/* <div> */}
      {/* HEADING */}
      {/* <h2 className="text-[48px]  font-Inter font-bold text-[#00365A] ">
        Partner Registration
      </h2> */}

      {/* SUBTEXT */}
      {/* <p className="text-[16px] text-[#4A4A4A] mb-4 leading-relaxed">
        Fill out the form below to join Misha Capital's partner network.
        Fields marked with * are mandatory.
      </p> */}

      {/* FORM */}
      {/* <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="First Name*"
          className="border rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#123b5a]/20"
        /> */}

        {/* <input
          type="tel"
          placeholder="Contact Number*"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <input
          type="email"
          placeholder="Email Address*"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <select className="border rounded-xl px-4 py-3 bg-white outline-none">
          <option>Location</option>
          <option>Gurugram</option>
          <option>Delhi</option>
          <option>Noida</option>
        </select>

        <input
          type="text"
          placeholder="Company*"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <input
          type="text"
          placeholder="Type of Partnership*"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <input
          type="text"
          placeholder="Average Deal Size"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <input
          type="text"
          placeholder="Areas of Expertise*"
          className="border rounded-xl px-4 py-3 bg-white outline-none"
        />

        <textarea
          rows="4"
          placeholder="Additional Message"
          className="border rounded-xl px-4 py-3 bg-white outline-none md:col-span-2"
        /> */}

        {/* BUTTON FULL WIDTH */}
        {/* <button
          type="submit"
          className="md:col-span-2 bg-[#008BF9] hover:bg-[#008BF9] transition text-white font-bold py-4 rounded-xl"
        >
          Confirm Amount
        </button>

      </form>
    </div>
  </div> */}
   {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> */}

    {/* LEFT IMAGE */}
    {/* <div className="relative w-full h-full">
      <img
        src="/registration-image.png"  
        alt="Partner Registration"
        className="rounded-3xl shadow-xl   w-[569px] h-[540px] object-cover"
      />
    </div>
  <div className=" mx-auto px-6"> */}
  {/* HEADING */}
  {/* <h2 className="text-[48px] font-Inter font-bold text-[#00365A] mb-4">
    Partner Registration
  </h2>

  {/* SUBTEXT */}
  {/* <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed max-w-2xl">
    Fill out the form below to join Misha Capital's partner network.
    Fields marked with * are mandatory.
  </p>  */}

  {/* FORM */}
  {/* <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <input
      type="text"
      placeholder="First Name*"
      className="border rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-[#123b5a]/20"
    />

    <input
      type="tel"
      placeholder="Contact Number*"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    />

    <input
      type="email"
      placeholder="Email Address*"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    />

    <select className="border rounded-xl px-4 py-3 bg-white outline-none">
      <option>Location</option>
      <option>Gurugram</option>
      <option>Delhi</option>
      <option>Noida</option>
    </select>

    <input
      type="text"
      placeholder="Company*"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    />

    <input
      type="text"
      placeholder="Type of Partnership*"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    />

    <input
      type="text"
      placeholder="Average Deal Size"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    />

    <input
      type="text"
      placeholder="Areas of Expertise*"
      className="border rounded-xl px-4 py-3 bg-white outline-none"
    /> */}

    {/* CENTERED TEXTAREA */}
    {/* <div className="lg:col-span-3 flex justify-center">
      <textarea
        rows="4"
        placeholder="Additional Message"
        className="border rounded-xl px-4 py-3 bg-white outline-none w-full "
      />
    </div> */}

    {/* CENTERED BUTTON */}
    {/* <div className="lg:col-span-3 flex justify-center">
      <button
        type="submit"
        className="bg-[#008BF9] hover:bg-[#0075d4] transition text-white font-bold py-4 px-48 rounded-xl"
      >
        Confirm Amount
      </button>
    </div>

  </form>
</div>
</div>
</section> */}

</>

  );
}
