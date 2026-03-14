export default function Services() {
  const services = [
    {
      title: "Project Financing",
      icon: "/project-finance.png",
      desc:
        "Long-tenure project finance solutions structured around project cash flows and revenue visibility.",
    },
    {
      title: "Mezzanine Financing",
      icon: "/mezz.png",
      desc:
        "Flexible mezzanine capital solutions combining debt and equity characteristics to support growth, acquisitions, and balance sheet optimization.",
    },
     {
      title: "LBO (Leveraged Buyout) Financing",
      icon: "/Business-icon.png",
      desc:
        "Specialized leveraged buyout financing structured around acquisition cash flows, enabling strategic buyouts and ownership transitions.",
    },
    {
      title: "Bridge Financing",
      icon: "/bridge.png",
      desc:
        "Short-term bridge financing solutions designed to address interim funding requirements ahead of long-term capital arrangements or liquidity events.",
    },
    {
      title: "Acquisition Financing",
      icon: "/acquisition.png",
      desc:
        "Structured funding solutions supporting the acquisition of companies or business assets, enabling seamless ownership transitions and strategic expansion.",
    },
    {
      title: "Global Capital Solutions for Offshore Projects",
      icon: "/global.png",
      desc:
        "Cross-border capital solutions connecting offshore projects with international lenders, funds, and alternative capital providers.",
    },
     {
      title: "Working Capital Loans",
      icon: "/working-capital.png",
      desc:
        "Customized working capital financing solutions aligned with business cash-flow cycles, ensuring seamless day-to-day operations.",
    },
    {
      title: "Supply Chain Financing",
      icon: "/supply-chain.png",
      desc:
        "End-to-end supply chain finance solutions enabling efficient vendor, distributor, and channel financing.",
    },
    {
      title: "Construction Loans",
      icon: "/construction-loans.png",
      desc:
        "Specialized construction finance solutions supporting residential, commercial, and mixed-use developments through milestone-based funding.",
    },
    {
      title: "Business Loans",
      icon: "/Business-icon.png",
      desc:
        "Structured secured and unsecured business loan solutions designed to support expansion, operational efficiency, and long-term growth.",
    },
    {
      title: "Invoice Discounting",
      icon: "/bill.png",
      desc:
        "Enhance liquidity through invoice discounting facilities that enable early realization of receivables and improved working capital management.",
    },
   
    
  ];

  return (
    <>
      {/* ================= CORPORATE DEBT ================= */}
      <section className="mx-auto bg-white box">
  <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#E5E7EB] gap-px">

    {/* LEFT – HEADING */}
    <div className="bg-white flex items-center">
      <div className="text-inline mb-4 px-4 sm:px-0">
        {/* <div className="flex items-center justify-inline gap-2 text-[#000000] text-medium ">
          <span className="w-12 h-[1px] bg-[#000000]"></span>
          <span>Our Services</span>
          <span className="w-12 h-[1px] bg-[#000000]"></span>
        </div> */}

        <h2 className="text-inline justify-inline text-3xl sm:text-4xl md:text-4xl mb-4 sm:mb-4">
          <span className="font-bold text-[#032F60]">Corporate</span>{" "}
          <span className="font-bold text-[#032F60]">Debt</span>
        </h2>
        <p>Tailored debt solutions designed to enhance liquidity, optimize capital structure, and support sustainable business growth.
</p>
      </div>
    </div>

    {/* RIGHT – 2 CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#E5E7EB] gap-px">
      {services.slice(0, 2).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>

    {/* ROW 2 – LEFT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#E5E7EB] gap-px">
      {services.slice(2, 4).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>

    {/* ROW 2 – RIGHT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#E5E7EB] gap-px">
      {services.slice(4, 6).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>

    {/* ROW 3 – LEFT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#E5E7EB] gap-px">
      {services.slice(6, 8).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>

    {/* ROW 3 – RIGHT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#E5E7EB] gap-px">
      {services.slice(8, 10).map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>

  </div>
</section>

      {/* ================= PRIVATE EQUITY ================= */}
    

<section className=" bg-[#F3F4F6] box lg:mb-55 ">
  <div className="text-center mb-8  sm:px-0 ">
    {/* <div className="flex items-center justify-center gap-2 text-[#000000] text-medium">
      <span className="w-12 h-[1px] bg-[#000000]"></span>
      <span>Our Services</span>
      <span className="w-12 h-[1px] bg-[#000000]"></span>
    </div> */}

    <h2 className="text-3xl sm:text-4xl md:text-4xl mb-2 sm:mb-2 text-center ">
      <span className="font-bold text-[#032F60]">Corporate</span>{" "}
      <span className="font-bold text-[#032F60]">Equity</span>
    </h2>
    <p className="pb-10">Advising growth-oriented businesses on raising institutional capital and <br/>partnering with strategic investors for long-term value creation.</p>

    <div className="flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#E5E7EB] gap-px max-w-5xl w-full ">
        <Card
        center
          item={{
            title: "Series A Funding",
            icon: "/Business-icon.png",
            desc:
              "Strategic Series A fundraising advisory supporting early growth-stage companies.",
          }}
        />

        <Card
        center
          item={{
            title: "Growth Equity & Pre-IPO Capital",
            icon: "/Business-icon.png",
            desc:
              "Advisory on growth equity and pre-IPO capital for scalable, high-growth businesses.",
          }}
        />

        <Card
        center
          item={{
            title: "Mergers & Acquisitions",
            icon: "/Business-icon.png",
            desc:
              "End-to-end M&A advisory across buy-side and sell-side transactions.",
          }}
        />
      </div>
    </div>
  </div>
</section>


    </>
  );
}

/* ================= CARD COMPONENT ================= */
function Card({ item, center }) {
  return (
    <div
      className={`
        bg-white
        px-6 sm:px-8
        py-8
        min-h-[220px] sm:min-h-[260px]
        hover:bg-[#FAFAFA]
        transition
        ${center ? "flex flex-col items-center justify-center text-center" : ""}
      `}
    >
      <div className={`mb-5 ${center ? "flex justify-center" : ""}`}>
        <img
          src={item.icon}
          alt="alt"
          className="h-8 w-8 sm:h-9 sm:w-9"
        />
      </div>

      <h3 className="text-[16px] sm:text-[16px] font-semibold text-[#0B0C0C] mb-2">
        {item.title}
      </h3>

      <p
        className={`
          text-[13px] sm:text-[14px] 
          text-[#555]
          leading-[26px] sm:leading-[26px]
          ${center ? "max-w-[260px]" : ""}
        `}
      >
        {item.desc}
      </p>
    </div>
  );
}
