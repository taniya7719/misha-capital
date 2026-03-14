// import Link from "next/link";

// export default function Footer() {
//   return (
    
// <section className="relative overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('/businessman-pointing.jpg')" // 
//         }}
//       />

//       {/* Green Overlay */}
//       <div className="absolute inset-0 bg-emerald-400/90" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        
//         {/* Left Content */}
//         <div className="max-w-2xl text-black">
//           <span className="text-sm font-medium uppercase tracking-wide">
//             Get Consultations
//           </span>

//           <h2 className="mt-4 text-4xl font-semibold leading-tight">
//             Ready To Get IT Consultations ?
//           </h2>

//           <div className="mt-8 flex items-center gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
//               📞
//             </div>
//             <div>
//               <p className="text-sm">Email Address</p>
//               <p className="font-semibold">techinfo@gmail.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Button */}
//         <Link href="/consultation">
//           <button className="flex items-center gap-2 bg-black px-8 py-4 text-white font-semibold transition hover:scale-105">
//             Get Consultation →
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// <footer className="bg-gradient-to-b from-[#061a36] to-[#020f24] text-slate-300">
      
//       {/* TOP CTA */}
//       <div className="border-b border-white/10">
//         <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
//           <h2 className="max-w-2xl text-3xl font-light leading-snug text-slate-200">
//             Get all the guidance & growth you need  
//             <span className="block text-white font-medium">
//               through Misha Capital
//             </span>
//           </h2>
        
//          <Link href="/Join">
//           <button className="w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#061a36] transition hover:scale-105">
//             Get Started →
//           </button>
//           </Link>
//         </div>
//       </div>

//       {/* MAIN FOOTER */}
//       <div className="mx-auto max-w-7xl px-6 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        
//         {/* BRAND */}
//         <div>
//           <h3 className="text-xl font-semibold text-white">
//             Misha Capital
//           </h3>
//           <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
//             One-stop platform for founders to access capital, community and growth support.
//           </p>
//         </div>

//         {/* NAV */}
//         <div>
//           <h4 className="mb-4 text-sm font-semibold text-white">
//             Navigation
//           </h4>
//           <ul className="space-y-3 text-sm">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer">Business</li>
//             {/* <li className="hover:text-white cursor-pointer">Community</li> */}
//           </ul>
//         </div>

//         {/* COMPANY */}
//         <div>
//           <h4 className="mb-4 text-sm font-semibold text-white">
//             Company
//           </h4>
//           <ul className="space-y-3 text-sm">
//             <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
//             <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//             <li className="hover:text-white cursor-pointer">Refund Policy</li>
//           </ul>
//         </div>

//         {/* CONTACT */}
//         <div>
//           <h4 className="mb-4 text-sm font-semibold text-white">
//             Get in Touch
//           </h4>
//           <ul className="space-y-3 text-sm">
//             <li>+91 96505 53609</li>
//             <li className="hover:text-white cursor-pointer">
//               info@mishacaps.com
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className="border-t border-white/10">
//         <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col items-center gap-4 text-xs text-slate-400 md:flex-row md:justify-between">
          
//           <span>
//             © 2026 Misha Capital. All rights reserved.
//           </span>

//           <div className="flex gap-5">
//             <span className="cursor-pointer hover:text-white">LinkedIn</span>
//             <span className="cursor-pointer hover:text-white">Twitter</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#061a36] to-[#020f24] text-slate-300 pt-30 mt-30  ">
      
      {/* ===== CTA BOX (OVERLAPPING) ===== */}
      <section className="relative lg:absolute lg:-top-52 left-0 right-0 z-20 px-4 lg:px-0">

        <div className="mx-auto  px-6 box">
          <div className="relative overflow-hidden rounded-2xl">
            
            {/* BG IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/businessman-pointing.jpg')" }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#085A93] via-[#0A77BF] to-[#6BC4FF]


" />

            {/* CONTENT */}
            <div className="relative z-10 px-10 py-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              
              {/* LEFT */}
              <div className="max-w-2xl text-white">
                

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-3xl font-semibold leading-tight">

              	Access the guidance and capital solutions your business needs with Misha Capital.
                </h2>

                <div className="mt-6 flex flex-col sm:flex-row gap-6">

                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
  <img
    src="/email.png"  
    alt="Mail"
    className="h-6 w-6"
  />
</div>
                  <div>
                    <p className="text-sm">Email Address</p>
                    <p className="font-semibold">info@mishacaps.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
  <img
    src="/old-phone.png"  
    alt="Mail"
    className="h-6 w-6"
  />
</div>
      <div>
        <p className="text-sm">Contact Us</p>
        <p className="font-semibold"> +91 9220330262</p>
      </div>
    </div>
                </div>
              </div>

              {/* RIGHT BUTTON */}
           <Link href="/only-contact">
          <button
            className="hidden lg:flex items-center justify-center
            h-[42px] px-7
            rounded-full
            border border-white/30 p-[4px] bg-[#FB2C36]
            text-sm font-semibold text-white
            transition hover:scale-105"
          >
            GET STARTED →
          </button>
        </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN FOOTER ===== */}
      <div className="mx-auto grid gap-50 lg:grid-cols-1 box px-4">

  {/* 1️⃣ BRAND */}
  <div>
    <Link href="/" className="flex items-center gap-4">
      <Image
        src="/Mishacapital.png"
        alt="Misha Capital Logo"
        width={40}
        height={40}
        priority
      />
      <span className="h-6 w-px bg-white/30" />
      <span className="text-base sm:text-lg font-semibold tracking-wide text-white">
        Misha Capital
      </span>
    </Link>

    <ul className="mt-4 space-y-3 text-sm text-gray-300 ">
      <li>Misha Capital is a sector-agnostic investment banking advisory firm specializing in debt restructuring, structured debt advisory, private equity, and strategic capital raising. With over 30 years of financial advisory experience and strong institutional relationships, we help business’s structure and execute tailored debt and equity solutions with precision and efficient deal execution.</li>
      <li>
        <Link
          href="https://www.linkedin.com/company/misha-capital/"
          target="_blank"
          className="inline-flex items-center gap-2 hover:text-white transition"
        >
          <img
    src="/linkedin-logo.png"
    alt="LinkedIn"
    className="w-6 h-6"
  />
        </Link>
      </li>
    </ul>
  </div>

  {/* 2️⃣ QUICK LINKS */}
  <div className="lg:col-2 flex justify-end gap-18 px-4 ">
     <div className="flex flex-col">
    <h4 className=" text-sm font-semibold text-white mb-4">Quick Links</h4>
    <ul className="space-y-2 text-sm text-gray-300">
      <li>
        <Link href="/" className="hover:text-[#085A93] transition">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about-us" className="hover:text-[#085A93] transition">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/our-services" className="hover:text-[#085A93] transition">
          Our Services
        </Link>
      </li>
      <li>
        <Link href="/partner-with-us" className="hover:text-[#085A93] transition">
          Partner With Us
        </Link>
      </li>
      <li>
        <Link href="/contact-us" className="hover:text-[#085A93] transition">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>

  {/* 3️⃣ COMPANY */}
  <div>
    <h4 className="mb-4 text-sm font-semibold text-white">Legal & Compliance</h4>
    <ul className="space-y-2 text-sm text-gray-300">
      <li>
        <Link href="/terms-conditions" className="hover:text-white transition">
          Terms & Conditions
        </Link>
      </li>
      <li>
        <Link href="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </Link>
      </li>
     
    </ul>
    
  </div>
  </div>
  

  {/* 4️⃣ CONTACT */}
  {/* <div>
    <h4 className="mb-4 text-sm font-semibold text-white">Get in Touch</h4>
    <ul className="space-y-3 text-sm text-gray-300">
      <li className="flex items-center gap-2">
        <span>📞</span>
        <span>+91 96505 53609</span>
      </li>
      <li className="flex items-center gap-2">
        <span>✉️</span>
        <span>info@mishacaps.com</span>
      </li> */}
    {/* </ul>
  </div> */}

</div>


    </footer>
  );
}
