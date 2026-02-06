
import ContentSection from "@/Components/ContentSection";
import FocusIndustries from "@/Components/FocusIndustries";
import Features from "@/Features";


import Footer from "@/Footer";
import HeroVideo from "@/Herovideo";

import ImpactNumbers from "@/ImpactNumbers";
import MajorTransactions from "@/MajorTransactions";


import Navigationbar from "@/Navigationbar";


export default function Frontpage() {
  return (
    <main className="relative h-screen">
    {/* <Navigationbar/> */}
    <HeroVideo/>
    <section className="px-10  ">
    <ContentSection/>
    </section>
    

    <ImpactNumbers/>
  
    
    <MajorTransactions/>
    <section className="px-10  ">
    <FocusIndustries/>
    </section>
   
   
    <Footer/>
    </main>
  );
}
