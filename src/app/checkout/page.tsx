import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import RippleButton from "../ripple-button";
import OrderSummary from "./order-summary";
import CustomerDetail from "./customer-detail";

function Page() {
  return (
    <div key={4} className="grid gap-16 md:grid-cols-5">
      <div className="space-y-12 md:col-span-3">
        <div className="space-y-4">
          <h2 className="text-gray-800 font-[500]">Delivery Information</h2>
          <div className="bg-gray-50 p-4 rounded-sm shadow-sm md:p-8">
            <CustomerDetail />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-gray-800 font-[500]">Schedule Delivery</h2>

            {/* <Switch on={on} onClick={() => updateOnStatus()} /> */}
          </div>

          {true && (
            <div className="bg-gray-50 p-4 rounded-sm shadow-sm md:p-8">
              <div className="space-y-6">
                <div className="grid gap-2">
                  <label htmlFor="customer-name" className="text-sm font-light">
                    Deliver Between
                  </label>

                  <div className="grid grid-cols-2 gap-6">
                    <input
                      id="customer-name"
                      type="date"
                      placeholder="Start Date"
                      className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
                    />
                    <input
                      id="customer-name"
                      type="date"
                      placeholder="End Date"
                      className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="customer-name" className="text-sm font-light">
                    Note
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    placeholder="Leave a note."
                    className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="space-y-4">
          <h2 className="text-gray-800 font-[500]">Order Summary</h2>
          <div className="bg-gray-50 p-4 text-sm rounded-sm shadow-sm space-y-16 md:p-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
