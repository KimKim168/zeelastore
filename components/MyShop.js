"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function MyShop() {
  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-20 mt-5 ">
        {/* Header */}
        <section>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href="/" className="text-xl">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl">Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
        {/*End Header */}

        <section className="mt-10">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 ">
              <div className=" border shadow-md p-6">
                <p className="text-2xl text-center mb-4">Categories</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Phone Accessories</AccordionTrigger>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Charger
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Case
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Security Camera</AccordionTrigger>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Charger
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Case
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Computer Accessory</AccordionTrigger>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Charger
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Case
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Xiaomi</AccordionTrigger>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Charger
                      </Link>
                    </AccordionContent>
                    <AccordionContent>
                      <Link href="#" className="hover:underline">
                        Case
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className=" border shadow-md p-6 mt-10">
                <p className="text-2xl text-center mb-4">Filter by Brand</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      Apple
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      Samsung
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      Xiaomi
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      ANKER
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      IMILAB
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      Usams
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      UGREEN
                    </Link>
                  </AccordionItem>
                  <AccordionItem value="item-1" className=" mb-4">
                    <Link href="#" className="hover:underline text-sm ">
                      Blueo
                    </Link>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="col-span-9">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                {/* Produc 1 */}

                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 2 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image8.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 3 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/imag7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 1 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 2 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image8.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 3 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/imag7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 1 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 2 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image8.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 3 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/imag7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 1 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 2 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/image8.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
                {/* Produc 3 */}
                <div className="rounded-lg border border-b-[#FFD700]   border-gray-200 bg-white p-6  dark:border-gray-700 dark:bg-gray-800">
                  <div className="h-56 w-full">
                    <a href="/products">
                      <img
                        className="mx-auto h-full dark:hidden"
                        src="/assets/images/imag7.webp"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="pt-6">
                    <a
                      href="/products"
                      className="text-sm line-clamp-2  leading-tight text-gray-900 hover:underline dark:text-white"
                    >
                      product image Blueo PVD Stainless Steel Camera Lens
                      Protector for iPhone 15 Pro Max White
                    </a>
                    <p className="bg-gold text-lg mt-4 shadow-md p-1   text-center">
                      $15.59
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
