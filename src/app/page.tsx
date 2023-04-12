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
  const data = await getData();

  return (
    <div className="md:grid md:grid-cols-7 md:gap-24">
      <div className="md:space-y-12 mt-24 col-span-3">
        <div className="space-y-4">
          <h5 className="tracking-widest">{data.hero_secondary_text}</h5>

          <h1 className="font-extrabold text-4xl text-transparent tracking-wide leading-relaxed bg-gradient-to-br from-gray-500 to-gray-900 bg-clip-text sm:text-5xl md:text-6xl md:leading-snug lg:text-7xl">
            {data.hero_primary_text}
          </h1>
        </div>

        <p className="md:text-2xl lg:text-3xl">
          $ {data.top_products[0].price}
        </p>

        <div>
          <h4>VARIATIONS (4)</h4>
          <div className="grid grid-cols-4 gap-8">
            <Image
              src={data.top_products[0].product_images[0].file}
              alt="bag"
              width={200}
              height={200}
            ></Image>
            <Image
              src={data.top_products[0].product_images[0].file}
              alt="bag"
              width={200}
              height={200}
            ></Image>
            <Image
              src={data.top_products[0].product_images[0].file}
              alt="bag"
              width={200}
              height={200}
            ></Image>
            <Image
              src={data.top_products[0].product_images[0].file}
              alt="bag"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8">
          <BuyActionButton
            product={data.top_products[0]}
            className="py-3 px-12 text-sm font-semibold bg-gray-700 text-gray-50 rounded-sm"
          >
            Buy this bag
          </BuyActionButton>

          <Link href="/products">
            <RippleButton className="py-3 px-12 text-sm font-semibold border-2 border-gray-700 rounded-sm">
              See Products
            </RippleButton>
          </Link>
        </div>
      </div>
      <div className="col-span-4 flex gap-4">
        <div className="flex items-center justify-center w-[680px] h-[680px] bg-gray-50 rounded-full">
          <Image
            src={data.top_products[0].product_images[0].file}
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
