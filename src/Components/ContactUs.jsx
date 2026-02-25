"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function ContactUs() {
  
  return (
   <section className="">
  <div className="mx-auto max-w-[1200px] box">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

      {/* LEFT CONTENT */}
      <div className="max-w-[600px]">

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 lg:w-16 h-[1px] bg-black"></div>
          <p className="text-black lowercase text-sm lg:text-base">
            Let's start talking
          </p>
          <div className="w-10 lg:w-16 h-[1px] bg-black"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[45px] mb-2">
          <span className="font-bold text-[#00365A]">
            Send Us Your Query
          </span>
        </h2>

        <p className="text-gray-600 mb-6 text-[15px] lg:text-base">
         Your trusted investment banking partner — from Seed to Series E and beyond.
        </p>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* COMPANY ADDRESS */}
          <div className="flex gap-4 items-start">
            <div className="h-14 w-14 min-w-[56px] rounded-2xl border border-[#1DA1F2] bg-white flex items-center justify-center shadow-sm">
              <img src="/location-contact.png" alt="Location" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-black text-[17px]">
                Company Address
              </h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Misha Capital Advisors LLP 
              <br/>
                L-42, Lajpat Nagar II, New Delhi, Delhi 110024
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex gap-4 items-start">
            <div className="h-14 w-14 min-w-[56px] rounded-2xl border border-[#1DA1F2] bg-white flex items-center justify-center shadow-sm">
              <img src="/phone-call.png" alt="Phone" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-black text-[17px]">
                Talk To Us
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                +91 9220468743
              </p>
            </div>
          </div>

          {/* OFFICE HOURS */}
          <div className="flex gap-4 items-start">
            <div className="h-14 w-14 min-w-[56px] rounded-2xl border border-[#1DA1F2] bg-white flex items-center justify-center shadow-sm">
              <img src="/office-location.png" alt="Office Hours" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-black text-[17px]">
                Office Days
              </h4>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                Mon–Sat: 09:00am–07:00pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex gap-4 items-start">
            <div className="h-14 w-14 min-w-[56px] rounded-2xl border border-[#1DA1F2] bg-white flex items-center justify-center shadow-sm">
              <img src="/read-contact.png" alt="Email" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <h4 className="font-semibold text-black text-[17px]">
                Email Us
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                info@mishacaps.com
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-xl w-full max-w-[480px] lg:ml-auto"
      >
        <h3 className="text-2xl sm:text-4xl font-bold text-black mb-2 text-center">
          Contact Us
        </h3>
        <p className="mb-4 text-[12px] text-center">Whether you're exploring debt advisory, capital raising, or equity fundraising, our 
investment banking advisory team is ready to assist.</p>

       
        <form 
  action="https://sheetdb.io/api/v1/rvzwat1za59zy"
  method="post"
  className="space-y-4"
>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <input 
      type="text"
      name="Name"
      placeholder="First Name*"
      className="input"
      required
    />

    <input 
      type="text"
      name="Last Name"
      placeholder="Last Name*"
      className="input"
      required
    />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <input 
      type="email"
      name="Email"
      placeholder="Email Address*"
      className="input"
      required
    />

    <input 
      type="tel"
      name="Phone"
      placeholder="Phone Number*"
      className="input"
      required
    />
  </div>

  <select 
    name="Reason"
    defaultValue=""
    className="input text-gray-500"
    required
  >
    <option value="" disabled>
      Why are you reaching out*
    </option>
    <option value="Funding Requirement">Funding Requirement</option>
    <option value="Partnership">Partnership</option>
    <option value="Investment Opportunity">Investment Opportunity</option>
    <option value="Other">Other</option>
  </select>

  <textarea
    name="Message"
    placeholder="Additional Message"
    rows={4}
    className="input resize-none"
  />

  <button
    type="submit"
    className="w-full mt-1 rounded-xl bg-[#1DA1F2] hover:bg-[#D9261E] py-4 font-medium text-white transition hover:scale-[1.02]"
  >
    Submit →
  </button>

</form>
       
      </motion.div>

    </div>
  </div>


      {/* INPUT STYLE (same as yours) */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 14px;
          background: #f3f5f4;
          padding: 14px 18px;
          font-size: 14px;
          outline: none;
          transition: 0.3s ease;
        }

        .input:focus {
          background: white;
          box-shadow: 0 0 0 2px #1da1f2;
        }
      `}</style>
    </section>
  );
}
