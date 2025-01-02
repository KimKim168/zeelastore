import MyBreadCrumb from "@/components/my-bread-crumb";
import MyGallery from "@/components/my-gallery";
import MyRelatedProduct from "@/components/my-related-product";
import MyVideoGallery from "@/components/my-video-gallery";
import DescriptionTab from "@/components/products/description-tab";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyProduct({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/products/${id}`);
  const result = await respone.json();
  // console.log(result);
  const productRelated = await fetch(
    `${BASE_API_URL}/products?categoryId=${result.category_id}`
  );
  const resultProductRelated = await productRelated.json();
  // console.log(resultProductRelated.data);

  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        <MyBreadCrumb result={result.title} />
        <div className="mt-3">
          <div className="flex flex-col sm:grid grid-cols-12 gap-12">
            <div className="sm:col-span-12 md:col-span-5">
              <MyGallery photos={[`${IMAGE_PRODUCT_URL}${result.image}`]} />
            </div>

            <div className=" sm:col-span-12  md:col-span-7 text-blue xl:ml-5">
              <p className="text-lg md:text-xl font-semibold">{result.title}</p>
              <div className="max-w-96 mt-4">
                <ul className="space-y-2 text-sm md:text-lg">
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Shipping:</li>
                      <li className="text-color col-span-6"> Free</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="grid grid-cols-12 justify-between gap-5">
                      <li className=" col-span-6">Brand:</li>
                      <li className="text-color col-span-6">Monitor</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="grid grid-cols-12 gap-5 font-semibold text-color justify-between text-lg md:text-xl">
                      <li className=" col-span-6">Price:</li>
                      <li className="text-color col-span-6">${result.price}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mt-5 border-b-2 w-full mb-8 hover:no-underline border-blue-bold pb-0 flex justify-between items-center"></div>

              <div className="flex items-center justify-center gap-2 md:gap-5 mt-5 ">
                <div className="grid grid-cols-2  sm:grid-cols-4 items-center gap-2 md:gap-3 ">
                  <Link
                    href="https://telegram.org/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/telegram.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Telegram
                    </span>
                  </Link>
                  <Link
                    href="https://www.messenger.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/messager.jpg"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With Messenger
                    </span>
                  </Link>
                  <Link
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    className="border p-1 sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/whatsApp.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order With whatsapp
                    </span>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="border p-[4px] sm:p-2 flex justify-center items-center gap-1 md:gap-2 rounded-md"
                  >
                    <Image
                      src="/assets/images/call.png"
                      width={600}
                      height={600}
                      className="w-7 xl:w-10"
                      alt="image"
                    />
                    <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                      Order By Calling
                    </span>
                  </Link>
                </div>
                {/*End Socail */}
              </div>

              {/* Add to wishlist */}
              <div className="mt-5 ">
                <MyVideoGallery />
              </div>
              {/*End Add to wishlist */}
            </div>
          </div>
          {/* Content utttom */}
          <DescriptionTab result={result} />
          {/*End Content utttom */}
        </div>
        <div className="mt-5 border-b-2 w-full mb-8 hover:no-underline border-blue-bold pb-0 flex justify-between items-center"></div>
      </section>
      <MyRelatedProduct productRelated={resultProductRelated.data} />
    </>
  );
}
