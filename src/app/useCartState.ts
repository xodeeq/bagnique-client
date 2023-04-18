"use client";

import { cartState } from "@/atoms";
import { CartProduct, Product } from "@/models";
import React from "react";
import { useRecoilState } from "recoil";

function useCartState() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      let exists = false;
      let output = currentItems.map((item) => {
        if ((item as CartProduct).product.id === product.id) {
          let newItem = { ...(item as CartProduct) };
          newItem.quantity += 1;
          exists = true;
          return newItem;
        }
        return item;
      });
      if (!exists) {
        const newItem = { product: product, quantity: 1 };
        (output as CartProduct[]).push(newItem);
      }
      return output as never[];
    });
  };

  const removeFromCart = (product: Product) => {
    setCartItems((currentItems) => {
      const productIndex = currentItems.findIndex(
        (item) => item["product"]["id"] === product.id
      );
      if (productIndex >= 0) {
        let output: any = [...currentItems];
        let newItem = { ...(output as CartProduct[])[productIndex] };
        if (newItem["quantity"] > 1) {
          newItem["quantity"] -= 1;
          output[productIndex] = newItem;
        } else {
          output.splice(productIndex, 1);
        }
        return output;
      }
      return currentItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
  };

  return {
    cartItems: cartItems as CartProduct[],
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export default useCartState;
