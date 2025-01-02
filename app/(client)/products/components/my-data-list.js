import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyDataList({ search, categoryId }) {
  const res = await fetch(
    `${BASE_API_URL}/products?search=${search || ""}&categoryId=${
      categoryId || ""
    }`
  );
  const result = await res.json();
  const products = result?.data;
  return (
    <>
      <div className="flex-1 ">
        <div className="mb-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 ">
          <>
            {products?.map((item) => (
              <div key={item.id} className="border border-blue p-2">
                <Link href={`/products/${item.id}`} key={item.id}>
                  <Image
                    width={600}
                    height={600}
                    className="mx-auto w-full aspect-square object-contain dark:hidden transition-transform duration-300 hover:scale-105"
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
          </>
        </div>
      </div>
    </>
  );
}
