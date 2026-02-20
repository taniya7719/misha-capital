
import ContactUs from "@/Components/ContactUs";
import HeroContact from "@/Components/Herocontact";
import Navigationbar from "@/Components/Navigationbar";
import Footer from "@/Footer";

export const metadata = {
  title: "Get in Touch | Investment Banking Advisory – Misha Capital",
  description:
    "Contact Misha Capital for expert debt advisory, capital raising, debt syndication and strategic financial advisory support.",
  keywords: [
    "investment banking advisory",
    "debt advisory",
    "capital raising advisory",
    "debt syndication services"
  ],
  openGraph: {
    title: "Get in Touch | Investment Banking Advisory – Misha Capital",
    description:
      "Reach out to Misha Capital for professional debt advisory, capital raising, debt syndication and investment banking advisory services.",
    url: "https://www.mishacapital.com/contact-us/",
    siteName: "Misha Capital",
    type: "website",
  },
};

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