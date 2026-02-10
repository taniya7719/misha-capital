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
export default function About() {

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

