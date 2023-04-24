"use client";

import React from "react";
import Switch from "../switch";
import { useRecoilState } from "recoil";
import { deliveryScheduleState } from "@/atoms";

function DeliverySchedule() {
  const [deliverySchedule, setDeliverySchedule] = useRecoilState(
    deliveryScheduleState
  );
  const [on, setOn] = React.useState(false);
  const updateOnStatus = () => {
    setOn((currentState) => !currentState);
  };

  function handleChange(event: any): void {
    const { name, value } = event.target;
    setDeliverySchedule((currentState) => ({
      ...currentState,
      [name]: value,
      filled: true,
    }));
  }

  return (
    <React.Fragment>
      <div className="flex items-center gap-4">
        <h2 className="text-gray-800 font-[500]">Schedule Delivery</h2>

        <Switch on={on} onClick={() => updateOnStatus()} />
      </div>

      {on && (
        <div className="bg-gray-50 p-4 rounded-sm shadow-sm md:p-8">
          <div className="space-y-6">
            <div className="grid gap-2">
              <label htmlFor="customer-name" className="text-sm font-light">
                Deliver Between
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  id="customer-name"
                  type="date"
                  name="available_from"
                  value={deliverySchedule.available_from}
                  onChange={handleChange}
                  placeholder="Start Date"
                  className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
                />
                <input
                  id="customer-name"
                  type="date"
                  name="available_to"
                  value={deliverySchedule.available_to}
                  onChange={handleChange}
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
                name="note"
                value={deliverySchedule.note}
                onChange={handleChange}
                placeholder="Leave a note."
                className="p-4 bg-transparent border border-gray-200 text-sm outline-none focus:border-2 focus:border-gray-600"
              />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default DeliverySchedule;
