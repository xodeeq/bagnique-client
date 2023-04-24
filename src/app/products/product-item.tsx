import { Product } from "@/models";
import Image from "next/image";
import React from "react";
import BuyActionButton from "../buy-action-button";
import Link from "next/link";
import RippleButton from "../ripple-button";
import useCarousel from "../(hooks)/useCarousel";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ItemCarousel from "./item-carousel";

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="relative bg-gray-50 h-96 space-y-4 rounded-sm shadow-md">
      <ItemCarousel images={product.product_images} />
      <div className="absolute inset-x-0 bottom-0 h-2/6 w-[96%] p-4 space-y-2 mx-auto rounded-t-xl text-sm bg-gray-50">
        <h3 className="font-semibold">{product.title}</h3>
        <p>$ {product.price}</p>
        <div className="grid grid-cols-2 gap-4">
          <BuyActionButton
            product={product}
            className="w-full text-xs font-semibold p-2 bg-gray-700 text-gray-50 rounded-sm"
          >
            Buy Now
          </BuyActionButton>
          <Link href={`products/${product.id}`}>
            <RippleButton className="w-full text-xs font-semibold p-2 border-2 border-gray-500 rounded-sm">
              View Product
            </RippleButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
