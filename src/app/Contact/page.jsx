
import ContactUs from "@/Components/ContactUs";
import HeroContact from "@/Components/Herocontact";
import Navigationbar from "@/Components/Navigationbar";
import Footer from "@/Footer";



export default function Contact() {
  return (
    <main className="relative h-screen">
  
<Navigationbar/>
   <HeroContact/>
   <section className="px-8 py-8">
   <ContactUs/>
   </section>
  
   
    <Footer/>
    </main>
  );
}