import { ContactForm } from "./../(components)/contact-form";
import React from "react";
import RippleButton from "../ripple-button";
import AboutUs from "./about-us";

function Page() {
  return (
    <div
      key={5}
      className="grid gap-16 text-sm md:max-w-screen-sm md:mx-auto lg:gap-x-8 lg:max-w-none lg:grid-cols-2 lg:text-base xl:gap-x-16"
    >
      <div className="space-y-4">
        <h2 className="text-gray-800 font-[500]">About Us</h2>
        {/* @ts-expect-error Async Server Component */}
        <AboutUs />
      </div>
      <div className="space-y-4">
        <h2 className="text-gray-800 font-[500]">Contact Us</h2>
        <div className="bg-gray-50 p-4 rounded-sm shadow-sm lg:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Page;
