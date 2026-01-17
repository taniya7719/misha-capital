import Businesscircle from "@/Businesscircle";
import BusinessComunity from "@/BusinessComunity";
import BusinessEcosystem from "@/BusinessEcosystem";
import BusinessLeadership from "@/BusinessLeadership";
import Businesspage from "@/Businesspage";
import Herobusiness from "@/Herobusiness";
import InvestmentCards from "@/InvestmentCards";
import Howtojoin from "@/Howtojoin";
import Businessspeedcards from "@/Businessspeedcards";
import Footer from "@/Footer";


export default function Business() {
  return (
    <>
      <Businesspage />
      <Herobusiness />
      <BusinessEcosystem/>
      <Businesscircle/>
      <InvestmentCards/>
      <BusinessComunity/>
      <BusinessLeadership/>
      <Howtojoin/>
      <Businessspeedcards/>
      <Footer/>
    </>
  );
}
