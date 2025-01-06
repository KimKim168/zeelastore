import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";

export default async function MyListProducts() {
  // const res = await fetch(BASE_API_URL + "/brands?with_books=1"); //brands
  const res = await fetch(BASE_API_URL + "/category_with_products");
  const categories = await res.json();
  // console.log(categories);

  return (
    <>
      <section className="max-w-screen-2xl  mx-auto px-2 xl:px-20 py-5">
        {categories?.map(
          (category) =>
            category.books?.length > 0 && (
              <div key={category.id}>
                <div className="flex mt-8 justify-between items-center border-b-2 pb-1 border-blue-bold  mb-4">
                  <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
                    {category.name}
                  </p>
                  <Link
                    href="/products?categoryId="
                    className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex">
                  <Carousel className="w-full">
                    <div>
                      <CarouselContent className="">
                        {category.books?.map((item, id) => (
                          <CarouselItem
                            key={id}
                            className="pl-1 basis-1/2  sm:basis-1/3 md:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
                          >
                            {/* Product Card */}
                            <div className="border h-full border-blue p-2">
                              <Link href={`/products/${item.id}`}>
                                <Image
                                  className="mx-auto w-full aspect-square object-contain dark:hidden transition-transform duration-300 hover:scale-105"
                                  src={IMAGE_PRODUCT_URL + item.image}
                                  width={600}
                                  height={600}
                                  alt="product "
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
                                    <p className="col-span-6 text-end">
                                      ${item.price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            )
        )}
      </section>
    </>
  );
}
