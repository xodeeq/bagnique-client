import Head from "next/head";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import RippleButton from "./ripple-button";
import fetcher from "@/fetcher";
import Link from "next/link";
import BuyActionButton from "./buy-action-button";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetcher("cms/hero-content");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Home() {
  const { data } = await getData();

  return (
    <div className="md:grid md:grid-cols-7 md:gap-24">
      <div className="text-center space-y-4 md:text-start md:space-y-12 md:mt-24 md:col-span-3">
        <div className="space-y-2 md:space-y-4">
          <h5 className="tracking-wide md:tracking-widest">
            {data.hero_secondary_text}
          </h5>

          <h1 className="font-extrabold text-4xl text-transparent bg-gradient-to-br from-gray-500 to-gray-900 bg-clip-text sm:text-5xl md:text-6xl md:tracking-wide md:leading-snug lg:text-7xl">
            {data.hero_primary_text}
          </h1>
        </div>

        <div className="space-y-2 md:hidden">
          <Image
            src={
              process.env.CLOUDINARY_ROOT_URL +
              data.top_products[0].product_images[0].file
            }
            alt="bag"
            width={600}
            height={600}
            className="drop-shadow-2xl"
          />
          <div className="flex gap-1 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          </div>
        </div>

        <p className="text-xl md:text-2xl lg:text-3xl">
          $ {data.top_products[0].price}
        </p>

        <div className="hidden md:block">
          <h4 className="text-sm">VARIATIONS (4)</h4>
          <div className="grid grid-cols-4 gap-8">
            <Image
              src={
                process.env.CLOUDINARY_ROOT_URL +
                data.top_products[0].product_images[0].file
              }
              alt="bag"
              width={400}
              height={400}
            ></Image>
            <Image
              src={
                process.env.CLOUDINARY_ROOT_URL +
                data.top_products[0].product_images[0].file
              }
              alt="bag"
              width={400}
              height={400}
            ></Image>
            <Image
              src={
                process.env.CLOUDINARY_ROOT_URL +
                data.top_products[0].product_images[0].file
              }
              alt="bag"
              width={400}
              height={400}
            ></Image>
            <Image
              src={
                process.env.CLOUDINARY_ROOT_URL +
                data.top_products[0].product_images[0].file
              }
              alt="bag"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8">
          <BuyActionButton
            product={data.top_products[0]}
            className="py-2 px-8 font-semibold bg-gray-700 text-gray-50 rounded-sm md:py-3 md:px-12 md:text-sm"
          >
            Buy this bag
          </BuyActionButton>

          <Link href="/products">
            <RippleButton className="py-2 px-8 font-semibold border-2 border-gray-700 rounded-sm md:py-3 md:px-12 md:text-sm">
              See Products
            </RippleButton>
          </Link>
        </div>
      </div>
      <div className="hidden col-span-4 gap-4 md:flex">
        <div className="flex items-center justify-center w-[680px] h-[680px] bg-gray-50 rounded-full">
          <Image
            src={
              process.env.CLOUDINARY_ROOT_URL +
              data.top_products[0].product_images[0].file
            }
            alt="bag"
            width={600}
            height={600}
            className="drop-shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-50"></div>
          <div className="w-1 h-1 rounded-full bg-gray-50"></div>
          <div className="w-1 h-1 rounded-full bg-gray-50"></div>
          <div className="w-1 h-1 rounded-full bg-gray-50"></div>
          <div className="w-1 h-1 rounded-full bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
