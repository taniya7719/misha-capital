"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Joinform() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  /* ---------- VALIDATION ---------- */
  const validateStep1 = (form) => {
    const e = {};
    if (!form["data[first_name]"].value) e.first_name = "Required";
    if (!form["data[email]"].value) e.email = "Required";
    if (!form["data[linkedin]"].value) e.linkedin = "Required";
    return e;
  };

  const validateStep2 = (form) => {
    const e = {};
    if (!form["data[business_name]"].value) e.business_name = "Required";
    if (!form["data[business_industry]"].value) e.business_industry = "Required";
    if (!form["data[about_company]"].value) e.about_company = "Required";
    return e;
  };

  return (
    <>
      <section className="min-h-screen bg-[#021B3A] flex items-center justify-center px-4 pt-6">
        <div className="w-full max-w-4xl text-white">

          {/* HEADER */}
          <div className="text-center mb-6 relative">
            <button onClick={() => router.back()} className="absolute right-4 top-2">✕</button>

            <div className="flex justify-center items-center gap-2 mb-4">
              <Image src="/Mishacapital.png" width={36} height={36} alt="logo" />
              <span className="font-semibold text-lg sm:text-xl">Misha Capital</span>
            </div>

            <h1 className="text-2xl font-semibold">Join Misha Capital</h1>
            <p className="text-sm text-white/60">
              {step === 1 ? "Personal Details" : "Business Details"}
            </p>
          </div>

          {/* FORM */}
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur">
  <form
    action="https://sheetdb.io/api/v1/jq0k6f0shgj7y"
    method="post"
    target="hidden_iframe"
    onSubmit={(e) => {
      const err = validateStep2(e.target);
      if (Object.keys(err).length > 0) {
        e.preventDefault();
        setErrors(err);
      } else {
        setTimeout(() => setShowPopup(true), 500);
      }
    }}
    className="space-y-6"
  >
    {/* STEP 1 */}
    <div className={step === 1 ? "block space-y-4" : "hidden"}>
      <Input label="First Name *" name="data[first_name]" error={errors.first_name} />
      <Input label="Phone *" name="data[phone]" error={errors.email} />
      <Input label="Email *" name="data[email]" error={errors.email} />
      <Input label="LinkedIn *" name="data[linkedin]" error={errors.linkedin} />

      <button
        type="button"
        onClick={(e) => {
          const err = validateStep1(e.target.form);
          if (Object.keys(err).length > 0) setErrors(err);
          else {
            setErrors({});
            setStep(2);
          }
        }}
        className="w-full border border-white/40 rounded-full py-3 mt-4
                   hover:bg-white hover:text-black transition"
      >
        Next →
      </button>
    </div>

    {/* STEP 2 */}
    <div className={step === 2 ? "block space-y-4" : "hidden"}>
      <Input
        label="Startup / Business Name *"
        name="data[business_name]"
        error={errors.business_name}
      />

      <Input label="Website / App URL" name="data[website]" />

      <div>
        <label className="text-sm block mb-1">About Company *</label>
        <textarea
          name="data[about_company]"
          rows={4}
          className={`w-full p-3 rounded-xl bg-white/20 outline-none
            ${errors.about_company ? "ring-2 ring-red-500" : ""}`}
        />
        {errors.about_company && (
          <p className="text-xs text-red-400 mt-1">{errors.about_company}</p>
        )}
      </div>

      <Input
        label="Business Industry *"
        name="data[business_industry]"
        error={errors.business_industry}
      />

      <div>
        <p className="text-sm mb-2">Expectation from The Catalyst Tree</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <Checkbox label="Strategic Partnership" name="data[expectation][]" />
          <Checkbox label="Sales Growth" name="data[expectation][]" />
          <Checkbox label="Fundraising" name="data[expectation][]" />
          <Checkbox label="Consulting" name="data[expectation][]" />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="w-1/2 border border-white/40 rounded-full py-3"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="w-1/2 bg-green-400 text-black rounded-full py-3 font-semibold"
        >
          Submit
        </button>
        <input type="hidden" name="data[created_at]" value="" />

      </div>
    </div>

    <iframe name="hidden_iframe" style={{ display: "none" }} />
  </form>
</div>

        </div>
      </section>

      {/* ✅ POPUP AFTER SUBMIT */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl text-center">
            <h2 className="text-lg font-semibold mb-2">🎉 Form Submitted</h2>
            <p className="text-sm mb-4">Your data has been saved successfully.</p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-500 px-6 py-2 rounded-full"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* COMPONENTS */

function Input({ label, name, error }) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        name={name}
        className={`w-full p-3 rounded-xl bg-white/20 ${
          error && "ring-2 ring-red-500"
        }`}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

function Checkbox({ label, name }) {
  return (
    <label className="flex gap-2 items-center">
      <input type="checkbox" name={name} value={label} />
      {label}
    </label>
  );
}
