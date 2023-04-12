"use client";

import React from "react";

function Switch({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`w-12 h-7 rounded-full bg-gray-800 flex items-center p-1 cursor-pointer ${
        on ? "justify-end" : ""
      }`}
    >
      <div className="w-5 h-5 bg-gray-50 rounded-full"></div>
    </div>
  );
}

export default Switch;
