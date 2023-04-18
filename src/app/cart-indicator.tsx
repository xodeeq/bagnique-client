"use client";

import { cartState } from "@/atoms";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

function CartIndicator() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const crtItems = localStorage.getItem("cart");
      if (crtItems) {
        setCartItems(JSON.parse(crtItems));
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (cartItems) {
        localStorage.setItem("cart", JSON.stringify(cartItems));
        console.log(cartItems);
      }
    }
  }, [cartItems]);

  return (
    <Link href="/checkout">
      <button className="relative">
        {cartItems.length > 0 ? (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] bg-gray-800 text-white rounded-full">
            {cartItems.length}
          </div>
        ) : null}
        <ShoppingBagIcon className="w-7 h-7 md:w-8 md:h-8" />
      </button>
    </Link>
  );
}

export default CartIndicator;
