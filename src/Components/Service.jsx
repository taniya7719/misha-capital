import Image from "next/image";

export default function Service() {
  return (
    <section className="bg-white py-24">
      {/* TOP HEADING */}
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 opacity-70 mb-3">
          <span className="h-[1px] w-16 bg-[#000000]" />
          <span className="<w-[92px] h-[28px]
    flex items-center justify-center
    font-proxima
    font-medium
    text-[24px]
    leading-[28px]
    tracking-[-0.01em]
    text-[#000000]
  ">

            bespoke
          </span>
          <span className="h-[1px] w-16 bg-[#000000]" />
        </div>

        <h2 className="text-5xl font-serif">
          <span className="Libre text-[#008BF9] w-[151px] h-[52px]">Service</span>{" "}
          <span className="font-Proxima text-[#00365A] w-[151px] h-[52px]">Offerings</span>
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">

        {/* LEFT IMAGE */}
        <div className="relative w-fit">
          {/* CURVE BACKGROUND */}
          <div
            className="
              absolute
              -left-56
              top-1/2
              -translate-y-1/2
              w-[900px]
              h-[600px]
              bg-[url('/Curve.png')]
              bg-no-repeat
              bg-contain
              opacity-100
              z-0
            "
          />

          {/* PERSON */}
          <Image
            src="/man-1.png"
            alt="Advisor"
            width={400}
            height={600}
            className="relative z-10"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex gap-6 items-center justify-center">

          {/* Investment Banking */}
          <div
  className="
    relative
    w-[360px]
    h-[420px]
    bg-white
    rounded-[28px]
    shadow-[0_30px_80px_rgba(0,0,0,0.15)]
    p-6
    
    z-20
  "
>
  {/* TOP SLANTED CURVE */}
  {/* <div
    className="
      absolute
      -top-14
      -left-4
      w-[380px]
      h-32
      bg-white
      rounded-[90px]
      rotate-[-3deg]
    "
  /> */}

  <h3
  className="mt-4
    w-[275px]
    h-[32px]
    font-proxima
    font-medium
    text-[24px]
    leading-[32px]
    tracking-[-0.01em]
    text-[#0A6ED1]
  "
>
  Investment Banking
</h3>


  <ul
  className="mt-12
    w-[275px]
    h-[264px]
    font-proxima
    font-medium
    text-[16px]
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
         <div
  className="
    relative
    w-[300px]
    h-[420px]
    bg-white
    rounded-[28px]
    shadow-[0_25px_70px_rgba(0,0,0,0.14)]
    p-8
    
    z-10
  "
>
  {/* TOP CURVE – SMALLER & SOFTER */}
  {/* <div
    className="
      absolute
      -top-10
      -left-2
      w-[320px]
      h-24
      bg-white
      rounded-[80px]
      rotate-2
    "
  /> */}

    <h3
  className="mt-4
    w-[275px]
    h-[32px]
    font-proxima
    font-medium
    text-[24px]
    leading-[32px]
    tracking-[-0.01em]
    text-[#0A6ED1]
  "
>
    Advisory Services
  </h3>

  <ul
  className="mt-12
    w-[275px]
    h-[264px]
    font-proxima
    font-medium
    text-[16px]
    leading-[24px]
    tracking-[-0.01em]
    text-[#212121]
    list-disc
    pl-5
    space-y-2
  "
>
    <li> Valuation Advisory</li>
    <li>Financial & Regulatory Advisory</li>
    <li> Growth Advisory</li>
    <li> Corporate Structuring</li>
    <li> Joint Venture Advisory</li>
    <li> Business Sales Growth</li>
  </ul>
</div>


        </div>
      </div>
    </section>
  );
}
