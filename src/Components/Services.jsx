export default function Services() {
  const services = [
    {
      title: "Business Loans",
      icon: "/Business-icon.png",
      desc:
        "Structured secured and unsecured business loan solutions designed to support expansion, operational efficiency, and long-term growth objectives.",
    },
    {
      title: "Invoice Discounting",
      icon: "/bill.png",
      desc:
        "Enhance liquidity through invoice discounting facilities that enable early realization of receivables and improved working capital management.",
    },
    {
      title: "Working Capital Loans",
      icon: "/working-capital.png",
      desc:
        "Customized working capital financing solutions aligned to business cash-flow cycles, ensuring seamless day-to-day operations.",
    },
    {
      title: "Supply Chain Financing",
      icon: "/supply-chain.png",
      desc:
        "End-to-end supply chain finance solutions enabling efficient vendor, distributor, and channel financing.",
    },
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
        "Flexible mezzanine capital solutions combining debt and equity characteristics to fund growth, acquisitions, and balance sheet optimization.",
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
        "Short-term bridge finance solutions designed to address interim funding requirements ahead of long-term capital arrangements or liquidity events.",
    },
    {
      title: "Global Capital Solutions for Offshore Projects",
      icon: "/global.png",
      desc:
        "Cross-border global capital solutions connecting offshore projects with international lenders, funds, and alternative capital providers.",
    },
    {
      title: "Construction Loans",
      icon: "/construction-loans.png",
      desc:
        "Specialized construction finance solutions supporting residential, commercial, and mixed-use developments through milestone-based funding.",
    },
  ];

  return (
    <>
      {/* ================= CORPORATE DEBT ================= */}
      <section className="max-w-7xl mx-auto px-10 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#E5E7EB] gap-px">

          {/* LEFT – HEADING */}
          <div className="bg-white p-10 flex items-center">
            <h2
              className='
                font-["italic"]
                text-[52px]
                leading-[65.2px]
                font-bold
                text-[rgb(11,12,12)]
              '
            >
              Corporate <br></br>
              Debt
            </h2>
          </div>

          {/* RIGHT – 2 CARDS */}
          <div className="grid grid-cols-2 bg-[#E5E7EB] gap-px">
            {services.slice(0, 2).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* ROW 2 – LEFT */}
          <div className="grid grid-cols-2 bg-[#E5E7EB] gap-px">
            {services.slice(2, 4).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* ROW 2 – RIGHT */}
          <div className="grid grid-cols-2 bg-[#E5E7EB] gap-px">
            {services.slice(4, 6).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* ROW 3 – LEFT */}
          <div className="grid grid-cols-2 bg-[#E5E7EB] gap-px">
            {services.slice(6, 8).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>

          {/* ROW 3 – RIGHT */}
          <div className="grid grid-cols-2 bg-[#E5E7EB] gap-px">
            {services.slice(8, 10).map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRIVATE EQUITY ================= */}
    
{/* ================= PRIVATE EQUITY ================= */}
<section className="w-full bg-[#F3F4F6] py-24">
  <div className="max-w-7xl mx-auto px-8">

    {/* HEADING */}
    <div className="mb-16 text-center">
      <h2
              className='
                font-["italic"]
                text-[52px]
                leading-[65.2px]
                font-bold
                text-[rgb(11,12,12)]
              '
            >
        Private Equity
      </h2>
    </div>

    {/* CARDS – SAME AS UPPER */}
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#E5E7EB] gap-px max-w-5xl w-full">
        <Card
          item={{
            title: "Series A Funding",
            icon: "/Business-icon.png",
            desc:
              "Strategic Series A funding advisory supporting early growth-stage companies.",
          }}
        />

        <Card
          item={{
            title: "Growth Equity & Pre-IPO Capital",
            icon: "/Business-icon.png",
            desc:
              "Growth equity and pre-IPO funding advisory for scalable businesses.",
          }}
        />

        <Card
          item={{
            title: "Mergers & Acquisitions",
            icon: "/Business-icon.png",
            desc:
              "End-to-end M&A advisory services across buy-side and sell-side deals.",
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
function Card({ item }) {
  return (
    <div className="bg-white px-8 py-8 min-h-[260px] hover:bg-[#FAFAFA] transition">
      <div className="mb-5">
        <img src={item.icon} alt="" className="h-9 w-9" />
      </div>

      <h3 className="text-[16px] font-semibold text-[#0B0C0C] mb-4">
        {item.title}
      </h3>

      <p className="text-[14px] text-[#555] leading-[26px]">
        {item.desc}
      </p>
    </div>
  );
}
