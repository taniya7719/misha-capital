import Heropartner from "@/Components/Heropartner";
import PartnerWithUs from "@/Components/PartnerWithUs";
import StepCards from "@/Components/StepCards";
import Footer from "@/Footer";
import Navigationbar from "@/Navigationbar";


export default function Partner() {
  return (
    <main className="relative h-screen ">
  
  <Navigationbar/>
    

     <Heropartner/>
    <section className=" ">
    <PartnerWithUs/>
    </section>
    <section className="">
    <StepCards/>
    </section>
  
   
    <Footer/>
    </main>
  );
}