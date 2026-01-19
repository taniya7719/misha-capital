"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Joinform() {
  const [step, setStep] = useState(1);
  const router = useRouter();


  return (
    <section className="min-h-screen bg-gradient-to-b from-[#021B3A] to-[#042C5C] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl text-white">

        {/* Header */}
        <div className="mb-8 text-center relative">

<button
  onClick={() => router.back()}
  aria-label="Close"
  className="
    absolute
    top-3 right-3
    sm:top-4 sm:right-4
    md:top-6 md:right-6
    flex items-center justify-center
    h-9 w-9
    sm:h-10 sm:w-10
    rounded-full
    text-white/70
    hover:text-white
    hover:bg-white/10
    transition
  "
>
  ✕
</button>



  <div className="flex items-center justify-center gap-2 mb-3">
    <Image
      src="/Mishacapital.png"
      alt="Misha Capital Logo"
      width={40}
      height={40}
      priority
    />
    <span className="text-base sm:text-lg font-semibold tracking-wide">
      Misha Capital
    </span>
  </div>

  <h1 className="text-3xl font-semibold tracking-wide">
    Join Misha Capital Community
  </h1>

  <p className="mt-1 text-sm text-white/70">
    Your one-stop platform for business success
  </p>

  <div className="mx-auto my-4 h-px w-20 bg-white/30" />

  <h2 className="text-sm uppercase tracking-widest text-white/60">
    {step === 1 ? "Personal Details" : "Business Details"}
  </h2>
</div>


        {/* Form Card */}
        <div className="rounded-3xl border border-white/30 bg-white/5 p-8 backdrop-blur-xl">

          {/* STEP 1 */}
          {step === 1 && (
            <div className="gap-6">

              <Input label="First Name * "/>
              <Input label="Phone" placeholder="+91" />

              <Input label="Email *" />
              <Input label="LinkedIn Profile URL *" />

              <div className="md:col-span-2 pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="w-full rounded-full border border-white py-3 transition hover:bg-white hover:text-black"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 ">

              {/* Business Info */}
              <div className="">
                <Input label="Startup / Business Name *" />
                <Input label="Website / App URL" />
              </div>

              {/* About */}
              <div>
                <label className="mb-2 block text-sm text-white/80">
                  Brief About the Company *
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl bg-white/20 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#7fbf3f]"
                />
              </div>

              <Input label="Business Industry *" />

              {/* Expectations */}
              <div>
                <p className="mb-3 text-sm font-medium text-white/80">
                  Expectation from The Catalyst Tree *
                </p>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <Checkbox label="Strategic Partnership" />
                  <Checkbox label="Sales Growth" />
                  <Checkbox label="Fundraising" />
                  <Checkbox label="Business Consulting" />
                  <Checkbox label="Others" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                <button
                  onClick={() => setStep(1)}
                  className="w-full sm:w-1/2 rounded-full border border-white/40 py-3"
                >
                  ← Back
                </button>

                <button
                  className="w-full sm:w-1/2 rounded-full bg-gradient-to-r from-[#7fbf3f] to-[#a8e063] py-3 font-semibold text-black"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function Input({ label, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/80">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/20 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#7fbf3f]"
      />
    </div>
  );
}

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-3 text-sm text-white/80">
      <input
        type="checkbox"
        className="h-4 w-4 accent-[#7fbf3f]"
      />
      {label}
    </label>
  );
}
