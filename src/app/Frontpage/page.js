import CardsFlow from "@/CardsFlow";
import Features from "@/Features";
import Footer from "@/Footer";
import HeroVideo from "@/Herovideo";
import Howtojoin from "@/Howtojoin";
import ImpactNumbers from "@/ImpactNumbers";


import Navigationbar from "@/Navigationbar";


export default function Frontpage() {
  return (
    <main className="relative h-screen">
    {/* <Navigationbar/> */}
    <HeroVideo/>
    <ImpactNumbers/>
    {/* <MajorTransactions/>
    <IndustriesSection/> */}
    <Features/>
    <CardsFlow/>
    <Howtojoin/>
    <Footer/>
    </main>
  );
}
