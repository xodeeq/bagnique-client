import fetcher from "@/fetcher";
import {
  AtSymbolIcon,
  BuildingStorefrontIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import React from "react";

async function getData() {
  const res = await fetcher("cms/business-info");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function BusinessInfo() {
  const { data } = await getData();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <PhoneIcon className="w-5 h-5" />
        <span>{data.phone}</span>
      </div>
      <div className="flex gap-2">
        <AtSymbolIcon className="w-5 h-5" />
        <span>{data.email_address}</span>
      </div>
      <div className="flex gap-2">
        <BuildingStorefrontIcon className="w-5 h-5" />
        <span>{data.address}</span>
      </div>
    </div>
  );
}

export default BusinessInfo;
