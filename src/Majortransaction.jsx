"use client";

export default function Majortransaction() {
  const transactions = [
  { title: "Wind", subtitle: "Project Finance", amount: "₹12,500 Crs", icon: "/G5.png" },
  { title: "Solar", subtitle: "Business Expansion", amount: "₹7,500 Crs", icon: "/G3.png" },
  { title: "Steel", subtitle: "Growth Funding", amount: "₹6,500 Crs", icon: "/G2.png" },
  { title: "Solar Manufacturing", subtitle: "Business Expansion", amount: "₹1,600 Crs", icon: "/G6.png" },
  { title: "Real Estate Funding", subtitle: "Construction Finance", amount: "₹600 Crs", icon: "/G2.png" },
  { title: "Automobile Industry", subtitle: "Working Capital", amount: "₹575 Crs", icon: "/G3.png" },
  { title: "Electric Vehicle", subtitle: "Acquisition Funding", amount: "₹420 Crs", icon: "/G8.png" },
  { title: "EPC", subtitle: "Working Capital", amount: "₹347 Crs", icon: "/G5.png" },
  { title: "NBFC", subtitle: "Acquisition Funding", amount: "₹311 Crs", icon: "/G4.png" },
  { title: "Wind", subtitle: "Business Expansion", amount: "₹252 Crs", icon: "/G1.png" },
  { title: "Wind", subtitle: "Equity Funding", amount: "₹224 Crs", icon: "/G2.png" },
  { title: "Manufacturing", subtitle: "Business Expansion", amount: "₹184 Crs", icon: "/G4.png" },
  { title: "Thermal Power", subtitle: "Business Expansion", amount: "₹162 Crs", icon: "/G1.png" },
  { title: "FMCG", subtitle: "Channel Financing", amount: "₹131 Crs", icon: "/G3.png" },
  { title: "Hydro Energy", subtitle: "Business Expansion", amount: "₹121 Crs", icon: "/G6.png" },
  { title: "NBFC", subtitle: "Business Expansion", amount: "₹105 Crs", icon: "/G7.png" },
  { title: "Hydro Project", subtitle: "Stress Funding", amount: "₹74 Crs", icon: "/G1.png" },
  { title: "Manufacturing", subtitle: "Equipment Financing", amount: "₹52 Crs", icon: "/G8.png" },
  { title: "Transformer Manufacturing", subtitle: "Working Capital", amount: "₹44 Crs", icon: "/G4.png" },
  { title: "Solar", subtitle: "Working Capital Finance", amount: "₹41 Crs", icon: "/G7.png" }
];

  return (
<section className="relative py-15 overflow-hidden px-10 mb-50">
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
