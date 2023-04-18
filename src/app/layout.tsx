import React from "react";
import Head from "next/head";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import "./globals.css";
import "./style.css";
import Link from "next/link";
import fetcher from "@/fetcher";
import { RecoilProvider } from "./recoil-provider";
import CartIndicator from "./cart-indicator";
import SearchBar from "./search-bar";

export const metadata = {
  title: "Bagnique",
  description: "Buy beautiful bags",
};

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await getData();

  return (
    <html lang="en">
      <body>
        <RecoilProvider>
          <main id="layout-container">
            <section className="relative min-h-screen p-3 bg-gray-100 text-gray-700">
              <h1 className="fixed hidden left-1 top-1/4 text-gray-200 text-7xl tracking-widest [writing-mode:vertical-lr] 2xl:block">
                BAGNIQUE
              </h1>
              <h1 className="fixed hidden right-1 top-1/4 text-gray-200 text-7xl tracking-widest rotate-180 [writing-mode:vertical-rl] 2xl:block">
                BAGNIQUE
              </h1>
              <div className="max-w-7xl mx-auto my-2 space-y-8 md:my-4 md:space-y-10">
                {/* <h2 className="md:text-center text-2xl font-semibold">BAGNIQUE</h2> */}
                <header className="flex justify-between w-full items-center md:grid md:grid-cols-6">
                  {/* <Bars3BottomLeftIcon className="w-8 h-8" /> */}
                  <Link href="/">
                    <h2 className="text-lg font-semibold tracking-widest cursor-pointer md:text-xl">
                      BAGNIQUE
                    </h2>
                  </Link>

                  <div className="hidden gap-10 items-center justify-center col-start-2 col-span-4 md:flex">
                    {data.map(
                      (
                        category: { id: number; title: string },
                        index: number
                      ) => (
                        <Link
                          key={index}
                          href={`/products/categories/${category.id}`}
                        >
                          <p className="relative group cursor-pointer">
                            <span className="uppercase">{category.title}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
                          </p>
                        </Link>
                      )
                    )}
                    <Link href="contact-us">
                      <p className="relative group cursor-pointer">
                        <span className="uppercase">Contact Us</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
                      </p>
                    </Link>
                  </div>
                  <div className="flex gap-8 items-center justify-end">
                    <SearchBar screen="lg" />
                    <CartIndicator />
                  </div>
                </header>

                <SearchBar screen="sm" />

                {children}
              </div>
            </section>
          </main>
        </RecoilProvider>
      </body>
    </html>
  );
}
