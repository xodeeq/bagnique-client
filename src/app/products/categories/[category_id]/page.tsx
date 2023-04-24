import React from "react";
import ProductItem from "../../product-item";
import fetcher from "@/fetcher";
import { Product } from "@/models";
import ProductGrid from "../../product-grid";

async function getData(category_id: string) {
  const res = await fetcher(`commerce/product-category/${category_id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function ProductCategory({
  params: { category_id },
}: {
  params: { category_id: string };
}) {
  const { data } = await getData(category_id);

  return <ProductGrid products={data} />;
}

export default ProductCategory;
