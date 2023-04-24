import React from "react";
import fetcher from "@/fetcher";
import { Product } from "@/models";

import ProductItem from "./product-item";
import ProductGrid from "./product-grid";

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
  const { data } = await getData();

  return <ProductGrid products={data} />;
}

export default Page;
