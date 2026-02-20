import HeroServices from "@/Components/HeroServices";
import Services from "@/Components/Services";
import Footer from "@/Footer";
import Navigationbar from "@/Navigationbar";



export const metadata = {
  title: "Corporate Debt & Private Equity | Misha Capital",
  description:
    "Misha Capital offers debt, equity, and advisory solutions including M&A, capital raising, corporate finance, and private equity deals.",
  keywords: [
    "business loans",
    "private equity",
    "invoice discounting",
    "working capital loans",
    "supply chain financing",
    "mezzanine financing",
    "construction loans",
    "mergers & acquisitions",
    "project financing",
    "bridge financing",
    "corporate debt",
    "series a funding",
    "growth equity",
    "leveraged buyout financing",
    "global capital solutions",
    "pre ipo capital"
  ],
  openGraph: {
    title: "Corporate Debt & Private Equity | Misha Capital",
    description:
      "Misha Capital provides corporate debt, private equity, M&A advisory, capital raising, and structured finance solutions across domestic and global markets.",
    url: "https://www.mishacapital.com/our-services",
    siteName: "Misha Capital",
    type: "website",
  },
};
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