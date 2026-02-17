"use client";

import { useState } from "react";

export default function Fillingform() {
  const [activeTab, setActiveTab] = useState("personal");
  const [active, setActive] = useState("profile");
   const menu = [
    { id: "dashboard", label: "My Dashboard" },
    { id: "profile", label: "My Profile" },
    { id: "loan", label: "My Loan History" },
    { id: "gold", label: "Gold Investment" },
  ];
 

  return (
    <div className="min-h-screen bg-[#F3F1FA]">

      {/* ================= HEADER ================= */}
      <header className="bg-gradient-to-r from-[#4B2A9B] to-[#2D1B69] text-white px-6 py-4 rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <button className="text-white text-xl">←</button>
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-400">fins</span>bee.
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-[#4B2A9B] flex items-center justify-center font-semibold">
              W
            </div>
            <span>My Account</span>
          </div>

        </div>
      </header>

      {/* ================= MAIN SECTION ================= */}
      <div className="max-w-7xl mx-auto px-20 py-10 flex flex-col lg:flex-row gap-8">

        {/* ================= SIDEBAR ================= */}
        <div className="lg:w-[300px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">

        <div>
          <h2 className="text-lg font-semibold">Camron Rain</h2>
          <p className="text-sm text-gray-500 mt-1">+91 78543 98367</p>
          <p className="text-sm text-gray-500">xxxx@gmail.com</p>

          <hr className="my-6" />

          <ul className="space-y-3">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`
                  cursor-pointer px-4 py-3 rounded-lg transition-all duration-300
                  ${
                    active === item.id
                      ? "bg-yellow-300 text-black font-semibold shadow-md"
                      : "text-gray-600 hover:bg-yellow-100 hover:text-black"
                  }
                `}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-6 border border-purple-400 text-purple-600 rounded-lg py-2 hover:bg-purple-50 transition">
          Logout
        </button>
      </div>
        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">

          {/* Tabs */}
          <div className="flex border-b mb-8">
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 font-medium ${
                activeTab === "personal"
                  ? "border-b-4 border-purple-600 text-purple-700"
                  : "text-gray-500"
              }`}
            >
              Personal Detail
            </button>

            <button
              onClick={() => setActiveTab("pan")}
              className="px-6 py-2 text-gray-500"
             
                 
            >
              PAN Detail
            </button>

            <button
              onClick={() => setActiveTab("employment")}
              className="px-6 py-2 text-gray-500"
            >
              Employment Detail
            </button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-600">
                First Name (as per aadhar)
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Last Name (as per aadhar)
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Your Date of Birth
              </label>
              <input
                type="date"
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Gender
              </label>
              <select className="mt-2 w-full border rounded-lg px-4 py-3">
                
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Pincode
              </label>
              <input
                type="text"
                placeholder="Pincode"
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">
                Your Email Id
              </label>
              <input
                type="email"
                placeholder="Email"
                className="mt-2 w-full border rounded-lg px-4 py-3"
              />
            </div>

          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 transition text-black font-semibold py-3 rounded-lg">
              Update Details
            </button>
          </div>

          {/* Footer Info */}
          <div className="mt-10 text-center text-gray-400 text-sm">
            Finsbee keeps your data safe
          </div>

        </div>
      </div>
    </div>
  );
}
