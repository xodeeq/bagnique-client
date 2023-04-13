"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import RippleButton from "./ripple-button";

function SearchBar({ screen = "sm" }: { screen: "sm" | "lg" }) {
  const [searchText, setSearchText] = React.useState("");
  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };
  return {
    sm: (
      <div className="w-full flex gap-1 items-center border-2 border-gray-500 md:hidden">
        <div className="">
          <Link
            href={{
              pathname: "/products",
              query: { search: searchText },
            }}
          >
            <RippleButton className="flex items-center justify-center w-10 h-10 bg-gray-50">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </RippleButton>
          </Link>
        </div>
        <input
          type="search"
          name=""
          id=""
          value={searchText}
          onChange={handleChange}
          placeholder="Search"
          className="flex-grow text-sm p-1 bg-transparent outline-none"
        />
        <div className="p-2">
          <XMarkIcon className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    ),
    lg: (
      <div className="hidden group gap-1 items-center hover:border-2 hover:border-gray-500 hover:rounded-full md:flex">
        <button className="flex gap-2 items-center">
          <Link
            href={{
              pathname: "/products",
              query: { search: searchText },
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
          </Link>
          <span className="text-gray-400 text-sm group-hover:hidden">
            Search
          </span>
        </button>
        <input
          type="search"
          name=""
          id=""
          value={searchText}
          onChange={handleChange}
          placeholder="Search"
          className="w-0 text-sm bg-transparent outline-none transition-all duration-500 group-hover:w-auto"
        />
        <div className="hidden group-hover:block group-hover:p-2 group-hover:cursor-pointer">
          <XMarkIcon className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    ),
  }[screen];
}

export default SearchBar;
