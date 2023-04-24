import { Product } from "@/models";
import React from "react";
import ProductItem from "./product-item";

function ProductGrid({ products }: { products: Product[] }) {
  return products && products.length > 0 ? (
    <div className="grid gap-12 max-w-md mx-auto sm:max-w-none sm:grid-cols-2 md:max-w-2xl lg:max-w-5xl lg:grid-cols-3 xl:max-w-none xl:grid-cols-4">
      {products.map((product: Product, index: number) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-300 text-4xl min-h-[320px]">
      There are no products in this category at the moment
    </div>
  );
}

export default ProductGrid;
