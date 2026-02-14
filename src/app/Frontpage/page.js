
import ContentSection from "@/Components/ContentSection";
import FocusIndustries from "@/Components/FocusIndustries";
import Service from "@/Components/Service";
import Features from "@/Features";


import Footer from "@/Footer";
import HeroVideo from "@/Herovideo";

import ImpactNumbers from "@/ImpactNumbers";
import MajorTransactions from "@/MajorTransactions";


import Navigationbar from "@/Navigationbar";


export default function Frontpage() {
  return (
    <main className="relative h-screen">
    <Navigationbar/>
    <section className="relative min-h-screen w-full ">
    <HeroVideo/>
    </section>
    <section className="  ">
    <ContentSection/>
    </section>
    

    <ImpactNumbers/>
  
    
    <MajorTransactions/>
    <section className="px-10">
      <Service/>
       </section>
    <FocusIndustries/>
   
   
   
    <Footer/>
    </main>
  );
}
