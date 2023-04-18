"use client";

import { customerDetailState } from "@/atoms";
import React from "react";
import { useRecoilState } from "recoil";
import useCustomerDetailState from "../useCustomerDetailState";

function CustomerDetail() {
  const { customerDetail, setCustomerDetail, detailErrors, setDetailErrors } =
    useCustomerDetailState();

  function handleChange(event: any): void {
    const { name, value } = event.target;
    setCustomerDetail((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const customer = localStorage.getItem("customer");
      if (customer) {
        setCustomerDetail(JSON.parse(customer));
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (customerDetail) {
        localStorage.setItem("customer", JSON.stringify(customerDetail));
      }
    }
  }, [customerDetail]);

  return (
    <div className="grid gap-6 md:grid-cols-2">
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
          className={`p-4 bg-transparent border border-${
            detailErrors.name?.length > 0 ? "red-200" : "gray-200"
          } text-sm outline-none focus:border-2 focus:border-gray-600`}
        />
        {/* {detailErrors.name?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
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
        {/* {detailErrors.phone?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
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
        {/* {detailErrors.email?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
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
        {/* {detailErrors.city?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
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
        {/* {detailErrors.state?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
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
        {/* {detailErrors.zip_code?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
      </div>

      <div className="grid gap-2 md:col-span-2">
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
        {/* {detailErrors.address?.map((error, index) => (
          <p key={index} className="text-xs font-thin text-red-600">
            {error}
          </p>
        ))} */}
      </div>
    </div>
  );
}

export default CustomerDetail;
