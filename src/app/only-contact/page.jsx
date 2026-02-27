"use client";

import ContactUs from "@/Components/ContactUs";
import Footer from "@/Footer";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen bg-white">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 
        px-4 py-2 rounded-lg 
        bg-[#00365A] text-white 
        hover:bg-[#1DA1F2] 
        transition-all duration-300 shadow-md"
      >
        ← Back
      </button>

      <section className="px-8 py-16">
        <ContactUs />
      </section>

      <Footer />
    </main>
  );
}