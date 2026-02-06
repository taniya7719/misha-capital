import HeroServices from "@/Components/HeroServices";
import Services from "@/Components/Services";
import Footer from "@/Footer";
import Navigationbar from "@/Navigationbar";

export default function OurServices() {
  return (
    <main className="relative h-screen">
  
   <Navigationbar/>
    <HeroServices/>
    <Services/>
  
   
    <Footer/>
    </main>
  );
}