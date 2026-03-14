"use client";

export default function Majortransaction() {
  const transactions = [
  { title: "Steel", subtitle: "Growth Funding", amount: "$278.15 M", icon: "/G2.png" },
  { title: "Solar", subtitle: "Business Expansion", amount: "$112.5 M", icon: "/G3.png" },
  { title: "Automobile Industry", subtitle: "Working Capital", amount: "$68.75 M", icon: "/G3.png" },
  { title: "Wind", subtitle: "Project Finance", amount: "$62.5 M", icon: "/G5.png" },
  { title: "Electric Vehicle", subtitle: " Acquisition Funding", amount: "$50 M", icon: "/G8.png" },
  { title: "EPC", subtitle: "Working Capital", amount: "$40.6 M", icon: "/G5.png" },
  { title: "Manufacturing", subtitle: "Business Expansion", amount: "$37.5 M", icon: "/G6.png" },
  { title: "NBFC", subtitle: "Acquisition Funding", amount: "$37.5 M", icon: "/G4.png" },
  { title: "Wind", subtitle: "Business Expansion", amount: "$30.3 M", icon: "/G1.png" },
  { title: "Wind", subtitle: "Equity Funding", amount: "$26.8 M", icon: "/G2.png" },
  { title: "Manufacturing", subtitle: "Business Expansion", amount: "$21.8 M", icon: "/G4.png" },
  { title: "Thermal Power", subtitle: "Business Expansion", amount: "$17.5 M", icon: "/G1.png" },
  { title: "FMCG", subtitle: "Channel Financing", amount: "$15.6 M", icon: "/G3.png" },
  { title: "Hydro Energy", subtitle: "Business Expansion", amount: "$14.6 M", icon: "/G6.png" },
  { title: "Real Estate Funding", subtitle: "Construction Finance", amount: "$14 M", icon: "/G2.png" },
  { title: "NBFC", subtitle: "Business Expansion", amount: "$12.5 M", icon: "/G7.png" },
  { title: "Hydro Project", subtitle: "Stress Funding", amount: "$8.75 M", icon: "/G1.png" },
  { title: "Manufacturing", subtitle: "Equipment Financing", amount: "$6.25 M", icon: "/G8.png" },
  { title: "Transformer Manufacturing", subtitle: "Working Capital", amount: "$5.25 M", icon: "/G4.png" },
  { title: "Solar", subtitle: "Working Capital Finance", amount: "$5 M", icon: "/G7.png" }

  ];

  return (
<section className="relative py-20 overflow-hidden px-10 mb-50">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/pattern.jpg')" }}
  />
  <div className="absolute inset-0  bg-gradient-to-br from-[#032A58] to-[#043B73] " />

  <div className="relative z-10 max-w-7xl mx-auto px-6 ">
     <button
    onClick={() => window.history.back()}
    className="absolute left-0 -translate-y-1/2 text-white hover:text-gray-300 border border-b-blue-400 border-p-3 transition"
  >
    ← Back
  </button>

    {/* TOP LABEL */}
    <div className="flex items-center justify-center gap-4 mb-4 text-white/70 text-sm tracking-wide">
     
        <span className="w-12 h-[1px] bg-[white]/50"></span>
        <span> Debt & Equity Capital Raising</span>
        <span className="w-12 h-[1px] bg-[white]/50"></span>
      </div>
      


      <h2 className="text-center text-4xl md:text-5xl mb-16">
      <span className="font-bold text-[white]">
        Major
      </span>{" "}
      <span className="font-bold text-[white]">
        Transactions
      </span>
    </h2>
    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {transactions.slice(0, 20).map((item, index) => (
        <div
  key={index}
  className="
    relative
    rounded-xl
    bg-white/90
    p-6
    shadow-sm
    overflow-hidden
    transition
    hover:-translate-y-1 
  "
  style={{
    backgroundImage: "url('/fact counter.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundPosition: "center 35px"
    
    ,
  }}

>
          {/* AMOUNT */}
           <h4
  className="
    w-[208px]
    h-[36px]
    font-proxima
    font-bold
    font-lg
    text-[28px]
    leading-[36px]
    tracking-[-0.01em]
    text-[#00365A]
  "
>
  {item.amount}
</h4>

          {/* SUBTEXT */}
                        <p className="  w-[208px]  h-[40px]  font-proxima  font-medium  text-[16px] leading-[20px] tracking-[-0.01em] text-[#212121] "
>
            {item.subtitle || "Business Expansion"}
          </p>

          {/* PROGRESS LINE */}
          <div className="mt-3 mb-5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#FF6A6A] to-[#6EC1FF]" />

          {/* TITLE */}
          <p className="text-sm font-semibold text-[#021C3C]">
            {item.title}
          </p>

          {/* BACK SHAPE */}
          {/* <div className="absolute top-0 right-0 h-24 w-24 bg-white/60 rounded-bl-full pointer-events-none" /> */}
        </div>
      ))}
    </div>

  </div>
</section>





  );
}
