import fetcher from "@/fetcher";
import React from "react";

async function getData() {
  const res = await fetcher("cms/about-us");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function AboutUs() {
  const data = await getData();

  return (
    <div className="space-y-8">
      <h3>{data.short_about_us}</h3>
      {data.long_about_us
        .split(/\r?\n/)
        .map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
    </div>
  );
}

export default AboutUs;
