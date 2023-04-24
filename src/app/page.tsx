import React from "react";
import { Inter } from "next/font/google";
import RippleButton from "./ripple-button";
import fetcher from "@/fetcher";
import Link from "next/link";
import Carousel from "./(components)/carousel";

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
    <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-7 lg:gap-24">
      <div className="text-center space-y-4 lg:text-start lg:space-y-12 lg:mt-24 lg:col-span-3">
        <div className="space-y-2 lg:space-y-4">
          <h5 className="uppercase tracking-wide lg:tracking-widest">
            {data.hero_secondary_text}
          </h5>

          <h1 className="font-extrabold text-4xl text-transparent bg-gradient-to-br from-gray-500 to-gray-900 bg-clip-text sm:text-5xl lg:text-6xl lg:tracking-wide lg:leading-snug">
            {data.hero_primary_text}
          </h1>
        </div>

        {/* <div className="space-y-2 lg:hidden">
          <Image
            src={
              process.env.CLOUDINARY_ROOT_URL +
              data.top_products[0].product_images[0].file
            }
            alt="bag"
            width={600}
            height={600}
            className="w-full h-auto object-cover drop-shadow-2xl"
          />
          <div className="flex gap-1 items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
          </div>
        </div> */}

        <p className="text-xl lg:text-2xl">$ {data.top_products[0].price}</p>

        {/* <div className="hidden lg:block">
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
        </div> */}

        <div className="grid grid-cols-2 gap-4 items-center lg:gap-8">
          <Link href={`/products/categories/${data.top_category.id}`}>
            <RippleButton className="w-full py-3 px-6 text-xs font-semibold bg-gray-800 text-gray-50 rounded-sm lg:py-3 lg:px-12 lg:text-sm">
              Shop Collection
            </RippleButton>
          </Link>

          <Link href="/products">
            <RippleButton className="w-full py-3 px-8 text-xs font-semibold border-2 border-gray-800 rounded-sm lg:py-3 lg:px-12 lg:text-sm">
              Explore Products
            </RippleButton>
          </Link>
        </div>
      </div>
      <div className="flex flex-col col-span-4 gap-4 lg:flex-row">
        <Carousel products={data.top_products} />
      </div>
    </div>
  );
}

export default Home;
