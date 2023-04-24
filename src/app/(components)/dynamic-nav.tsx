"use client";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Portal from "../portal";
import { Category } from "@/models";
import Link from "next/link";

function DynamicNav({ categories }: { categories: Category[] }) {
  const [open, setOpen] = React.useState(false);
  const toggle = () => {
    setOpen((currentValue) => !currentValue);
  };
  return (
    <React.Fragment>
      {open ? (
        <XMarkIcon
          onClick={() => toggle()}
          className="w-7 h-7 stroke-current stroke-1 cursor-pointer sm:w-8 sm:h-8 xl:hidden"
        />
      ) : (
        <Bars3BottomRightIcon
          onClick={() => toggle()}
          className="w-7 h-7 stroke-current stroke-1 cursor-pointer sm:w-8 sm:h-8 xl:hidden"
        />
      )}
      {open && (
        <Portal parent={document.getElementById("nav-menu-container")}>
          <div className="flex gap-8 items-center justify-between flex-wrap py-6 sm:pb-0 xl:hidden">
            {categories.map((category, index) => (
              <Link key={index} href={`/products/categories/${category.id}`}>
                <p className="relative group cursor-pointer">
                  <span className="uppercase">{category.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
                </p>
              </Link>
            ))}
            <Link href="the-brand">
              <p className="relative group cursor-pointer">
                <span className="uppercase font-semibold">The Brand</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 rounded-full transition-all group-hover:w-full"></span>
              </p>
            </Link>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}

export default DynamicNav;
