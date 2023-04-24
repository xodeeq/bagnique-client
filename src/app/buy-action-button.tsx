"use client";

import React from "react";
import { useRouter } from "next/navigation";
import RippleButton from "./ripple-button";
import Popup from "./popup";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms";
import { CartProduct } from "@/models";
import useCartState from "./useCartState";

function BuyActionButton(props: any) {
  const [open, setOpen] = React.useState(false);
  const { addToCart } = useCartState();
  const router = useRouter();

  const handleClick = (event: any) => {
    props.onClick && props.onClick(event);
    addToCart(props.product);
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const placeOrder = () => {
    close();
    router.push("/checkout");
  };

  return (
    <React.Fragment>
      <RippleButton onClick={handleClick} {...props} />
      <Popup open={open} onClose={close} locked={false}>
        <div className="flex gap-8">
          <RippleButton
            onClick={() => placeOrder()}
            className="py-3 px-6 border-2 border-gray-700 text-gray-700 rounded-sm"
          >
            Place order
          </RippleButton>
          <RippleButton
            onClick={() => close()}
            className="py-3 px-6 border-2 border-gray-700 text-gray-700 rounded-sm"
          >
            Continue shopping
          </RippleButton>
        </div>
      </Popup>
    </React.Fragment>
  );
}

export default BuyActionButton;
