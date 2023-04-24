"use client";

import { ProductImage } from "@/models";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import useCarousel from "../(hooks)/useCarousel";

function ItemCarousel({ images }: { images: ProductImage[] }) {
  const { activeSlide } = useCarousel(images.length);

  return (
    <React.Fragment>
      <div className="relative flex justify-center items-start w-full h-full bg-slate-200 rounded-sm overflow-hidden">
        {images.length > 0 ? (
          images.map((image, index) => (
            <Image
              key={index}
              src={process.env.NEXT_PUBLIC_CLOUDINARY_ROOT_URL + image.file}
              alt={"product image"}
              width={200}
              height={400}
              className={`absolute inset-0 w-full h-full object-cover bg-slate-200${
                activeSlide === index
                  ? "opacity-100 delay-100"
                  : "opacity-0 delay-200"
              } transition-opacity duration-500 ease-in-out`}
            ></Image>
          ))
        ) : (
          <div className="w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400">
            <ShoppingBagIcon className="w-20 h-20" />
            <p>No Images</p>
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-[36%] mx-auto flex gap-1 justify-center items-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              activeSlide === index
                ? "bg-gray-700/70"
                : "border border-gray-500"
            }`}
          ></div>
        ))}
        {/* <div className="w-2 h-2 rounded-full border border-gray-500"></div>
        <div className="w-2 h-2 rounded-full border border-gray-500"></div> */}
      </div>
    </React.Fragment>
  );
}

export default ItemCarousel;
