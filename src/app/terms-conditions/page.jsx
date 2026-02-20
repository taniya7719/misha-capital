import Navigationbar from "@/Components/Navigationbar";
import TermsandConditions from "@/Components/TermsandConditions";
import Footer from "@/Footer";


export default function Terms() {
  return (
    <>
      {/* Navigation Absolute */}
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
            Terms & Conditions
          </h1>

         
        </div>
      </section>

      {/* White Content Section with Overlap */}
     <div className="-mt-24 relative z-20">
        <div className="max-w-6xl mx-auto bg-[#f4f4f4] rounded-[30px] shadow-xl px-8 sm:px-8 lg:px-8 py-6">
        <TermsandConditions />
      </div>
      </div>

      <Footer/>
    </>
  );
}
