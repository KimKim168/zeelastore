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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import MyPriceFilter from "./MyPriceFilter";
import { Button } from "./ui/button";
import { Settings2 } from "lucide-react";
import MyPriceFilterMobile from "./MyPriceFilterMobile";

export default function MyShop() {
  return (
    <>
      <section className="max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 mt-5 ">
        <p className="text-center font-bold text-2xl bg-gray-300 p-4 mb-4 ">
          Shop
        </p>
        {/* Header */}
        <section>
          <div className="flex justify-between items-center">
            <div>
              <Breadcrumb>
                <BreadcrumbList className="text-sm sm:text-sm md:text-[16px]">
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Shop</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline" value="left">
                    <Settings2 />
                    <p>Filters</p>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription>
                      <div className="h-[calc(100vh-100px)] pr-5 overflow-y-auto">
                        {/* Categories */}
                        <div>
                          <p className="text-xl font-bold text-black text-start mt-4">
                            Categories
                          </p>
                          <Accordion
                            type="single"
                            collapsible
                            className="text-start"
                          >
                            <AccordionItem value="item-1">
                              <AccordionTrigger>
                                Phone Accessories
                              </AccordionTrigger>
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
                              <AccordionTrigger>
                                Security Camera
                              </AccordionTrigger>
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
                              <AccordionTrigger>
                                Computer Accessory
                              </AccordionTrigger>
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
                        {/* End Categories */}

                        {/* Filter by Brand */}
                        <div>
                          <p className="text-xl font-bold text-black text-start mt-5 mb-4">
                            Filter by Brand
                          </p>
                          <Accordion
                            type="single"
                            collapsible
                            className="text-start"
                          >
                            <AccordionItem value="item-1" className=" pb-4 ">
                              <Link
                                href="#"
                                className="hover:underline text-sm  "
                              >
                                Apple
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-2" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                Samsung
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-3" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                Xiaomi
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-4" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                ANKER
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-5" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                IMILAB
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-6" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                Usams
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-7" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                UGREEN
                              </Link>
                            </AccordionItem>
                            <AccordionItem value="item-8" className=" py-4">
                              <Link
                                href="#"
                                className="hover:underline text-sm "
                              >
                                Blueo
                              </Link>
                            </AccordionItem>
                          </Accordion>
                        </div>
                        {/* End Filter by Brand */}

                        {/* Filter Price */}
                        <div>
                          <MyPriceFilterMobile />
                        </div>
                        {/* End Filter Price */}
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
        {/*End Header */}

        <section className="mt-10">
          <div className="grid grid-cols-12 gap-3">
            <div className="hidden md:grid col-span-3 ">
              {/* Category */}
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
              {/*End Category */}

              {/* Brand */}
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
              {/*End Brand */}

              {/* Filter price */}
              <div>
                <MyPriceFilter></MyPriceFilter>
              </div>
              {/*End Filter price */}
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="mb-4 grid gap-4 sm:grid-cols-3 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
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
