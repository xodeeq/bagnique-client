import fetcher from "@/fetcher";
import Link from "next/link";
import React from "react";
import SearchBar from "../search-bar";
import CartIndicator from "../cart-indicator";
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import DynamicNav from "./dynamic-nav";

async function getData() {
  const res = await fetcher("cms/top-categories");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Header() {
  const { data } = await getData();
  return (
    <header className="p-2 md:p-4">
      <div className="flex justify-between gap-4 w-full items-center">
        {/* <Bars3BottomLeftIcon className="w-8 h-8" /> */}
        <Link href="/" className="">
          <h2 className="text-base font-semibold tracking-widest cursor-pointer md:text-lg">
            BAGNIQUE
          </h2>
        </Link>

        <div className="hidden gap-10 items-center justify-center xl:flex xl:flex-grow">
          {data.map(
            (
              category: {
                id: number;
                title: string;
              },
              index: number
            ) => (
              <Link key={index} href={`/products/categories/${category.id}`}>
                <p className="relative group cursor-pointer">
                  <span className="uppercase">{category.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
                </p>
              </Link>
            )
          )}
          <Link href="the-brand">
            <p className="relative group cursor-pointer">
              <span className="uppercase font-semibold">The Brand</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
            </p>
          </Link>
        </div>
        <div className="hidden sm:block sm:flex-grow lg:flex-grow-0">
          <SearchBar />
        </div>
        <div className="flex gap-8 items-center justify-end">
          <CartIndicator />
          <DynamicNav categories={data} />
        </div>
      </div>
      <div id="nav-menu-container"></div>
      <div className="block sm:hidden">
        <SearchBar />
      </div>
    </header>
  );
}
