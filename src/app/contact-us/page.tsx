import React from "react";
import RippleButton from "../ripple-button";
import AboutUs from "./about-us";

function Page() {
  return (
    <div key={5} className="grid gap-16 text-sm md:grid-cols-2 md:text-base">
      <div className="space-y-4">
        <h2 className="text-gray-800 font-[500]">About Us</h2>
        {/* @ts-expect-error Async Server Component */}
        <AboutUs />
      </div>
      <div className="space-y-4">
        <h2 className="text-gray-800 font-[500]">Contact Us</h2>
        <div className="bg-gray-50 p-4 rounded-sm shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="customer-name" className="text-sm font-light">
                Name
              </label>
              <input
                id="customer-name"
                type="text"
                placeholder="James McBagnique"
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="customer-line" className="text-sm font-light">
                Mobile Number
              </label>
              <input
                id="customer-line"
                type="text"
                placeholder="+1 222-222-2222"
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="customer-email" className="text-sm font-light">
                Email Address
              </label>
              <input
                id="customer-email"
                type="text"
                placeholder="customer@bagnique.com"
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="customer-dubject" className="text-sm font-light">
                Subject
              </label>
              <input
                id="customer-dubject"
                type="text"
                placeholder="What is this message about?"
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>

            <div className="grid gap-2 md:col-span-2">
              <label htmlFor="customer-message" className="text-sm font-light">
                Message
              </label>
              <textarea
                id="customer-message"
                placeholder="Write your message here..."
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>

            <RippleButton className="w-full p-4 text-center font-semibold bg-gray-800 text-white rounded-sm md:col-span-2">
              Send Message
            </RippleButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
