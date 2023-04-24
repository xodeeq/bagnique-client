import fetcher from "@/fetcher";
import Image from "next/image";
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
  const { data } = await getData();

  return (
    <div className="space-y-8">
      <div>
        <Image
          src={process.env.CLOUDINARY_ROOT_URL + data.buniess_image}
          alt="business image"
          width={600}
          height={600}
          className="drop-shadow-2xl w-full h-auto max-w-[240px] max-h-[240px] object-cover rounded-full"
        />
      </div>
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
