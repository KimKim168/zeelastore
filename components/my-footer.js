import React from "react";
import Image from "next/image";
import { BASE_API_URL, IMAGE_BRAND_URL } from "@/env";
import Link from "next/link";
export default async function MyFooter() {
  const respone = await fetch(`${BASE_API_URL}/brands`);
  const brandData = await respone.json();
  const resFooter = await fetch(`${BASE_API_URL}/footer`);
  const footerData = await resFooter.json();
  //   console.log(brandData);
  return (
    <footer className="background-gradient ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex  gap-4">
          <div className=" flex-1 text-white md:mb-0">
            <a href="/" className="flex flex-col items-start gap-2">
              <Image
                src="/assets/images/logo.png"
                width={100}
                height={100}
                alt="logo"
                className="w-14 md:w-24"
              />

              <div
                className=" w-auto md:w-96 md:mt-5 text-[10px] sm:text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: footerData.description }}
              ></div>
            </a>
          </div>
          <div className="flex-1">
            <h2 className="mb-2 text-[10px] sm:text-sm md:text-base text-center md:text-start  text-white  dark:text-white">
              Our family brand product
            </h2>
            <div className="grid grid-cols-5 sm:grid-cols-6 xl:grid-cols-8 gap-1 ">
              {brandData?.map((item) => (
                <Link
                  href={`/products?brandId=${item.id}`}
                  key={item.id}
                  className="col-span-1"
                >
                  <Image
                    src={IMAGE_BRAND_URL + item.image}
                    width={100}
                    height={100}
                    alt=" brand product"
                    className="w-full aspect-video object-cover "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-2 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-5" />
        <div className=" text-center">
          <span className="text-[9px] md:text-sm text-white sm:text-center dark:text-gray-400">
            {footerData.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
