import React from "react";
import OrderSummary from "./order-summary";
import CustomerDetail from "./customer-detail";
import DeliverySchedule from "./delivery-schedule";

function Page() {
  return (
    <div
      key={4}
      className="grid gap-16 text-sm md:max-w-screen-sm md:mx-auto lg:gap-x-8 lg:max-w-none lg:grid-cols-5 lg:text-base xl:gap-x-16"
    >
      <div className="space-y-12 lg:col-span-3">
        <div className="space-y-4">
          <h2 className="text-gray-800 font-[500]">Delivery Information</h2>
          <div className="bg-gray-50 p-4 rounded-sm shadow-sm lg:p-8">
            <CustomerDetail />
          </div>
        </div>

        <div className="space-y-4">
          <DeliverySchedule />
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="space-y-4">
          <h2 className="text-gray-800 font-[500]">Order Summary</h2>
          <div className="bg-gray-50 p-4 text-sm rounded-sm shadow-sm space-y-16 lg:p-8">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
