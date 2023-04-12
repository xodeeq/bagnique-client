"use client";

import { useRouter } from "next/navigation";
import RippleButton from "@/app/ripple-button";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <RippleButton
      onClick={() => goBack()}
      className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full"
    >
      <ArrowLeftIcon className="w-6" />
    </RippleButton>
  );
}

export default BackButton;
