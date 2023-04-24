"use client";

import { Product, ProductImage } from "@/models";
import Image from "next/image";
import React from "react";
import useCarousel from "../(hooks)/useCarousel";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Carousel({ products }: { products: Product[] }) {
  const { activeSlide } = useCarousel(products.length);

  return (
    <React.Fragment>
      <div className="relative flex items-center justify-center h-[320px] w-[320px] bg-gray-50 rounded-full overflow-hidden md:w-[480px] md:h-[480px] lg:w-[680px] lg:h-[680px]">
        {products.map((product, index) =>
          product.product_images.length > 0 ? (
            <Image
              key={index}
              src={
                process.env.NEXT_PUBLIC_CLOUDINARY_ROOT_URL +
                product.product_images[0].file
              }
              alt={"bag"}
              width={600}
              height={600}
              className={`absolute inset-0 w-full h-full object-cover drop-shadow-2xl ${
                activeSlide === index
                  ? "opacity-100 delay-100"
                  : "opacity-0 delay-200"
              } transition-opacity duration-500 ease-in-out`}
            />
          ) : (
            <div
              key={index}
              className={`w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400 ${
                activeSlide === index
                  ? "opacity-100 delay-100"
                  : "opacity-0 delay-200"
              } transition-opacity duration-500 ease-in-out`}
            >
              <ShoppingBagIcon className=" w-32 h-32" />
              <p>No Images</p>
            </div>
          )
        )}
      </div>
      <div className="flex gap-1 items-center justify-center lg:flex-col">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-${activeSlide === index ? "2" : "1"} h-${
              activeSlide === index ? "2" : "1"
            } rounded-full bg-gray-${
              activeSlide === index ? "5" : "4"
            }00 transition-all ease-in-out duration-500`}
          ></div>
        ))}
        {/* <div className="w-1 h-1 rounded-full bg-gray-400"></div>
        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
        <div className="w-1 h-1 rounded-full bg-gray-400"></div>
        <div className="w-1 h-1 rounded-full bg-gray-400"></div> */}
      </div>
    </React.Fragment>
  );
}

export default Carousel;
