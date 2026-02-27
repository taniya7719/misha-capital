import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section>
      {/* TOP HEADING */}
      <div className="text-center mb-4 mt-12">
        <div className="flex items-center justify-center gap-2 text-[#000000] text-medium">
          <span className="w-12 h-[1px] bg-[#000000]"></span>
          <span>Bespoke</span>
          <span className="w-12 h-[1px] bg-[#000000]"></span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-10 md:mb-16">
          <span className="font-bold text-[#032F60]">Service</span>{" "}
          <span className="font-bold text-[#032F60]">Offerings</span>
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative px-6 lg:px-6">
          {/* CURVE BACKGROUND */}
          <div
            className="
              absolute
              -left-32
              lg:-left-56
              top-1/2
              -translate-y-1/2
              w-[300px]
              h-[300px]
              sm:w-[500px]
              sm:h-[450px]
              lg:w-[900px]
              lg:h-[600px]
              bg-[url('/Curve.png')]
              bg-no-repeat
              bg-contain
              bg-center
              z-0
            "
          />

          {/* PERSON IMAGE */}
          <Image
            src="/man-1.png"
            alt="Advisor"
            width={480}
            height={700}
            className="relative z-10 mx-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center lg:justify-start px-4">

          <div
            className="
              relative
           
              w-[560px]
              min-h-[420px]
              bg-white
              rounded-[28px]
              shadow-[0_25px_70px_rgba(0,0,0,0.14)]
              p-8 sm:p-10
              border border-[#E5E7EB]
              ring-4 ring-[#0A6ED1]/10
            "
          >
            {/* Heading */}
            <h3
              className="
                font-semibold
                text-[22px]
                lg:text-[28px]
                leading-[34px]
                text-[#0A6ED1]
                mb-2
              "
            >
              Investment Banking
            </h3>

            {/* Description */}
            <p
              className="
                text-[14px]
                sm:text-[14px]
                leading-[22px]
                text-black
                mb-4
              "
            >
              Misha Capital offers integrated Investment Banking solutions across domestic and
              international markets. We structure and execute capital raising strategies for businesses
              ranging from nascent stages to mature enterprises, encompassing Debt Advisory,
              Private Equity, strategic M&A, and tailored growth financing solutions.
            </p>

            {/* Bullet Points */}
          <ul
  className="
    grid grid-cols-1 sm:grid-cols-2
    border-t border-l border-gray-200
    text-[14px] sm:text-[14px]
    text-[#212121]
  "
>
  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
    <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    <span>Corporate Debt: Structured business loans and working capital solutions.</span>
    
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
   <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
   <span>M&A Advisory: End-to-end buy-side and sell-side strategic deals.</span>
  
    
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
   <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    <span>Project & Global Capital: Project finance and cross-border offshore solutions.</span>
    
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
    <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    <span>Real Estate Finance: Funding for residential and commercial developments.</span>
    
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
    <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    <span>Structured Finance: Mezzanine, LBO, and Bridge financing.</span>
    
    
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
    <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    <span>Supply Chain Finance: Invoice discounting and liquidity management.</span>
  </li>

  <li className="flex items-start gap-3 p-4 border-r border-b border-gray-200">
    <span className="mt-[6px] w-1.5 h-1.5 bg-[#0A6ED1] rounded-full flex-shrink-0"></span>
    
     <span>Equity Capital: Series A, Growth Equity, and Pre-IPO funding.</span>
  </li>
   <Link
    href="/our-services"
    className="
       items-center justify-center gap-2
      px-7 py-7
      bg-[white]
      text-[#0A6ED1]
      text-sm font-medium
      rounded-xl
      
      transition-all duration-300
      shadow-md
    "
  >
    View More →
  </Link>
</ul>

          </div>
        </div>

      </div>
    </section>
  );
}
