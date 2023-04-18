import { Product } from "@/models";
import Image from "next/image";
import React from "react";
import BuyActionButton from "../buy-action-button";
import Link from "next/link";
import RippleButton from "../ripple-button";

function ProductItem({ product }: { product: Product }) {
  return (
    <div className="relative bg-gray-50 h-96 space-y-4 rounded-sm shadow-md">
      <div className="flex justify-center items-start w-full h-full bg-slate-200 rounded-sm">
        <Image
          src={process.env.CLOUDINARY_ROOT_URL + product.product_images[0].file}
          alt={product.title}
          width={200}
          height={400}
          className="w-full bg-slate-200"
        ></Image>
      </div>
      <div className="absolute inset-x-0 bottom-[36%] mx-auto flex gap-1 justify-center items-center">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full border border-gray-500"></div>
        <div className="w-2 h-2 rounded-full border border-gray-500"></div>
      </div>
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
