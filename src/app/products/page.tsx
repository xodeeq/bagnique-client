import React from "react";
import fetcher from "@/fetcher";
import { Product } from "@/models";

import ProductItem from "./product-item";

async function getData() {
  const res = await fetcher("commerce/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Page() {
  const data = await getData();

  return (
    <div className="grid gap-12 md:grid-cols-4">
      {data.map((product: Product, index: number) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
}

export default Page;
