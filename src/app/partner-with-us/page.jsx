import Heropartner from "@/Components/Heropartner";
import PartnerWithUs from "@/Components/PartnerWithUs";
import StepCards from "@/Components/StepCards";
import Footer from "@/Footer";
import Navigationbar from "@/Navigationbar";

export const metadata = {
  title: "Partner & Advisory Solutions | Misha Capital",
  description:
    "Partner with a leading investment banking advisory firm offering debt advisory, equity advisory, deal structuring & capital raising solutions.",
  keywords: [
    "equity advisory",
    "deal structuring",
    "investment banking advisory firm",
    "debt advisory",
    "capital raising advisory",
    "mergers & acquisitions advisory",
    "private credit solutions",
    "debt syndication services",
    "corporate debt advisors",
    "private capital markets",
    "capital markets advisory"
  ],
  openGraph: {
    title: "Partner & Advisory Solutions | Misha Capital",
    description:
      "Misha Capital offers equity advisory, debt advisory, deal structuring, capital raising and private capital markets solutions as a trusted investment banking advisory firm.",
    url: "https://www.mishacapital.com/partner-with-us",
    siteName: "Misha Capital",
    type: "website",
  },
};

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