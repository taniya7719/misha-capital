import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#061a36] to-[#020f24] text-slate-300">
      
      {/* TOP CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          
          <h2 className="max-w-2xl text-3xl font-light leading-snug text-slate-200">
            Get all the guidance & growth you need  
            <span className="block text-white font-medium">
              through Misha Capital
            </span>
          </h2>
        
         <Link href="/Join">
          <button className="w-fit rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#061a36] transition hover:scale-105">
            Get Started →
          </button>
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Misha Capital
          </h3>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            One-stop platform for founders to access capital, community and growth support.
          </p>
        </div>

        {/* NAV */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Business</li>
            {/* <li className="hover:text-white cursor-pointer">Community</li> */}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm">
            <li>+91 96505 53609</li>
            <li className="hover:text-white cursor-pointer">
              info@mishacaps.com
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col items-center gap-4 text-xs text-slate-400 md:flex-row md:justify-between">
          
          <span>
            © 2026 Misha Capital. All rights reserved.
          </span>

          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white">LinkedIn</span>
            <span className="cursor-pointer hover:text-white">Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
