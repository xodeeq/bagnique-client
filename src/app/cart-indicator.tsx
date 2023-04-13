"use client";

import { cartState } from "@/atoms";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useRecoilValue } from "recoil";

function CartIndicator() {
  const cartItems = useRecoilValue(cartState);
  return (
    <button className="relative">
      {cartItems.length > 0 ? (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] bg-gray-800 text-white rounded-full">
          {cartItems.length}
        </div>
      ) : null}
      <ShoppingBagIcon className="w-7 h-7 md:w-8 md:h-8" />
    </button>
  );
}

export default CartIndicator;
