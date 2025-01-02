import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyNewProduct() {
  const respone = await fetch(`${BASE_API_URL}/new_products`);
  const result = await respone.json();

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto px-2 xl:px-20 py-5">
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 border-blue-bold  mb-4">
            <p className="text-[12px]  sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              New Products
            </p>
            <Link
              href={`/products`}
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {result.map((item) => (
            <div key={item.id} className="border border-blue p-2">
              <Link href={`/products/${item.id}`}>
                <Image
                  className="mx-auto  w-full aspect-square object-contain dark:hidden transition-transform duration-300 hover:scale-105"
                  width={600}
                  height={600}
                  src={IMAGE_PRODUCT_URL + item.image}
                  alt="product"
                />
              </Link>
              <div className="pt-2">
                <Link
                  href={`/products/${item.id}`}
                  className="text-sm line-clamp-2 leading-tight text-gray-500 hover:underline dark:text-white"
                >
                  {item.title}
                </Link>
                <div className=" text-sm mt-1 overflow-hidden justify-between items-center">
                  <div className="text-color grid grid-cols-12 justify-between overflow-hidden text-sm md:text-[16px]">
                    <p className="col-span-6">Price:</p>
                    <p className="col-span-6 text-end">${item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
