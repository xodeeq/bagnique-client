"use client";

import React from "react";

function CustomerDetail() {
  const [customerDetail, setCustomerDetail] = React.useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip_code: "",
    address: "",
  });

  function handleChange(event: any): void {
    const { name, value } = event.target;
    setCustomerDetail((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="grid gap-2">
        <label htmlFor="customer-name" className="text-sm font-light">
          Name
        </label>
        <input
          id="customer-name"
          type="text"
          name="name"
          value={customerDetail.name}
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
          value={customerDetail.phone}
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
          name="email"
          value={customerDetail.email}
          onChange={handleChange}
          placeholder="customer@bagnique.com"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="customer-city" className="text-sm font-light">
          City
        </label>
        <input
          id="customer-city"
          type="text"
          name="city"
          value={customerDetail.city}
          onChange={handleChange}
          placeholder="Hawthorne"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="customer-state" className="text-sm font-light">
          State
        </label>
        <input
          id="customer-state"
          type="text"
          name="state"
          value={customerDetail.state}
          onChange={handleChange}
          placeholder="California"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="customer-zip" className="text-sm font-light">
          ZIP
        </label>
        <input
          id="customer-zip"
          type="text"
          name="zip_code"
          value={customerDetail.zip_code}
          onChange={handleChange}
          placeholder="90250"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>

      <div className="grid gap-2 col-span-2">
        <label htmlFor="customer-address" className="text-sm font-light">
          Address
        </label>
        <input
          id="customer-address"
          type="text"
          name="address"
          value={customerDetail.address}
          onChange={handleChange}
          placeholder="4796 Libby Street"
          className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
        />
      </div>
    </div>
  );
}

export default CustomerDetail;
