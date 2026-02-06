"use client";

export default function Majortransaction() {
  const transactions = [
    { title: "Wind", subtitle: "Business Expansion", amount: "$30.3 M", icon: "/G1.png" },
    { title: "Wind", subtitle: "Business Expansion", amount: "$26.8 M", icon: "/G2.png" },
    { title: "Solar", subtitle: "Business Expansion", amount: "$112.5 M", icon: "/G3.png" },
    { title: "Manufacturing", subtitle: "Business Expansion", amount: "$21.8 M", icon: "/G4.png" },
    { title: "Wind", subtitle: "Business Expansion", amount: "$62.5 M", icon: "/G5.png" },

    { title: "Hydro", subtitle: "Business Expansion", amount: "$14.6 M", icon: "/G6.png" },
    { title: "Solar", subtitle: "Business Expansion", amount: "$5 M", icon: "/G7.png" },
    { title: "Electric Vehicle", subtitle: "Business Expansion", amount: "$100 M", icon: "/G8.png" },
    { title: "Hydro", subtitle: "Business Expansion", amount: "$17.5 M", icon: "/G1.png" },
    { title: "Solar", subtitle: "Business Expansion", amount: "$14 M", icon: "/G2.png" },

    { title: "FMCG", subtitle: "Business Expansion", amount: "$15.6 M", icon: "/G3.png" },
    { title: "Transformer Manufacturing", subtitle: "Working Capital", amount: "$5.25 M", icon: "/G4.png" },
    { title: "EPC", subtitle: "Working Capital", amount: "$25.6 M", icon: "/G5.png" },
    { title: "Manufacturing", subtitle: "Business Expansion", amount: "$37.5 M", icon: "/G6.png" },
    { title: "NBFC", subtitle: "Business Expansion", amount: "$12.5 M", icon: "/G7.png" },

    { title: "Manufacturing", subtitle: "Business Expansion", amount: "$6.25 M", icon: "/G8.png" },
    { title: "Hydro Project", subtitle: "Stress Funding", amount: "$8.75 M", icon: "/G1.png" },
    { title: "Steel", subtitle: "Working Capital", amount: "$278.15 M", icon: "/G2.png" },
    { title: "Automobile Industry", subtitle: "Working Capital", amount: "$68.75 M", icon: "/G3.png" },
    { title: "NBFC", subtitle: "Non-Convertible Debentures", amount: "$37.5 M", icon: "/G4.png" },
  ];

  return (
   <section className="relative py-20 overflow-hidden px-10 ">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center mb-30 "
    style={{ backgroundImage: "url('/Faq-img.webp')" }}
  />

  {/* Blue Overlay */}
  <div className="absolute inset-0 bg-[black]/90" />

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-4xl font-semibold text-center text-white mb-14">
      Major <span className="font-normal">Transactions</span>
    </h2>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {transactions.slice(0, 20).map((item, index) => (
        <div
          key={index}
          className="
            group
            rounded-2xl
            border border-white/20
            bg-white/5
            backdrop-blur-lg
            px-5 py-7
            text-left
            transition-all duration-300
            hover:-translate-y-2
            hover:scale-[1.03]
            hover:border-[#7EC9FF]
            hover:shadow-[0_0_30px_rgba(126,201,255,0.25)]
          "
        >
          {/* ICON */}
          <div className="mb-6 inline-flex rounded-xl border border-white/30 p-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A]">
              <img src={item.icon} className="h-6 w-6" />
            </div>
          </div>

          {/* TEXT */}
          <h4 className="text-lg font-semibold text-white">
            {item.title}
          </h4>

          <p className="text-sm text-white/60 mt-2">
            {item.subtitle}
          </p>

          <div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent my-4" />

          <p className="text-base font-bold text-white/70">
            {item.amount}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

  );
}
