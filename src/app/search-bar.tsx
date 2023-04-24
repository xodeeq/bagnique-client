"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import RippleButton from "./ripple-button";

function SearchBar() {
  const [searchText, setSearchText] = React.useState("");
  const handleChange = (e: any) => {
    setSearchText(e.target.value);
  };
  const clearSearchText = () => {
    setSearchText("");
  };
  return (
    <div className="w-full mx-auto flex gap-1 items-center border-2 border-gray-400 rounded-sm sm:max-w-7xl">
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
      <div className="p-2 cursor-pointer" onClick={() => clearSearchText()}>
        <XMarkIcon className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );
}

export default SearchBar;
