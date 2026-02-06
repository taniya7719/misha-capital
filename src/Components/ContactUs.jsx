"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-[#F7F9F8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 text-sm font-medium text-black mb-4">
              <span className="h-[1px] w-10 bg-black" />
              Let’s Start Talking
              <span className="h-[1px] w-10 bg-black" />
            </div>

            <h2 className="text-4xl font-bold text-black mb-6">
              Send Us Your Query
            </h2>

            <p className="text-gray-600 max-w-lg mb-12">
             Your Investment Banking Partner, From Seed to Success.
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94] flex items-center justify-center">
                  <MapPin className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Company Address</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    L-42, Lajpat Nagar II, New Delhi, Delhi 110024
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94] flex items-center justify-center">
                  <Phone className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Talk To Us</h4>
                  <p className="text-gray-600 text-sm mt-1">
                   +91 9220468743 
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94] flex items-center justify-center">
                  <Clock className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Office Days</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Mon–Sat: 09:00am–07:00pm <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-b from-[#0a77bf] via-[#0868a6] to-[#075c94] flex items-center justify-center">
                  <Mail className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email Us</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    customercare@finsbee.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-[32px] p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-black mb-8 text-center">
            Contact Us
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input placeholder="First Name*" className="input" />
                <input placeholder="Last Name*" className="input" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input placeholder="Email Address*" className="input" />
                <input placeholder="Phone Number*" className="input" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <select className="input text-gray-500">
    <option value="" disabled selected>
      Why are you reaching out*
    </option>
    
    <option value="funding">Funding Requirement</option>
    <option value="partnership">Partnership</option>
    <option value="investment">Investment Opportunity</option>
    <option value="other">Other</option>
  </select>
</div>


              <textarea
                placeholder="Additional Message"
                rows={4}
                className="input resize-none"
              />

              <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#8B0000] via-[#D00914] to-[#FF6A6A] px-10 py-4 font-medium text-black hover:scale-105 transition">
                Submit →
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 14px;
          background: #f3f5f4;
          padding: 14px 18px;
          font-size: 14px;
          outline: none;
        }
      `}</style>
    </section>
  );
}
