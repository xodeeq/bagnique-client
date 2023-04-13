"use client";

import Image from "next/image";
import React from "react";
import RippleButton from "../ripple-button";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";
import { CartProduct, Product } from "@/models";
import useCartState from "../useCartState";

function OrderSummary() {
  const { cartItems, addToCart, removeFromCart } = useCartState();
  const [total, setTotal] = React.useState("0");

  React.useEffect(() => {
    setTotal(
      cartItems
        .reduce(
          (sum, item) => (sum += Number(item.product.price) * item.quantity),
          0
        )
        .toFixed(2)
    );
  }, [cartItems]);

  return (
    <React.Fragment>
      <div className="space-y-10">
        {cartItems.map((item: CartProduct, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-3 md:col-span-2">
              <div className="">
                <Image
                  src={item.product.product_images[0].file}
                  alt="bag"
                  width={100}
                  height={100}
                  className="drop-shadow-2xl"
                ></Image>
              </div>
            </div>
            <div className="col-span-7 space-y-1">
              <p className="font-[500]">{item.product.title}</p>
              <p className="font-extralight text-gray-400">TOASB-2S</p>
              <p className="font-[500]">$ {item.product.price}</p>
            </div>
            <div className="col-span-2 md:col-span-3">
              <div className="grid grid-rows-4 items-center p-2 text-center border border-gray-200 rounded-sm md:grid-rows-1 md:grid-cols-4">
                <RippleButton
                  onClick={() => removeFromCart(item.product)}
                  className="flex justify-center order-last md:order-first"
                >
                  <MinusSmallIcon className="w-5 stroke-2" />
                </RippleButton>
                <span className="row-span-2 font-semibold md:row-span-1 md:col-span-2">
                  {item.quantity}
                </span>
                <RippleButton
                  onClick={() => addToCart(item.product)}
                  className="flex justify-center order-first md:order-last"
                >
                  <PlusSmallIcon className="w-5 stroke-2" />
                </RippleButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <hr className="" />

        <div className="flex gap-12 justify-between items-center">
          <span className="font-extralight text-gray-500">Subtotal</span>
          <span className="font-semibold">$ {total}</span>
        </div>
        <div className="flex gap-12 justify-between items-center">
          <span className="font-extralight text-gray-500">Shipping</span>
          <span>--</span>
        </div>

        <hr className="" />

        <div className="flex gap-12 justify-between items-center">
          <span className="font-extralight text-gray-500">Total (USD)</span>
          <span className="font-semibold">$ {total}</span>
        </div>

        <RippleButton
          // onClick={() => setUI(1)}
          className="w-full p-4 text-center font-semibold bg-gray-800 text-white rounded-sm"
        >
          Confirm Order
        </RippleButton>
      </div>
    </React.Fragment>
  );
}

export default OrderSummary;
