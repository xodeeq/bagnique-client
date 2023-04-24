"use client";

import React from "react";
import RippleButton from "../ripple-button";
import useCustomerFeedbackState from "../(hooks)/useCustomerFeedbackState";
import clientFetcher from "@/client-fetcher";

export function ContactForm({}) {
  const {
    customerFeedback,
    setCustomerFeedback,
    feedbackErrors,
    setFeedbackErrors,
    checked,
    setChecked,
  } = useCustomerFeedbackState();

  const sendFeedback = async () => {
    if (feedbackErrors.cleared) {
      const payload = {
        ...customerFeedback,
      };
      const res = await clientFetcher("commerce/feedback", "post", payload);
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      // Recommendation: handle errors
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(JSON.stringify(data, null, 2));

      if (data.hasOwnProperty("errors")) {
        setFeedbackErrors(data.errors);
      } else {
        clearCart();
      }
    } else {
      console.log(JSON.stringify(feedbackErrors, null, 2));
    }
    setChecked(true);
  };

  const clearCart = () => {
    setCustomerFeedback({
      name: "",
      email_address: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  function handleChange(event: any): void {
    const { name, value } = event.target;
    setCustomerFeedback((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <div className="grid gap-2">
        <label htmlFor="customer-name" className="text-sm font-light">
          Name
        </label>
        <input
          id="customer-name"
          type="text"
          name="name"
          value={customerFeedback.name}
          onChange={handleChange}
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
          name="phone"
          value={customerFeedback.phone}
          onChange={handleChange}
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
          name="email_address"
          value={customerFeedback.email_address}
          onChange={handleChange}
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
          name="subject"
          value={customerFeedback.subject}
          onChange={handleChange}
          placeholder="What is this message about?"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <div className="grid gap-2 sm:col-span-2 lg:col-span-1 xl:col-span-2">
        <label htmlFor="customer-message" className="text-sm font-light">
          Message
        </label>
        <textarea
          id="customer-message"
          name="message"
          value={customerFeedback.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <RippleButton
        onClick={() => sendFeedback()}
        disabled={checked && !feedbackErrors.cleared}
        className="w-full p-4 text-center font-semibold border border-gray-200 rounded-sm sm:col-span-2 lg:col-span-1 xl:col-span-2"
      >
        Send Message
      </RippleButton>
    </div>
  );
}
