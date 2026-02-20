// import Businesscircle from "@/Businesscircle";
// import BusinessComunity from "@/BusinessComunity";
// import BusinessEcosystem from "@/BusinessEcosystem";
// import BusinessLeadership from "@/BusinessLeadership";
// import Businesspage from "@/Businesspage";
// import Herobusiness from "@/Herobusiness";
// import InvestmentCards from "@/InvestmentCards";
// import Howtojoin from "@/Howtojoin";
// import Businessspeedcards from "@/Businessspeedcards";
// import Footer from "@/Footer";

import AboutUs from "@/Components/AboutUs";
import Footer from "@/Footer";
import Herobusiness from "@/Herobusiness";
import Herovideo from "@/Herobusiness";
import Navigationbar from "@/Navigationbar";


// export default function Business() {
//   return (
//     <>
//       <Businesspage />
//       <Herobusiness />
//       <BusinessEcosystem/>
//       <Businesscircle/>
//       <InvestmentCards/>
//       <BusinessComunity/>
//       <BusinessLeadership/>
//       <Howtojoin/>
//       <Businessspeedcards/>
//       <Footer/>
//     </>
//   );
// }
export const metadata = {
  title: "Expert Financial Advisory & Capital Solutions | Misha Capital",
  description:
    "Misha Capital, an investment banking advisory firm, offers debt advisory, capital raising, M&A, equity and corporate finance solutions.",
  keywords: [
    "corporate finance",
    "investment banking firm in india",
    "financial advisory firm",
    "debt syndication",
    "equity advisory",
    "strategic fundraising",
    "mergers & acquisitions advisory",
    "debt advisory",
    "capital raising solutions",
    "domestic and international markets",
    "investment banking advisory firm"
  ],
  openGraph: {
    title: "Expert Financial Advisory & Capital Solutions | Misha Capital",
    description:
      "Misha Capital, an investment banking advisory firm, offers debt advisory, capital raising, M&A, equity and corporate finance solutions.",
    url: "https://www.mishacapital.com/about-us/",
    siteName: "Misha Capital",
    type: "website",
  },
};

export default function page() {
  

 return (
  
  <>
  <Navigationbar/>
  <Herobusiness/>
  <section className="">
  <AboutUs/>
  </section>
  <Footer/>
  </>
);
}

