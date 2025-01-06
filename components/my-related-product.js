import { IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyRelatedProduct({ productRelated, categoryId }) {
  return (
    <div>
      <div className="px-2 py-5 mx-auto max-w-screen-2xl xl:px-20">
        <div>
          <div className="flex items-center justify-between pb-1 mb-4 border-b-2 border-blue-bold">
            <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              Related products
            </p>
            <Link
              href={`/products?categoryId=${categoryId}`}
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {productRelated?.map((item) => (
            <div key={item.id} className="p-2 border border-blue">
              <div className="w-full aspect-square">
                <Link href="/products">
                  <Image
                    className="object-contain w-full mx-auto transition-transform duration-300 aspect-square dark:hidden hover:scale-105"
                    width={600}
                    height={600}
                    src={IMAGE_PRODUCT_URL + item.image}
                    alt="product"
                  />
                </Link>
              </div>
              <div className="pt-2">
                <Link
                  href="/products"
                  className="text-sm leading-tight text-gray-500 line-clamp-2 hover:underline dark:text-white"
                >
                  {item.title}
                </Link>
                <div className="items-center justify-between mt-1 overflow-hidden text-sm ">
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
    </div>
  );
}
