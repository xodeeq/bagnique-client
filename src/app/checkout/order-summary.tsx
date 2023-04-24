"use client";

import Image from "next/image";
import React from "react";
import RippleButton from "../ripple-button";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, customerDetailState, deliveryScheduleState } from "@/atoms";
import { CartProduct, Product } from "@/models";
import useCartState from "../useCartState";
import fetcher from "@/fetcher";
import useCustomerDetailState from "./useCustomerDetailState";
import { useRouter } from "next/navigation";
import clientFetcher from "@/client-fetcher";

function OrderSummary() {
  const router = useRouter();
  const [deliverySchedule, setDeliverySchedule] = useRecoilState(
    deliveryScheduleState
  );
  const { cartItems, addToCart, removeFromCart, clearCart } = useCartState();
  const { customerDetail, detailErrors, setDetailErrors, checked, setChecked } =
    useCustomerDetailState();
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

  const placeOrder = async () => {
    if (detailErrors.cleared) {
      const payload = {
        ...customerDetail,
        order_products: cartItems.map(({ product, quantity }) => ({
          product: product.id,
          quantity,
        })),
        delivery_schedule: deliverySchedule.filled ? deliverySchedule : null,
      };
      // const request = new Request("/api/place-order", {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      // });
      // const res = await fetch(request);
      const res = await clientFetcher("commerce/place-order", "post", payload);
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      // Recommendation: handle errors
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(JSON.stringify(data, null, 2));

      if (data.hasOwnProperty("errors")) {
        setDetailErrors(data.errors);
      } else {
        clearCart();
        router.push("/");
      }
    } else {
      console.log(JSON.stringify(detailErrors, null, 2));
    }
    setChecked(true);
  };

  return (
    <React.Fragment>
      <div className="space-y-10">
        {cartItems.map((item: CartProduct, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-3 md:col-span-2">
              <div className="">
                <Image
                  src={
                    process.env.NEXT_PUBLIC_CLOUDINARY_ROOT_URL +
                    item.product.product_images[0].file
                  }
                  alt="bag"
                  width={100}
                  height={100}
                  className=""
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
          onClick={() => placeOrder()}
          disabled={(checked && !detailErrors.cleared) || cartItems.length < 1}
          className="w-full p-4 text-center font-semibold bg-gray-800 text-white rounded-sm"
        >
          Confirm Order
        </RippleButton>
      </div>
    </React.Fragment>
  );
}

export default OrderSummary;
