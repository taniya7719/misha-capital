import Navigationbar from "@/Components/Navigationbar";
import Privacy from "@/Components/Privacy";
import Footer from "@/Footer";



export const metadata = {
  title: "Privacy Policy | Misha Capital",
  description:
    "Misha Capital’s Privacy Policy explains how we collect, use and protect your personal information in accordance with applicable laws.",
 url: "https://www.mishacapital.com/privacy-policy/",
    siteName: "Misha Capital",
    type: "website",
};

export default function Policy() {
  return (
    <>
      <div className="relative">

        {/* Navigation */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navigationbar />
        </div>

        {/* Hero Section */}
        <section className="relative h-[75vh] w-full overflow-hidden ">
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/banner-about.webp')] bg-cover bg-center bg-no-repeat" />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050023]/70" />

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
         Privacy-Policy
          </h1>

         
        </div>
      </section>
      </div>

      {/* Overlap Card */}
      <div className="-mt-24 relative z-20">
        <div className="max-w-6xl mx-auto bg-[white] rounded-[30px] shadow-xl px-8 sm:px-12 lg:px-16 py-14">
        <Privacy/>
        </div>
      </div>

      <Footer/>
    </>
  );
}
