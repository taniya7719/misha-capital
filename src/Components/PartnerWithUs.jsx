export default function PartnerWithUs() {
  return (
    <>
      {/* WHY PARTNER */}
      <section className="py-12 bg-gradient-to-b from-[#F8FAFC] to-white mt-12">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>
             <h2
              className='
                font-["italic"]
                text-[52px]
                leading-[65.2px]
                font-bold
                text-[rgb(11,12,12)]
              '
            >
                Why Partner With Us
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <ul className="space-y-6">
                {[
                  "Institutional-grade execution across banks, NBFCs, AIFs, private credit funds",
                  "Strong focus on large-ticket and structured debt mandates",
                  "Transparent referral engagement & economics",
                  "Long-term, outcome-driven partnerships",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 opacity-0 animate-fadeUp"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1F2A44] text-white text-sm">
                      ✓
                    </span>
                    <p className="text-[16px] leading-[28px] text-[#2E2E2E]">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHO CAN PARTNER */}
      <section
  className="relative isolate min-h-[700px] py-12 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/Faq-img.webp')" }}
>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/20 to-black/20" />


  <div className="relative z-10  px-10">

    {/* Heading */}
    <h2
              className='
                font-["italic"]
                text-[52px]
                leading-[45.2px]
                font-bold
                text-white
                text-center 
              '
            >
      Who Can Partner
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mt-10">

      {/* LEFT IMAGE */}
      <div className="relative rounded-[36px] overflow-hidden shadow-2xl">
        <img
          src="/leftImage.jpg"
          alt=""
          className="w-full h-[560px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* RIGHT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {[
          {
            title: "Financial Consultants",
            icon: "/bar.png",
            bg: "/H1.jpg",
          },
          {
            title: "Investment Advisors",
            icon: "/ca.png",
            bg: "/H2.jpg",
          },
          {
            title: "Chartered Accountants",
            icon: "/advisory.png",
            bg: "/H3.jpg",
          },
          {
            title: "Deal Introducers",
            icon: "/introduction.png",
            bg: "/H4.jpg",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{ animationDelay: `${i * 120}ms` }}
            className="
              group relative overflow-hidden
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-10
              px-20
              min-h-[220px]
              transition-all duration-500
              hover:-translate-y-2
              hover:bg-white/15
              hover:border-white/40
              hover:shadow-[0_0_50px_rgba(182,248,164,0.25)]
              opacity-0 animate-fadeUp
            "
          >
            {/* HOVER IMAGE INSIDE CARD */}
            <img
              src={item.bg}
              alt=""
              className="
                absolute inset-0
                h-full w-full
                object-cover
                opacity-0
                group-hover:opacity-30
                transition-opacity duration-500
              "
            />

            {/* CONTENT */}
            <div className="relative z-10 ">

              {/* ICON */}
              <div className="mb-10 inline-flex rounded-2xl border border-white/50 p-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94]">
                  <img src={item.icon} className="h-8 w-7" />
                </div>
              </div>

              {/* TEXT */}
              <p className="text-[Italic] text-[20px] text-bold  text-white">
                {item.title}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

    </>
  );
}
