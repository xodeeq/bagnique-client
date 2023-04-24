import Image from "next/image";
import React from "react";
import RippleButton from "@/app/ripple-button";
import fetcher from "@/fetcher";
import { Product } from "@/models";
import BackButton from "./back-button";
import BuyActionButton from "@/app/buy-action-button";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

async function getData(product_id: string) {
  const res = await fetcher(`commerce/product/${product_id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Page({
  params: { product_id },
}: {
  params: { product_id: string };
}) {
  const { data }: { data: Product } = await getData(product_id);

  return (
    <div
      key={3}
      className="grid text-sm md:text-base md:grid-cols-2 md:gap-36 md:items-end"
    >
      <div className="space-y-6 md:space-y-12">
        <BackButton />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold md:text-2xl">{data.title}</h2>
          <p className="">{data.description}</p>
        </div>
        <div className="md:hidden">
          <div className="space-y-20">
            <div className="flex items-center justify-center">
              {data.product_images.length > 0 ? (
                <Image
                  src={
                    process.env.CLOUDINARY_ROOT_URL +
                    data.product_images[0].file
                  }
                  alt="bag"
                  width={600}
                  height={600}
                  className="drop-shadow-2xl w-full max-h-[480] object-cover"
                />
              ) : (
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400">
                  <ShoppingBagIcon className=" w-32 h-32" />
                  <p>No Images</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {data.product_images.length > 0 ? (
                <>
                  <div className="border border-gray-700 ">
                    <Image
                      src={
                        process.env.CLOUDINARY_ROOT_URL +
                        data.product_images[0].file
                      }
                      alt="bag"
                      width={400}
                      height={400}
                    ></Image>
                  </div>
                  <Image
                    src={
                      process.env.CLOUDINARY_ROOT_URL +
                      data.product_images[0].file
                    }
                    alt="bag"
                    width={400}
                    height={400}
                  ></Image>
                  <Image
                    src={
                      process.env.CLOUDINARY_ROOT_URL +
                      data.product_images[0].file
                    }
                    alt="bag"
                    width={400}
                    height={400}
                  ></Image>
                </>
              ) : (
                <div className="w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400">
                  <ShoppingBagIcon className=" w-20 h-20" />
                  <p>No Images</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold md:text-xl">$ {data.price}</h2>
        </div>
        <div className="space-y-2">
          <h5>Color</h5>
          <div className="flex gap-4 items-center">
            {["lime", "teal", "amber"].map((color, i) => (
              <div
                key={i}
                className={
                  "w-6 h-6 rounded-full border border-gray-800 bg-" +
                  color +
                  "-500 md:w-8 md:h-8"
                }
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-8 text-sm">
          <BuyActionButton
            product={data}
            className="p-2 font-semibold bg-gray-700 text-gray-50 md:p-3"
          >
            Buy now
          </BuyActionButton>
          <RippleButton className="p-2 font-semibold border-2 border-gray-700 md:p-3">
            Add to cart
          </RippleButton>
        </div>
      </div>
      <div className="hidden md:block md:space-y-20">
        <div className="flex items-center justify-center">
          {data.product_images.length > 0 ? (
            <Image
              src={
                process.env.CLOUDINARY_ROOT_URL + data.product_images[0].file
              }
              alt="bag"
              width={600}
              height={600}
              className="drop-shadow-2xl w-2/5 max-h-[480] object-cover"
            />
          ) : (
            <div className="w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400">
              <ShoppingBagIcon className=" w-32 h-32" />
              <p>No Images</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-8">
          {data.product_images.length > 0 ? (
            <>
              <div className="border border-gray-700 ">
                <Image
                  src={
                    process.env.CLOUDINARY_ROOT_URL +
                    data.product_images[0].file
                  }
                  alt="bag"
                  width={200}
                  height={200}
                ></Image>
              </div>
              <Image
                src={
                  process.env.CLOUDINARY_ROOT_URL + data.product_images[0].file
                }
                alt="bag"
                width={200}
                height={200}
              ></Image>
              <Image
                src={
                  process.env.CLOUDINARY_ROOT_URL + data.product_images[0].file
                }
                alt="bag"
                width={200}
                height={200}
              ></Image>
              <Image
                src={
                  process.env.CLOUDINARY_ROOT_URL + data.product_images[0].file
                }
                alt="bag"
                width={200}
                height={200}
              ></Image>
            </>
          ) : (
            <div className="w-full h-full bg-transparent flex flex-col items-center justify-center text-gray-400">
              <ShoppingBagIcon className=" w-20 h-20" />
              <p>No Images</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
