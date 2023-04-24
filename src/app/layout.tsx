import React from "react";

import "./globals.css";
import "./style.css";
import Link from "next/link";
import fetcher from "@/fetcher";
import { RecoilProvider } from "./recoil-provider";
import CartIndicator from "./cart-indicator";
import SearchBar from "./search-bar";
import Footer from "./(components)/footer";
import Header from "./(components)/header";

export const metadata = {
  title: "Bagnique",
  description: "Buy beautiful bags",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <RecoilProvider>
          {/* @ts-expect-error Async Server Component */}
          <Header />
          <main id="layout-container">
            <section className="relative p-3 text-sm bg-gray-100 text-gray-800">
              <h1 className="fixed hidden left-1 top-1/4 text-gray-200 text-7xl tracking-widest [writing-mode:vertical-lr] 2xl:block">
                BAGNIQUE
              </h1>
              <h1 className="fixed hidden right-1 top-1/4 text-gray-200 text-7xl tracking-widest rotate-180 [writing-mode:vertical-rl] 2xl:block">
                BAGNIQUE
              </h1>
              <div className="mx-auto my-2 space-y-8 md:my-4 md:space-y-10 md:max-w-7xl">
                {children}
              </div>
            </section>
          </main>
          {/* @ts-expect-error Async Server Component */}
          <Footer />
        </RecoilProvider>
      </body>
    </html>
  );
}
