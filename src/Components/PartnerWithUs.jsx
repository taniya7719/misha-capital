export default function PartnerWithUs() {
  const cards = [
    {
      icon: "/institution.png",
      text: "Institutional-grade execution across banks, NBFCs, AIFs, private credit funds",
    },
    {
      icon: "/debt.png",
      text: "Strong focus on large-ticket and structured debt mandates",
    },
    {
      icon: "/partnership.png",
      text: "Long-term, outcome-driven partnerships",
    },
    {
      icon: "/referral.png",
      text: "Transparent referral engagement & economics",
    },
  ];

  return (
    <>
      {/* WHY PARTNER */}
      <section className="box">
        <div className="mx-auto flex flex-col lg:flex-row gap-5">

          {/* LEFT SIDE */}
          <div className=" lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="">
              <div className="flex items-center justify-inline gap-2 text-[#000000] text-medium">
      <span className="w-12 h-[1px] bg-[#000000]"></span>
      <span>why</span>
      <span className="w-12 h-[1px] bg-[#000000]"></span>
    </div>
              <h2 className="text-left text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[52px] mb-10 lg:mb-16">
                <span className="font-bold text-[#032F60]">
                  Partner With Us
                </span>
              </h2>
            </div>

            <div className="relative w-full max-w-[684px] h-auto">
              <img
                src="/Frame 53.png"
                alt="frame"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-25 lg:gap-y-0 lg:mt-10">
              {cards.map((item, i) => (
                <div
                  key={i}
                  className={`
                    w-full max-w-[282px]
                    lg:w-[304px]
                    h-auto lg:h-[184px]
                    bg-white
                    rounded-[16px]
                    border
                    border-[#E5E7EB]
                    p-4 lg:p-[32px]
                    flex
                    flex-col
                    justify-start
                    transition
                    duration-300
                    hover:shadow-lg
                    ${i % 2 !== 0 ? "lg:mt-8" : ""}
                  `}
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] mb-4"
                  />
                  <p className="text-[#1F2937] text-[15px] lg:text-[16px] leading-[22px] lg:leading-[24px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHO CAN PARTNER */}
      <section className="relative bg-[#F4F7FA] overflow-hidden box">

        {/* Background Image */}
        <div className="absolute inset-0 opacity-7">
          <img
            src="/partnerbackground.jpg"
            alt="bg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative mx-auto">

          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 lg:w-16 h-[1px] bg-[#000000]"></div>
            <p className="text-[#000000] lowercase text-sm lg:text-base">
              grow with us
            </p>
            <div className="w-12 lg:w-16 h-[1px] bg-[#000000]"></div>
          </div>

          <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl mb-8 lg:mb-10">
            <span className="font-bold text-[#0C2D48]">Who Can</span>{" "}
            <span className="font-bold text-[#0C2D48]">Partner</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { img: "/first1.jpg", title: "Financial\nConsultants" },
              { img: "/second2.jpg", title: "Investment\nAdvisors" },
              { img: "/Third3.jpg", title: "Chartered\nAccountants" },
              { img: "/Fourth4.jpg", title: "Deal\nIntroducers" },
            ].map((item, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] sm:h-[300px] lg:w-[311.75px] lg:h-[360px] object-cover"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>

                <div className="absolute bottom-6 left-6 text-white text-lg lg:text-xl font-semibold whitespace-pre-line">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
