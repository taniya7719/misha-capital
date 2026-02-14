import Image from "next/image";

export default function Service() {
  return (
    <section className="">
      {/* TOP HEADING */}
      <div className="text-center mb-8 mt-20 ">
      <div className="flex items-center justify-center gap-2 text-[#000000] text-medium">
        <span className="w-12 h-[1px] bg-[#000000]"></span>
        <span>bespoke</span>
        <span className="w-12 h-[1px] bg-[#000000]"></span>
      </div>

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl
mb-10 md:mb-16
">
      <span className="font-bold text-[#032F60]">
        Service
      </span>{" "}
      <span className="font-bold text-[#032F60]">
       Offering
      </span>
    </h2>
    
    </div>
      {/* MAIN CONTENT */}
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16
 item-center  ">

        {/* LEFT IMAGE */}
        <div className="relative  px-10">
          {/* CURVE BACKGROUND */}
         <div
  className="
    absolute
    -left-56
    top-1/2
    -translate-y-1/2
    w-[400px]
    h-[400px]
    sm:w-[560px]
    sm:h-[500px]
    lg:w-[900px]
    lg:h-[600px]
    bg-[url('/Curve.png')]
    bg-no-repeat
    bg-contain
    bg-center
    z-0
  "
/>


          {/* PERSON */}
          <Image
            src="/man-1.png"
            alt="Advisor"
            width={480}
            height={700}
            className="relative z-10"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">

  {/* Investment Banking */}
  <div
    className="
      relative
     
      sm:max-w-[360px]
      lg:max-w-[360px]
      min-h-[380px]
      lg:h-[420px]
      bg-white
      rounded-[28px]
      shadow-[0_30px_80px_rgba(0,0,0,0.15)]
      p-6
      z-20
    "
  >

    <h3
      className="
        
        w-full
        lg:max-w-[275px]
        font-proxima
        font-medium
        text-[22px]
        lg:text-[24px]
        leading-[32px]
        tracking-[-0.01em]
        text-[#0A6ED1]
      "
    >
      Investment Banking
    </h3>

    <ul
      className="
       mt-4
        w-full
        
        lg:w-[275px]
        font-proxima
        font-medium
        text-[15px]
        lg:text-[16px]
        leading-[25px]
        tracking-[-0.01em]
        text-[#212121]
        list-disc
        pl-5
        
        space-y-2
      "
    >
      <li>Mergers & Acquisitions</li>
      <li>Capital Raising – Domestic & International</li>
      <li>Private Credit Solutions</li>
      <li>Real Estate Financing & Advisory</li>
      <li>Transaction Support</li>
    </ul>

  </div>


  {/* Advisory Services */}
  {/* <div
    className="
      relative
      w-full
      sm:max-w-[300px]
      lg:max-w-[300px]
      min-h-[380px]
      lg:h-[420px]
      bg-white
      rounded-[28px]
      shadow-[0_25px_70px_rgba(0,0,0,0.14)]
      p-8
      z-10
    "
  >

    <h3
      className="
        mt-4
        w-full
        lg:w-[275px]
        font-proxima
        font-medium
        text-[22px]
        lg:text-[24px]
        leading-[32px]
        tracking-[-0.01em]
        text-[#0A6ED1]
      "
    >
      Advisory Services
    </h3>

    <ul
      className="
        mt-12
        w-full
        lg:w-[275px]
        font-proxima
        font-medium
        text-[15px]
        lg:text-[16px]
        leading-[24px]
        tracking-[-0.01em]
        text-[#212121]
        list-disc
        pl-5
        space-y-2
      "
    >
      <li>Valuation Advisory</li>
      <li>Financial & Regulatory Advisory</li>
      <li>Growth Advisory</li>
      <li>Corporate Structuring</li>
      <li>Joint Venture Advisory</li>
      <li>Business Sales Growth</li>
    </ul>

  </div> */}

</div>
</div>
    </section>
  );
}
