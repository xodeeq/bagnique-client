import React from "react";
import "./style.css";
import Image from "next/image";
import { ContactForm } from "./contact-form";
import BusinessInfo from "./business-info";
import fetcher from "@/fetcher";
import Link from "next/link";

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

async function Footer() {
  const { data } = await getData();

  const socials = (
    <ul>
      <div className="flex gap-4">
        <Image
          src="/whatsapp.svg"
          alt="Whatsapp Logo"
          className="text-blue-800 dark:invert"
          width={24}
          height={24}
          priority
        />
      </div>
      <li>
        <a className="facebook" href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  );
  return (
    <footer className="bg-gray-800 text-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-12 lg:grid-cols-2">
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-base font-semibold tracking-widest cursor-pointer md:text-lg">
              BAGNIQUE
            </h2>
            <p>The home of the best bags</p>
            {/* @ts-expect-error Async Server Component */}
            <BusinessInfo />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Top Categories</h3>

            {data.map(
              (
                category: {
                  id: number;
                  title: string;
                },
                index: number
              ) => (
                <div key={index}>
                  <Link href={`/products/categories/${category.id}`}>
                    <p className="opacity-80 hover:opacity-100">
                      {category.title}
                    </p>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Contact Us</h3>
          <ContactForm />
        </div>
      </div>
      <p className="text-center px-2 py-8">&copy; Bagnique 2023</p>
    </footer>
  );
}

export default Footer;
